import React, { useState } from "react";
import "./index.css";

const planets = [
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune",
    "pluto",
];

const colors = [
    "#e8927c",
    "#b45d15",
    "#26daaa",
    "#e55f45",
    "orange",
    "#b29d81",
    "#8dcdd8",
    "#4f83e2",
    "#fccfba",
];

function App() {
    const [index, setIndex] = useState(0);
    const [currentPlanet, setCurrentPlanet] = useState(planets[index]);
    const [currentColor, setCurrentColor] = useState(colors[index]);
    const [opacity, setOpacity] = useState(1);

    const translateRight = () => {
        timer();
        // console.log(opacity);
        // setOpacity(0);
        // console.log(opacity);
        setIndex((prev) => prev + 1);
        setTimeout(() => {
            setCurrentPlanet(planets[index + 1]);
            setCurrentColor(colors[index + 1]);
        }, 1500);
        // setCurrentPlanet(planets[index + 1]);
        // setCurrentColor(colors[index + 1]);
        // setOpacity(1);
    };

    const translateLeft = () => {
        // setOpacity(0);
        setIndex((prev) => prev - 1);
        setCurrentPlanet(planets[index - 1]);
        setCurrentColor(colors[index - 1]);
        // setOpacity(1);
    };

    const timer = () => {
        setOpacity(0);
        setTimeout(() => {
            setOpacity(1);
        }, 2500);
    };

    return (
        <>
            <header
                style={{ fontWeight: "100", textTransform: "uppercase" }}
                className="app-title"
            >
                <div
                    style={{
                        fontSize: "36px",
                    }}
                >
                    Ether
                </div>
                <div style={{ fontSize: "18px" }}>Explore our solar system</div>
            </header>
            <button onClick={() => translateLeft()}>Left</button>
            <button onClick={() => translateRight()}>Right</button>
            <div
                className="planet-title"
                style={{
                    textTransform: "uppercase",
                    fontWeight: "100",
                    opacity: `${opacity}`,
                    transition: "opacity 0.5s ease-in-out",
                }}
            >
                <div style={{ fontSize: "24px" }}>{currentPlanet}</div>
                <div
                    style={{
                        fontSize: "14px",
                        color: `${currentColor}`,
                        textDecoration: "underline",
                    }}
                    className="learn-more"
                >
                    Learn More
                </div>
            </div>
            <div className="slider-container">
                <div
                    className="slider"
                    style={{
                        transform: `translateX(calc(${index} * calc(-100% / 9)))`,
                    }}
                >
                    <div className="test mercury"></div>
                    <div className="test venus"></div>
                    <div className="test earth"></div>
                    <div className="test mars"></div>
                    <div className="test jupiter"></div>
                    <div className="test saturn"></div>
                    <div className="test uranus"></div>
                    <div className="test neptune"></div>
                    <div className="test pluto"></div>
                </div>
            </div>
        </>
    );
}

export default App;
