import React, { useState } from "react";
import "./index.css";

function App() {
    const [index, setIndex] = useState(0);

    return (
        <>
            <button onClick={() => setIndex((prev) => prev - 1)}>Left</button>
            <button onClick={() => setIndex((prev) => prev + 1)}>Right</button>
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
