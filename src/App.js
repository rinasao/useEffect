import { useEffect, useState } from "react";
import "./styles.css";

//https://reactjs.org/docs/lifting-state-up.html

const Comp1 = () => {
  const [number, setNumber] = useState(0);
  const [multiple, setMultiple] = useState(0);
  const [multiple2, setMultiple2] = useState(0);

  useEffect(() => {
    setMultiple(3 * number);

    return () => {
      setMultiple(0);
    };
  }, [number]);

  useEffect(() => {
    setMultiple2(2 * multiple);
  }, [multiple]);
  return (
    <>
      <button onClick={() => setNumber((p) => p + 1)}>{number}</button>
      <p>{multiple}</p>
      <p>{multiple2}</p>
    </>
  );
};

export default function App() {
  return (
    <div className="App">
      <Comp1 />
    </div>
  );
}
