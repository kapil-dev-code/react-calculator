import React,{useEffect, useRef} from 'react'
import './header.css'
function Header(props) {
    // resultRef use for autoscroll down till last p
    const resultRef=useRef();
    const expressionRef=useRef();
    useEffect(() => {
        resultRef.current.scrollIntoView(); //predefine function for scroll
        
    }, [props.history]);
    //for horizontal scroll
    useEffect(()=>{ expressionRef.current.scrollLeft=expressionRef.current.scrollWidth;
        
    },[props.expression])
    //return run first than useEffect run
    return (
        <div className='header custom-scroll'>
            <div className="header_history">
              {props.history &&
              props.history?.map((item)=>(<p key={item+Math.random()*44}>{item}</p>)
              )}
                </div>
         <br />
            <div ref={expressionRef}   className="header_expression custom-scroll">
                <p>{props.expression}</p>
            </div>
            
            <p ref={resultRef} className="header_result">{props.result}</p>
        </div>
    );
}

export default Header
