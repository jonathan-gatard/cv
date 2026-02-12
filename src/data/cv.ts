export const cvData = {
    personalInfo: {
        name: "Jonathan Gatard",
        title: "Ingénieur Mainframe & Interopérabilité",
        email: "jonathan.gatard@gmail.com",
        phone: "06 13 54 83 19",
        website: "jonathan-gatard.fr",
        linkedin: "linkedin.com/in/jonathan-gatard",
        misc: "Permis B — Véhiculé",
    },
    skills: {
        mainframe: ["z/OS", "USS", "JCL", "CICS", "DB2", "Zowe"],
        open: ["Python", "Docker", "Ansible", "Linux", "Git", "REST API"],
        methodology: ["Agile/Scrum", "DevOps", "ITIL 4", "Lean/6σ"]
    },
    languages: [
        { name: "Français", level: "Natif", pct: 100 },
        { name: "Anglais", level: "Courant (C1)", pct: 85 },
        { name: "Espagnol", level: "Scolaire", pct: 35 },
        { name: "Slovaque", level: "Notions", pct: 15 },
    ],
    experiences: [
        {
            role: "Ingénieur Mainframe & Interopérabilité",
            company: "Mission CAGIP — Prestataire Aubay Solutec",
            date: "Sept 2023 – Présent",
            details: [
                "MCO et stabilité des environnements critiques (CATS).",
                "Automatisation Python & appels d'API depuis z/OS (USS).",
                "Modernisation : déploiement Zowe CLI & VSCode, formation des équipes.",
                "AppOps : pont technique entre études et production Mainframe."
            ]
        },
        {
            role: "Manager Projets & Ingénieur DevOps",
            company: "Stellantis — Slovaquie",
            date: "2021 – 2023",
            details: [
                "Encadrement d'une équipe de 4 personnes, pilotage de projets digitaux.",
                "Développement Fullstack (React / Node) et automatisation.",
                "Monitoring : Grafana, Node-Red, PowerBI."
            ]
        },
        {
            role: "Ingénieur Projets Logistique & Amélioration Continue",
            company: "LISI Aerospace — Alternance puis CDI",
            date: "2016 – 2020",
            details: [
                "Gestion de projets logistiques (construction de 2 usines neuves).",
                "Lean Management : 5S, VSM, PDCA. Outils de gestion VB.NET."
            ]
        }
    ],
    education: [
        {
            degree: "Sécurité & Réseaux (Autodidacte)",
            school: "TU Graz (Autriche)",
            date: "2022",
        },
        {
            degree: "Ingénieur Aéronautique & Spatial",
            school: "CNAM / ISAE-Supaero / ISAE-ENSMA — Alternance",
            date: "2016 – 2019",
        },
        {
            degree: "DUT Science et Génie des Matériaux",
            school: "IUT de Bordeaux",
            date: "2014 – 2016",
        }
    ],
    interests: [
        { icon: "🏠", text: "Domotique complète (Home Assistant, Docker, ZigBee, 25+ conteneurs)" },
        { icon: "🌐", text: "Infrastructure Réseau (OpenWrt, VPN, Reverse Proxy, Frigate)" },
        { icon: "✈️", text: "Aéromodélisme (construction, pilotage, firmware OpenTX)" },
        { icon: "🔧", text: "Mécanique auto (turbo, swap moteur, diagnostic ISTA)" },
        { icon: "🖨️", text: "Impression 3D & Laser (Prusa DIY, Voron CoreXY, Klipper)" },
        { icon: "🌿", text: "Terrariophilie high-tech & Potager intelligent" },
    ]
};
