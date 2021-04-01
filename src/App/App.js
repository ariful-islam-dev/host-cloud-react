import { Helmet } from "react-helmet";
import { Router } from "@reach/router"
import Home from "../Pages/Home";
import About from "../Pages/About";


import '../assets/bootstrap/css/bootstrap.min.css';
import '../assets/css/fontawesome.css'
import '../assets/css/templatemo-host-cloud.css'
import '../assets/css/flex-slider.css'
import '../assets/css/owl.css'
import AppRoute from "./Router";





function App() {
  return (
    <div className="App">
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700" rel="stylesheet" />

      </Helmet>
      <AppRoute/>

    </div>
  );
}

export default App;
