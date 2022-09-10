import React, { useState } from "react";
import "./index.css";

function App() {
    const [index, setIndex] = useState(0);

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
            <button onClick={() => setIndex((prev) => prev - 1)}>Left</button>
            <button onClick={() => setIndex((prev) => prev + 1)}>Right</button>
            <div
                className="planet-title"
                style={{
                    textTransform: "uppercase",
                    fontSize: "24px",
                    fontWeight: "100",
                }}
            >
                Mercury
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
