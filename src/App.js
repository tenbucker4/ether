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
    const [content1, setContent1] = useState(planets[index].blurb1);
    const [content2, setContent2] = useState(planets[index].blurb2);
    const [content3, setContent3] = useState(planets[index].blurb3);
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
                setContent1(planets[0].blurb1);
                setContent2(planets[0].blurb2);
                setContent3(planets[0].blurb3);
                setCurrentColor(colors[0]);
            }, 1500);
        } else {
            startTimer();
            setIndex((prev) => prev + 1);
            setTimeout(() => {
                setCurrentPlanet(planets[index + 1].name);
                setDescription(planets[index + 1].description);
                setContent1(planets[index + 1].blurb1);
                setContent2(planets[index + 1].blurb2);
                setContent3(planets[index + 1].blurb3);
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
                setContent1(planets[8].blurb1);
                setContent2(planets[8].blurb2);
                setContent3(planets[8].blurb3);
                setCurrentColor(colors[8]);
            }, 1500);
        } else {
            startTimer();
            setIndex((prev) => prev - 1);
            setTimeout(() => {
                setCurrentPlanet(planets[index - 1].name);
                setDescription(planets[index - 1].description);
                setContent1(planets[index - 1].blurb1);
                setContent2(planets[index - 1].blurb2);
                setContent3(planets[index - 1].blurb3);
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
                    transition: "opacity 1s ease-in-out",
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
                    transition: "opacity 1s ease-in-out",
                }}
            >
                <p style={{ textAlign: "center" }}>{description}</p>
            </div>
            <aside
                className="sidebar"
                style={{ right: isHidden ? "-400px" : "0" }}
            >
                <div className="close-menu">
                    <Icon
                        path={mdiClose}
                        onClick={() => setIsHidden((prev) => !prev)}
                        size={1.5}
                        color="gray"
                    />
                </div>
                <div style={{ textTransform: "uppercase" }}>
                    {currentPlanet}
                </div>
                <div>{content1}</div>
                <div>{content2}</div>
                <div>{content3}</div>
            </aside>
            <aside
                className="sidebar-backdrop"
                style={{ left: isHidden ? "-100%" : "0" }}
            ></aside>
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
