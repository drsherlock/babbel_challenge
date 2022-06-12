import React from "react";

function FullNameInput(props) {
  const { fullName, handleFullNameChange } = props;

  return (
    <>
      <div id="title">
      <span className="options-label">Enter Full Name </span>
        <input
          type="text"
          value={fullName}
          onChange={handleFullNameChange}
          data-testid="input-testid"
        />
      </div>
    </>
  );
}

export default FullNameInput;