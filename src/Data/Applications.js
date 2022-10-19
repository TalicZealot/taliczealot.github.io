var Applications = {
    "sotnrandotools": {
        title: "Symphony of the Night Randomizer Tools",
        release: "https://github.com/TalicZealot/SotnRandoTools/releases/latest",
        source: "https://github.com/TalicZealot/SotnRandoTools",
        setup: "https://github.com/TalicZealot/SotnRandoTools/blob/main/README.md",
        description: 
        `A collection of tools to enhance the Castlevania:Symphony of the Night Randomizer experience.`,
        chapters: [
            {
                title: "Tracker",
                description: `Can be manually rescaled. Saves size and location. Locations are drawn on the game map. Supports OBS html widget overlay.`,
                subchapters: [
                    {
                        title: "Seed and Preset Tracking",
                        description: "The tracker detects the seed name and preset in the main menu. The preset determines what the progression relics are and if the tracker will display equipment locations."
                    },
                    {
                        title: "Relic and Item Tracking",
                        description: "Collected relics or progression items will either appear on the tracker or become colored depending on the tracker settings. This image shows the tracker in the default configuration showing all relics.",
                        image: "tracker"
                    },
                    {
                        title: "Location tracking",
                        description: "Unchecked locations are displayed on the in-game map. The colors indicate if the location is reachable and if reaching it is in-logic or an allowed out-of-logic check.",
                        image: ""
                    },
                    {
                        title: "",
                        description: "",
                        image: "tracker-map",
                        colorBoxList: [
                            {
                                color: "location-unavailable",
                                item: "unavailable"
                            },
                            {
                                color: "location-available",
                                item: "available"
                            },
                            {
                                color: "location-allowed",
                                item: "allowed"
                            }
                        ]
                    },
                ]
            },
            {
                title: "Autosplitter",
                description: "The autotracker will also automatically start, restart and split when Dracula dies if you have LiveSplit running when you start the tools.",
                subchapters: []
            },
            {
                title: "Co-Op",
                description: "Coop requires the host to have the port they want to use forwarded. Hosting automatically copies your address(ip:port) to the clipboard. The other player uses that address to connect. Please be careful to not leak your IP!",
                subchapters: [
                    {
                        title: "Bindings",
                        description: "",
                        list: [
                            "R3(in equipment menu):     Send highlighted item",
                            "Circle(in equipment menu): Use highlighted item for the other player",
                            "select(in relics menu):    Send all warps and shortcuts"
                        ]
                    }
                ]
            }
        ]
    },
};
    
export default Applications;