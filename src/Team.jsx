import { useState } from "react"

export default function Team () {

const [team, setTeam] = useState(11);

    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px',
    }

    const handelAdd = () => {
        const newTeam = team +1; 
        setTeam(newTeam);
    }

    const handelRemove = () => {
        const newRemove = team -1 ; 
        setTeam(newRemove);
    }

    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handelAdd}>Add</button>
            <button onClick={handelRemove}>Remove</button>
        </div>
    )
}