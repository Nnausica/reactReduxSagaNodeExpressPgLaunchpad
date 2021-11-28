import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


function Passengers( props ){
    // const [ name, setName ] = useState( null );
    // const reducer = useSelector( store => store.reducer );

    const dispatch = useDispatch();
    useEffect(()=>{ }, [])

    const[newPassenger, addPassenger]= useState(0);

    const getPassenger = ()=>{
        console.log('in addComments', event.target.value);
        addPassenger(event.target.value);
    }

    const passenger = useSelector(store=> store.passenger);

    return (
        <div>
            <h1>Add Passengers</h1>
            <p>{ JSON.stringify( passenger )}</p>

            <input type="text" placeholder="Add Passgener" onChange={(event)=>getPassenger(event)}></input>
            <button onClick={()=>dispatch({type:'ADD_PASSENGER', payload: newPassenger})}></button>

        </div>
    )
}

export default Passengers;