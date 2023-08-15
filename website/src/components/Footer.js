import React from "react";
import background from '../images/background.jpg';

const Footer = () => {
    const footerStyle = {
        backgroundColor: "red",
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px"
    };

    return (
        <footer style={footerStyle}>
            <p>Andy Chen</p>
            <nav>
                <ul style={{listStyle: "none", display: "flex"}}>
                    <li style={{marginRight: "15px"}}>Privacy Policy</li>
                    <li>Terms of Service</li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;
