import { useEffect, useState } from "react";

const useFetch = (url) => {
   const [data, setData] = useState(null);
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      fetch(url)
         .then((res) => {
            if (!res.ok)
               throw Error(
                  "Error : Could not Fetch the data for current resource"
               );
            return res.json();
         })
         .then((data) => {
            setData(data);
            setIsLoading(false);
            setError(null);
         })
         .catch((err) => {
            setIsLoading(false);
            setError(err.message);
            console.log(err.message);
         });
   }, [url]);

   return { data, isLoading, error };
};

export default useFetch;
