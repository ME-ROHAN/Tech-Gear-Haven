import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Card from "./component/Card";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./component/Home";
import Contact from "./component/Contact";
function App() {
  // const router =createBrowserRouter(
  //   [ {
  //      path : "/",
  //     element : <><Navbar/>
  //     <Home></Home> </>
  //   },
  //   {
  //     path : "/Shop",
  //    element : <><Navbar/>
  //    <Card topic = "" imgsrc = description = "The Intel Core i9-14900K is a high-performance processor designed for gaming enthusiasts and professional content creators."/>
  //   <Card topic =  imgsrc = "src/pic/microsoft-surface-desktop-pc-500x500.webp" description = "The Microsoft Surface Studio 2+ is a premium all-in-one desktop computer designed for creative professionals and those seeking a sleek."/>
  //   <Card topic = "E-Blue Mazer K727 Mechanical Keyboard" imgsrc = "src/pic/Mechanical-Keyboard-Guide-Gear-GettyImages-1313504623.webp" description = "The E-Blue Mazer K727 is a mechanical gaming keyboard designed for gamers who demand precision, durability, and style."/>
  //   <Card topic = />
  //  </>
  //  }

  //   ] )
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home></Home>}>
        </Route>

        <Route
          path="/Shop"
          element={
            <>
              <div className="mai">
                <Card></Card>
              </div>
            </>
          }
        ></Route>

        <Route path="/Contact" element = {
          <Contact></Contact>
        }></Route>
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
