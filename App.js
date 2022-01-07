import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  return <Mycomponent />;
}
function Mycomponent() {
  const [msg, setmsg] = useState("");
  const [list, setlist] = useState([]);

  const handlemsgchange = (e) => {
    setmsg(e.target.value);
  };

  const addmsg = async () => {
    if (msg == "") {
      alert("validation fails..! please type msg");
      return;
    }

    const url = "http://localhost:4000/admsg";
    const data = {
      msg: msg,
    };

    await axios.post(url, data);

    const newlist = [data, ...list];
    setlist(newlist);

    setmsg("");
  };

  const selectAllMsg = async () => {
    const url = "http://localhost:4000/gtmsg";
    const result = await fetch(url);
    const list = await result.json();
    const newlist = [...list];
    setlist(newlist);
  };

  useEffect(() => selectAllMsg(), []);
  return (
    <div>
      <h2 className="bg-dark text-light p-1 mb-0 ">ChatApp</h2>
      <h6 className="bg-dark text-light p-2 mb-3">
        by Ashutosh Sapkal, Id:210940520015
      </h6>
      <div className="row">
        <div className="col-10">
          <input
            className="form control form control-lg m2"
            type="text"
            name=""
            id=""
            value={msg}
            onChange={handlemsgchange}
            placeholder="lets chat here.."
          />
        </div>
        <div className="col-2">
          <input
            className="btn btn-primary w-75 p-2 m-2"
            type="button"
            name=""
            value="send"
            onClick={addmsg}
          />
        </div>
        {list.map((item,index)=>(
          <div key={index} className="alert alert-secondary fs-3">
            {item.msg}
          </div>
        ))}
      </div>
    </div>
  );
}
