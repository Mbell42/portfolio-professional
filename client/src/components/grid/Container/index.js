//DEPENDENCIES
import React from "react";

//CONTAINER
// This allows for using a bootstrap container without worrying about class names
function Container ({ fluid, children }) {
  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
};

export default Container;