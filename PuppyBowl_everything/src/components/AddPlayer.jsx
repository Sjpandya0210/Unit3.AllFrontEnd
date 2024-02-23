import { useState } from "react";

function AddPlayer (){
    const [form, setForm] = useSate({
        name:"", 
        breed:"", 
        status:"", 
        imageUrl: ""
    });
    /*
    We need state for 
    name
    breed
    status
    imageUrl
    */
    const eventHandler = (event) =>{
        event.preventDefault ();
        console.log("This is eventhandler", `FORM$(form.name)`)
    }
    const onChange = (e) => {
        setForm({...form,[e.target.name]: e.target.value})
    }

    return (
        <section>
            <h2>Add a player</h2>
            <form onSubmit={eventHandler}>
                <label >Name
                <input type = "text" name= "name"/>
                </label>
                <label >Breed
                <input type = "text" name= "breed"/>
                </label>
                {/* <label >Status
                <input type = "text" name= "status"/>
                </label>  add Option with in field and bench*/}
                {/* <label >ImageUrl
                <input type = "" name= "imageUrl"/>
                </label> check how to do it*/}
                <button>Submit</button>
            </form>
        </section>
    );
}

export default AddPlayer;