import React from 'react';

export const Card = ({image, title, subtitle, children, color, onClick}) => {

    const style = {
        background: image ? `url(${image})` : (color ? color : "#333"),
        cursor: onClick ? "pointer" : "inherit",
    };

    return (

        <div className="card" style={style}>

            {title && <h2>{title}</h2>}
            {subtitle && <p>{subtitle}</p>}

            {children}

        </div>

    )

}