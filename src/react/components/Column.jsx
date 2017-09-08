import React from "react";

export const Column = ({columnSize, children, hideMobile}) => {

    const colType = columnSize ? `col-${columnSize}_sm-12` : `col`;
    const mobileQuery = hideMobile ? `${colType}_sm-12_sm-0_xs-0` : colType


    return (

        <div className={mobileQuery}>

            {children}

        </div>

    )
}