import { useContext } from "react";
import VideosContext from "../context/VideoDispatch";

function useVideos(){
    return useContext(VideosContext)
    
}


export default useVideos;