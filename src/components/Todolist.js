import React, { useState } from 'react'
import './Todolist.css'
import Popup from './Popup'



const Todolist = () => {
    const [modal, setModal] = useState(false);
    const toggle = () =>{
        setModal(!modal);
    }
    return (
        <>
            <div >
                <button className="button1" onClick={() => setModal(true)}>task</button>
                <Popup toggle={toggle} modal={modal} />
            </div>
            
        </>
    )
}

export default Todolist
