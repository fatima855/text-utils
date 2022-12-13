import React,{useState} from 'react'
import NavBar from './NavBar'
import Alert from './Alert'
import Acordian from './Acordian';
export default function About() {

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
    <Acordian/>
  </div>
    </>
  )
}
