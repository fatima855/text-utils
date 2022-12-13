import './App.css';
import React, {useState} from 'react'
import Acordian from './component/Acordian';
import Text from './component/Text'
import Alert from './component/Alert';
import NavBar from './component/NavBar'
import { Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert]= useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type:type
          
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  
  
    const [mode, setMode] = useState('light');
    const toogleMode = () => {
      if (mode === 'light') {
        setMode('dark');
  document.body.style.backgroundColor='#005B96';
  showAlert('Dark Mode has Been Enable', 'success');
  document.title="TextUtils - Dark Mode";
      }
      else {
        setMode('light');
        document.body.style.backgroundColor='white';
        showAlert('Light Mode has Been Enable', 'success');
        document.title="TextUtils - Light Mode"
       
      }
    }

  return (

    <>
   
         <NavBar title="UTILS"  mode={mode} toogleMode={toogleMode}/>
        <Alert alert={alert} showAlert={showAlert}/>
        <div className="container">

        <Routes>
         <Route path="/" element={  <Text Heading="Enter the Text to Analyze" mode={mode}  showAlert={showAlert} /> } />
         <Route path="about" element={ <Acordian/> } /> 
            
         </Routes>
         </div>
    
    </>
        
  );
}

export default App;
