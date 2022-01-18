import React from "react";
import "./nav.css";

const Nav = ({ setPage }) => {
    const BTNS = [
        { desc: "View Video", value: "video" },
        { desc: "View Playlist", value: "playlist" },
    ];

    const createBtn = (btns) => {
        return btns.map((btn) => (
            <button
                key={btn.desc}
                className="nav_btn"
                onClick={(e) => {
                    setPage(btn.value);
                }}
            >
                {btn.desc}
            </button>
        ));
    };
    return <div className="nav">{createBtn(BTNS)}</div>;
};

export default Nav;
