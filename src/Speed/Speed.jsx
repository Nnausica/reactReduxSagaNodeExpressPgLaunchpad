import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


function Speed( props ){

    const count = useSelector(store => store.count);
    const dispatch = useDispatch();
    
    useEffect(()=>{ }, [])

    return (
        <div>
            <h1>Speed</h1>
            <p>{count}</p>

            <button onClick={()=>dispatch({type: 'INCREASE_COUNT', payload: 1})}>Increase Speed</button>
            <button onClick={()=>dispatch({type: 'DECREASE_COUNT', payload: -1})}>Decrease Speed</button>
        </div>
    )
}

export default Speed;