import React from 'react'

const Navbar = () => {
const [color,setColor]=React.useState("")
    return (
        <>
        <div style={
            {
            background:color,
            color:"#0000"
            }
        }>
            <h1>Navbar</h1>
            <input 
            type="color"
            onChange={e => setColor(e.target.value)}/>            
        </div>
    </>
    )
}

export default Navbar;
