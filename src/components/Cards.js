import React , {Component, useEffect, useState} from 'react'
import './Cards.css'
import records from './data.json'

function Cards({userData}) {

  const [data, setData] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/addtask" ,{
      mode: "no-cors",
      method: "GET",
    })

    
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "userData");
      setData(data.data);
    });
  });


  return (
    <div className="App">
     
      {
        records.map(record => {
          return (
            
            
            <div className="card-container">
              <div className="image-container">
                <img src="http://www.solidbackgrounds.com/images/1920x1080/1920x1080-red-solid-color-background.jpg" height={6} width={303} alt='' />
              </div>
              <div className="text-container">
                <div className="text1-container">
                  <div className="text">
                    <h3>{record.title}</h3>
                  </div>

                </div>
                <div className="text1">
                  <h3>
                    {record.content}
                    <div className="line1">

                    </div>


                  </h3>
                  <div className="box">
                    <h4>{record.time}</h4>
                  </div>
                  <button type="button" class="btn1">
                  <img src="https://tse1.mm.bing.net/th?id=OIP.jFuS_VOxAU8z7QQRaAWj9AHaHa&pid=Api&P=0" height={11} width ={11}alt='' />
                    Task Completed
                    </button>

                </div>
              </div>

            </div>
        

          )
        }

        )


      }
    </div>
  )
}

export default Cards
