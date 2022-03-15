import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CreateBlog from "./components/CreateBlog";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
   return (
      <Router>
         <div className='font-nunito container mx-auto'>
            <Navbar />
            <div className='p-5 my-9 mx-2'>
               <Switch>
                  <Route exact path='/'>
                     <Home />
                  </Route>
                  <Route path='/create'>
                     <CreateBlog />
                  </Route>
               </Switch>
            </div>
         </div>
      </Router>
   );
}

export default App;
