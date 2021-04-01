import { Helmet } from "react-helmet";
import Home from "../Pages/Home";


import '../assets/bootstrap/css/bootstrap.min.css';
import '../assets/css/fontawesome.css'
import '../assets/css/templatemo-host-cloud.css'
import '../assets/css/flex-slider.css'
import '../assets/css/owl.css'




function App() {
  return (
    <div className="App">
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700" rel="stylesheet"/>
         
      </Helmet>
      <Home/>

    </div>
  );
}

export default App;
