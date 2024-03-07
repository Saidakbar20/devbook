import "./single.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Single = () => {
  const [info, setInfo] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch("https://books-server-7p9f.onrender.com/authors/" + id)
      .then((res) => res.json())
      .then((data) => setInfo(data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="container">
      <div className="single-inner">
        <img src={info.img} alt="img" className="single-img" />
        <h2 className="single-title">{info.title}</h2>
        <p className="single-text">{info.text}</p>
        <div className="single-bottom">
          {/* <p className="single-date">{dateFormat(info.createdAt)}</p> */}
        </div>
      </div>
    </div>
  );
};
