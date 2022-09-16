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
                <div className="planet mercury"></div>
                <div className="planet venus"></div>
                <div className="planet earth"></div>
                <div className="planet mars"></div>
                <div className="planet jupiter"></div>
                <div className="planet saturn"></div>
                <div className="planet uranus"></div>
                <div className="planet neptune"></div>
                <div className="planet pluto"></div>
            </div>
        </div>
    </>
  )
}

export default PlanetSlider