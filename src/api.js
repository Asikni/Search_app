import axios from "axios";
const searchImages = async (term) => {
   const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers: {
            Authorization: 'Client-ID 372cZGksuCWEF6tdUL3jZh5psepBfLtYohFVAg1Fzks'
        },
        params: {
            query :term,
        }
    })
    return response.data.results;
}

export default searchImages