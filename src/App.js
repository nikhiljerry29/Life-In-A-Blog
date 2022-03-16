import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetail from "./components/BlogDetail";
import CreateBlog from "./components/CreateBlog";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Page404 from "./components/Page404";

function App() {
   return (
      <Router>
         <div className='font-nunito container mx-auto'>
            <Navbar />
            <div className='p-5 my-3 mx-2'>
               <Switch>
                  <Route exact path='/'>
                     <Home />
                  </Route>

                  <Route path='/create'>
                     <CreateBlog />
                  </Route>

                  <Route path='/blogs/:id'>
                     <BlogDetail />
                  </Route>

                  <Route path='*'>
                     <Page404 />
                  </Route>
               </Switch>
            </div>
         </div>
      </Router>
   );
}

export default App;
