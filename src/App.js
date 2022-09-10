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

function App() {
    const [index, setIndex] = useState(0);
    const [currentPlanet, setCurrentPlanet] = useState(planets[index]);
    const [opacity, setOpacity] = useState(1);

    const translateRight = async () => {
        setIndex((prev) => prev + 1);
        console.log(index);
        setCurrentPlanet(planets[index + 1]);
        console.log(currentPlanet);
    };

    const translateLeft = () => {
        setIndex((prev) => prev - 1);
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
                }}
            >
                <div style={{ fontSize: "24px" }}>{currentPlanet}</div>
                <div
                    style={{ fontSize: "14px", color: "#e8927c" }}
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
