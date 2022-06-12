import React from "react";
import "./Delete.css";

function Delete(props) {
  return (
    <div>
      <button
        onClick={() => props.deletePostFn(props.id)}
        className="deletebutton"
      >
        DELETE
      </button>
    </div>
  );
}

export default Delete;
