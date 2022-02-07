import { useState, useEffect } from "react";
import axios from "axios";

export default function OpenApiPage() {
  const [GetDog, setGetDog] = useState();

  useEffect(() => {
    async function fetchdog() {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");

      setGetDog(result.data.message);
    }
    fetchdog();
  }, []);

  return (
    <div>
      <img src={GetDog} />
    </div>
  );
}
