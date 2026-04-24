export interface NewsItem {
    id: number;
    masthead: string;
    dateline: string;
    tag: string;
    headline: string;
    body: string;
    edition: string;
    cta?: { label: string; href: string };
}

export const NEWSPAPERS: NewsItem[] = [
    {
        id: 1,
        masthead: "THE DAILY DEV",
        dateline: "Est. 2003",
        headline: "LOCAL ENGINEER REFUSES TO STOP BUILDING THINGS AT 2AM",
        body: "Sources confirm 47 browser tabs were open. Project shipped anyway.",
        tag: "★ BREAKING ★",
        edition: "No. 1"
    },
    {
        id: 2,
        masthead: "LIKITH KUMAR GAZETTE",
        dateline: "Vol. 21",
        headline: "EEE STUDENT SECRETLY LEARNS FULL-STACK DEVELOPMENT",
        body: "Professors baffled. Circuits still working. React components also somehow functional.",
        tag: "EXCLUSIVE",
        edition: "No. 2"
    },
    {
        id: 3,
        masthead: "THE SILICON TIMES",
        dateline: "Daily Edition",
        headline: "MAN FLUENT IN BOTH PYTHON AND KIRCHHOFF'S LAWS",
        body: "AI/ML models trained. Voltage dividers solved. Coffee levels: dangerously optimal.",
        tag: "SCIENCE & TECH",
        edition: "No. 3"
    },
    {
        id: 4,
        masthead: "DEV CHRONICLE",
        dateline: "Apr 2025",
        headline: "ORBITAL DEFENSE GAME DEPLOYED; PRODUCTIVITY AT ALL-TIME LOW",
        body: "Visitors reported playing for \"just 5 minutes.\" Average session: 47 minutes.",
        tag: "GAMING",
        edition: "No. 4"
    },
    {
        id: 5,
        masthead: "THE HIRE HERALD",
        dateline: "URGENT EDITION",
        headline: "TALENTED ENGINEER AVAILABLE FOR HIRE — SOURCES SAY",
        body: "Portfolio reviewed. Skills verified. Reach out before competitors do.",
        tag: "★ OPPORTUNITY ★",
        edition: "No. 5",
        cta: { label: "Get In Touch →", href: "#contact" }
    }
];
