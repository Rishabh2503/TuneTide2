import { useEffect, useState } from "react";
import Loader from "../Loader";
import axios from "axios";

const EnergeticPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Send a POST request to the API with the selected emotion
    const data = {
      "emotions" : "energetic"
    }
    axios
      .post('https://v2-ccc1.onrender.com/api/user/recommendation', { "emotions": 'energetic' })
      .then((response) => {
        // Handle the API response here
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        // Handle errors here
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>energetic Recommendations</h1>
      {loading ? (
        <Loader />
      ) : (
       <ul>
  {data.map((item) => (
    <li key={item.id}>{item.title}</li>
  ))}
</ul>
      )}
    </div>
  );
};

export default EnergeticPage;
