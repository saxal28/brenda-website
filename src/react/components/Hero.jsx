import React from "react";

export const Hero = ({image, height, title, subtitle, children, color}) => {

    const styles = {
        background: image ? `url(${image})` : (color ? color : "#333"),
        height: height ? height : "100vh",
        // backgroundColor: backgroundOverlay
    };

    const style = {...styles, }

    return (

        <div className="hero" style={style}>

            {title && <h1>{title}</h1>}
            {subtitle && <h3>{subtitle}</h3>}

            {children}

        </div>

    )

}