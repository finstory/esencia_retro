import { Route, Routes } from "react-router-dom";
import { Retrospective } from "../pages/Retrospective";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Retrospective />} />
      </Routes>
    </>
  );
};
