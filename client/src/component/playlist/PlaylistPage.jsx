import React, { useState, useEffect } from "react";
import { isEmpty } from "lodash";
import "./playlistPage.css";

const PlaylistPage = () => {
    const [playlist, setPlaylist] = useState([]);

    useEffect(() => {
        fetch("/api/playlist")
            .then((res) => res.json())
            .then((data) => setPlaylist(data));
    }, []);

    const createPlaylist = ({ description, id, name, videoIds }) => {
        return (
            <div key={id} className="playlist_item">
                <p className="playlist_item_name">{name}</p>
                <p className="playlist_item_desc">{description}</p>
                <div className="playlist_item_vid">
                    {videoIds.map((vid) => (
                        <p className="playlist_item_vid_item">{vid}</p>
                    ))}
                </div>
            </div>
        );
    };
    return (
        <div className="playlist">
            {!isEmpty(playlist) && playlist.map((listItem) => createPlaylist(listItem))}
        </div>
    );
};

export default PlaylistPage;
