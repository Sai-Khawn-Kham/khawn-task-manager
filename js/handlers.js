import { addList, checkList, deleteList, editList } from "./list.js";
import { listGroup } from "./selectors.js";

export const addBtnHandler = (e) => {
    // console.log(textInput.value.trim() ? true : false);
    // console.log(textInput.value.trim());
    if (textInput.value.trim() != "") {
        addList(textInput.value);
    } else {
        alert("Input task");
    }
};
export const textInputHandler = (e) => {
    // console.log(textInput.value.trim() ? true : false);
    // console.log(textInput.value.trim());
    if (e.key == "Enter") {
        if (textInput.value.trim() != "") {
            addList(textInput.value);
        } else {
            alert("Input task");
        }
    }
};
export const listGroupHandler = (e) => {
    const list = e.target.closest(".list");
    if (e.target.classList.contains("checkInput")) {
        checkList(e.target.closest(".list").id);
    }
    if (e.target.classList.contains("editBtn")) {
        editList(e.target.closest(".list").id);
    }
    if (e.target.classList.contains("deleteBtn")) {
        deleteList(e.target.closest(".list").id);
    }
};