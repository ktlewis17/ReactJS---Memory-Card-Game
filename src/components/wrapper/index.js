import React from "react";
import "./wrapper.css";

// set properties for the wrapper around the images and return everything (props.children)
const Wrapper = props => (
  <div className="container wrapper">{props.children}</div>
);

export default Wrapper;