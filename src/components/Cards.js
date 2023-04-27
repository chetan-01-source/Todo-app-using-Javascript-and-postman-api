import React, { Component, useEffect, useState } from "react";
import "./Cards.css";
import records from "./data.json";
import axios from "axios";

function Cards()
 {
  const [data, setData] = useState([]);
  const loaddata = async () => {
    const response = await axios.get("http://localhost:5000/gettask");
    setData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    loaddata();
  }, []);

  return (
    <>
    <div className="App">
      {data.slice(0,3).map((item, index) => {
        return (
            <div className="card-window">
            <div className="card-container">
              <div className="image-container">
                <img
                  src="http://www.solidbackgrounds.com/images/1920x1080/1920x1080-red-solid-color-background.jpg"
                  height={6}
                  width={303}
                  alt=""
                />
              </div>
              <div className="text-container">
                <div className="text1-container">
                  <div className="text">
                    <h3>#Task</h3>
                    <h4>
                      <tr key={item.id}>
                        {index+1}
                      </tr>
                    </h4>
                  </div>
                </div>

                <div className="text1">
                  <h3>
                    <tr key={item.id}>
                      {item.taskname}
                      {console.log("data")}
                    </tr>
                    <div className="line1"></div>
                  </h3>
                  <div className="box">
                    <h4>07:00am</h4>
                  </div>
                  <button type="button" className="btn1">
                    <img
                      src="https://tse1.mm.bing.net/th?id=OIP.jFuS_VOxAU8z7QQRaAWj9AHaHa&pid=Api&P=0"
                      height={11}
                      width={11}
                      alt=""
                    />
                    Task Completed
                  </button>
                </div>
              </div>
            </div>
            </div>
        );
      })}
    </div>
    <div className="App1">
    {data.slice(3,6).map((item, index) => {
      return (
          <div className="card-window1">
          <div className="card-container1">
            <div className="image-container">
              <img
                src="http://www.solidbackgrounds.com/images/1920x1080/1920x1080-red-solid-color-background.jpg"
                height={6}
                width={303}
                alt=""
              />
            </div>
            <div className="text-container">
              <div className="text1-container">
                <div className="text">
                  <h3>#Task</h3>
                  <h4>
                    <tr key={item.id}>
                      {index+4}
                    </tr>
                  </h4>
                </div>
              </div>

              <div className="text1">
                <h3>
                  <tr key={item.id}>
                    {item.taskname}
                    {console.log("data")}
                  </tr>
                  <div className="line1"></div>
                </h3>
                <div className="box">
                  <h4>07:00am</h4>
                </div>
                <button type="button" className="btn2">
                  <img
                    src="https://tse1.mm.bing.net/th?id=OIP.jFuS_VOxAU8z7QQRaAWj9AHaHa&pid=Api&P=0"
                    height={11}
                    width={11}
                    alt=""
                  />
                  Task Completed
                </button>
              </div>
            </div>
          </div>
          </div>
      );
    })}
  </div>

  <div className="App2">
    {data.slice(6,9).map((item, index) => {
      return (
          <div className="card-window2">
          <div className="card-container2">
            <div className="image-container">
              <img
                src="http://www.solidbackgrounds.com/images/1920x1080/1920x1080-red-solid-color-background.jpg"
                height={6}
                width={303}
                alt=""
              />
            </div>
            <div className="text-container">
              <div className="text1-container">
                <div className="text">
                  <h3>#Task</h3>
                  <h4>
                    <tr key={item.id}>
                      {index+7}
                    </tr>
                  </h4>
                </div>
              </div>

              <div className="text1">
                <h3>
                  <tr key={item.id}>
                    {item.taskname}
                    {console.log("data")}
                  </tr>
                  <div className="line1"></div>
                </h3>
                <div className="box">
                  <h4>07:00am</h4>
                </div>
                <button type="button" className="btn2">
                  <img
                    src="https://tse1.mm.bing.net/th?id=OIP.jFuS_VOxAU8z7QQRaAWj9AHaHa&pid=Api&P=0"
                    height={11}
                    width={11}
                    alt=""
                  />
                  Task Completed
                </button>
              </div>
            </div>
          </div>
          </div>
      );
    })}
  </div>
    </>
  );

}

export default Cards;
