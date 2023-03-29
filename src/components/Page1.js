import React, { Component } from "react";
import { Leftpane } from "./Leftpane";
import { Leftpane1 } from "./Leftpane1";
import { Rightpane } from "./Rightpane";
import ReactDatePicker  from "./Calender.js"; 
import { Profile } from "./Profile";
import "./Page1.css";
export class Page1 extends Component {
    render() {
        return (
            <div className="page">
                <div class="font-link" >
                    <div class="container text-center">
                        <div class="row align-items-start">
                            <Leftpane />
                            <Leftpane1 />
                            <div><Rightpane /> </div>
                            <ReactDatePicker/>
                            <Profile/>


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}