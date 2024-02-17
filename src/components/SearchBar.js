import './SearchBar.css'
import { useState } from "react";

function SearchBar({ onSubmit }){
   const [term,setTerm] = useState('');  //creating a new state

   const handleFormSubmit = (event) =>{
      event.preventDefault();
      onSubmit(term)  //Onsubmit prop takes the variable cars

   };

   const handleChange = (event) => {  //gets the changed value from input
      setTerm(event.target.value) //updates the state
   };
   return <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
         <label>Enter Search Term</label>
         <input value={term} onChange={handleChange}/>  
      </form> 
   
   </div> //creating a event handler
}
//onclick a function will get executed, this function has a function inside of it that takes one term here thats car.
//that then on its inside has one print statement that gets executed. we can even print that on the screen.

//now what will happen is that handle click function will also take a prop that would be given by when we click the button,
//whatever word is in the search bar will be that prop. Then handleSubmit will take that term and do a search with that
export default SearchBar