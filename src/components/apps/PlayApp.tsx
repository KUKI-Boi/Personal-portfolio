"use client";

import React, { useRef, useState, useEffect, Suspense, useMemo, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, PerspectiveCamera, Sphere } from "@react-three/drei";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";

// --- Types & Config ---
type GameState = "INTRO" | "PLAYING" | "GAMEOVER";

interface TargetData {
    id: number;
    pos: THREE.Vector3;
    type: 'UFO' | 'SHIP' | 'ASTEROID';
    hit: boolean;
    hitByShip: boolean;
}

interface LaserData {
    id: number;
    pos: THREE.Vector3;
    dir: THREE.Vector3;
}

const RAIL_POINTS = [
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, 0, -200),
    new THREE.Vector3(50, 20, -400),
    new THREE.Vector3(-50, -20, -600),
    new THREE.Vector3(0, 0, -800),
    new THREE.Vector3(100, 50, -1000),
    new THREE.Vector3(0, 0, -2000),
];

const CURVE = new THREE.CatmullRomCurve3(RAIL_POINTS);
const SHIP_SPEED = 0.0006;
const SPAWN_INTERVAL = 1100;
const MAX_OFFSET = 18;
const SHIP_SENSITIVITY = 0.65;
const LASER_SPEED = 120;

// --- Components ---

/**
 * Galaxy/Nebula background element
 */
function Galaxy({ position, color, size }: { position: [number, number, number], color: string, size: number }) {
    return (
        <group position={position}>
            <Sphere args={[size, 32, 32]}>
                <meshBasicMaterial color={color} transparent opacity={0.04} side={THREE.BackSide} />
            </Sphere>
            <Stars radius={size * 0.8} depth={20} count={500} factor={2} saturation={1} />
        </group>
    );
}

/**
 * Asteroid Obstacle
 */
function Asteroid({ data }: { data: TargetData }) {
    const ref = useRef<THREE.Mesh>(null);
    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.x += 0.01;
            ref.current.rotation.y += 0.01;
        }
    });

    return (
        <group position={data.pos}>
            <mesh ref={ref} scale={4.5}>
                <dodecahedronGeometry args={[1, 0]} />
                <meshStandardMaterial color="#2a2a2e" roughness={0.8} />
            </mesh>
            <mesh scale={4.8}>
                <dodecahedronGeometry args={[1, 0]} />
                <meshStandardMaterial color="#47a1ff" wireframe transparent opacity={0.1} />
            </mesh>
        </group>
    );
}

/**
 * Explosion Component
 */
function Explosion({ position }: { position: THREE.Vector3 }) {
    const particles = useRef<THREE.Points>(null);
    const count = 35;

    const posAttr = useMemo(() => {
        const p = new Float32Array(count * 3);
        const random = (s: number) => {
            const x = Math.sin(s) * 10000;
            return x - Math.floor(x);
        };
        for (let i = 0; i < count; i++) {
            p[i * 3] = (random(i) - 0.5) * 6;
            p[i * 3 + 1] = (random(i + 100) - 0.5) * 6;
            p[i * 3 + 2] = (random(i + 200) - 0.5) * 6;
        }
        return p;
    }, []);

    useFrame(() => {
        if (particles.current) {
            particles.current.scale.multiplyScalar(1.18);
            const material = particles.current.material as THREE.PointsMaterial;
            material.opacity -= 0.045;
        }
    });

    return (
        <points ref={particles} position={position}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[posAttr, 3]} />
            </bufferGeometry>
            <pointsMaterial size={0.7} color="#ff6600" transparent opacity={1} />
        </points>
    );
}

/**
 * UFO Target Component
 */
function Target({ data }: { data: TargetData }) {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.06;
            groupRef.current.position.y += Math.sin(state.clock.elapsedTime * 2.5 + data.id) * 0.06;
        }
    });

    return (
        <group ref={groupRef} position={data.pos}>
            <mesh>
                <cylinderGeometry args={[4.5, 5, 1.2, 32]} />
                <meshStandardMaterial color="#111" metalness={1} roughness={0} />
            </mesh>
            <mesh position={[0, 1.5, 0]}>
                <sphereGeometry args={[2.2, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
                <meshStandardMaterial color="#ff4d00" transparent opacity={0.7} emissive="#ff4d00" emissiveIntensity={0.5} />
            </mesh>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[4.8, 0.15, 16, 32]} />
                <meshBasicMaterial color="#ff4d00" />
            </mesh>
        </group>
    );
}

/**
 * Laser Pulse Component
 */
function LaserPulse({ pos }: { pos: THREE.Vector3 }) {
    return (
        <group position={pos}>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.1, 0.1, 8, 8]} />
                <meshBasicMaterial color="#47a1ff" />
            </mesh>
            <pointLight distance={10} intensity={1} color="#47a1ff" />
        </group>
    );
}

/**
 * Player Ship (The visible part)
 */
function PlayerShip({ offset, roll }: { offset: THREE.Vector3, roll: number }) {
    return (
        <group position={offset} rotation={[0, 0, -roll * 0.4]}>
            {/* Cockpit Shell */}
            <mesh position={[0, -2.5, -4]}>
                <boxGeometry args={[12, 0.3, 6]} />
                <meshStandardMaterial color="#0a0a0f" metalness={0.9} roughness={0.1} />
            </mesh>
            <mesh position={[-6, 0.5, -4]} rotation={[0, 0, 0.4]}>
                <boxGeometry args={[0.3, 6, 6]} />
                <meshStandardMaterial color="#0a0a0f" metalness={0.9} roughness={0.1} />
            </mesh>
            <mesh position={[6, 0.5, -4]} rotation={[0, 0, -0.4]}>
                <boxGeometry args={[0.3, 6, 6]} />
                <meshStandardMaterial color="#0a0a0f" metalness={0.9} roughness={0.1} />
            </mesh>

            {/* Wing Detail with Glow */}
            <mesh position={[-7.5, -2, -2]}>
                <boxGeometry args={[3, 0.5, 4]} />
                <meshStandardMaterial color="#111" />
            </mesh>
            <mesh position={[7.5, -2, -2]}>
                <boxGeometry args={[3, 0.5, 4]} />
                <meshStandardMaterial color="#111" />
            </mesh>

            <pointLight position={[0, 0, 2]} intensity={0.6} color="#47a1ff" />
        </group>
    );
}

/**
 * Game Layer
 */
function GameLayer({
    state,
    progress,
    shipOffset,
    onProgressUpdate,
    onSpawn,
    targets,
    lasers,
    onCollision,
    onLaserHit
}: {
    state: GameState,
    progress: number,
    shipOffset: THREE.Vector3,
    onProgressUpdate: (delta: number) => void,
    onSpawn: () => void,
    targets: TargetData[],
    lasers: LaserData[],
    onCollision: (id: number) => void,
    onLaserHit: (targetId: number, laserId: number) => void
}) {
    const lastSpawn = useRef(0);
    const cameraRef = useRef<THREE.PerspectiveCamera>(null);

    useFrame((rState, delta) => {
        if (state !== "PLAYING") return;

        onProgressUpdate(delta);

        const basePos = CURVE.getPointAt(progress);
        const lookAt = CURVE.getPointAt(Math.min(progress + 0.01, 1));

        if (cameraRef.current) {
            cameraRef.current.position.copy(basePos);
            cameraRef.current.lookAt(lookAt);
            const tangent = CURVE.getTangentAt(progress);
            cameraRef.current.rotation.z = -tangent.x * 0.35;
        }

        const shipWorldPos = basePos.clone().add(shipOffset);

        // Collision: Ship vs Targets
        targets.forEach(t => {
            if (t.hit || t.hitByShip) return;
            const dist = shipWorldPos.distanceTo(t.pos);
            if (dist < 8) {
                onCollision(t.id);
            }
        });

        // Collision: Lasers vs Targets
        lasers.forEach(l => {
            targets.forEach(t => {
                if (t.hit || t.hitByShip) return;
                const dist = l.pos.distanceTo(t.pos);
                if (dist < 10) {
                    onLaserHit(t.id, l.id);
                }
            });
        });

        // Spawning
        const currentTime = rState.clock.elapsedTime * 1000;
        const adaptiveInterval = SPAWN_INTERVAL / (1 + progress * 2.5);
        if (currentTime - lastSpawn.current > adaptiveInterval) {
            onSpawn();
            lastSpawn.current = currentTime;
        }
    });

    return (
        <>
            <PerspectiveCamera ref={cameraRef} makeDefault fov={75} />
            <PlayerShip offset={shipOffset} roll={shipOffset.x / MAX_OFFSET} />

            {targets.map(t => (
                <React.Fragment key={t.id}>
                    {(t.hit || t.hitByShip) ? (
                        <Explosion position={t.pos} />
                    ) : (
                        t.type === 'ASTEROID' ? <Asteroid data={t} /> : <Target data={t} />
                    )}
                </React.Fragment>
            ))}

            {lasers.map(l => (
                <LaserPulse key={l.id} pos={l.pos} />
            ))}
        </>
    );
}

/**
 * Main PlayApp
 */
interface PlayAppProps {
    onImmersiveChange?: (immersive: boolean) => void;
}

export default function PlayApp({ onImmersiveChange }: PlayAppProps) {
    const [gameState, setGameState] = useState<GameState>("INTRO");
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [progress, setProgress] = useState(0);
    const [targets, setTargets] = useState<TargetData[]>([]);
    const [lasers, setLasers] = useState<LaserData[]>([]);
    const [shipOffset, setShipOffset] = useState(new THREE.Vector3(0, 0, -10));
    const [health, setHealth] = useState(100);
    const [hitFlash, setHitFlash] = useState(false);

    const keys = useRef<{ [key: string]: boolean }>({});

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => { keys.current[e.key.toLowerCase()] = true; };
        const handleKeyUp = (e: KeyboardEvent) => { keys.current[e.key.toLowerCase()] = false; };
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        const saved = localStorage.getItem('starblade-highscore');
        if (saved) {
            const val = parseInt(saved);
            setTimeout(() => setHighScore(val), 0);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    // Game Physics Loop (60FPS)
    useEffect(() => {
        if (gameState !== "PLAYING") return;

        let lastFire = 0;

        const loop = setInterval(() => {
            // Ship Movement
            setShipOffset(prev => {
                const next = prev.clone();
                if (keys.current['a'] || keys.current['arrowleft']) next.x -= SHIP_SENSITIVITY;
                if (keys.current['d'] || keys.current['arrowright']) next.x += SHIP_SENSITIVITY;
                if (keys.current['w'] || keys.current['arrowup']) next.y += SHIP_SENSITIVITY;
                if (keys.current['s'] || keys.current['arrowdown']) next.y -= SHIP_SENSITIVITY;
                next.x = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, next.x));
                next.y = Math.max(-MAX_OFFSET + 10, Math.min(MAX_OFFSET - 5, next.y));
                return next;
            });

            // Laser Movement
            setLasers(prev => prev
                .map(l => ({ ...l, pos: l.pos.clone().add(l.dir.clone().multiplyScalar(LASER_SPEED * 0.016)) }))
                .filter(l => l.pos.length() < 3000)
            );

            // Firing
            if (keys.current[' '] && Date.now() - lastFire > 180) {
                lastFire = Date.now();
                setLasers(prev => {
                    const basePos = CURVE.getPointAt(progress);
                    const lookAt = CURVE.getPointAt(Math.min(progress + 0.01, 1));
                    const dir = lookAt.clone().sub(basePos).normalize();

                    // Fire from left and right wings
                    return [
                        ...prev,
                        { id: Date.now(), pos: basePos.clone().add(shipOffset).add(new THREE.Vector3(-8, -2, 0)), dir },
                        { id: Date.now() + 1, pos: basePos.clone().add(shipOffset).add(new THREE.Vector3(8, -2, 0)), dir }
                    ];
                });
            }
        }, 16);

        return () => clearInterval(loop);
    }, [gameState, progress, shipOffset]);

    const spawnTarget = useCallback(() => {
        const lookAhead = Math.min(progress + 0.28, 0.99);
        const spawnCenter = CURVE.getPointAt(lookAhead);
        const offset = new THREE.Vector3((Math.random() - 0.5) * 65, (Math.random() - 0.5) * 65, 0);

        setTargets(prev => [
            ...prev.slice(-25),
            { id: Date.now() + Math.random(), pos: spawnCenter.clone().add(offset), type: Math.random() > 0.4 ? 'ASTEROID' : 'UFO', hit: false, hitByShip: false }
        ]);
    }, [progress]);

    const endGame = useCallback(() => {
        setGameState("GAMEOVER");
        onImmersiveChange?.(false);
    }, [onImmersiveChange]);

    const startGame = useCallback(() => {
        setScore(0);
        setProgress(0);
        setTargets([]);
        setLasers([]);
        setHealth(100);
        setShipOffset(new THREE.Vector3(0, 0, -10));
        setGameState("PLAYING");
        onImmersiveChange?.(true);
    }, [onImmersiveChange]);

    const handleCollision = useCallback((id: number) => {
        setTargets(prev => prev.map(t => t.id === id ? { ...t, hitByShip: true } : t));
        setHealth(prev => {
            const next = prev - 25;
            if (next <= 0) endGame();
            return Math.max(0, next);
        });
        setHitFlash(true);
        setTimeout(() => setHitFlash(false), 200);
        setScore(prev => Math.max(0, prev - 800));
    }, [endGame]);

    const handleLaserHit = useCallback((targetId: number, laserId: number) => {
        setTargets(prev => prev.map(t => t.id === targetId ? { ...t, hit: true } : t));
        setLasers(prev => prev.filter(l => l.id !== laserId));
        setScore(prev => prev + 1500);
    }, []);


    useEffect(() => {
        if (gameState === "PLAYING") {
            const timer = setInterval(() => setScore(prev => prev + 15), 100);
            return () => clearInterval(timer);
        }
    }, [gameState]);

    useEffect(() => {
        if (progress >= 0.99 && gameState === "PLAYING") {
            setTimeout(() => endGame(), 0);
        }
    }, [progress, gameState, endGame]);

    useEffect(() => {
        if (score > highScore) {
            const currentScore = score;
            setTimeout(() => {
                setHighScore(currentScore);
                localStorage.setItem('starblade-highscore', currentScore.toString());
            }, 0);
        }
    }, [score, highScore]);

    return (
        <div className="relative w-full h-full bg-[#030305] overflow-hidden text-white font-mono">
            <AnimatePresence>
                {hitFlash && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} exit={{ opacity: 0 }} className="absolute inset-0 z-[100] bg-red-600 pointer-events-none" />}
            </AnimatePresence>

            <Canvas>
                <color attach="background" args={["#030305"]} />
                <fog attach="fog" args={["#030305", 20, 1100]} />
                <Suspense fallback={null}>
                    <ambientLight intensity={0.4} />
                    <pointLight position={[10, 10, 10]} intensity={2} color="#47a1ff" />
                    <Galaxy position={[500, 300, -1600]} color="#47a1ff" size={700} />
                    <Galaxy position={[-700, -200, -2200]} color="#ff4d00" size={600} />
                    <Stars radius={400} depth={50} count={25000} factor={4} saturation={0} fade speed={2.5} />

                    <GameLayer
                        state={gameState}
                        progress={progress}
                        shipOffset={shipOffset}
                        targets={targets}
                        lasers={lasers}
                        onSpawn={spawnTarget}
                        onCollision={handleCollision}
                        onLaserHit={handleLaserHit}
                        onProgressUpdate={(delta) => setProgress(prev => prev + SHIP_SPEED * delta * 15)}
                    />
                </Suspense>
            </Canvas>

            {/* UI Overlays */}
            <AnimatePresence mode="wait">
                {gameState === "INTRO" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-[110] flex items-center justify-center bg-black/80 backdrop-blur-md">
                        <div className="max-w-md w-full p-12 border border-[var(--accent)]/20 bg-black/40 rounded-3xl text-center space-y-8">
                            <h2 className="text-4xl font-black italic tracking-tighter text-[var(--accent)] text-glow">STARBLADE: COMBAT</h2>
                            <div className="space-y-4 text-left text-[11px] font-bold">
                                <p className="text-[var(--muted)]">CONTROLS:</p>
                                <p>- WASD / ARROWS: NAVIGATE SHIP</p>
                                <p>- SPACEBAR: FIRE PULSE LASERS</p>
                                <p>- OBJECTIVE: NEUTRALIZE UFO PATROLS</p>
                            </div>
                            <button onClick={startGame} className="w-full py-4 bg-[var(--accent)] text-black font-black text-sm tracking-[0.3em] rounded-xl hover:bg-white transition-colors cursor-pointer">LAUNCH INTERCEPTOR</button>
                        </div>
                    </motion.div>
                )}

                {gameState === "GAMEOVER" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 z-[110] flex items-center justify-center bg-indigo-950/40 backdrop-blur-xl">
                        <div className="text-center space-y-8">
                            <h2 className="text-6xl font-black italic text-white uppercase tracking-tighter shadow-red-500/50">Sector Cleared</h2>
                            <div className="space-y-2">
                                <p className="text-4xl font-black text-[var(--accent)]">SCORE: {score.toLocaleString()}</p>
                                <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Session PB: {highScore.toLocaleString()}</p>
                            </div>
                            <button onClick={startGame} className="px-12 py-4 border-2 border-[var(--accent)] text-[var(--accent)] font-black hover:bg-[var(--accent)] hover:text-black transition-all cursor-pointer">RELOAD & RELAUNCH</button>
                        </div>
                    </motion.div>
                )}

                {gameState === "PLAYING" && (
                    <div className="absolute inset-0 pointer-events-none p-8 flex flex-col justify-between z-[105]">
                        <div className="flex justify-between items-start">
                            <div className="space-y-1">
                                <div className="text-[10px] font-black tracking-widest text-[var(--accent)]">COMBAT OVERLAY v3.5</div>
                                <div className="text-5xl font-black italic tracking-tighter">{score.toLocaleString()}</div>
                                <div className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">WEAPONS: ONLINE</div>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                                <div className="text-[10px] font-black text-[var(--muted)] uppercase tracking-widest">HULL STABILITY</div>
                                <div className="w-56 h-2.5 bg-black/50 border border-white/5 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: "100%" }} animate={{ width: `${health}%` }} className={`h-full ${health > 50 ? 'bg-blue-500' : health > 25 ? 'bg-amber-500' : 'bg-red-500'}`} />
                                </div>
                                <button onClick={endGame} className="pointer-events-auto text-[8px] font-black border border-white/10 px-3 py-1.5 mt-2 hover:bg-white/10 uppercase transition-colors">Abort</button>
                            </div>
                        </div>
                        <div className="flex justify-between items-end opacity-60 text-[10px]">
                            <div className="flex gap-4">
                                <span className="text-[var(--accent)] font-bold">SECTOR PROGRESS: {Math.round(progress * 100)}%</span>
                                <span className="text-white">ENEMIES NEUTRALIZED</span>
                            </div>
                            <span className="font-black italic uppercase tracking-widest">STARBLADE AEROSPACE // LK-01</span>
                        </div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
