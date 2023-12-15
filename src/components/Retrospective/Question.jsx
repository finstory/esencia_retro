import React from "react";
import { Tags } from "./Tags";
import { useHomeServices } from "../../services/useHomeServices";

export const Question = ({ title, tagsList = [], sendTag, setModal }) => {
  const { setTagModal } = useHomeServices();

  const handleAddTag = () => {
    if (tagsList.length < 4) setTagModal(title);
  };

  return (
    <div className="question">
      <div className={tagsList.length > 0 ? "title_down" : "title"}>
        <p>{title}</p>
      </div>
      {tagsList &&
        tagsList.length > 0 &&
        tagsList.map((t, i) => {
          return <Tags key={i} {...t} questionTitle={title} />;
        })}

      <div
        className={`add_btn ${tagsList.length >= 4 && "add_btn_disabled"}`}
        onClick={handleAddTag}
      >
        +
      </div>
    </div>
  );
};
