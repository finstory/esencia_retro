import React from "react";
import io from "socket.io-client";
import { useHomeServices } from "../../services/useHomeServices";

const socket = io("https://9qhvw5j9-3000.brs.devtunnels.ms");

export const Tags = ({ id, note = "", questionTitle }) => {
  const { editTag } = useHomeServices();

  const deleteTag = () => {
    socket.emit("delete_tag", {
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
      <button className="delete_btn" onClick={deleteTag}>
        -
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
  );
};
