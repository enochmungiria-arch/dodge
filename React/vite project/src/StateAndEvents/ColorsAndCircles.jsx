import { useState } from "react";

function ColorsAndCircles() {
    const [colors, setColors] = useState(["yellow", "blue", "green", "red"]);

    const addColor = (color) => {
        setColors((currentColors) => [...currentColors, color]);
    }
    const removeColor= (indexToRemove)=>{
        setColors((currentColors)=>currentColors.filter((_,index)=>index!==indexToRemove))
    }


    return (
        <div>
            <ColorForm addColor={addColor} />
            <ColorList colors={colors} onRemoveColor={removeColor} />
        </div>
    );
}

function ColorForm({ addColor }) {
    const [color, setColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmerColor = color.trim();
        if (!trimmerColor) return;
        addColor(trimmerColor);
        setColor("");
    };

    return (
        <div>
            <label>Enter color</label>
            <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
            <button type="submit">add Color</button>
        </div>
    );
}

function ColorList({ colors, onRemoveColor }) {
    
const removeColor=(index) =>{
    console.log("remove color", colors[index],"index is ",index)
}
    return (
        <div style={{ marginTop: "20px" }}>
            {colors.map((color, index) => (
                <div
                    key={index}
                    style={{
                        margin: "10px",
                        width: "100%",
                        height: "20px",
                        backgroundColor: color,
                        padding: "10px",
                        color: "white",
                    }}
                >
                   <span>{color}</span>
                    <button type="button" onClick={() => onRemoveColor(index)}>Remove</button>
                </div>
            ))}
        </div>
    );
}

export default ColorsAndCircles;
            