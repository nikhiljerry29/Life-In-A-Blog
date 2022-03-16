import React from "react";
import useFetch from "../hooks/useFetch";
import BlogList from "./BlogList";
import Loader from "../utils/Loader";
import Error from "../utils/Error";

function Home() {
   const title = "Welcome to the Life in a Blog.";

   const { data, isLoading, error } = useFetch("http://localhost:8000/blogs");

   return (
      <main>
         <div className='max-w-2xl mx-auto'>
            <h2 className='text-2xl font-bold'>{title}</h2>

            {error && <Error text={error} />}

            {isLoading && <Loader />}

            {data && <BlogList blogs={data} title='All Blogs' />}
         </div>
      </main>
   );
}

export default Home;
