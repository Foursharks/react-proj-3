import "./App.css";
//import this because you're going to route to components from this page 
import {Route, Routes} from "react-router-dom";
//import these things in order to display them 
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./components/homeComponents/HomeScreen";
import NewRecipeScreen from "./components/newRecipeComponents/NewRecipeScreen"
import DetailScreen from "./components/detailComponents/DetailScreen";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element={<HomeScreen/>} />
      <Route path="/newRecipe" element={<NewRecipeScreen/>} />
      <Route path="/recipe/:id" element={<DetailScreen/>} />
      </Routes> 
      <Footer />
    </div>
  );
}

export default App;
