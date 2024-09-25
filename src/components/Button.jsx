
import React from 'react';

function Button({TagName="button",text, ...props}) {
    return (
        <TagName  {...props} >{text}</TagName>
    );
}

export default Button;