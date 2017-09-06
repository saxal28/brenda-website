import React from "react";

export const GridContainer = ({rows, children, spacing}) => {

    const gridType = rows ? `grid-${rows}_sm-1` : `grid-2_sm-1`;
    const gridStyle = [gridType, "grid-noGutter"].join();

    const containerStyle =  spacing ? "container content-container" : "container";

    return (

        <div className={containerStyle}>

            <div className={gridStyle}>

                {children}

            </div>

        </div>

    )

}