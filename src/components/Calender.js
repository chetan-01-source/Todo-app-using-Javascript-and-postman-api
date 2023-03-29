import React,{useState} from "react";
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'
import './Calender.css';

function ReactDatepicker () {
    const {selectedDate, setSelectedDate} = useState(null)
    return(
        <div className="Calender">
            <DatePicker
            selected ={selectedDate}
            onchange={date => setSelectedDate(date) }
            dateFormat="dd/MM/yyyy"
            isClearable
            placeholderText="I have been cleared!"
            />

        </div>

    )
}
export default ReactDatepicker


