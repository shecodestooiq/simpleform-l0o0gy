import { useState } from "react";  
import './App.css';
function Card() {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState(""); 
  const alart = () => {
    alert(
      `name: ${name} 
       email: ${email}  
       message:${message}`
    );
  }
  return (
    <form>
      <label>Name:</label><br/>
        <input 
        value={name}
        onChange={(e) => setName(e.target.value)}  
        required/><br/>
      <label>Email:</label><br/>
        <input type="email" 
        value={email}
        onChange={(e) => setemail(e.target.value)}
        required /><br/>
      <label >Massege:</label><br/>
        <textarea 
        value={message}
        onChange={(e) => setmessage(e.target.value)} required></textarea><br/>
      <button onClick={alart}>submit</button>
    </form>
  )
}
export default Card;