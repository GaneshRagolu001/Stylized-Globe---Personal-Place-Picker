import { useEffect, useState } from "react";
export function useFetch(fetchfn, initialValue) {
  const [error, setError] = useState();
  const [isFeaching, setisFeching] = useState();
  const [fetchedData, setFetchedData] = useState(initialValue);
  useEffect(() => {
    async function fetchData() {
      setisFeching(true);
      try {
        const data = await fetchfn();
        setFetchedData(data);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch data." });
      }
      setisFeching(false);
    }
    fetchData();
  }, [fetchfn]);
  return {
    fetchedData,
    isFeaching,
    error,
    setFetchedData,
  };
}
