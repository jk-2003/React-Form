import React, { useState, useReducer } from "react";
import ContactList from "./components/contactlist/contactlist";
import CreateContact from "./components/createcontact/creatercontact";
import CreateBtn from "./components/createcontact/createbtn";
import EditForm from "./components/editform/editform";
import "./app.css";

function App() {
  let contact = [
    // {
    //   id: 1,
    //   name: "jk",
    //   ph_no: 7452369555,
    // },
    // {
    //   id: 2,
    //   name: "priya",
    //   ph_no: 6345676489,
    // },
    // {
    //   id: 3,
    //   name: "sam",
    //   ph_no: 9823456545,
    // },
    // {
    //   id: 4,
    //   name: "jhon",
    //   ph_no: 8882265554,
    // },
  ];
  let [data, setdata] = useState(contact);
  let [open, setopen] = useState(false);
  let [edit, setedit] = useState(false);
  let [currentdata, setcurrentdata] = useState("");
  function deletefunction(edit) {
    setdata((data = edit));
  }
  function openform() {
    setopen(true);
  }
  function closeform() {
    setopen(false);
  }
  function newdata(i) {
    i.id = contact.length + 1;
    setdata((data = [i, ...contact]));
    // setdata((data =contact.unshift(i)));
    console.log(contact.unshift(i));
  }
  function openeditform(i) {
    setopen(false);
    setedit(true);
    setcurrentdata(i);
  }
  function closeeditform() {
    setedit(false);
  }
  function updata(newdata) {
    console.log(newdata);
    setdata(
      (data = data.map((data) => (data.id === newdata.id ? newdata : data)))
    );
    
  }
  return (
    <div className="app">
      <h1 className="m-head">React Curd-Form</h1>
      {!open ? (
        <CreateBtn openform={openform} />
      ) : (
        <CreateContact close={closeform} newdata={newdata} />
      )}
      {edit && (
        <EditForm
          updata={updata}
          currentdata={currentdata}
          close={closeeditform}
        />
      )}
      <ContactList
        openform={openform}
        openedit={openeditform}
        delete={deletefunction}
        contact={data}
      />
    </div>
  );
}
export default App;
