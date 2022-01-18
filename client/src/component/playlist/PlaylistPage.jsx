import React, { useState, useEffect } from "react";
import { isEmpty } from "lodash";
import "./playlistPage.css";

const PlaylistPage = () => {
    const [playlist, setPlaylist] = useState([]);

    useEffect(() => {
        (async () => {
            let playlistData = await fetchPlaylist();
            // playlistData = playlistData.map((dataItem) => {
            //     const vids = [];
            //     dataItem.videoIds.forEach(async (vid) => {
            //         const vidData = await fetchVid(vid);
            //         vids.push(vidData);
            //     });
            //     return { ...dataItem, vids: vids };
            // });

            setPlaylist(playlistData);
        })();
    }, []);

    const fetchPlaylist = async () => {
        const res = await fetch("/api/playlist");
        const data = await res.json();
        return data;
    };

    const fetchVid = async (id) => {
        const res = await fetch(`/api/video/${id}`);
        const data = await res.json();
        return data;
    };

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
