import React, { useState } from 'react'

function App() {

  const [username,setUsername] = useState("");
  const [gender,setGender] = useState("");
  const [city,setCity] = useState("");
  const [desc,setDesc] = useState("");
  const [conditionsAccepted,setConditionsAccepted] = useState("");


  const submitHandler = (event) =>{
    event.preventDefault();
    console.log(username,gender,city,desc,conditionsAccepted);
  }

  return (
    <div>

      <form onSubmit={submitHandler} action="">

        <h1>Two way Binding</h1>
        <input placeholder='username' onChange={(e) => setUsername(e.target.value)} type="text" value={username} name="" id="" />
        <br />
        <br />
        <input checked = {gender === 'male' ? true : false} onChange={(e) => setGender(e.target.value)} value={"male"} type="radio" name="" id="" /> male
        <input checked = {gender === 'female' ? true : false} onChange={(e) => setGender(e.target.value)} value={"female"} type="radio" name="" id="" /> female
        <br />
        <br />
        <select value={city} name="" id="" onChange={(e) => setCity(e.target.value)}>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
          <option value="kolkata">Kolkata</option>
          <option value="chennai">Chennai</option>
        </select>
        <br />
        <br />
        <textarea name="" value={desc} onChange={(e) => setDesc(e.target.value)} id="" placeholder='Enter text here'></textarea>
        <br />
        <br />
        <input type="checkbox" checked = {conditionsAccepted} onChange={(e) => setConditionsAccepted(e.target.checked)} name="" id="" />Accept
        <br />
        <br />
        <button>submit</button>

     </form>

    </div>
  )
}

export default App