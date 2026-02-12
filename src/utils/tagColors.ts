export const getTagColor = (tag: string) => {
    const t = tag.toLowerCase();

    // Mainframe & Systems category (Blue)
    if (t.includes(`mainframe`) || t.includes(`z/os`) || t.includes(`jcl`) || t.includes(`cics`) || t.includes(`db2`) || t.includes(`cobol`) || t.includes(`zowe`) || t.includes(`mco`) || t.includes(`uss`) || t.includes(`rexx`) || t.includes(`tso`) || t.includes(`astreintes`) || t.includes(`mainframe`))
        return `text-blue-400 border-blue-500/30 bg-blue-500/10`;

    // Software Development category (Purple)
    if (t.includes(`python`) || t.includes(`react`) || t.includes(`node`) || t.includes(`dev`) || t.includes(`web`) || t.includes(`js`) || t.includes(`fullstack`) || t.includes(`api`) || t.includes(`vb.net`) || t.includes(`firmware`) || t.includes(`unity`) || t.includes(`opencv`) || t.includes(`html`) || t.includes(`css`) || t.includes(`code`) || t.includes(`programmation`) || t.includes(`ia`) || t.includes(`intelligence artificielle`))
        return `text-purple-400 border-purple-500/30 bg-purple-500/10`;

    // DevOps, Infra & Network category (Green)
    if (t.includes(`devops`) || t.includes(`docker`) || t.includes(`ansible`) || t.includes(`ci/cd`) || t.includes(`git`) || t.includes(`linux`) || t.includes(`openwrt`) || t.includes(`vpn`) || t.includes(`nginx`) || t.includes(`klipper`) || t.includes(`reseau`) || t.includes(`network`) || t.includes(`security`) || t.includes(`grafana`) || t.includes(`monitoring`) || t.includes(`virtua`))
        return `text-green-400 border-green-500/30 bg-green-500/10`;

    // Management, Process & Soft Skills category (Yellow)
    if (t.includes(`management`) || t.includes(`pilotage`) || t.includes(`agile`) || t.includes(`scrum`) || t.includes(`logistique`) || t.includes(`lean`) || t.includes(`itil`) || t.includes(`vsm`) || t.includes(`5s`) || t.includes(`pdca`) || t.includes(`anglais`) || t.includes(`international`) || t.includes(`gestion de projet`) || t.includes(`ouverture`) || t.includes(`immersion`) || t.includes(`powerbi`) || t.includes(`reporting`) || t.includes(`flux`) || t.includes(`conduite de changement`))
        return `text-yellow-400 border-yellow-500/30 bg-yellow-500/10`;

    // Maker, IoT & Tech Passion category (Cyan)
    if (t.includes(`iot`) || t.includes(`zigbee`) || t.includes(`3d`) || t.includes(`laser`) || t.includes(`moteur`) || t.includes(`diag`) || t.includes(`home assistant`) || t.includes(`electronics`) || t.includes(`arduino`) || t.includes(`raspberry`) || t.includes(`rtos`) || t.includes(`ctf`) || t.includes(`ar/vr`))
        return `text-cyan-400 border-cyan-500/30 bg-cyan-500/10`;

    // Domain Expertise: Materials, Aero, Industrial (Pink/Rose)
    if (t.includes(`matériaux`) || t.includes(`composites`) || t.includes(`métaux`) || t.includes(`polymères`) || t.includes(`aéronautique`) || t.includes(`spatial`) || t.includes(`mécanique des fluides`) || t.includes(`ingénierie`) || t.includes(`procédés`) || t.includes(`industrie`) || t.includes(`physique`) || t.includes(`chimie`) || t.includes(`maths`) || t.includes(`cao`))
        return `text-pink-400 border-pink-500/30 bg-pink-500/10`;

    // Default fallback (Gray) - should be avoided
    return `text-gray-400 border-gray-700 bg-gray-900`;
};
