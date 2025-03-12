import {BrowserRouter, Routes, Route} from 'react-router-dom'
//BrowserRouter wraps the everywhere we use the router
//Routes component wraps all the individual wraps
//Route component uses to create a single route

function App() {
  return (
    <div className="App">

      
      <BrowserRouter>
        {/*Usage of the BrowserRouter is to surrounds everything that needs the browsing system*/}
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
