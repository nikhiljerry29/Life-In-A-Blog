import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function CreateBlog() {
   const [title, setTitle] = useState("");
   const [body, setBody] = useState("");
   const [author, setAuthor] = useState("");
   const [image, setImage] = useState("");
   const [isSubmitting, setIsSubmitting] = useState(false);
   const history = useHistory();

   const handleSubmit = (e) => {
      e.preventDefault();
      const blog = {
         title,
         body,
         author,
         image,
      };

      setIsSubmitting(true);

      fetch("/blogs", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(blog),
      }).then(() => {
         setIsSubmitting(false);
         console.log("New Blog Added");
         history.push("/");
      });
   };

   return (
      <div>
         <h3 className='text-lg capitalize font-bold text-center'>
            Add New Blog
         </h3>
         <form
            className='flex flex-col gap-3 max-w-lg mx-auto'
            onSubmit={handleSubmit}
         >
            <label className='text-md text-gray-900'>Blog Title:</label>
            <input
               type='text'
               className='p-2 w-full text-sm text-gray-900 bg-white rounded border border-gray-300 focus:ring-blue-500 focus:border-violet-700 '
               required
               value={title}
               onChange={(e) => {
                  setTitle(e.target.value);
               }}
            />

            <label className=' text-md text-gray-900'>Blog Body:</label>
            <textarea
               rows='10'
               class='p-2.5 w-full text-sm text-gray-900 bg-white rounded border border-gray-300 focus:ring-blue-500 focus:border-violet-700'
               placeholder='Your blog content... '
               required
               value={body}
               onChange={(e) => {
                  setBody(e.target.value);
               }}
            ></textarea>

            <label className='text-md text-gray-900'>Blog Author:</label>
            <input
               type='text'
               required
               className='bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-violet-700 block w-full p-2.5'
               value={author}
               onChange={(e) => {
                  setAuthor(e.target.value);
               }}
            />

            <label className='text-md text-gray-900'>Blog Image URL:</label>
            <input
               type='text'
               className='p-2 w-full text-sm text-gray-900 bg-white rounded border border-gray-300 focus:ring-blue-500 focus:border-violet-700'
               required
               value={image}
               onChange={(e) => {
                  setImage(e.target.value);
               }}
            />

            <div className='mt-5'>
               {!isSubmitting && (
                  <button
                     type='submit'
                     className='p-2 bg-violet-500 text-white hover:bg-violet-700 rounded shadow-lg'
                  >
                     Add Blog
                  </button>
               )}
               {isSubmitting && (
                  <button
                     type='submit'
                     className='p-2 bg-pink-100 text-pink-700 rounded shadow-lg'
                     disabled
                  >
                     Adding Current Blog....
                  </button>
               )}
            </div>
         </form>
      </div>
   );
}

export default CreateBlog;
