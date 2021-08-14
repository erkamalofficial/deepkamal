import React from 'react'

interface IDivider {
    borderType: 'solid' | 'dashed' | 'dotted' ;
    opacity: number;
    height: number;
    color: string;
    width: number;
}

export const Divider = (props: IDivider) => {
    const {borderType, opacity, height, color, width} = props;

    return (
        <hr className={borderType} 
        style={{borderTop: `${height}px ${borderType} ${color}`, 
        opacity: opacity, background: 'transparent', width: `${width}%`, margin: '0 auto' }} /> 
    )
}
