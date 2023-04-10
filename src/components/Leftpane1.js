import React, { Component } from "react";
import "./Leftpane1.css";
import { Alltask } from "./Alltask";
import { Completedtask } from "./Completedtask";

export class Leftpane1 extends Component {
  render() {
    return (
      <div className="Leftpane1">
        <div class="col col2">
          <div className="bigcircle">
            <div className="png2">
                <img src="https://png.pngtree.com/png-vector/20220915/ourmid/pngtree-funny-cartoon-pencil-clipart-png-image_6176072.png" height={189} width={212}></img>
            </div>
          </div>
          <div class="mytodofont ">
            <h1>
              <b>My Todo</b>
            </h1>
          </div>
          <div className="Container1">
            <Alltask />
          </div>
          <div className="Container2">
            <Completedtask />
          </div>
        </div>
      </div>
    );
  }
}
