
import { useState } from 'react'
import './Bus.css'
const Bus=()=>{

    const[nameEnter,setName]=useState("")
      const[emailEnter,setEmail]=useState("")
      const[phoneEnter,setPhone]=useState("")
      const[busEnter,setBus]=useState("All")
    
      const[litag,setLi]=useState([])

      //Edit
        const[edit,setEdit]=useState(null)
        //delete
        const [del,setDelete]=useState()
    
      const nameHandler=(event)=>{
        setName(event.target.value)
      }
      const emailHandler=(event)=>{
        setEmail(event.target.value)
      }
      const phoneHandler=(event)=>{
        setPhone(event.target.value)
      }
      const busHandler=(event)=>{
        setBus(event.target.value)
      }
    
      const liHandler=(event)=>{
        setLi(event.target.value)
        console.log("hello")
      }
    
      const formSubmitHandler = (event) => {
  event.preventDefault();

  const data = {
    name: nameEnter,
    email: emailEnter,
    phone: phoneEnter,
    bus: busEnter,
  };

  // Always just add new (updated or fresh) entry
  setLi([...litag, data]);
  setEdit(null);

  // Clear fields
  setName('');
  setEmail('');
  setPhone('');
  setBus('All');
};

      //edit
      const editHandler = (idx) => {
  const selectedItem = litag[idx];

  // Fill form
  setName(selectedItem.name);
  setEmail(selectedItem.email);
  setPhone(selectedItem.phone);
  setBus(selectedItem.bus);

  // Remove item from list
  const updatedList = litag.filter((item, i) => i !== idx);
  setLi(updatedList);

  // Enable edit mode
  setEdit(true);
};


      const deleteHandler = (idx) => {
        const newList = litag.filter((item, i) => i !== idx);
        setLi(newList);
        };


    return (
        <div>
        <div className="heading">
          <h1>Bus_Booking System</h1>
        </div>
        <div>Filter   
          <select name="" id="" >
            <option value="All">All</option>
            <option value="Bus1">Bus1</option>
            <option value="Bus2">Bus2</option>
            <option value="Bus3">Bus3</option>
          </select>
        </div>
        <br />

        <form className="form" onSubmit={formSubmitHandler}>
        <div className="input">
        Name:<input type="text" id="name" value={nameEnter} placeholder="enter your name" 
        onChange={nameHandler}/>
        <br /><br />
        Email:<input type="email" id="email" value={emailEnter} placeholder="enter your email"  
        onChange={emailHandler}/>
        <br /><br />
        Phone:<input type="number" id="phone" value={phoneEnter} placeholder="enter your Phone number"  
        onChange={phoneHandler}/>
           <br /><br />
        </div>  
        <div className="bus">Bus Number:
           <select onChange={busHandler} value={busEnter}>
            <option value="All">All</option>
            <option value="Bus1">Bus1</option>
            <option value="Bus2">Bus2</option>
            <option value="Bus3">Bus3</option>
          </select>
        </div>
        <br />
        <div className="button">
          <button type="submit">Book</button>
          </div> 
       </form>

          <div className="list">
            <ul className="ul" onChange={liHandler}>
              {litag.map((item,idx)=>{
            
                return (
                  <li key={idx}>
                    {item.name}--{item.email}--{item.phone}--{item.bus} 
                    <button onClick={()=>editHandler(idx)}>Edit</button>
                    <button onClick={()=>deleteHandler(idx)}>Delete</button>
                    </li>
                )
              })}

            </ul>
          </div>
      </div>

    )
}
export default Bus