import React, { useState } from "react";
import "./App.css";
import Nav from "./component/nav/Nav";
import Video from "./component/video/VideoPage";

function App() {
    const [page, setPage] = useState("video");

    return (
        <div className="App">
            <Nav setPage={setPage} />
            {page === "video" ? <Video /> : ""}
        </div>
    );
}

export default App;
