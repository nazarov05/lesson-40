
import { useState } from 'react';
import './App.css';
import { auth, provider } from './firebase';
import { signInWithPopup } from 'firebase/auth';
import Home from './Home';

function App() {
  const [value, setValue] = useState("")

  const LoginWidthGoogle =()=>{
    signInWithPopup(auth,provider).then((data)=>{
      setValue(data.user.email)

    })
  }
  return (
    <div className="App">
      {/* <button onClick={LoginWidthGoogle}>LoginWidthGoogle</button>
      <h1>{value}</h1> */}
      {!value ?<button onClick={LoginWidthGoogle}>LoginWidthGoogle</button>:<Home/>}
     
    </div>
  );
}

export default App;
