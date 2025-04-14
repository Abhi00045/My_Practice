import Header from "./components/header";
import MoviesData from "./pages/MoviesData";
import {motion } from "framer-motion";
import './index.css' 

const App = ()=>{

  return <>
  {/* <Header/> */}
  <li>
    {MoviesData.map((cur)=>{
      return <>
     <motion.div id="content-wala" 
     animate={{
      x:300,
      scale:0.9
     }}
     transition={{
      duration:2,
      delay:0.5
     }}
    //  onHoverStart={{
    //   scrollTo:100
    //  }}
     
     >
     <motion.div
      id="Movie-wala" 
      >
      <h1>{cur.Title}</h1>
      {/* <motion.img 
      src={cur.Poster} alt="" /> */}
      <p>{cur.Plot}</p>
      <pre>{cur.Year}</pre>
      <pre>{cur.Director}</pre>
      <pre>{cur.imdbRating}</pre>
      <p>{cur.Actors}</p>
      

      </motion.div>
      <div id="poster-wala">
      <motion.img 
      className="images"
      src={cur.Poster} alt="" />
      </div>
     </motion.div>
      </>
      // console.log(cur);
      
    })}
  </li>
  </>
} 
export default App;