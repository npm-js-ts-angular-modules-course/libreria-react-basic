import React from 'react';

const CustomBox = (props: any) => {
    const { width, height, bgColor, content, color } = props;
    const showText = (!content)? 'Texto de ejemplo': content;
    return (
        <div 
            style={
                {
                    width: width || 200,
                    height: height || 200,
                    backgroundColor: bgColor || "green",
                    color: color || "white",
                }
            }>
                { showText}
            </div>
    )
}

export default CustomBox;