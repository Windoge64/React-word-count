import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Alert from './Alert';


export default function Form1(props) {
  const [text, setText] = useState('');

  const handleOnChange = (event)=> {
    console.log("On Change");
    setText(event.target.value);
  }
  
  const handleUpClick = ()=> {
    console.log("Converted to upper case");
    let newText = text.toUpperCase();
    setText(newText);
    document.getElementById("Box").innerHTML = newText;
    props.showAlert("Converted to upper case!","success");
    // console.log(text);
    console.log(newText);
  }
  // const capitalize = ()=> {
  //   console.log("Converted to upper case");
  //   let re = /(^|[.!?]\s+)([a-z])/g;
    
  //   let newText = text.target.value.replace(/([!?.]\s+)([a-z])/g, function(m, $1, $2) {
  //     return $1+$2.toUpperCase();
  //   });
  //   setText(newText);
  // }
  const handleDownClick = ()=> {
    console.log("Converted to lower case");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case!","success");
  }
  const copyToClipboard = ()=> {
    var cp =document.getElementById("Box");
    cp.select();

    console.log("Copied to clipboard");
     navigator.clipboard.writeText(cp.value);
    //navigator.CopyToClipboard(cp.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard!","success");
  }
  const removeExtraSpaces = ()=> {
    console.log("Converted to upper case");
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces!","success");
  }
  return (
    <React.Fragment>
        <div className='container my-2' style={{position:'relative',left:'10%',right:'10%',top:'12%'}}>
                <h2 style = {{color:props.mode === 'light'?'black':'white'}}>{props.heading}</h2>
        <div className="form-group">
          
          <textarea type="text" className="form-control" id="Box" rows = "4" style = {{backgroundColor:props.mode === 'light'?'white':props.mode ==='dark'?'#13576e':'',color:props.mode === 'light'?'black':'white'}} onChange={handleOnChange} value = {text} placeholder="Enter text here:"/>
        </div>
        
          <button className='btn btn-primary mx-1 my-1' disabled = {text.length === 0} onClick={handleUpClick}>Convert to UpperCase</button>
          <button className='btn btn-primary mx-1 my-1' disabled= {text.length === 0} onClick={handleDownClick}>Convert to LowerCase</button>
          <button className='btn btn-primary mx-1 my-1' disabled = {text.length === 0} onClick={copyToClipboard}>Copy to Clipboard</button>
          <button className='btn btn-primary mx-1 my-1' disabled = {text.length === 0} onClick={removeExtraSpaces}>Remove extra spaces</button>
          {/* <button className='btn btn-primary mx-1' onClick={capitalize}>Capitalize</button> */}
      </div>
      <div className="container my-2" style = {{color:props.mode === 'light'?'black':'white', position:'relative',left:'10%',right:'10%',top:'35%'}}>

      <h3 className='my-3'>Text Summary</h3>
      <p>{(text.split(" ").filter((element)=>{return element.length !== 0}).length )} words, {text.length} characters</p>
      <p>{(0.0032 *(text.split(" ").length - 1)).toFixed(2) } minutes to read content</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"<Enter text to preview here>"}</p>
      </div>
      </React.Fragment>
  )
}
Form1.propTypes = {
        heading: PropTypes.string.isRequired
        
}