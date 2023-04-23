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
                <div class="mb-3">
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
              <button onClick={PostData}>Add</button>
            </div>
          </div>
        </ModalHeader>
      </Modal>
      <button className="press" onClick={() => setmodal(true)}>
        {" "}
        Add Task{" "}
      </button>
    </div>
  );
}

export default Popup;
