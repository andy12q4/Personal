import React from "react";

const Header = () => {
    return (
        <header style={{backgroundColor: "purple", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px"}}>
            <div>
                <img src="https://placeimg.com/50/50/any" alt="RPI Logo" style={{width: "50px", marginRight: "15px"}} />
                <span style={{color: "white", fontSize: "1.5em"}}>RPI CogSci</span>
            </div>
            <nav>
                <ul style={{listStyle: "none", display: "flex"}}>
                    <li style={{marginRight: "15px", color: "white"}}>Home</li>
                    <li style={{marginRight: "15px", color: "white"}}>Projects</li>
                    <li style={{color: "white"}}>About</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;