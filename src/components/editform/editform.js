import React, { useState } from "react";

export default function EditForm(props) {
  console.log(props.currentdata);
  let [editname, seteditname] = useState(props.currentdata.name);
  let [editphno, seteditph_no] = useState(props.currentdata.ph_no);
  function namefunction(e) {
    seteditname((editname = e.target.value));
  }
  function ph_nofunction(e) {
    seteditph_no((editphno = e.target.value));
  }
  function newdata(e) {
    e.preventDefault();
    let newdata = {
      id: props.currentdata.id,
      name: editname,
      ph_no: editphno,
    };
    console.log(newdata);
    props.updata(newdata);
    seteditname("");
    seteditph_no("");
    props.close()
  }

  return (
    <form className="create-form col-3 m-5" action="">
      <h3 className="heading">Edit Form</h3>
      <div className="contactname form-floating mb-3 col-10">
        <input
          value={editname}
          onChange={namefunction}
          type="name"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Enter Name</label>
      </div>
      <div className="contactname form-floating mb-3 col-10">
        <input
          value={editphno}
          onChange={ph_nofunction}
          type="number"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Enter Mobile number</label>
      </div>
      <div className="button">
        <button onClick={props.close} className="btn btn-danger mx-2">
          Cancel
        </button>
        <button onClick={newdata} className="btn btn-primary mx-2">
          Save Contact
        </button>
      </div>
    </form>
  );
}
