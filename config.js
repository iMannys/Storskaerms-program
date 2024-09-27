// Made by yours truly, Peter

/* Date format:

    MM DD, YYYY 00:00

    Hvis man vil kan man også sætte sekunder på hvis det skal være mere præcist

    MM DD, YYYY 00:00:00
    
*/

const tournamentStartDelayMinutes = 1; // Hvor mange minutter "Starter NU!" skal stå når turneringen når 0 i countdownen

const tournaments = [
    {
        name: "Minecraft Build Battle",
        imagePath: "./Billeder/Minecraft.png",
        date: "September 27, 2024 18:00"
    },
    {
        name: "Sten, Saks og Papir",
        imagePath: "./Billeder/StenSaksPapir.png",
        date: "September 27, 2024 18:15"
    },
    {
        name: "Overwatch 2 - 3v3",
        imagePath: "./Billeder/Overwatch.png",
        date: "September 27, 2024 19:30"
    },
    {
        name: "Rainbow Six Siege - 5v5",
        imagePath: "./Billeder/RainbowSixSiege.png",
        date: "September 27, 2024 20:00"
    },
    {
        name: "Lethal Company",
        imagePath: "./Billeder/LethalCompany.png",
        date: "September 27, 2024 22:00"
    },
    {
        name: "UNO",
        imagePath: "./Billeder/UNO.png",
        date: "September 28, 2024 11:00"
    },
    {
        name: "Rocket League - 2v2",
        imagePath: "./Billeder/RocketLeague.png",
        date: "September 28, 2024 12:00"
    },
    {
        name: "TFT",
        imagePath: "./Billeder/TFT.png",
        date: "September 28, 2024 13:00"
    },
    {
        name: "League of Legends - 2v2",
        imagePath: "./Billeder/LeagueOfLegends.png",
        date: "September 28, 2024 14:00"
    },
    {
        name: "Smash Bros [Ingen præmie]",
        imagePath: "./Billeder/SmashBros.png",
        date: "September 28, 2024 14:45"
    },
    {
        name: "Geoguessr",
        imagePath: "./Billeder/Geoguessr.png",
        date: "September 28, 2024 15:00"
    },
    {
        name: "Counter Strike 2 - 5v5",
        imagePath: "./Billeder/CSGO.png",
        date: "September 28, 2024 16:30"
    },
    {
        name: "Werewolf [Ingen præmie]",
        imagePath: "./Billeder/Geoguessr.png", // Mangler billede
        date: "September 28, 2024 17:30"
    },
    {
        name: "Magic: The Gathering [Ingen præmie]",
        imagePath: "./Billeder/Magic.png",
        date: "September 28, 2024 20:00"
    },
    {
        name: "League of Legends - 5v5",
        imagePath: "./Billeder/LeagueOfLegends.png",
        date: "September 28, 2024 20:00"
    },
    {
        name: "Overwatch 2 - 5v5",
        imagePath: "./Billeder/Overwatch.png",
        date: "September 28, 2024 22:00"
    },
    {
        name: "Mario Kart",
        imagePath: "./Billeder/MarioKart.png",
        date: "September 28, 2024 23:00"
    },
    {
        name: "Valorant - 2v2",
        imagePath: "./Billeder/Valorant.png",
        date: "September 29, 2024 11:00"
    },
    {
        name: "Minecraft Build Battle Slut",
        imagePath: "./Billeder/Minecraft.png",
        date: "September 29, 2024 11:00"
    }
];

export { tournaments, tournamentStartDelayMinutes }