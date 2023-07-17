import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {
    const [fName, setFName] = useState("");
    const [sName, setSName] = useState("");
    const [output, setOutput] = useState("");

 
  function handleClick() {
    if(fName==="" || sName===""){
      setOutput("Please Enter valid input")
      return;
    }
    let arr=new Array(26).fill(0);
    for (let i = 0; i < fName.length; i++) {
      arr[fName.charCodeAt(i)-97]++;
    }
    for (let i = 0; i < sName.length; i++) {
      if(arr[sName.charCodeAt(i)-97]===0){
        arr[sName.charCodeAt(i)-97]++;
      }else{
        arr[sName.charCodeAt(i)-97]--;
      }
    }
    let count=0;
    for (let i = 0; i < arr.length; i++) {
      if(arr[i]>0){
        count=count+arr[i];
      }
    }
    let calculated=count%6;
    if(calculated===1){
      setOutput("Friends")
      return;
    }else if(calculated===2){
      setOutput("Love")
      return;
    }else if(calculated===3){
      setOutput("Affection")
      return;
    }else if(calculated===4){
      setOutput("Marriage")
      return;
    }else if(calculated===5){
      setOutput("Enemy")
      return;
    }else if(calculated===0){
      setOutput("Siblings")
      return;
    }
  }

        return(
            <div id="main">
               <div>
                    <input type="text" placeholder="Enter first name" data-testid="input1" value={fName}  onChange={(e) => setFName(e.target.value.toLowerCase())}/>
                    <input type="text" placeholder="Enter second name" data-testid="input2" value={sName} onChange={(e) => setSName(e.target.value.toLowerCase())}/>
                    <button className="btn" data-testid="calculate_relationship" onClick={handleClick}>Calculate Relationship Future</button>
                    <button className="btn" data-testid="clear" onClick={() => {setFName(""); setSName(""); setOutput("")}}>Clear</button>
                </div>
                    <h3 data-testid="answer">{output}</h3>
            </div>
        )
    }
}

export default App;
