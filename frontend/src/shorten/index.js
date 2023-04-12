import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

function Shorten() {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const url = process.env.REACT_APP_BE_URL + "/list_shorten";
      await axios
        .get(url, { params: { channel: "viber,sms" } })
        .then((res) => setList(res.data || {}))
        .catch((err) => console.log(err));
    })();
  }, []);
  return (
    <div className="container" style={{ backgroundColor: "white" }}>
      <h3 className="text-center py-5">Shorten Link Users</h3>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Channel</th>
            <th scope="col">URL</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={index}>
              <th scope="row"></th>
              <td>{item.receiver_number}</td>
              <td>{item.receiver_channel}</td>
              <td>{process.env.REACT_APP_DOMAIN + item.our_string}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Shorten;
