import React, { useState } from "react";
import io from "socket.io-client";
import { useHomeServices } from "../../services/useHomeServices";
import { baseUrl } from "../../helpers/baseUrl";

export const Tags = ({
  team_id,
  id,
  note = "",
  thumb_down = 0,
  thumb_up = 0,
  questionTitle,
}) => {
  const socket = io(baseUrl);
  const { editTag } = useHomeServices();

  const [like, setLike] = useState(0);

  const toggleLike = (option = "like") => {
    let isLike = true;
    let edit = false;
    console.log(option, like);
    if (like === 1 && option === "like") return;
    if (like === -1 && option === "dislike") return;

    if (like === 0 && option === "like") {
      isLike = true;
      edit = false;
      setLike(1);
    }
    if (like === 0 && option === "dislike") {
      isLike = false;
      edit = false;
      setLike(-1);
    }

    if (like === -1 && option === "like") {
      isLike = true;
      edit = true;
      setLike(1);
    }
    if (like === 1 && option === "dislike") {
      isLike = false;
      edit = true;
      setLike(-1);
    }

    socket.emit(
      "likes_tag",
      socket.emit("likes_tag", {
        teamId: team_id,
        title: questionTitle,
        tagId: id,
        isLike,
        edit,
      })
    );
  };

  const deleteTag = () => {
    socket.emit("delete_tag", {
      teamId: team_id,
      title: questionTitle,
      tag_id: id,
    });
  };

  const shortNote = note.slice(0, 110);
  note = note.length > 110 ? shortNote + "..." : note;

  return (
    <div className="tags">
      {note && <p style={{ textAlign: "center" }}>{note}</p>}

      {/* <div className="info">
        <div className="user-name">👤 Facundo Alvarez</div>
        <div className="time">🕛 01:09:37 PM</div>
      </div> */}
      <div className="btn_group">
        <button className="delete_btn" onClick={deleteTag}>
          -
        </button>

        <button
          className={`like_btn ${like === -1 && "btn_selected"}`}
          onClick={() => {
            toggleLike("dislike");
          }}
        >
          <img
            className=""
            src="https://res.cloudinary.com/dmdftmzoy/image/upload/v1702974878/icons8-me-gusta-50_anozua.png"
            style={{ paddingBottom: "3px", transform: "rotate(180deg)" }}
          />
          <p className="amount">{thumb_down}</p>
        </button>

        <button
          className={`like_btn ${like === 1 && "btn_selected"}`}
          onClick={() => {
            toggleLike("like");
          }}
        >
          <img
            className=""
            src="https://res.cloudinary.com/dmdftmzoy/image/upload/v1702974878/icons8-me-gusta-50_anozua.png"
            // style={{ backgroundColor: "#1b663976" }}
          />
          <p className="amount">{thumb_up}</p>
        </button>

        <button
          className="edit_btn"
          onClick={() => {
            editTag(id, questionTitle, note);
          }}
        >
          ✏️
        </button>
      </div>
    </div>
  );
};
