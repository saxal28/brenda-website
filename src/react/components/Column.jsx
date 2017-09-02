import React from "react";

export const Column = ({columnSize, children, hideMobile}) => {

    const colType = columnSize ? `col-${columnSize}` : `col`;
    const mobileQuery = hideMobile ? `${colType}_xs-0` : colType


    return (

        <div className={mobileQuery}>

            {children}

        </div>

    )
}