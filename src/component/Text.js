import React, { useState } from 'react'

export default function Text(props) {

   const [Text, setText] = useState('');

  const handleUpClick = () => {
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert('Converted into UpperCase','success' )

  }
 

  const handleLowerClick = () => {
    let NewText = Text.toLowerCase();
    setText(NewText);
    props.showAlert('Converted into LoweCase', 'success');

  }
  const HandleClearText = ()=>{
    let NewText= '';
    setText(NewText);
    props.showAlert('Text Cleared', 'success');
    }

  
  const capitalizeFirstLowercaseRest = () => {
  let NewText= Text.charAt(0).toUpperCase() + Text.slice(1).toLowerCase();
  setText(NewText);
  props.showAlert('Converted into Capitalize', 'success');

  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  

  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2 className="my-3"style={{color:props.mode==='dark'?'white':'black'}} >{props.Heading}</h2>
        <div className="mb-3" >
          <textarea className="form-control"  value={Text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#4680ac':'white', color:props.mode==='dark'?'white':'black'}} id="mybox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}> Convert to Uper Case</button>
        <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Enter to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={capitalizeFirstLowercaseRest}>Cappitalize First word</button>
        <button className="btn btn-primary mx-1" onClick={HandleClearText}>Clear Text</button>



      </div>

<div className="container my-3"style={{color:props.mode==='dark'?'white':'black'}}>
<h2>Your Text Summary</h2>
<p>  {Text.trim()===""?0:Text.match(/\S+/g).length} Words, {Text.replace(/\s+/g,"").length}Character,</p>
<p> {0.008*Text.split(' ').length}Minutes read</p>
<h3>Preview</h3>
<p>{Text.length>0?Text:"Enter something in the textbox above to preview it here"}</p>

      </div>
    </>

  );
}


