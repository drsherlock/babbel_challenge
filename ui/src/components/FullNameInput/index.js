import React from "react";

function FullNameInput(props) {
  const { fullName, handleFullNameChange } = props;

  return (
    <div>
      <input
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={handleFullNameChange}
        data-testid="full-name-testid"
      />
    </div>
  );
}

export default FullNameInput;
