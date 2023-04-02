import { useState } from "react";
import Timer from "./Timer/Timer";

function SegmentedTimer() {
    const [videoUrl, setVideoUrl] = useState("");
    const [videoId, setVideoId] = useState("");
    const [submitted, setSubmitted] = useState(false);

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
            {!submitted
                ? <div className="yt-url-panel">
                    <input type="text" minLength="40" maxLength="50" size="44" placeholder="Youtube video URL" value={videoUrl} onChange={(e) => getVideoId(e.target.value)} />
                </div>
                : <Timer videoId={videoId} />
            }
        </div>
    );
}

export default SegmentedTimer;