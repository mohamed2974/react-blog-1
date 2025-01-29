import React from "react";

export default function BackgroundDecorator ({ svgType = "wave", color = "#6C63FF", position = "bottom" }) {
    const svgStyles = {
        position: "absolute",
        [position]: 0,
        left: 0,
        width: "100%",
        height: "100%",
    };

    const svgs = {
        wave: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={svgStyles}>
            <path
            fill={color}
            fillOpacity="1"
            d="M0,256L48,240C96,224,192,192,288,186.7C384,181,480,203,576,192C672,181,768,139,864,122.7C960,107,1056,117,1152,149.3C1248,181,1344,235,1392,261.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
        </svg>
        ),
        circles: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={svgStyles}>
            <circle cx="0" cy="-50%" r="300" fill={color} />
            <circle cx="500" cy="150%" r="100" fill={color} fillOpacity="0.7" />
            <circle cx="900" cy="200" r="200" fill={color} fillOpacity="0.5" />
        </svg>
        ),
        // Weitere SVG-Optionen
    };

    return <>{svgs[svgType]}</>;
};
