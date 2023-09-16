import { useState} from 'react';
import './App.css';
import About from './componnents/About';
import Navbar from './componnents/Navbar';
import TextForm from './componnents/TextForm';
import Alart from './componnents/Alart';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";



function App() {

  const[Mode,setMode]=useState('light');
  
  const toggleMode =()=>{
    if(Mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='gray';
      showAlart("Dark mode has enable","success")
      document.title='texttutil - Dark Mode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlart("light mode has enable","success")
      document.title='texttutil - Light Mode'
    }
  }
  
  const[alart,setAlart]=useState(null)
  const showAlart=(message,type)=>{
    setAlart({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlart(null);
    },1500);
  }



  return (
    <>
    
    {/* <Router> */}
      <Navbar title="Texttutils2" aboutText="About Texttutils" mode={Mode} toggleMode={toggleMode}/>
      <Alart alart={alart}/>
      <div className="container my-3">
        {/* <Routes> */}
          
              {/* <Route element={<About/>} path="/about"/> */}
                
              
              {/* <Route element={} path="/"/> */}
              <TextForm heading="Enter the text to analyze below"mode={Mode} showAlart={showAlart}/>

        {/* </Routes> */}
      </div>
    {/* </Router> */}

    </>
  );
}

export default App;
