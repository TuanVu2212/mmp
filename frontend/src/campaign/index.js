import React, { useEffect, useState } from "react";
import { Redirect, Route, useParams } from "react-router-dom";
import axios from "axios";

function Campaign() {
  const { id } = useParams();
  const [error, setError] = useState(false);
  const [username, setUSername] = useState(null);
  const [isViber, setIsViber] = useState(false);
  useEffect(() => {
    (async () => {
      const url = process.env.REACT_APP_BE_URL + `/shorten/${id}`;
      await axios
        .get(url)
        .then((res) => {
          const { channel, name } = res.data;
          if (channel === "viber") {
            setIsViber(true);
          }
          if (channel === "sms") {
            setUSername(name);
          }
        })
        .catch((err) => {
          console.log(err);
          setError(true);
        });
    })();
  }, []);
  if (error) return <Redirect to="/page/notfound" />;
  if (username) return <Redirect to={`/landingpage?name=${username}`} />;
  if (isViber) return <Redirect to="/page/external" />;
  return <div>Redirecting....</div>;
}

export default Campaign;
