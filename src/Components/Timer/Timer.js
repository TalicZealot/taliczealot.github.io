import { useState } from 'react';
import PropTypes from 'prop-types';
import YouTube from "react-youtube";
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import './timer.css';

function toTimeString(totalSeconds) {
    const totalMs = totalSeconds * 1000;
    const result = new Date(totalMs).toISOString().slice(11, 23);
    return result;
}

function Timer({ videoId }) {
    const [player, setPlayer] = useState();
    const [realTime, setRealTime] = useState(0);
    const [segmentTime, setSegmentTime] = useState(0);
    const [segments, setSegments] = useState(Array(1).fill({ start: 0, end: 0, time: 0 }));

    const initializePlayer = (e) => {
        setPlayer(e.target);
    };

    const addSegment = () => {
        setSegments(segments => [...segments, { start: 0, end: 0, time: 0 }]);
    }

    const setSegmentStart = (index) => {
        const newSegments = [...segments];
        newSegments[index].start = player.getCurrentTime();
        console.log(newSegments[index].start);
        setSegments(newSegments);
    }

    const setSegmentEnd = (index) => {
        const newSegments = [...segments];
        newSegments[index].end = player.getCurrentTime();
        newSegments[index].time = newSegments[index].end - newSegments[index].start;
        setSegments(newSegments);
        getRealTime();
        getTotalSegmentTime();
        addSegment();
    }

    const getRealTime = () => {
        setRealTime(segments[segments.length - 1].end - segments[0].start);
    }

    const getTotalSegmentTime = () => {
        let totalTime = 0;
        segments.forEach(segment => {
            totalTime += segment.end - segment.start;
        })
        setSegmentTime(totalTime);
    }

    const opts = {
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0
        }
    };

    const serializeData = () => {
        let data = [];
        for (let i = 0; i < segments.length - 1; i++) {
            let entry = {};
            entry.name = "segment " + i + 1;
            entry.start = toTimeString(segments[i].start);
            entry.end = toTimeString(segments[i].end);
            entry.time = toTimeString(segments[i].time);
            data.push(entry);
        }
        data.push({name: "Real Time", time: toTimeString(realTime)});
        data.push({name: "Segments Total Time", time: toTimeString(segmentTime)});

        return data;
    }

    const exportToCSV = () => {
        const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        const fileExtension = '.xlsx';
        const ws = XLSX.utils.json_to_sheet(serializeData());
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, toTimeString(segmentTime) + fileExtension);
    }

    return (
        <div>
            <div>
                <YouTube
                    videoId={videoId}
                    className="embed-youtube"
                    onStateChange={(e) => initializePlayer(e)}
                    onReady={(e) => initializePlayer(e)}
                    opts={opts}
                />
            </div>
            <div className="segments">
                <h4>Segments</h4>
                <div className="segment">
                    <div className="segment-time" >start</div>
                    <div className="segment-time" >end</div>
                    <div className="segment-time">time</div>
                </div>
                {segments.map((segment, index) => (
                    <div className="segment" key={index.toString()}>
                        <div className="segment-button" onClick={() => setSegmentStart(index)}>{toTimeString(segment.start)}</div>
                        <div className="segment-button" onClick={() => setSegmentEnd(index)}>{toTimeString(segment.end)}</div>
                        <div className="segment-time">{toTimeString(segment.time)}</div>
                    </div>
                ))}
            </div>
            <div className="total-times">
                <div className="total-time">
                    <div>Real Time: </div>
                    <div className="segment-time">{toTimeString(realTime)}</div>
                </div>
                <div className="total-time">
                    <div>Segments Total Time:</div>
                    <div className="segment-time">{toTimeString(segmentTime)}</div>
                </div>
                <div className="save-button" onClick={() => exportToCSV()}>Save Spreadsheet</div>
            </div>
        </div>
    );
}

Timer.propTypes = {
    videoId: PropTypes.string
}

export default Timer;