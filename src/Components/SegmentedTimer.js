import { useState } from "react";
import Timer from "./Timer/Timer";

function SegmentedTimer() {
    const [videoUrl, setVideoUrl] = useState("");
    const [videoId, setVideoId] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [help, setHelp] = useState(false);
    const [framerate, setFramerate] = useState("");

    const getVideoId = (url) => {
        const regex = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        const match = url.match(regex);
        if (match) {
            setVideoId(match[7]);
            setVideoUrl(url);
        } else {
            setVideoUrl("Invalid url!");
        }
    }

    const editFramerate = (value) => {
        if (parseFloat(value)) {
            setFramerate(value);
        } else {
            setFramerate("Invalid framerate!");
        }
    }

    const startTiming = () => {
        if (videoId && videoId !== "" && framerate > 0) {
            setSubmitted(true);
        }
    }

    return (
        <div className="timer-panel">
            {help &&
                <div className="yt-url-panel">
                    <ol>
                        <li>Enter the video URL and the video framerate, which you can find if you right click and select &quot;Stats for nerds&quot;.</li>
                        <li>Locate the first frame of the segment. Use the , and . hotkeys &#40;&#60; and &#62;&#41; to go frame by frame. Then click the start time of the segment to set the start.</li>
                        <li>Find the last frame of the segment and go forward by one frame, then set that as the end time for the segment. Another segment will be created automatically.</li>
                        <li>You can name the segments and save the final results to a spreadsheet.</li>
                    </ol>
                    <div className="timerHelpButton" onClick={() => setHelp(!help)}>Hide</div>
                </div>
            }
            {!submitted
                ? <div className="yt-url-panel">
                    <input type="text" minLength="40" maxLength="50" size="44" placeholder="Youtube video URL" value={videoUrl} onChange={(e) => getVideoId(e.target.value)} />
                    <input type="text" minLength="2" maxLength="3" size="3" placeholder="framerate" value={framerate} onChange={(e) => editFramerate(e.target.value)} />
                    <div className="timerStartButton" onClick={() => startTiming()}>Start Timing</div>
                </div>
                : <Timer videoId={videoId} framerate={parseFloat(framerate)} />
            }
            <div className="timerHelpButton" onClick={() => setHelp(!help)}>How to Use</div>
        </div>
    );
}

export default SegmentedTimer;