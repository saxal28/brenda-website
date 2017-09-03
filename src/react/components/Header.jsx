import React from "react";

export const Header = ({image, height, title, subtitle, children, color}) => {

    const style = {
        background: image ? `url(${image})` : (color ? color : "#333"),
        height: height ? height : "30vh",
        // backgroundColor: backgroundOverlay
    };

    return (

        <div className="header" style={style}>

            {title && <h1>{title}</h1>}
            {subtitle && <h3>{subtitle}</h3>}

            {children}

        </div>

    )

}