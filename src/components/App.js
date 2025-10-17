import React, { useEffect, useState } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => setDogImage(data.message));
  }, []);

  if (!dogImage) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Random Dog Image</h1>
      <img src={dogImage} alt="A Random Dog" />
    </div>
  );
}

export default App;
