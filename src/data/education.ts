export const education = [
    {
        role: "Sécurité & Réseaux (Autodidacte)",
        degreePrint: "Sécurité & Réseaux (Autodidacte)", // Used in Print CV
        company: "TU Graz (Autriche)",
        schoolPrint: "TU Graz (Autriche)", // Used in Print CV
        date: "2022",
        description: "Suivi de cours en autonomie en parallèle du travail, sur les thématiques de sécurité réseau et systèmes temps réel.",
        tags: ["Network Security", "Real Time OS", "CTF", "AR/VR"],
        details: [
            {
                title: "Cursus",
                content: "Network Security, Real Time Operating Systems, Capture The Flag (CTF), Réalité Augmentée (OpenCV/Unity)."
            }
        ]
    },
    {
        role: "Ingénieur Aéronautique & Spatial (Apprentissage)",
        degreePrint: "Ingénieur Aéronautique & Spatial",
        company: "CNAM Poitiers / ISAE-Supaero / ISAE-ENSMA",
        schoolPrint: "CNAM / ISAE-Supaero / ISAE-ENSMA",
        date: "2016 - 2019",
        description: "Diplôme d'ingénieur obtenu en alternance (3 ans chez LISI Aerospace). Cursus réparti sur 3 écoles complémentaires.",
        tags: ["Aéronautique", "Spatial", "Matériaux Composites", "Alternance"],
        details: [
            {
                title: "CNAM Poitiers (1ère année)",
                content: "Fondamentaux de l'ingénierie, sciences industrielles et gestion de projet."
            },
            {
                title: "ISAE-Supaero, Toulouse (2ème année)",
                content: "Formation intensive en ingénierie aéronautique et spatiale, mécanique des fluides et résistance des matériaux."
            },
            {
                title: "ISAE-ENSMA, Poitiers (3ème année)",
                content: "Spécialisation en science des matériaux, procédés de mise en forme et matériaux composites."
            }
        ]
    },
    {
        role: "Stage International",
        // No Print version for this one if we follow the original cv-print layout, but let's keep it available.
        // Actually, cv-print.astro didn't show the Malaysia internship/DUT in the condensed layout before?
        // Wait, looking at cv-print.astro lines 58+, it had: TU Graz, CNAM/Supaero, DUT.
        // It missed the Malaysia internship?
        // Let's look at cv-print.astro again.
        // Line 70: degree: "DUT Science et Génie des Matériaux"
        // It has 3 items.
        // I will add DUT here.
        company: "Malaisie",
        date: "2018 (3 mois)",
        description: "Stage de découverte dans une école de cuisine en Malaisie. Immersion linguistique et culturelle.",
        tags: ["Anglais", "International", "Ouverture culturelle"],
        details: [
            {
                title: "Objectifs",
                content: "Perfectionnement de l'anglais en immersion totale. Découverte d'un environnement professionnel international."
            }
        ]
    },
    {
        role: "DUT Science et Génie des Matériaux",
        degreePrint: "DUT Science et Génie des Matériaux",
        company: "IUT",
        schoolPrint: "IUT de Bordeaux",
        date: "2014 - 2016",
        description: "Formation technique en science des matériaux et procédés industriels.",
        tags: ["Matériaux", "Composites", "Procédés industriels"],
        details: [
            {
                title: "Formation",
                content: "Étude approfondie des matériaux (métaux, polymères, composites), procédés de mise en forme et caractérisation mécanique."
            }
        ]
    }
];
