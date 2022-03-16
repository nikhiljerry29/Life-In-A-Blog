import React from "react";
import { Link } from "react-router-dom";
import image404 from "../images/page_not_found.svg";

function Page404() {
   return (
      <div className='flex flex-col justify-center text-center'>
         <h1 className='text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
            Sorry!
         </h1>
         <p className='text-lg mt-3'>The page cannot be found.</p>
         <div className='my-5'>
            <Link
               to={"/"}
               className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
            >
               Back to Home
            </Link>
         </div>
         <img src={image404} alt='Page 404' className='md:w-1/2 md:mx-auto' />
      </div>
   );
}

export default Page404;
