import { useState } from "react";
import { useAddPlayerMutation } from "../../redux/api";
function AddPlayer (){

    const [form, setForm] = useState({
        name:"", 
        breed:"", 
        status:"", 
        imageUrl: ""
    });
    const [error, setError] = useState(null);
    const [addPlayer] = useAddPlayerMutation();

    const handleSubmit = async (event) => {
        event.preventDefault();
            try {
                const { data, error } = await addPlayer({...form });
                console.log("This is data", data)

            } catch (error) {
                if (error) {
                    console.error("API Error:", error);
                    setError("Something went wrong! Please try again.");
                  } else {
                    setForm({
                      name: "",
                      breed: "",
                      status: "",
                      imageUrl: "",
                    });
                  }
            }
        
        }
        
      const handleChange = ({ target }) => {
        setError(null);
        setForm({ ...form, [target.name]: target.value });
      };
    
    
    /*
    We need state for 
    name
    breed
    status
    imageUrl
    */
    return (
    <section>
        <h2>Add a player</h2>
        {error && <p>{error}</p>}
      <form className="form">
        <label htmlFor="name">Name: </label>
        <input value={form.name} name="name" onChange={handleChange} />
        <label htmlFor="breed">Breed:</label>
        <input value={form.breed} name="breed" onChange={handleChange} />
        <label htmlFor="status">Status:</label>
        <select value={form.status} name="status" onChange={handleChange}>
          <option value="anthing">Please select a value</option>
          <option value="field">Field</option>
          <option value="bench">Bench</option>
        </select>
        <label htmlFor="imageUrl" className="img">Image url:</label>
        <input value={form.imageUrl} name="imageUrl" onChange={handleChange} />
        <button className="btn" onClick={handleSubmit}>Submit</button>
      </form>
    </section>
    );
}


export default AddPlayer;