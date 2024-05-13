import { useState } from "react";

const useAjaxCall = () => {
  const [error, setError] = useState(null);

  const fetchData = async (url, setter, errorMessage) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        const data = await response.json();
        setter(data);
      } else if (response.status === 500) {
        setError(errorMessage);
      } else {
        setError("No Data Found");
      }
    } catch (error) {
      console.log("Error fetching data:", error);
      setError("Error fetching data");
    }
  };

  return { fetchData, error };
};

export default useAjaxCall;
