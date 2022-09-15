import React, { useState, useEffect } from "react";
import planets from "./constants/planets";
import colors from "./constants/colors";
import Header from "./components/Header";
import PlanetOverlay from "./components/PlanetOverlay";
import Sidebar from "./components/Sidebar";
import PlanetSlider from "./components/PlanetSlider";
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

    const setPlanetContent = (i) => {
        setCurrentPlanet(planets[i].name);
        setDescription(planets[i].description);
        setContent1(planets[i].blurb1);
        setContent2(planets[i].blurb2);
        setContent3(planets[i].blurb3);
        setCurrentColor(colors[i]);
    };

    const startTimer = () => {
        setOpacity(0);
        setTimeout(() => {
            setOpacity(1);
        }, 2500);
    };

    const translateRight = () => {
        if (index === 8) {
            startTimer();
            setIndex(0);
            setTimeout(() => {
                setPlanetContent(0);
            }, 1500);
        } else {
            startTimer();
            setIndex((prev) => prev + 1);
            setTimeout(() => {
                setPlanetContent(index + 1);
            }, 1500);
        }
    };

    const translateLeft = () => {
        if (index === 0) {
            startTimer();
            setIndex(8);
            setTimeout(() => {
                setPlanetContent(8);
            }, 1500);
        } else {
            startTimer();
            setIndex((prev) => prev - 1);
            setTimeout(() => {
                setPlanetContent(index - 1);
            }, 1500);
        }
    };

    return (
        <>
            <Header />
            <PlanetOverlay
                opacity={opacity}
                currentPlanet={currentPlanet}
                currentColor={currentColor}
                setIsHidden={setIsHidden}
                description={description}
            />
            <Sidebar
                isHidden={isHidden}
                setIsHidden={setIsHidden}
                currentPlanet={currentPlanet}
                content1={content1}
                content2={content2}
                content3={content3}
            />
            <PlanetSlider
                translateLeft={translateLeft}
                translateRight={translateRight}
                index={index}
            />
        </>
    );
}

export default App;
