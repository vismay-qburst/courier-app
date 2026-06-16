import { useState, useEffect } from "react";

const Sample = () => {
  const [data, setData] = useState<{ message: string } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/api/hello");
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>{data?.message}</h1>
    </div>
  );
};

export default Sample;
