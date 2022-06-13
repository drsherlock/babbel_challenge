import React from "react";

function FullNameInput(props) {
  const { fullName, handleFullNameChange } = props;

  return (
    <>
      <div>
      <span>Enter Full Name </span>
        <input
          type="text"
          value={fullName}
          onChange={handleFullNameChange}
          data-testid="full-name-testid"
        />
      </div>
    </>
  );
}

export default FullNameInput;