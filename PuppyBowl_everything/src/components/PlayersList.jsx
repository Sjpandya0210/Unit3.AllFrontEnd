//api
import { usePlayerslistQuery } from "../../redux/api";
import React, { useEffect} from "react";
import { Link } from "react-router-dom";

function playerslist() {
  const { data = {}, error, isLoading } = usePlayerslistQuery();

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
   *       {
            "id": 1,
            "name": "Franky",
            "status": "feild/bench",
            "breed": "alder",
            "imageUrl": "https://www.coldstreamfarm.net/wp-content/uploads/2023/07/alder_speckled_leaf_20160605_145314-600x338.jpg",
            "user_id": 1
        },
   */

  return (
    <div>
      <h2>Players List</h2>
      {data.data.players.map((player) => {
        return (
          <div key={player.id}>
            <h2>Name: {player.name}</h2>
            <img src={player.imageUrl} />
            <h2>Status {player.status}</h2>
            <Link to={`/playerdetails/${player.id}`}>See More Details</Link>
          </div>
        );
      })}
    </div>
  );
}


export default playerslist;