function AddPlayer (){
    const eventHandler = (event) =>{
        event.preventDefault ();

    }
    return (
        <section>
            <h2>Add a player</h2>
            <form>
                <label >Name
                <input type = "text"/>
                </label>
                <label >Breed
                <input type = "text"/>
                </label>
                {/* <label >Status
                <input type = "text"/>
                </label>  add Option with in field and bench*/}
                {/* <label >ImageUrl
                <input type = "" />
                </label> check how to do it*/}
                <button onSubmit={eventHandler}>Submit</button>
            </form>
        </section>
    );
}

export default AddPlayer;