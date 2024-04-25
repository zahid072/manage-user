import { useEffect, useState } from 'react';

const useUserData = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/users2");
      const data = await response.json();
      setUserData(data);
    };
    fetchData();
  }, []);

  return {userData};
};

export default useUserData;
