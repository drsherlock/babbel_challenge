import React from "react";

function Error({ error }) {
  return error && <div>{error}</div>;
}

export default Error;
