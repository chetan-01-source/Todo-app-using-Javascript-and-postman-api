import React, { Component } from "react";
import './Leftpane.css';
import { Addtask } from "./Addtask";
export class Leftpane extends Component {
    render() {
        return (
            <div className="Leftpane">
                <div class="col col1">
                    <div class="circle circle1"></div>
                    <div class="circle circle2"></div>
                    <div class="circle circle3"></div>
                    <Addtask/>

                </div>


            </div>
        )
    }
}