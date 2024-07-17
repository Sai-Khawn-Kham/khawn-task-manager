import { addBtn,textInput,listGroup } from "./selectors.js";
import { addBtnHandler,textInputHandler,listGroupHandler } from "./handlers.js";

const listener = () => {
    addBtn.addEventListener("click", addBtnHandler);
    textInput.addEventListener("keyup", textInputHandler);
    listGroup.addEventListener("click", listGroupHandler);
};

export default listener;