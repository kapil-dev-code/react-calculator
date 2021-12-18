import React, {  useState } from "react";
import Header from './component/header/Header.js'
import Keypad from "./component/keyboard/Keypad.js";
import "./App.css";
import moonicon from "./image/images.png";
import sunicon from "./image/moon.png";
const usedKeyCodes=[48,49,50,51,52,53,54,55,56,57,96,97,98,99,100,101,102,103,104,105,8,13,190,187,189,191,56,111,106,107,109,110];
const numbers=["0","1","2","3","4","5","6","7","8","9"];
const operator=["-","+","*","/"];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [expression,setExpression]=useState("");
  const [result,setResult]=useState("");
  const [history,setHistory]=useState([])
  const handleKeyPress=(keyCode,key)=>{

    if(!keyCode)return;
   
    if(!usedKeyCodes.includes(keyCode))return;
    if(numbers.includes(key)){
      if(key==="0"){
        if(expression.length===0)return;
      }
      calculateResult(expression+key);
      setExpression(expression+key);
    }
    else if(operator.includes(key)){
      if(!expression)return
      //last character that we type
      const lastchar=expression.slice(-1);
      //if last char is an operator than do not add another operator also for decimal 
      if(operator.includes(lastchar))return
      if(lastchar===".")return
      setExpression(expression+key);
    }
    else if(key==="."){
      if(!expression)return;
      const lastChar=expression.slice(-1);
      if(!numbers.includes(lastChar))return;
      setExpression(expression+key);
    }
    else if(keyCode===8){//for back space press
      if(!expression)return;
      calculateResult(expression.slice(0,-1));
      //for remove last digit  or operator
      setExpression(expression.slice(0,-1))

    }
    else if(keyCode===13){ //for enter press press
      if(!expression)return;
      calculateResult(expression);
     let tempHistory=[...history];
     if(tempHistory.length>7) 
     //splice(0,1) remove first histry
     tempHistory=tempHistory.splice(0,1);
     tempHistory.push(expression);
     setHistory(tempHistory);
    }

  };
  const calculateResult=(exp)=>{
    if(!exp){setResult(""); 
    return;}
     const lastChar=exp.slice(-1);
    if(!numbers.includes(lastChar))
    //we remove last char if last char is operator
    exp=exp.slice(0,-1);
    //we use eval function(it automatic solve expression) it return number because exp is a string
    // result take only two digit  after decimal and also convert in to stirng (+"").
    try{
    const answer=eval(exp).toFixed(2)+"";
    setResult(answer);}
    catch(err){
      setResult("wrong expression")
    }

  };
  /*useEffect(() => {
    localStorage.setItem("calculator_app_mode",JSON.stringify(isDarkMode));
  }, [isDarkMode])
  useEffect(()=>{localStorage.setItem("calculator_app_history",JSON.stringify(history))},[history])*/
  return (
    <div className="app" tabIndex="0" onKeyDown={(event)=>handleKeyPress(event.keyCode,event.key)} data-theme={isDarkMode?"dark":""}>
      <div className="app_calculator">
        <div className="app_calculator_navbar">
          <div
            className="app_calculator_navbar_toggle"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            <div className={`app_calculator_navbar_toggle_circle ${isDarkMode?"app_calculator_navbar_toggle_circle_active":""}`}/>
           
          </div>
          <img src={isDarkMode ? moonicon : sunicon} alt="mode" />
        </div>
        <Header expression={expression} result={result} history={history}/>
        <Keypad handleKeyPress={handleKeyPress}/>
      </div>
    </div>
  );
}
export default App;
