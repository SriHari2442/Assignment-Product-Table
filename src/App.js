
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;











// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import ProductList from './components/ProductList';
// import ProductDetail from './components/ProductDetail';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Switch>
//           <Route path="/" exact component={ProductList} />
//           <Route path="/products/:id" component={ProductDetail} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;



// 





// // import logo from './logo.svg';
// import ProductTable from './components/ProductTable';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       <ProductTable />
//     </div>
//   );
// }

// export default App;
