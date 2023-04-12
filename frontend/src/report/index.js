import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

function Report() {
  const [list, setList] = useState({});

  useEffect(() => {
    (async () => {
      const url = process.env.REACT_APP_BE_URL + "/list_clicked";
      await axios
        .get(url, { params: { channel: "viber,sms" } })
        .then((res) => setList(res.data || {}))
        .catch((err) => console.log(err));
    })();
  }, []);
  return (
    <div className="container" style={{ backgroundColor: "white" }}>
      <h3 className="text-center py-5">Report Tracking Users</h3>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Name</th>
            <th scope="col">Channel</th>
            <th scope="col">URL</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(list).map((key, index) =>
            list[key].list_clicked?.map((item, _index) => (
              <tr key={key + _index}>
                <th scope="row"></th>
                <td>{item.number}</td>
                <td>{item.name}</td>
                <td>{key}</td>
                <td>
                  {process.env.REACT_APP_DOMAIN + item.shorten.our_string}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Report;
