import React, { useState } from "react";
import "./App.css";
//import About from "./components/About";
import Navbar from './components/Navbar';
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
//import {
 // BrowserRouter as Router,
 // Routes,
  //Route,
//} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light"); //Wheather dark mode is enable or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode has been enabled", "success")

      //document.title ='TextUtlis-Dark Mode';
      //setInterval(()=>{
      // document.title ='TextUtlis is Amazing';
      // },2000)
      //setInterval(()=>{
      //  document.title ='install TextUtlis';
      //},1000)

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled", "success")
      //document.title = 'TextUtlis-Light Mode';

    }
  }
  return (
    <>
      {/*<Router>*/}
        <Navbar title="SaachiTextUtlis" mode={mode} toggleMode={toggleMode} />
        {/*<Navbar/>*/}
        
        <Alert alert={alert} />
        <div className="container my-3">

         {/* <Routes>*/}
            {/*<Route exact path="/about"
              element={<About mode={mode} />}>
            </Route>*/}
            {/*<Route exact path="/"*/}
             {/* element={<TextForm showAlert={showAlert} heading="Try TextUtlis - Enter the text to analyze below" mode={mode} />}>*/}
              <TextForm showAlert={showAlert} heading="Try TextUtlis - Enter the text to analyze below" mode={mode} />

            {/*</Route>
          </Routes>*/}
        </div>
      {/*</Router>*/}
    </>
  );
}


export default App;
