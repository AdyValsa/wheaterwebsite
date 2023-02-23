import React, {useState} from "react";

import subscribeStyle from './Subscribe.module.css'

const Subscribe = ()=>{
    const [user, setUser] = useState({
        name: '',
        email:'',
        city: ''
    });

    const handleChange= (e)=>{
        setUser(prevUser => {
            return {...prevUser, [e.target.name]: e.target.value}
        })
    }

    const submit =(e)=>{
        e.preventDefault();
       let jsonName = (JSON.stringify(user.name));
       let jsonCity = (JSON.stringify(user.city));
       alert(`Great ${JSON.parse(jsonName)}, we will send you weather information about ${JSON.parse(jsonCity)} on your email!`)

    }

return(
    <section id='subscribe' className={subscribeStyle.subscribe}>
        <h2>Subscribe to receive our weather newsletter:</h2>
    <form onSubmit={submit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" placeholder="enter your name" required={true} onChange={handleChange}/>
        <button type="submit" className="btn">Submit</button>
    </form>
    </section>
    
)
}

export default Subscribe