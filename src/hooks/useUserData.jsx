import { useEffect, useState } from 'react';

const useUserData = () => {
  const [userData, setUserData] = useState(null);
  const [reFatch, setReFatch] = useState(false);

  useEffect(() => {
    setReFatch(false)
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/users2");
      const data = await response.json();
      setUserData(data);
    };
    fetchData();
  }, [reFatch]);

  return {userData, setReFatch};
};

export default useUserData;
