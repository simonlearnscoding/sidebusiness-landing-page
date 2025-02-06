"use client"; // Ensure this is a client component

import dynamic from "next/dynamic";

// Dynamically import to avoid SSR issues
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function CustomCursor() {
  return (
    <div className="opacity-40 ">
      <AnimatedCursor
        outerSize={250}
        opacity={0.1}
        innerSize={0}
        color="0, 0, 0"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        trailingSpeed={50}
        clickables={[
          "a",
          "button",
          ".link",
          "input",
          "textarea",
          "select",
          "label",
          '[role="button"]',
          {
            target: ".clickable",
            //@ts-ignore
            options: {
              innerSize: 14,
              outerAlpha: 0.3,
              innerScale: 0.6,
              outerScale: 0.4,
            },
          },
        ]}
        outerStyle={{
          filter: "blur(100px)",
          zIndex: 0, // Push behind everything
          backgroundColor: "#e5bff0",
          borderRadius: "50%",
          pointerEvents: "none", // Prevent interference with clicks
        }}
        showSystemCursor={true} // Hide default cursor
      />
    </div>
  );
}
