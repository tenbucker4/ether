import React, { useState, useEffect } from "react";
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
    const [isHidden, setIsHidden] = useState(true);

    const translateRight = () => {
        if (index == 8) {
            startTimer();
            setIndex(0);
            setTimeout(() => {
                setCurrentPlanet(planets[0]);
                setCurrentColor(colors[0]);
            }, 1500);
        } else {
            startTimer();
            setIndex((prev) => prev + 1);
            setTimeout(() => {
                setCurrentPlanet(planets[index + 1]);
                setCurrentColor(colors[index + 1]);
            }, 1500);
            console.log("shouldnt see this");
        }
    };

    const translateLeft = () => {
        if (index == 0) {
            startTimer();
            setIndex(8);
            setTimeout(() => {
                setCurrentPlanet(planets[8]);
                setCurrentColor(colors[8]);
            }, 1500);
        } else {
            startTimer();
            setIndex((prev) => prev - 1);
            setTimeout(() => {
                setCurrentPlanet(planets[index - 1]);
                setCurrentColor(colors[index - 1]);
            }, 1500);
        }
    };

    const startTimer = () => {
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
            <button onClick={() => setIsHidden((prev) => !prev)}>
                Sidebar
            </button>
            <aside
                className="sidebar"
                style={{ right: isHidden ? "-40%" : "0" }}
            >
                <div style={{ textTransform: "uppercase" }}>
                    {currentPlanet}
                </div>
            </aside>
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
