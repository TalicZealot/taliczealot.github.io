import { useState } from "react";
import Timer from "./Timer/Timer";

function SegmentedTimer() {
    const [videoUrl, setVideoUrl] = useState("");
    const [videoId, setVideoId] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [help, setHelp] = useState(false);

    const getVideoId = (url) => {
        const regex = /\?v=\S{11}/g;
        const match = url.match(regex)
        if (match) {
            setVideoId(match[0].split("?v=")[1]);
            setVideoUrl(url);
            setSubmitted(true);
        } else {
            setVideoUrl("Invalid url!");
        }
    }

    return (
        <div className="timer-panel">
            {help &&
                <div className="yt-url-panel"> 
                    <ol>
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
                </div>
                : <Timer videoId={videoId} />
            }
            <div className="timerHelpButton" onClick={() => setHelp(!help)}>How to Use</div>
        </div>
    );
}

export default SegmentedTimer;