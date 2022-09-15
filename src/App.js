import React, { useState, useEffect } from "react";
import planets from "./constants/planets";
import colors from "./constants/colors";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";
import { mdiChevronLeft } from "@mdi/js";
import { mdiChevronRight } from "@mdi/js";
import "./index.css";

function App() {
    const [index, setIndex] = useState(0);
    const [currentPlanet, setCurrentPlanet] = useState(planets[index].name);
    const [description, setDescription] = useState(planets[index].description);
    const [currentColor, setCurrentColor] = useState(colors[index]);
    const [opacity, setOpacity] = useState(1);
    const [isHidden, setIsHidden] = useState(true);

    const translateRight = () => {
        if (index === 8) {
            startTimer();
            setIndex(0);
            setTimeout(() => {
                setCurrentPlanet(planets[0].name);
                setDescription(planets[0].description);
                setCurrentColor(colors[0]);
            }, 1500);
        } else {
            startTimer();
            setIndex((prev) => prev + 1);
            setTimeout(() => {
                setCurrentPlanet(planets[index + 1].name);
                setDescription(planets[index + 1].description);
                setCurrentColor(colors[index + 1]);
            }, 1500);
        }
    };

    const translateLeft = () => {
        if (index === 0) {
            startTimer();
            setIndex(8);
            setTimeout(() => {
                setCurrentPlanet(planets[8].name);
                setDescription(planets[8].description);
                setCurrentColor(colors[8]);
            }, 1500);
        } else {
            startTimer();
            setIndex((prev) => prev - 1);
            setTimeout(() => {
                setCurrentPlanet(planets[index - 1].name);
                setDescription(planets[index - 1].description);
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
            <div
                className="planet-title"
                style={{
                    textTransform: "uppercase",
                    fontWeight: "100",
                    opacity: `${opacity}`,
                    transition: "opacity 0.5s ease-in-out",
                }}
            >
                <div style={{ fontSize: "30px" }}>{currentPlanet}</div>
                <div
                    style={{
                        fontSize: "14px",
                        color: `${currentColor}`,
                        textDecoration: "underline",
                        cursor: "pointer",
                    }}
                    className="learn-more"
                    onClick={() => setIsHidden((prev) => !prev)}
                >
                    Learn More
                </div>
            </div>
            <div
                className="planet-description"
                style={{
                    textTransform: "uppercase",
                    fontSize: "16px",
                    fontWeight: "100",
                    opacity: `${opacity}`,
                    transition: "opacity 0.5s ease-in-out",
                }}
            >
                <p style={{ textAlign: "center" }}>{description}</p>
            </div>
            <aside
                className="sidebar"
                style={{ right: isHidden ? "-400px" : "0" }}
            >
                <div style={{ textTransform: "uppercase" }}>
                    {currentPlanet}
                </div>
            </aside>
            <div className="move-left">
                <Icon
                    path={mdiChevronLeft}
                    onClick={() => translateLeft()}
                    size={2}
                    color="white"
                />
            </div>
            <div className="move-right">
                <Icon
                    path={mdiChevronRight}
                    onClick={() => translateRight()}
                    size={2}
                    color="white"
                />
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
