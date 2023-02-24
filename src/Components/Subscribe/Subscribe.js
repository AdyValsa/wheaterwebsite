import React, {useState} from "react";

import Button from "../Button";
import Input from "./Input";
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
       setUser({
        name: '',
        email:'',
        city: ''
    })
    }

    const inputs = [
        {id:1,
        type:'text',
        name:'name',
        placeholder: 'enter your name',
        required: true,
         },
        {id:2,
        type:'email',
        name:'email',
        placeholder: 'enter your email',
        required: true,
        },
        {id:3,
        type:'text',
        name:'city',
        placeholder: 'enter your city of interest',
        required: true,
        }
    ]

    const inputsForm = inputs.map(input =>{
        return (
        <Input {...input} onChange={handleChange} value={user[input.name]}/>
        )
    })
return(
    <section id='subscribe' className={subscribeStyle.subscribe}>
        <h2 className={subscribeStyle.title}>Subscribe to receive our weather newsletter:</h2>
    <form onSubmit={submit}>
      {inputsForm}
        <Button type="submit"> Subscribe</Button>
    </form>
    </section>
    
)
}

export default Subscribe