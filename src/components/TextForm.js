import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        //console.log("uppercase was clicked "+ text);
        let newText = text.toUpperCase();
        SetText(newText)
        props.showAlert("converted to Uppercase", "success")
    }

    const handleLoClick = () => {
        //console.log("uppercase was clicked "+ text);
        let newText = text.toLowerCase();
        SetText(newText)
        props.showAlert("converted to Lowercase", "success")

    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        SetText(newText.join(" "))
        props.showAlert("Extra Spaces Removed", "success")

    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipbord", "success")

    }
    const handleClClick = () => {
        //console.log("uppercase was clicked "+ text);
        let newText = ('');
        SetText(newText)
    }

    const handleOnChange = (event) => {
        //console.log("on change");
        SetText(event.target.value)
    }

    const [text, SetText] = useState('');
    //SetText=("new text");
    return (
        <>
            <div className=" mx-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1 className='mx-4'>{props.heading}</h1>
                <div className="mb-3">
                    <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                        <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                            <textarea className="form-control mx-1" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="10"></textarea>
                        </div>
                        <button disabled={text.length === 0} className="btn btn-primary mx-3 my-1" onClick={handleUpClick} >Convert in Uppercase</button>
                        <button disabled={text.length === 0} className="btn btn-primary mx-3 my-1" onClick={handleLoClick} >Convert in Lowercase</button>
                        <button disabled={text.length === 0} className="btn btn-primary mx-3 my-1" onClick={handleExtraSpaces} >Remove Extra spaces</button>

                        <button disabled={text.length === 0} className="btn btn-primary mx-3 my-1" onClick={handleCopy} >Copy Text</button>
                        <button disabled={text.length === 0} className="btn btn-primary mx-3 my-1" onClick={handleClClick} >Clear Text</button>

                    </div>
                    <div className="container my-3 mx-2" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                        <h3>Your Text Summary</h3>
                        <p><b>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} character</b></p>
                        <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes Read</p>
                        <h5>Preview</h5>
                        <p>{text.length > 0 ? text : "Nothing to Preview !"}</p>
                    </div>
                </div>
            </div>
        </>
    )

}
