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
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                </div>
            </div>
        </>
    );
}

export default App;
