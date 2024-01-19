import { useContext } from "react";
import { FlashPipelineContext } from "../contexts/FlashPipelineContext";

const useFlash = (string) => {
    const {setFlash} = useContext(FlashPipelineContext);
    setFlash(string);
}

export default useFlash