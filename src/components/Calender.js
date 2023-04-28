import React, {  useState } from "react";
import DatePicker from "react-datepicker"

import 'react-datepicker/dist/react-datepicker.css'
import './Calender.css';

function ReactDatepicker () {
   const [date,setDate]=useState();
   console.log("Date",date)
    return(
        <>
         

        <div className="Calender">
            <input type="date" 
             onchange={e=>setDate(e.target.value) }
           
            />
            

        </div>

</>
    )
}
export default ReactDatepicker


