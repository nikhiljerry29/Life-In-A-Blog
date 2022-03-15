import React from "react";

function BlogList({ blogs, title }) {
   if (blogs.length === 0 || blogs === null) {
      return (
         <div className='my-4 text-center'>
            <h1 className='text-md font-bold capitalize p-2 bg-yellow-100 text-orange-500'>
               Currently No Blogs are present. Sorry!
            </h1>
         </div>
      );
   }

   return (
      <div className='my-5'>
         <h3 className='text-lg uppercase font-bold'>{title}</h3>

         {blogs.map((blog) => (
            <div className='blog__display' key={blog.id}>
               <h2 className='text-lg font-bold capitalize'>{blog.title}</h2>
               <p className='text-sm text-gray-600'>Written by {blog.author}</p>
               <button className='delete__btn' onClick={() => {}}>
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     className='h-6 w-6'
                     fill='none'
                     viewBox='0 0 24 24'
                     stroke='currentColor'
                     strokeWidth={2}
                  >
                     <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                     />
                  </svg>
               </button>
            </div>
         ))}
      </div>
   );
}

export default BlogList;