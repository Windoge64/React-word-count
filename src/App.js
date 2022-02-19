
import React, {useState} from 'react';
import './App.css';
import Form1 from './components/Form1';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null)
  const showAlert = (message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout( ()=> {
          setAlert(null);
      },1500)
  }
  const toggleMode = ()=> (
    mode === 'light'?(setMode('dark'),document.body.style.backgroundColor='#154062',showAlert("Success:Dark mode has been enabled!","success")):(setMode('light'),document.body.style.backgroundColor='white',showAlert("Light mode has been applied!","success"))
  )
//#212529
  return(
    <React.Fragment>
      {/* <Router>
      <Navbar title = "React Router" homeText = "HomePage" about='About' mode = {mode} toggleMode= {toggleMode} />
      <Route exact path = "/home" component={props => <Alert alert = {alert} mode ={mode}{...props} />} ></Route>
      <Form1 path="/home" heading='Enter text here' showAlert={showAlert} mode ={mode}/>
      <Switch>
      {/* Syntax for inserting props inside componests with routes */}
      {/*<Route exact path = "/" component={props => <Home  mode ={mode}{...props} />} ></Route>
      <Route exact path = "/about" component={props => <About  mode ={mode}{...props} />} ></Route>
      </Switch>

      </Router> */}

<Navbar title = "React Router" homeText = "HomePage" about='About' mode = {mode} toggleMode= {toggleMode} />
<Home exact path = "/" mode ={mode} />
<Form1 exact path="/home" heading='Enter text here' showAlert={showAlert} mode ={mode}/>
{/* <About exact path="/about" mode ={mode} /> */}
    </React.Fragment>
  );
}

const Home = (props)=> (
  <div className='container my-2' style={{color:props.mode === 'light'?'black':props.mode ==='dark'?'white':''}}>

  <h1>Welcome to React Router</h1>
  <p>Feel the advanntage of React router over standard HTML links with faster gateways and without reloading your page!</p>
  </div>
)

export default App;

{/* <Route exact path = "/home" component={props => <Form1 heading='Enter text here' showAlert={showAlert} mode ={mode}   {...props} />} ></Route>  */}
