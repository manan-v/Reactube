import { useContext, useState } from "react";
import "./playButton.css";
import ThemeContext from "../context/ThemeContext";

function PlayButton({message,children,onPlay,onPause}){
    const theme = useContext(ThemeContext)
    const [playing,setPlaying]=useState(false);
    function handleCLick(e){
        console.log(e);
        e.stopPropagation()
        if(playing){onPause();}
        else{
        onPlay();}
        setPlaying(!playing);
    }
    return(
        <button className={theme}onClick={handleCLick}>{children} : {playing? '⏸️'
            :'▶️'}</button>
    )
}


export default PlayButton;