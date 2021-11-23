import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function _template( props ){

    useEffect(()=>{
        getInventory();
    }, []);

    const getInventory = () =>{
        console.log( 'getting inventory' );
        // dispatch for saga
        dispatch( { type: 'GET_THINGS' } );
    }

    const addItem = () =>{
        console.log( 'in addItem' );
        dispatch( { type: 'ADD_THING', payload: 'ribbet' } );
    }

    const dispatch = useDispatch();
    // const [ name, setName ] = useState( null );
    // const reducer = useSelector( store => store.reducer );
    const reducerName = useSelector( store => store.reducerName );
    return (
        <div>
            <h1>_template</h1>
            <p>{ JSON.stringify( props ) }</p>
            <p>{ JSON.stringify( reducerName )}</p>
            <button onClick={ getInventory }>saga get</button>
            <button onClick={ addItem }>saga post</button>
        </div>
    )
}

export default _template;