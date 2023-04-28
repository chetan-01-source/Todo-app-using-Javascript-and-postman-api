import React, { Component, useEffect, useState } from "react";
import "./Cards.css";
import records from "./data.json";
import { Modal, ModalHeader } from "reactstrap";
import axios, { Axios } from "axios";
import { Icon } from '@iconify/react';

function Cards() {
  const [modal, setmodal] = useState(false);

  const [data, setData] = useState([]);
  const loaddata = async () => {
    const response = await axios.get("http://localhost:5000/gettask");
    setData(response.data);
    console.log(response.data);
  };

  const deleteUser =async(id,e)=>{
    e.preventDefault();
    axios.delete(`http://localhost:5000/del/${id}`)
    .then(res=>console.log("Deleted"))

     
    
  };

  useEffect(() => {
    loaddata();
  }, []);

  return (
    <>

      <div className="App">
        {data.slice(0,3).map((item, index) => {
          return (
            <>
            
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
                            {index + 1}
                          </tr>
                        </h4>
                      </div>
                      
                    </div>
                    <div className="ico">
                        <Icon   icon="solar:trash-bin-minimalistic-2-bold-duotone" height={20}  onClick={(e)=>deleteUser(item._id,e)}/>
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
                        <h4><tr key={item.id}>
                          {item.time}
                          {console.log("data")}
                        </tr></h4>
                      </div>
                     <div className="img1">
                     <img
                          src="https://th.bing.com/th/id/R.1508c92d3afc128f777898bbc3458750?rik=7lKUai0C1cRc8w&riu=http%3a%2f%2fwww.freepngclipart.com%2fdownload%2fcartoon%2f83069-engineering-engineer-free-clipart-hq.png&ehk=qRr0GGUBD7hFJj%2bqC8amJbf%2btiUlwYraCcji9yZQFvU%3d&risl=&pid=ImgRaw&r=0"
                          height={80}
                          width={50}
                          
                          alt=""
                        />
                      </div> 
                      
                     
                     
                    </div>
                  </div>
                  
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="App1">
        {data.slice(3, 6).map((item, index) => {
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
                          {index + 4}
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
                      <h4><tr key={item.id}>
                        {item.time}
                        {console.log("data")}
                      </tr></h4>
                    </div>
                    <div className="ico">
                        <Icon   icon="solar:trash-bin-minimalistic-2-bold-duotone" height={20}  onClick={(e)=>deleteUser(item._id,e)}/>
                        </div>
                    <div className="img1">
                     <img
                          src="https://th.bing.com/th/id/R.1508c92d3afc128f777898bbc3458750?rik=7lKUai0C1cRc8w&riu=http%3a%2f%2fwww.freepngclipart.com%2fdownload%2fcartoon%2f83069-engineering-engineer-free-clipart-hq.png&ehk=qRr0GGUBD7hFJj%2bqC8amJbf%2btiUlwYraCcji9yZQFvU%3d&risl=&pid=ImgRaw&r=0"
                          height={80}
                          width={50}
                          
                          alt=""
                        />
                      </div> 
                      
                    
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="App2">
        {data.slice(6, 9).map((item, index) => {
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
                          {index + 7}
                        </tr>
                      </h4>
                    </div>
                  </div>
                  <div className="ico">
                        <Icon   icon="solar:trash-bin-minimalistic-2-bold-duotone" height={20}  onClick={(e)=>deleteUser(item._id,e)}/>
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
                      <h4><tr key={item.id}>
                        {item.time}
                        {console.log("data")}
                      </tr></h4>
                    </div>
                    <div className="img1">
                     <img
                          src="https://th.bing.com/th/id/R.1508c92d3afc128f777898bbc3458750?rik=7lKUai0C1cRc8w&riu=http%3a%2f%2fwww.freepngclipart.com%2fdownload%2fcartoon%2f83069-engineering-engineer-free-clipart-hq.png&ehk=qRr0GGUBD7hFJj%2bqC8amJbf%2btiUlwYraCcji9yZQFvU%3d&risl=&pid=ImgRaw&r=0"
                          height={80}
                          width={50}
                          
                          alt=""
                        />
                      </div> 
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
