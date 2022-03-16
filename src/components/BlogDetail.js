import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../hooks/useFetch";
import Loader from "../utils/Loader";
import Error from "../utils/Error";

function BlogDetail() {
   const { id } = useParams();
   const {
      data: blog,
      isLoading,
      error,
   } = useFetch(`http://localhost:8000/blogs/${id}`);

   return (
      <div className='max-w-5xl mx-auto'>
         {isLoading && <Loader />}

         {error && <Error text={error} />}

         {blog && (
            <article>
               <h1 className='text-3xl font-bold capitalize mb-5'>
                  {blog.title}
               </h1>
               {blog.image && (
                  <img
                     src={blog.image}
                     alt={blog.title}
                     className='w-full md:w-96 md:float-left md:mr-4 md:mb-4 rounded shadow-md'
                  />
               )}
               <p className='text-md text-justify mt-2 md:mt-auto'>{blog.body}</p>
               <h6 className='text-gray-700 text-right capitalize italic mt-4'>
                  <span>
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-6 inline mr-1'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                     >
                        <path
                           strokeLinecap='round'
                           strokeLinejoin='round'
                           d='M20 12H4'
                        />
                     </svg>
                  </span>
                  {blog.author}
               </h6>
            </article>
         )}
      </div>
   );
}

export default BlogDetail;
