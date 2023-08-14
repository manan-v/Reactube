import { useContext } from "react";
import VideoDispatchContext from "../context/VideoDispatch";

function useVideoDispatch(){
    return useContext(VideoDispatchContext)
    
}


export default useVideoDispatch;