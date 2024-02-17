import SearchBar from "./components/SearchBar"
import searchImages from './api';
import { useState } from "react";
import ImageList from "./components/ImageList";

function App(){
    const[images,setImages] = useState([])  //set to empty list

    const handleSubmit = async (term) => {
       const result = await searchImages(term)  //get the list of images

    setImages(result);  //update images with setImages
    };
    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
            <ImageList images={images} />  
        </div>  //pass the result to child component of imagelist
        //when image state changes/updates when we do a search then app component updates and so does 
        //imagelist component as it depends on the images
    )
}

export default App