import { Overlay,Tooltip } from "react-bootstrap";
import React,{useState,useRef} from "react";

const useClipboard = () => {

    const target = useRef(null)
    const [show,setshow] = useState(false)

    const copytext = () => {
        navigator.clipboard.writeText(target.current.innerText)
        setshow(!show)

        setTimeout(() => {
            setshow(false)
        },3000)
    
    }

    const Custom = () => {
        return(
            <Overlay target={target.current} show={show} placement="top">
        {(props) => (
          <Tooltip id="overlay-example" {...props} className="big">
        copied
          </Tooltip>
        )}
      </Overlay>
        )
    }

    
    

    return [target,copytext,Custom]

}

export default useClipboard