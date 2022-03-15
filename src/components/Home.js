import React from "react";
import useFetch from "../hooks/useFetch";
import BlogList from "./BlogList";
import Loader from "../utils/Loader";
import Error from "../utils/Error";

function Home() {
   const title = "Welcome to the Life in a Blog.";

   const { data, isLoading, error } = useFetch("http://localhost:8000/blogs");

   return (
      <main className='grid md:grid-cols-3 gap-5'>
         <div className='col-span-2'>
            <h2 className='text-2xl font-bold'>{title}</h2>

            {error && <Error text={error} />}

            {isLoading && <Loader />}

            {data && <BlogList blogs={data} title='All Blogs' />}
         </div>

         <div className='col-span-1'></div>
      </main>
   );
}

export default Home;
