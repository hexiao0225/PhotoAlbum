import React from "react";

export const parseText = (text) => text.split('\n').map((item, i) => {
    return <p key={i}>{item}</p>
});

