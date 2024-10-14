import React from "react";
import AnimatedCursor from "react-animated-cursor";

export default function Cursor() {
  return (
    <AnimatedCursor
      innerSize={12}
      outerSize={40}
      color="255, 255, 255"
      innerScale={0.7}
      outerScale={5}
      innerStyle={{
        background: "rgba(0, 0, 0, 0.0)",
        border: "3px solid  #4F46E5",
      }}
      outerStyle={{
        background: "rgba(0, 0, 0, 0.0)",
        borderRadius: "50%",
        border: "3px  solid #4F46E5",
        boxShadow: "0 0 10px #4F46E5",
      }}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
    />
  );
}
