import React from "react";

export const ContentContainer = ({children, height}) => {

    const heightStyle = height ? {height: height} : ""

    const styles = [
        heightStyle,
    ]

    return (

        <div className="container content-container" style={styles}>

            {children}

        </div>

    )

}