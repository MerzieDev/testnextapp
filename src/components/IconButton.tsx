"use client"
import React from "react";

interface IIconButtonProps {
    icon: JSX.Element;
    url: string
}
const IconButton = (props: IIconButtonProps) => {
    const newIcon = React.cloneElement(props.icon, {
        onClick: () => window.location.href = props.url
    });
    return (newIcon);
}

export default IconButton;