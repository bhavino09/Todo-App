import { useEffect, useState } from "react";

export default function Api() {
  const [data, setData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts";

  //API Calling
  const fetchdata = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      {data ? (
        data?.map((data) => (
          <pre key={data.id}>
            title: {data.title} <br />
            body: {data.body}
          </pre>
        ))
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  );
}

//Optional Chanining
