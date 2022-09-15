import React from 'react'
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

const Sidebar = ({ isHidden, setIsHidden, currentPlanet, content1, content2, content3 }) => {
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
            <div style={{ textTransform: "uppercase" }}>
                {currentPlanet}
            </div>
            <div>{content1}</div>
            <div>{content2}</div>
            <div>{content3}</div>
        </aside>
        <aside
        className="sidebar-backdrop"
        style={{ bottom: isHidden ? "-100%" : "0" }}
        ></aside>
    </>
    
  )
}

export default Sidebar