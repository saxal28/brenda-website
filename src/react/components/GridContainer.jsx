import React from "react";

export const GridContainer = ({rows, children}) => {

    const gridType = rows ? `grid-${rows}_sm-1` : `grid-2_sm-1`;
    const gridStyle = [gridType, "grid-noGutter"].join();

    return (

        <div className="container">

            <div className={gridStyle}>

                {children}

            </div>

        </div>

    )

}