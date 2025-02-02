"use client"; // Ensure this is a client component

import dynamic from "next/dynamic";

// Dynamically import to avoid SSR issues
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function CustomCursor() {
  return (
    <AnimatedCursor
      innerSize={12}
      outerSize={40}
      color="0, 0, 0" // RGB value for #4F46E5 (your primary color)
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      trailingSpeed={8}
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
            outerSize: 45,
            outerAlpha: 0.3,
            innerScale: 0.6,
            outerScale: 6,
          },
        },
      ]}
      innerStyle={{
        backgroundColor: "#ffffff",
        mixBlendMode: "exclusion",
      }}
      outerStyle={{
        border: "2px solid #ffffff",
        borderRadius: "50%",
        boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
        mixBlendMode: "exclusion",
      }}
      showSystemCursor={false} // Hide default cursor
    />
  );
}
