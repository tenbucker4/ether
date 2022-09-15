import React from 'react'
import Icon from "@mdi/react";
import { mdiChevronLeft } from "@mdi/js";
import { mdiChevronRight } from "@mdi/js";

const PlanetSlider = ({ translateLeft, translateRight, index }) => {
  return (
    <>
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
  )
}

export default PlanetSlider