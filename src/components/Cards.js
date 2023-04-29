import React, { Component, useEffect, useReducer, useState } from "react";
import "./Cards.css";
import records from "./data.json";
import { Modal, ModalHeader } from "reactstrap";
import axios, { Axios } from "axios";
import { Icon } from '@iconify/react';


function Cards() {
  const [reducerValue, forceUpdate] = useReducer(x=>x+1, 0)
  const [modal, setmodal] = useState(false);

  const [data, setData] = useState([]);
  const loaddata = async () => {
    const response = await axios.get("http://localhost:5000/gettask");
    setData(response.data);
    console.log(response.data);
    forceUpdate()
  };

  const deleteUser =async(id,e)=>{
    var a= window.confirm("do you want to delete?")
    if(a){
      e.preventDefault();
      axios.delete(`http://localhost:5000/del/${id}`)
      
      forceUpdate()
      alert("task has been deleted")
    }
    else
    {
        alert("task is not deleted")
    }
    
      
  };



  const deleteall =async(e)=>{
    e.preventDefault();
    var a= window.confirm("do you want to delete all task?")
    if(a){
      
      axios.delete(`http://localhost:5000/deleteall`)
      
      
      alert("all task has been deleted")
    }
    else
    {
        alert("tasks are not deleted")
    }
    
      
  };

  useEffect(() => {
    loaddata();
  }, [reducerValue]);

  return (
    <>
      <div className="delall" onClick={(e)=>deleteall(e)}>
        <img src="https://th.bing.com/th/id/R.b24c367ab466572dc75ab3932d9ce027?rik=%2fRAf0dGufSeLWQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_216917.png&ehk=leDeLWBgXVjybVtLpkrqkAf0khmUNTEWSGcuSHUITdw%3d&risl=&pid=ImgRaw&r=0" width={30} height={40}/>
      </div>
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
                    src="https://th.bing.com/th/id/R.fd8edc1870cad64610f0f4b86a45661c?rik=ORwJrgP2n5jBfQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f1%2fa%2fc%2f108220.jpg&ehk=zWIXJPDWixXIdYIZCe4VHrV7SHwhBtDP0XrB61B7rlc%3d&risl=&pid=ImgRaw&r=0"
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
                    <div className="ico1">
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
                    src="https://th.bing.com/th/id/R.beb6bf36aff162ab4e29f256104f4d37?rik=AnGcRh6NlqP7oQ&riu=http%3a%2f%2fwww.solidbackgrounds.com%2fimages%2f2560x1440%2f2560x1440-blue-solid-color-background.jpg&ehk=Rp%2f%2bNgc%2bNmz6wu2OBYT%2bOL8TelrpeiXwbdO3hAzVDiQ%3d&risl=&pid=ImgRaw&r=0"
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
