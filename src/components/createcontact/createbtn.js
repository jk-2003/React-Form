import './createbtn.css'
export default function CreateBtn(props) {
  return (
    <div className="creat-btn my-2 container col-3">
      <button onClick={props.openform} className=" btn btn-primary btn-lg col-">New Contact</button>
    </div>
  );
}
