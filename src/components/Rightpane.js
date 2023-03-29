import React, { Component } from "react";
import './Rightpane.css';
import { Home } from "./Home";
export class Rightpane extends Component {
    render() {
        return (
            <div className="Rightpane">
                <div className="col-3"></div>
                
                <Home/>

                


            </div>
        )
    }
}