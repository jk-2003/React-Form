import React, { useState, useReducer } from "react";
import "./createcontact.css";
export default function CreateContact(props) {
  let [Name, setname] = useState("");
  let [NameError, setnameerror] = useState("");
  let [phno, setph_no] = useState();
  function namefunction(e) {
    setname(e.target.value);
  }
  function ph_nofunction(e) {
    setph_no(e.target.value);
  }
  function newdata(e) {
    e.preventDefault();
    if (Name.trim() === "") {
      setnameerror("name error");
      return;
    }

    let newdata = {
      name: Name,
      ph_no: phno,
    };
    console.log(newdata);
    props.newdata(newdata);
    setname("");
    setph_no("");
  }

  return (
    <form className="create-form col-3 m-5" action="">
      <h3 className="heading">Creat Form</h3>
      <div className="contactname form-floating mb-3 col-10">
        <input
          value={Name}
          onChange={namefunction}
          type="name"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Enter Name</label>
        <p>{NameError}</p>
      </div>
      <div className="contactname form-floating mb-3 col-10">
        <input
          value={phno}
          onChange={ph_nofunction}
          type="number"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        {}
        <label for="floatingInput">Enter Mobile number</label>
      </div>
      <div className="button">
        <button onClick={props.close} className="btn btn-danger mx-2">
          Cancel
        </button>
        <button onClick={newdata} className="btn btn-primary mx-2">
          Add Contact
        </button>
      </div>
    </form>
  );
}
