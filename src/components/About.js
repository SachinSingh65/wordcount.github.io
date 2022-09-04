import React from 'react'

export default function About(props) {
    //const [mystyle, setMyStyle] = useState({
    //  color: 'black',
    // backgroundColor: 'White'
    // });
    let mystyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white'
    }


    return (
        <>
            <div className="container">
                <h1 className="my-3 mx-5" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>About Us</h1>
                <div className="accordion mx-5 " id="accordionExample">
                    <div className="accordion-item" style={mystyle}>
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong> Analayze Your Text</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                TextUtlis gives you a way to analayze and manipulate your all the text in the way you need quickly. Be it Word and character count or Uppercase and Lowercase.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={mystyle}>
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>Free To Use</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                TextUtlis is a free word and character count tool that provide instant character count & word statistics for a given text. TextUtlis report the number of words and characters. Thus suitable for writing text with word/ character limit.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={mystyle}>
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>Browser Compatible</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                This word counter software works in any browser such as chrome, firefox, microsoftedge, safari. It suits to count characters in facebook, blog, books, excel document, pdf document etc.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
