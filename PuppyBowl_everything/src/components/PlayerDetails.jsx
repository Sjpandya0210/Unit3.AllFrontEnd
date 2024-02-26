import { useParams } from "react-router-dom";
import { usePlayerDetailsQuery } from "../../redux/api";
function PlayerDetails (){
    let {id} = useParams ();
    const {data, error, isLoading} = usePlayerDetailsQuery({id});

    console.log("This is data",data)

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong!</p>;
  }
 console.log("This is final data",  data)
   /**
   *   Players object example within the data.players array
   *  {
	"success": true,
	"error": null,
	"data": {
		"player": {
			"id": 2278,
			"name": "Alex Peters",
			"breed": "Pitbull",
			"status": "bench",
			"imageUrl": "N/A",
			"createdAt": "2024-01-24T00:46:31.691Z",
			"updatedAt": "2024-01-24T00:46:31.691Z",
			"teamId": null,
			"cohortId": 11,
			"team": null
		}
	}
}
   */
    return (
        <section>
            <h2>Player details </h2>
            <h3>Name: {data.data.player.name} </h3>
            <img className= "img2" src = {data.data.player.imageUrl} />
            <p>Breed: {data.data.player.breed}</p>
            <p>Status: {data.data.player.status}</p>
        </section>
    );
}

export default PlayerDetails;