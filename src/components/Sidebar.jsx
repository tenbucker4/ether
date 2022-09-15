import React, { useEffect } from 'react'
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

const Sidebar = ({ isHidden, setIsHidden, currentPlanet, content1, content2, content3, fetchPlanetData, planetStatistics }) => {
    useEffect(() => {
        fetchPlanetData();
    },[currentPlanet])

    console.log(planetStatistics.temp)

    return (
    <>
        <aside
        className="sidebar"
        style={{ right: isHidden ? "-100%" : "0" }}
        >
            <div className="close-menu">
                <Icon
                    path={mdiClose}
                    onClick={() => setIsHidden((prev) => !prev)}
                    size={1.5}
                    color="gray"
                />
            </div>
            <div className='sidebar-planet-title' style={{ textTransform: "uppercase" }}>
                <div>{currentPlanet}</div>
                <span className='planet-underline'></span>
            </div>
            <img src={content3}></img>
            <div>{content1}</div>
            <div>{content2}</div>
            <ul>
                <li>Average Temperature: {planetStatistics.temp} K</li>
                <li>Surface Gravity: {planetStatistics.gravity} m/s2</li>
                <li>Number of Moons: {planetStatistics.moons === null ? 0 : `${planetStatistics.moons}`}</li>
                <li>Radius: {planetStatistics.radius} km</li>
                <li>Escape Velocity: {planetStatistics.escape} m/s</li>
            </ul>
        </aside>
        <aside
        className="sidebar-backdrop"
        style={{ bottom: isHidden ? "-100%" : "0" }}
        ></aside>
    </>
    
  )
}

export default Sidebar