import { useState } from "react";
import "./App.css";
import SignSuccess from "./components/SignSuccess";
import SignUp from "./components/SignUp";

const App = () => {
  const [isSignSuccess, setIsSignSuccess] = useState(true);

  const signUpSuc = () => {
    setIsSignSuccess(false);
    console.log("signUpsc calling");
  };

  return (
    <div className="all-back-img">
      {isSignSuccess ? <SignUp signUpSuc={signUpSuc} /> : <SignSuccess />}
    </div>
  );
};

export default App;
