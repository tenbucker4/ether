import React from 'react'

const Header = () => {
  return (
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
  )
}

export default Header