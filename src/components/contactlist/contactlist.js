import React, { useState } from "react";
import "./contactlist.css";
export default function ContactList(props) {
  let [edit, setedit] = useState(props.contact);
  function deletefun(i) {
    console.log(i.id);
    const a = props.contact.filter((x) => x.id !== i.id);
    console.log(a);
    props.delete(a);
  }
  function editfun(i) {
    // setedit((edit = props.contact.filter((x) => x.id === i.id)));
    console.log(i);
    setedit((edit = i));
    console.log(edit);
    props.openedit(edit);
  }

  return (
    <div  className="col-6">
    <table id="table" className=" table-hover table-light table ">
      <thead className="c1">
        <tr>
          <th scope="col">Names</th>
          <th scope="col">Phone no</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody className="c1">
        {props.contact.map((i) => {
          return (
            <tr className="table-active" key={i.id}>
              <td>{i.name}</td>
              <td>{i.ph_no}</td>
              <td>
                <button onClick={() => editfun(i)} className="btn btn-primary">
                  edit
                </button>
                <button
                  onClick={() => deletefun(i)}
                  className="mx-2 btn btn-danger"
                >
                  delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
}
