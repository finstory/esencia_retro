import React, { useEffect, useState } from "react";
import { Question } from "./Question";
import io from "socket.io-client";
import { useHomeServices } from "../../services/useHomeServices";
import { NewTag } from "./NewTag";

const socket = io("https://9qhvw5j9-3000.brs.devtunnels.ms");

export const Retro = ({ team_id }) => {
  const [note, setNote] = useState("asdasd asd");

  const [modal, setModal] = useState(false);
  const {
    home: { tags_modal, retroList },
    setRetroList,
    setTagModal,
  } = useHomeServices();

  useEffect(() => {
    socket.on("load_retro", ({ retro, teamId }) => {
      if (teamId === team_id) setRetroList(retro);
    });
    socket.emit("initial", team_id);
  }, []);

  const sendTag = () => {
    setTagModal("");
    socket.emit("test", {
      title: tags_modal.title,
      tag: {
        id: uuidv4(),
        note,
        thumb_down: 2,
        thumb_up: 0,
      },
    });
  };

  return (
    <div className="retro">
      {retroList &&
        retroList.length > 0 &&
        retroList.map((q, i) => {
          return (
            <Question
              key={i}
              {...q}
              sendTag={sendTag}
              setModal={setModal}
              team_id={team_id}
            />
          );
        })}

      {tags_modal.active && <NewTag team_id={team_id} />}
    </div>
  );
};
