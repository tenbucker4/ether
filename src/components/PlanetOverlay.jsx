import React from 'react'

const PlanetOverlay = ({ opacity, currentPlanet, currentColor, setIsHidden, description }) => {
  return (
    <>
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
    </>
    
  )
}

export default PlanetOverlay