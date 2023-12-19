import React, { useEffect, useRef, useState } from "react";
import { Retro } from "../components/Retrospective/Retro";
import "../assets/css/retrospective.css";
import { useLocation } from "react-router-dom";
import { Complete } from "./Complete";
import { useHomeServices } from "../services/useHomeServices";

import io from "socket.io-client";

export const Retrospective = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const {
    home: { complete },
  } = useHomeServices();

  const socket = io("https://9qhvw5j9-3000.brs.devtunnels.ms");
  const team_id = searchParams.get("team_id");
  const access = searchParams.get("access");
  console.log(team_id);
  const [completeRetro, setCompleteRetro] = useState(false);

  useEffect(() => {
    socket.on("end", ({ complete, teamId }) => {
      console.log(complete);
      complete && team_id === teamId && setCompleteRetro(true);
    });
  }, []);

  const setComplete = () => {
    socket.emit("complete", { complete: true, team_id });
  };

  return (
    <>
      {!completeRetro ? (
        <div className="retrospective">
          {access === "23e23fd32F" ? (
            <>
              <p className="main_title">Welcome to Sprint 1 Retro!</p>
              <button className="complete_retro" onClick={setComplete}>
                COMPLETE RETRO ✔️
              </button>
            </>
          ) : (
            <>
              <p className="main_title">Welcome to Sprint 1 Retro!</p>
              <p className="main_subtitle">
                <span>Dive into</span> a space where your team reflects on the
                past, celebrates successes, learns from challenges, and plans
                for a brighter future. With
                <span> Esencia</span>, this process is enhanced through
                <span> intuitive tools and insights</span>.
              </p>
            </>
          )}
          <Retro team_id={team_id} />
        </div>
      ) : (
        <Complete />
      )}
    </>
  );
};
