import React, { useEffect, useState } from "react";
import Robot from "./Components/Robot";
import RobotComponent from "./Components/RobotComponent";

function App(props) {
  // state is initialized by a props
  const [title, setTitle] = useState(props.title);
  const [count, setCount] = useState(0);
  const [robots, setRobots] = useState([]);

  const handleChangeTitle = (e) => {
    // this.setState allows us to update the state value
    setTitle(e.target.value);
  };

  const handleHoverTitle = (e) => {
    setCount(count + 1);
  }


  return (
    <div className="App">
      {/* <h1 onMouseOver={handleHoverTitle}> this is my first React Component</h1>
      <label htmlFor="titleInput">Title</label>
      <input
        type="text"
        id="titleInput"
        onChange={handleChangeTitle}
        value={title}
      />
      <h3>{title}</h3>
      <h3>Hover count: {count}</h3> */}

      <RobotComponent />
    </div>
  );
}
export default App;