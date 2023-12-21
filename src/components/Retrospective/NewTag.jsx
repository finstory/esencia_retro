import React, { useEffect, useRef, useState } from "react";
import { useHomeServices } from "../../services/useHomeServices";
import { useForm } from "../../hooks/useForm";
import { v4 as uuidv4 } from "uuid";

import io from "socket.io-client";
import { baseUrl } from "../../helpers/baseUrl";
export const NewTag = ({ team_id }) => {
  const socket = io(baseUrl);
  const textareaRef = useRef(null);
  const { values, handleInputChange } = useForm({ note: "" });

  const {
    home: { tags_modal },
    setTagModal,
  } = useHomeServices();

  const sendTag = () => {
    if (values.note.length > 9) {
      setTagModal("");
      if (tags_modal.id.length > 0)
        socket.emit("edit_tag", {
          teamId: team_id,
          title: tags_modal.title,
          tag: {
            id: tags_modal.id,
            note: values.note,
            // thumb_down: 2,
            // thumb_up: 0,
          },
        });
      else
        socket.emit("test", {
          teamId: team_id,
          title: tags_modal.title,
          tag: {
            id: uuidv4(),
            note: values.note,
            thumb_down: 0,
            thumb_up: 0,
          },
        });
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendTag();
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
      textareaRef.current.value = tags_modal.note;
    }
  }, []);

  return (
    <div className="new_tag_container">
      <div className="new_tag">
        <div className="input_container">
          <textarea
            onKeyPress={handleKeyPress}
            ref={textareaRef}
            type="text"
            name="note"
            onChange={handleInputChange}
            value={values.note}
          />
        </div>
        <div className="btn_group">
          <button className="save_btn close_btn" onClick={setTagModal}>
            Close
          </button>
          <button
            className="save_btn"
            style={
              values.note.length < 10
                ? { backgroundColor: "#f75757a1", cursor: "not-allowed" }
                : {}
            }
            onClick={sendTag}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
