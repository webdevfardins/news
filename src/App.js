import './App.css';
import LoadingBar from 'react-top-loading-bar'

import React, { useState } from 'react'
import NavBar from './Components/NavBar';
import Newss from './Newss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
const App=()=>  {
   const pageSize = 15;
    const [progress, setprogress] = useState(0)
 
  
    return (
      <div>
            <Router>

        <NavBar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      
      />

         <Switch>
         <Route exact path="/"><Newss setprogress={setprogress}  key="general" pageSize={pageSize} country="in" category="general"/></Route> 
          <Route exact path="/business"><Newss setprogress={setprogress}  key="business" pageSize={pageSize} country="in" category="business"/></Route> 
          <Route exact path="/entertainment"><Newss setprogress={setprogress}  key="entertainment" pageSize={pageSize} country="in" category="entertainment"/></Route> 
          <Route exact path="/general"><Newss setprogress={setprogress} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
          <Route exact path="/health"><Newss setprogress={setprogress} key="health" pageSize={pageSize} country="in" category="health"/></Route> 
          <Route exact path="/science"><Newss setprogress={setprogress} key="science" pageSize={pageSize} country="in" category="science"/></Route> 
          <Route exact path="/sports"><Newss setprogress={setprogress} key="sports" pageSize={pageSize} country="in" category="sports"/></Route> 
          <Route exact path="/technology"><Newss setprogress={setprogress}  key="technology" pageSize={pageSize} country="in" category="technology"/></Route> 

         </Switch>
        </Router>
      </div>
    )
  
}
export default App;
