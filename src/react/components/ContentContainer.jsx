import React from "react";

export const ContentContainer = ({children, height}) => {

    const heightStyle = height ? {background: height} : ""

    const styles = [
        heightStyle,
    ]

    return (

        <div className="container content-container">

            {children}

        </div>

    )

}