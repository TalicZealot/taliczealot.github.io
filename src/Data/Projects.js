var Projects = {
    "sotnapi": {
        title: "SotN Api",
        technologies: ["C#", "MIPS"],
        source: "https://github.com/TalicZealot/SotnApi",
        description: `An api for reading and manipulating game entities in ram through the BizHawk API.
        Abstract all usages of the Bizhawwk memory Api into a separate class library. This way it can be reused for multiple projects and the tools can focus only on their functionality.
        This also serves as documentation and a memory map to help other tool developers for the game.`,
        chapters: [
            {
                title: "Reverse Engineering",
                description: `There is no released official documentation for the game's Ram, so addresses had to be reverse engineered. 
                Some of that info can be found while researching other open-source community projects like the SotN Randomizer or Game Shark codes.
                Otherwise it involves the usage of tools like Ram Search, or a debugger to trace MIPS assembly for the R3000 processor.`
            },
            {
                title: "Structure",
                description: `The Api is separated into classes, containing properties and methods to read and edit Ram values. As well as some utility methods like an inventory sorter. 
                The main Api class is not static, because it has to be injected with the Bizhawk Memory api.`
            }
        ],
        software: ["Visual Studio", "Bizhawk", "PCSX-R Debugger"]
    },
    "sotnrandotools": {
        title: "Symphony of the Night Randomizer Tools",
        technologies: ["C#", "WinForms", "Socket", "Tcp"],
        source: "https://github.com/TalicZealot/SotnRandoTools",
        description:
            `A collection of tools to enhance the Castlevania: Symphony of the Night Randomizer experience. Saves user preferences, window sizes and window positions to a config file.`,
        chapters: [
            {
                title: "Tracker",
                description: `Automatically detects and displays important in-game items on a dedicated window with a GDI canvas.
                 Scales icons using nearest-neighbor according to window size. 
                 Optionally the user can choose to turn on a socket server that enables them to use the local html/js widget that comes with the app in OBS instead of capturing the window.`
            },
            {
                title: "Autosplitter",
                description: `Detects game start and game end. Connects to LiveSplit through socket and starts/stops the timer accordingly.`
            },
            {
                title: "Replays",
                description: `Records player location and relics and saves it to a file.`
            },
            {
                title: "Co-Op",
                description: `Uses a TCP connection through SuperSimpleTcp to transmit data between two players. Data packets are optimized to 2 bytes. Players can send and receive relics, items, shortcuts and effects.`
            }
        ],
        software: ["Visual Studio", "Visual Studio Code", "BizHawk", "SotnApi", "SuperSimpleTcp"]
    },
    "khaos": {
        title: "SotN Khaos",
        technologies: ["C#", "WinForms", "Socket"],
        source: "https://github.com/TalicZealot/SotnKhaosTools",
        description: `A tool for Twitch chat interaction while playin the Castlevania:Symphony of the Night Randomizer. Designed with experienced SotN speedrunners in mind.
         Meant to both present challenging situations and fun moments atypical of standard play.`,
        chapters: [
            {
                title: "Twitch Channel Points",
                description: `A channel point controller creates, uses and removes channel point rewards that viewers can use to trigger the Khaos actions. 
                Api requests are done using the TwitchLib .Net library. A utility class is used for request retries with an exponential delay.
                `
            },
            {
                title: "Actions",
                description: `By using the SotnApi Khaos can manipulate player stats, items, relics as well as various events in the game or spawn additional game entities like enemies. 
                Actions are triggered by a dedicated dispatcher that controls timing and availability.
                `
            },
            {
                title: "Time Scheduling",
                description: `Since this is done with an external tool I have to accomodate the emulation core inside BizHawk.
                 This meant that when they updated it to a core that used a different method of memory virtualization I couldn't access the Memory Api at any point in time.
                 Originally actions were triggered with .NET timers. This presented a problem sicne not all timers were in synch with the UI Thread, potentially throwing a memory access violation. 
                 While using the Timer class in Windows.Forms was a solution it was not elegant, therefore I wrote a custom scheduler. 
                 It schedules events by using MemoryInvoker and checks at dedicated periods through the main Update function of the tool, thus eliminating any potential memory errors.`
            },
            {
                title: "Overlays",
                description: `In order to display more infornmation to the viewers a socket server is used to transmit data to local html/js widgets to be used through OBS.`
            },
            {
                title: "Auto-Khaos",
                description: `A system for playing without the Twitch interaction. Also useful for testing. The dispatcher will randomly activate actions, but adhere to the cooldown rules.`
            },
        ],
        software: ["Visual Studio", "Visual Studio Code", "BizHawk", "SotnApi", "TwitchLib"]
    },
    "replays": {
        title: "SotN Replay Player",
        technologies: ["React", "Javascript", "html5"],
        source: "https://github.com/TalicZealot/taliczealot.github.io/tree/main/src/Components/Player",
        video: "https://www.youtube.com/watch?v=JX3yYf-XWB4",
        description: "A tool that plays back replay files from the Symphony of the Night Randomizer Tools.",
        chapters: [
            {
                title: "Player",
                description: `Linearly progresses through the replay files and plays them back on the map display through the KonvaJs SVG library. 
                Includes controls to Play, Pause, Rewind as well as control the playback speed and a fully functional progress bar.
                The user can select what players are focused. Two players will have trails, the rest only have positional indicators for clarity.`
            },
            {
                title: "Files",
                description: `Replay data is stored as binary. The player can open parse up to 8 replay files or a zip that contains replays.`
            },
            {
                title: "Tracker",
                description: `Replays also store data for relics and progression items that are displayes in real time and placed on the map.`
            },
        ],
        software: ["Visual Studio Code", "Konva", "jszip"]
    },
    "pathfinder": {
        title: "SotN Pathfinding Tool",
        technologies: ["Javascript", "html5", "KonvaJs"],
        source: "https://github.com/TalicZealot/SotN-Pathfinding",
        description: "A tool that finds the shortest path between two rooms from the map.",
        chapters: [
            {
                title: "Map Parser",
                description: `A tool that parses the F_MAP binary file and outputs an adjacency matrix.`
            },
            {
                title: "Relic Selector",
                description: `The user can select relic options that can open additional paths on the map.`
            },
            {
                title: "Priority Queue",
                description: `Implemented manually with a heap data structure.`
            },
            {
                title: "Shortest Path",
                description: `Finds the shortest path between the two selected rooms through an implementation fo the A Star algorithm.`
            },
            {
                title: "Display",
                description: `The path is drawn and animated onto the game map with the KonvaJs SVG library.`
            },
        ],
        software: ["Visual Studio Code", "SotN Randomizer", "HexEd.it"]
    },
    "racebot": {
        title: "Speedrun Race Bot",
        technologies: ["Javascript", "NodeJs"],
        source: "https://github.com/TalicZealot/speedrun-race-discord-bot",
        description: "A Discord bot for coordinating speedrun races.",
        chapters: [
            {
                title: "Races",
                description: `Users can use Discord slash commands to start races with different parameters for category, tournament mode and ranked mode. 
                The bot creates a race message with buttons to join/leave, ready/unready as well as link buttons that lead to the seed in the randomizer and a multistream link for viewers. 
                It also generates a PPF file of the seed by creating a secondary NodeJs thread and running the randomizer.
                Once all player have readied up the bot does a countdown in the message and in the race voice channel. 
                Big thanks to Robert Belgrade for gratiously providing us with several takes of a countdown in the iconic voice of Alucard.
                Once the race has started players have the option to Finish and Forfeit. Additionally the voice channel is locked for the duration of the race to prevent non-racers from joining.
                On finishing the player's time is noted. 
                
                At the end of the race ELO points are calculated and distributed if the race is ranked.`
            },
            {
                title: "Ranking",
                description: `Uses the ELO ranking system. At the start of a season every player has to complete a number of placement matches, during which the algorithm is more aggressive with adjusting points. 
                This helps to approximate player skill quickly nefore the leaderboards are constructed.`
            },
        ],
        software: ["Visual Studio Code", "DiscordJs"]
    },
    "wiki": {
        title: "Frontslide Wiki",
        technologies: ["C#", "ASP.NET"],
        source: "https://github.com/TalicZealot/Frontslide-Wiki",
        description: `A simple lightweight wiki. This was my final exam project for the Telerik Academy. 
        Goals were to write a functional web application that uses everything we studdied. 
        Data is handled through EntityFramework and SQL with a dedicated data layer.
        Dependency injection through the entire project and complete coverage with Unit Tests.
        `,
        chapters: [
            {
                title: "Template",
                description: `I used the Texstyle library to generate the wiki pages from user submitions. 
                It is more limited than a traditional wiki, but much lighter. 
                I added some decorators to enable some custom entries like styled images and paragraphs.`
            },
            {
                title: "Moderation",
                description: `User submissions are not automatically published but placed aside and need to be verified by moderators first. 
                Moderators can edit the content and publish the pages.`
            },
            {
                title: "Authentication",
                description: `Uses Oauth through Twitter.`
            },
            {
                title: "Web Forms",
                description: `This project was first implemented with Web Forms before being converted and extended for ASP.`
            },
        ],
        software: ["Visual Studio", "Texstyle"]
    },
    "trialmode": {
        title: "SotN Trial Mode",
        technologies: ["Lua"],
        source: "https://github.com/TalicZealot/SotN-Trial-Mode",
        description: "A Lua script that uses the Lua Api of Bizhawk to make a Trial system. Giving challenges to the player and being able to detect success or failure. ",
        chapters: [],
        software: ["Visual Studio Code", "BizHawk"]
    },
    "other": {
        title: "Other Projects",
        technologies: ["Lua", "C#", "WPF"],
        source: "",
        description: "Other notable open source projects. ",
        chapters: [
            {
                title: "SimpleLatestReleaseUpdater",
                description: `A small WPF app that fetches the latest release of a GitHub repository, downloads and extracts it to a selected location, overwriting existing files.`
            },
            {
                title: "SotN Trial Mode",
                description: `A Lua script that uses the Lua Api of Bizhawk to make a Trial syustem. Giving challenges to the player and being able to detect success or failure.`
            }
        ],
        software: ["Visual Studio Code", "BizHawk"]
    }
};

export default Projects;