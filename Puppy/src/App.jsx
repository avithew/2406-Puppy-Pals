import "./App.css";
import { puppyList } from "./data.js";
import { useState } from "react";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  function onClick() {}
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);
  return (
    <>
      <div>
        {featPupId && (
          <div className="featured">
            <h2>{featuredPup.name}</h2>
            <p>Age: {featuredPup.age}</p>
            <p>Email: {featuredPup.email}</p>
          </div>
        )}
        <div className="puppyList">
          {puppies.map((puppy) => {
            return (
              <p
                onClick={() => {
                  setFeatPupId(puppy.id);
                }}
                key={puppy.id}
              >
                {puppy.name}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
