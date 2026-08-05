import { useState } from "react";

function ColorsAndCircles() {
    const [colors, setColors] = useState([]);
    const [color, setColor] = useState("");


    console.log("colours clicked render ", new Date())

    const onSubmit = () => {
        if (!color.trim()) return;

        const clonedColors = structuredClone(colors);
        clonedColors.push(color);
        setColors(clonedColors);
        
    };

    return (
        <div>
            <ColorForm color={color} setColor={setColor} onSubmit={onSubmit} />
            <ColorList colors={colors} setColors={setColors} />
        </div>
    );
}

function ColorForm(props) {
    const { colors, setColors, onSubmit } = props;
    const {color, setColour}= useState("")
    console.log("colours clicked render ", new Date())

    return (
        <div>
            <label>Enter color</label>
            <input value={color} onChange={(e) => setColor(e.target.value)} />
            <button onClick={onSubmit}>Save</button>
        </div>
    );
}

function ColorList(props) {
    const { colors } = props;

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
                    {color}
                </div>
            ))}
        </div>
    );
}

export default ColorsAndCircles;
            