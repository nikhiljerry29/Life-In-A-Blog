import React from "react";
import BlogList from "./BlogList";
import useFetch from "../hooks/useFetch";

function Home() {
   const title = "Welcome to the Blog";

   const { data, isLoading, error } = useFetch("http://localhost:8000/blogs");

   return (
      <main className='grid md:grid-cols-3 gap-5'>
         <div className='col-span-2'>
            <h2 className='text-2xl font-bold'>{title}</h2>

            {error && (
               <div className='p-5 my-2 bg-red-100 text-red-'>{error}</div>
            )}

            {isLoading && (
               <div className='flex gap-3 text-lg p-5'>
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     fill='currentColor'
                     className='h-6 w-6 animate-spin '
                     viewBox='0 0 16 16'
                  >
                     <path
                        fillRule='evenodd'
                        d='M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z'
                     />
                     <path d='M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z' />
                  </svg>
                  Loading...
               </div>
            )}

            {data && <BlogList blogs={data} title='All Blogs' />}
         </div>

         <div className='col-span-1'></div>
      </main>
   );
}

export default Home;
