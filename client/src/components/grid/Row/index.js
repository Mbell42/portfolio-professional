//DEPENDENCIES
import React from "react";

//ROW
// This allows for using a bootstrap row without worrying about class names
export function Row({ fluid, children }) {
    return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
  };