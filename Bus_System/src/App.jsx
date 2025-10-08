

function App() {

  return (
    <>
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
        <div className="input">
        Name:<input type="text" id="name"  placeholder="enter your name"/>
        <br /><br />
        Email:<input type="email" id="email"  placeholder="enter your email"/>
        <br /><br />
        Phone:<input type="number" id="phone" placeholder="enter your Phone number"/>
           <br /><br />
        </div>  
        <div className="bus">Bus Number:
           <select name="" id="" >
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

          <div className="list">
            <ul className="ul">dfd

            </ul>
          </div>
      </div>
    </>
  )
}

export default App
