import { useState } from "react";
import "./App.css";

const App = () => {
  const [started, setStarted] = useState(false);
  const [val, setVal] = useState("");
  let [time, setTime] = useState(10);
  let [sec, setSec] = useState(0);
  let [len, setLen] = useState(0);
  const startTiming = () => {
    setStarted(true);
    timer();
  };
  function timer() {
    setSec(sec++);
    setTimeout(() => {
      if (sec <= time * 60) {
        timer();
      }
      if (sec === time * 60) {
        setStarted(false);
      }
    }, 1000);
  }
  const update=(event)=>{
    let l=0;
    setVal(event.target.value);
          // eslint-disable-next-line array-callback-return
          val.split(/\r?\n/).map((word)=>{
            l+=word.split(" ").filter((word) => word !== "").length;
          })
          setLen(l);
  }
  return (
    <div className="App">
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding: "10px",
        }}
      >
        <button
          style={{
            fontSize: "20px",
            padding: "10px",
            backgroundColor: "white",
            borderColor: "green",
            borderRadius: "10px",
            borderWidth: "2px",
            borderStyle: "groove",
            color: "green",
            width: "100px",
          }}
          disabled={started}
          onClick={() => {
            startTiming();
          }}
        >
          Start
        </button>
        <p>{`${String(Math.floor(sec / 60)).padStart(2, "0")}:${String(
          sec % 60
        ).padStart(2, "0")}`}</p>
        <select
          style={{
            fontSize: "20px",
            padding: "10px",
            backgroundColor: "white",
            borderColor: "black",
            borderRadius: "10px",
            borderWidth: "2px",
            borderStyle: "groove",
            color: "black",
            width: "100px",
          }}
          onChange={(event) => {
            setTime(event.target.value);
          }}
        >
          <option value={10}>10 min</option>
          <option value={15}>15 min</option>
          <option value={20}>20 min</option>
          <option value={25}>25 min</option>
          <option value={30}>30 min</option>
          <option value={35}>35 min</option>
          <option value={40}>40 min</option>
          <option value={45}>45 min</option>
        </select>
      </header>
      <textarea
        rows={30}
        style={{
          padding: "5px",
          fontSize: "20px",
          borderStyle: "dotted",
          borderColor: "black",
          borderWidth: "2px",
          borderRadius: "10px",
          width: "80%",
        }}
        value={val}
        onChange={(event) => {
         update(event);
        }}
        disabled={!started}
      ></textarea>
      <br />
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <p>{`Total Words = ${len}`}</p>
        <button
          style={{
            fontSize: "20px",
            padding: "10px",
            backgroundColor: "white",
            borderColor: "blue",
            borderRadius: "10px",
            borderWidth: "2px",
            borderStyle: "groove",
            color: "blue",
          }}
          onClick={() => {
            setStarted(false);
            setSec(0);
            setVal("");
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
