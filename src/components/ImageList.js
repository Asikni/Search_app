import ImageShow from "./ImageShow"
import './SearchBar.css'

function ImageList({images}){  // so images here is a prop..peeche it was a state
    const renderedImages = images.map((image) =>{  //takes a list of images and maps each one of it
        return <ImageShow key={image.id} image={image} />;
    })
    
    return (
    
    <div className="image-list"> {renderedImages}</div>

    )
}

export default ImageList