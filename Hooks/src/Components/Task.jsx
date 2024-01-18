import { useEffect, useState } from "react";
import { useContext } from "react";
import { ToggleTheme } from "../App";

function Task() {
  const [count, setCount] = useState(0);
  const [Content, setContent] = useState(false);

  const theme = useContext(ToggleTheme);

  useEffect(() => {
    alert("Content button clicked");
  }, [Content]);

  const themeStyle = {
    backgroundColor: theme ? "black" : "grey",
    color: theme ? "grey" : "black",
    padding: "2rem",
    margin: "2rem",
  };
  let handelLike = () => {
    setCount(count + 1);
  };
  // let handleContent = () => {
  //   setContent(!Content);
  //   // console.log(Content);
  // };
  return (
    <div className="container" style={themeStyle}>
      {Content &&
        "Outer space (or simply space) is the expanse beyond celestial bodies and their atmosphere. Outer space is not completely empty; it is a near-perfect vacuum[1] containing a low density of particles, predominantly a plasma of hydrogen and helium as well as electromagnetic radiation, magnetic fields, neutrinos, dust, and cosmic rays. The baseline temperature of outer space, as set by the background radiation from the Big Bang, is 2.7 kelvins (−270 °C; −455 °F).[2]"}
        <br />
      <button style={{margin:"15px"}} onClick={()=>setContent(!Content)}>Content</button>
      <h3>{count}</h3>
      <button onClick={handelLike}>Like</button>
    </div>
  );
}

export default Task;