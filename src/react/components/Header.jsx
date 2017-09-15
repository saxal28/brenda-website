import React from "react";

export const Header = ({image, height, title, subtitle, children, color, fixed}) => {

    const styling = {
        background: image ? `url(${image})` : (color ? color : "#222"),
        height: height ? height : "30vh",
        // backgroundColor: backgroundOverlay
    };

    const isFixed = fixed ? {position:'fixed'} : ""

    const style = {...styling, ...isFixed}


    return (

        <div className="header" style={style}>

            {title && <h1>{title}</h1>}
            {subtitle && <h3>{subtitle}</h3>}

            {children}

        </div>

    )

}