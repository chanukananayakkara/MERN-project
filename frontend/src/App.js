import {BrowserRouter, Routes, Route} from 'react-router-dom'
//BrowserRouter wraps the everywhere we use the router
//Routes component wraps all the individual wraps
//Route component uses to create a single route

//pages and components
import Home from './pages/Home';

function App() {
  return (
    <div className="App">

      
      <BrowserRouter>{/*Usage of the BrowserRouter is to surrounds everything that needs the browsing system*/}
        
        <div className="pages">{/*all of our different pages are going inside this div*/}

          
          <Routes>{/*we are going to output some routes */}
            
            <Route
              path="/" 
              element={<Home />} 
            
            
            /> {/*self-closing individual route with two props */}
            {/*path is used to mention the path/URI to a page */}
            {/*In the element prop we give the element (ex- page) to render when we call the above path */}
            {/*now the Home component rendered for the path "/" */}
          </Routes>
        </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
