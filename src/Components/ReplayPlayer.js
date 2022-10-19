import { useState } from "react";
import FileUpload from "./FileUpload/FileUpload";
import Player from "./Player/Player";
import { parseFiles } from "./Player/replay-parser";

function ReplayPlayer() {
  const [replays, setReplays] = useState(null);

  const updateUploadedFiles = async (files) => {
    let parsedReplays = await parseFiles(files);
    setReplays(parsedReplays);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="replay-panel">
      {replays === null
        ? <form onSubmit={handleSubmit}>
          <FileUpload
            accept=".sotnr,.zip"
            message="submit one zip or up to 8 sotnr files"
            multiple
            updateFilesCb={updateUploadedFiles}
          />
        </form>
        : <Player replays={replays} />
      }
    </div>
  );
}

export default ReplayPlayer;