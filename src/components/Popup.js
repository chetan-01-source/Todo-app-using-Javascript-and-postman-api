import React, { useState } from "react";
import "./Popup.css";
import { Modal, ModalHeader } from "reactstrap";

function Popup() {
  const [modal, setmodal] = useState(false);

  const [user, setUser] = useState({
    taskname: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
    console.log({ [name]: value });
  };

  const PostData = async(e) =>{
    e.preventDefault();

    const {taskname} = user;

    const res = await fetch("/addtask", {

      method: "POST",
      headers: {
        "Content-type": "application/json"
      },

      body: JSON.stringify({

        taskname
      })
    });

    const data = await res.json();

  }

  return (
    <div>
      <Modal isOpen={modal} toggle={() => setmodal(!modal)}>
        <ModalHeader toggle={() => setmodal(!modal)}>
          <div className="form">
            <h1>Your Task</h1>
            <div className="linea"></div>
            <div className="text3">
              <form method="POST">
                <div className="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    class="form-label"
                  ></label>
                  <input
                    type="text"
                    name="taskname"
                    id="taskname"
                    autoComplete="off"
                    placeholder="Enter you task"
                    value={user.taskname}
                    onChange={handleInputs}
                  />
                </div>
              </form>
            </div>
            <div className="press1">
              <div onClick={PostData}>Add</div>
            </div>
          </div>
        </ModalHeader>
      </Modal>
      <div className="Addicon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#000000" class="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
        </div>
      <button className="press" onClick={() => setmodal(true)}>
        {" "}
       {" "}
      </button>
    </div>
  );
}

export default Popup;
