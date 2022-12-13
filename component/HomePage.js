import React, {useState} from 'react'
import Alert from './Alert';
import NavBar from './NavBar'
import Text from './Text'


export default function HomePage() {
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
  <div className="container" my="3">                
    <Text Heading="Enter the Text to Analyze" mode={mode}  showAlert={showAlert} />
    </div>
    </>
  );
}
