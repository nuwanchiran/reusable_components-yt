import {useState} from 'react';
import './App.scss';
import AppAlert from './components/atoms/AppAlert/AppAlert';
import AppButton from './components/atoms/AppButton/AppButton';

function App() {
  const [notify, setNotify] = useState( false )
  return (
    <div className="App">
      <AppButton theme='default' style={{marginTop:200}} onClick={()=>setNotify(true)}>show modal</AppButton>
      <AppAlert theme='success' open={notify} setOpen={setNotify} title="File uploaded successfully" delay={5000}/>
    </div>
  )
}

export default App
