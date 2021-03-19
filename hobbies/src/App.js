import React, {useState} from "react";
import './App.css';

function App() {
 
 const [fullname, setFullname] = useState({
 
  fname:'',
  lname:'',
  email:'',

  hobbies1:[{ names:""}]



});

const [newState,setNew] = useState()

 const myinput=(e)=>{
   

setNew(e.target.value);
console.log(e.target.value);
console.log(e.target.name)


 }
   const Onsubmit=(e)=>{
     e.console.log("hello")

  
  

   }

   const addnewhobby=(e)=>{
   
    e.preventDefault();
    setFullname( State => ({
      hobbies1: [...State.hobbies1,  {names:newState}]}))
      console.log(fullname.hobbies1)

   }
 
  

   const submitform=(e)=>{
     e.preventDefault()
    fullname.fname && fullname.lname && fullname.email && fullname.email ? alert('submitted') : alert('Please fill.. All fields are mendatory')
    console.log(fullname.hobbies1.names)
    
    
   }
   
  return (
    <div className="App">
      

<div className="form-data">
     
     <form onSubmit> 
    
       <input 
       type="text"
       placeholder="Enter first name"
       onChange={myinput}
       name="fname"
       required


     
       />
        <input 
       type="text"
       placeholder="Enter last name"
       onChange={myinput}
       name="lastname"
       required
  

       />
       <input 
       type="text"
       placeholder="Enter mail"
       onChange={myinput}
       name="email"
       required
    

     
       />
      
      
      {fullname.hobbies1.map((e) => <input 
       type="text"
       placeholder="Hobbies"
       onChange={myinput}
       name="Hobbies"

      //  value={fullname.email}
       />)}
       <button onClick={addnewhobby}   className="btn1"><b>Add Hobbies+</b></button>

       <button className="btn2" onClick={submitform} > <b>Submit</b></button>

     </form>
     {/* {items.map((totalitems)=>{
       return <h1>{totalitems}</h1>

     })
     
     
     } */}
 </div>
    </div>
  );
}

export default App;
