// import {colorData} from "../color-data.json";
// import React from "react";
// import {useState} from "react"
// import {v4} from 'uuid'


// export default function ColorProvider ({ children }) { 
// const ColorContext = createContext();
//     const [colors, setColors] = useState(colorData);
//     const addColor = (title, color) =>
//     setColors([
//     ...colors,
//     {
//     id: v4(),
//     rating: 0,
//     title,
//     color
//     }
//     ]);
//     const rateColor = (id, rating) =>
//     setColors(
//     colors.map(color => (color.id === id ? { ...color, rating } :
//     color))
//     );
//     const removeColor = id => setColors(colors.filter(color => color.id !==
//     id));
//     return (
//     <ColorContext.Provider value={{ colors, addColor, removeColor,
//     rateColor }}>
//     {children}
//     </ColorContext.Provider>
//     );
//     };
    