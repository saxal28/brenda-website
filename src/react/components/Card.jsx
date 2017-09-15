import React from 'react';

export const Card = ({image, title, subtitle, children, color, onClick, noOverlay}) => {

    const style = {
        background: image ? `url(${image})` : "",
        cursor: onClick ? "pointer" : "inherit",
        backgroundColor: noOverlay ? "transparent"  : "#333"
    };

    return (

        <div className="card" style={style} onClick={onClick}>

            {title && <h2>{title}</h2>}
            {subtitle && <p>{subtitle}</p>}

            {children}

        </div>

    )

}