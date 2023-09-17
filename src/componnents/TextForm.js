import React, {useState} from 'react'


export default function TextForm(props) {
 
  const [text, setText] = useState("");
  //setText("new text");

  const handalonChange=(event)=>{
    // console.log("on change");
     setText(event.target.value)
     
   }
   

  const handleUpClick=()=>{
    //console.log("uppercase was clicked"+ text);
    let newtext=text.toUpperCase();
    setText(newtext)
    props.showAlart("Convarted to upper case","success")
  }

  const handleLoClick=()=>{
    let newtext=text.toLowerCase();
    setText(newtext)
    props.showAlart("Convarted to lowar case","success")
  }

  const handleClrClick=()=>{
    let newtext=" ";
    setText(newtext)
    props.showAlart("Clear text","success")
  }

  const handleCopyClick=()=>{
    var text=document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlart("text has copy","success")
  }


 
  return (
    <>
        <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
          <h1 className='mb-2'>{props.heading}</h1>
          <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handalonChange} style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
          </div>
          <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convart to Uparcase</button>
          <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convart to Lowarcase</button>
          <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleClrClick}>Clear text</button>
          <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy text</button>
        </div>

        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}} >
          <h2>Your text summary</h2>
          <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
          <p>{0.008 * (text.split(" ").filter((element)=>{return element.length!==0}).length)} Minutes read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Nathing to preview"}</p>
        </div>
        
    </>
  )
  
}





