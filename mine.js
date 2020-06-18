// header 

let header_content_space_blocks_search = document.querySelector(".header_content_space_blocks_search");
let header_content_space_blocks_inp = document.querySelector(".header_content_space_blocks_search").querySelector("input");
let header_content_space_blocks_i = document.querySelector(".header_content_space_blocks_search").querySelector("i")

header_content_space_blocks_search.addEventListener("click", (event) => {
    event.stopPropagation();
    header_content_space_blocks_inp.style.display = "block";
    header_content_space_blocks_inp.focus();
    header_content_space_blocks_i.style.display = "none";
});

document.addEventListener("click", () => {
    header_content_space_blocks_inp.style.display = "none";
    header_content_space_blocks_i.style.display = "block";
});






const todoColumn = document.querySelector(".todo_column");
const todoButtonColumns = document.querySelector(".todo_button_columns");
const addColumn = document.querySelector(".todo_button_columns");
let draggedNode = null;
let draggedCol = null;
let droppedCol = null;

let divToDoContent = document.querySelectorAll(".divToDoContent");
for (let i = 0; i < divToDoContent.length; i++) {
    divToDoContent[i].addEventListener("dragstart", dragStart);
    divToDoContent[i].addEventListener("dragend", dragEnd);
    divToDoContent[i].addEventListener("dragenter", dragEnter);
    divToDoContent[i].addEventListener("dragover", dragOver);
    divToDoContent[i].addEventListener("dragleave", dragLeave);
    divToDoContent[i].addEventListener("drop", Drop);
}

class Todo {  // sarcuma column *************************************************
    constructor(name) {
        this.name = name;
    }
    go(inner = "") {
        function creatcol(what, wher, classname) {
            let el = document.createElement(what);
            el.className = classname;
            el.innerHTML = inner;
            wher.append(el);
            return el;
        }
        addColumn.style.display = "none";

        let col = creatcol("div", todoColumn, "divToDoNew");
        let head = creatcol("div", col, "divToDoHead");
        let head_cont = creatcol("div", head, "divToDoHead_cont")
        let inp = creatcol("input", head_cont, "newDivToDoHead_inp");
        inp.setAttribute("placeholder", "Enter List Title")
        inp.style.display = "block";
        inp.focus();

        let bot = creatcol("div", col, "divToDoBot");
        let bot_but = creatcol("div", bot, "divToDoBot_but");
        bot_but.innerHTML = "Add List";
        let icon = creatcol("i", bot, "material-icons");
        icon.innerHTML = "close";

        icon.addEventListener("click", () => {
            col.remove();
            addColumn.style.display = "block";
        });
        bot_but.addEventListener("click", () => {
            if (inp.value) {
                let val = inp.value;
                col.remove();
                let oldCol = creatcol("div", todoColumn, "divToDo");
                oldCol.setAttribute("draggable", "true");
                let head = creatcol("div", oldCol, "divToDoHead");
                let head_cont = creatcol("div", head, "divToDoHead_cont")
                let newInp = creatcol("input", head_cont, "divToDoHead_inp");
                newInp.value = val;
                let newSpan = creatcol("span", head_cont, "divToDoHead_span");
                newSpan.innerHTML = val;
                let todoPanel = creatcol("div", head, "todoPanel");
                let elips = creatcol("i", todoPanel, "fa fa-ellipsis-h");

                let divToDoContent_all = creatcol("div", oldCol, "divToDoContent_all");
                let divToDoContent = creatcol("div", divToDoContent_all, "divToDoContent");
                divToDoContent.setAttribute("draggable", "true");
                let divToDoContent_span = creatcol("span", divToDoContent, "divToDoContent_span");
                divToDoContent_span.innerHTML = val;
                let list_pancil = creatcol("div", divToDoContent, "list_pancil");
                let list_pancil_i = creatcol("i", list_pancil, "fas fa-pencil-alt");
                let divToDoContent_text = creatcol("textarea", divToDoContent, "divToDoContent_text");
                divToDoContent_text.innerHTML = "something";

                pencle();
                inpSpan();
                addColumn.style.display = "block";


                divToDoContent.addEventListener("dragstart", dragStart);
                divToDoContent.addEventListener("dragend", dragEnd);
                divToDoContent.addEventListener("dragenter", dragEnter);
                divToDoContent.addEventListener("dragover", dragOver);
                divToDoContent.addEventListener("dragleave", dragLeave);
                divToDoContent.addEventListener("drop", Drop);

                let divToDoCard = creatcol("div", oldCol, "divToDoCard");
                let divToDoCard_add = creatcol("div", divToDoCard, "divToDoCard_add");
                let divToDoCard_span = creatcol("span", divToDoCard_add, "divToDoCard_span");
                divToDoCard_span.innerHTML = "+ Add anothet card";


                oldCol.addEventListener("dragover", (event) => {
                    event.preventDefault();
                })
                oldCol.addEventListener("drop", (event) => {
                    if (draggedNode) {
                        return oldCol.querySelector(".divToDoContent_all").append(draggedNode)
                    }
                })
                addda();
            }
            else {
                console.log("?")
            }
        });
    }
}
todoButtonColumns.addEventListener("click", () => {
    add.go();
})
const add = new Todo();













function inpSpan() {  //  titlnern karoxanum enq poxel **********************************************
    let divToDoHead_conts = document.querySelectorAll(".divToDoHead_cont");
    let divToDoHead_inps = document.querySelectorAll(".divToDoHead_inp");
    let divToDoHead_spans = document.querySelectorAll(".divToDoHead_span");
    for (let i = 0; i < divToDoHead_conts.length; i++) {
        divToDoHead_conts[i].addEventListener("click", (e) => {
            divToDoHead_inps[i].style.display = "block";
            divToDoHead_inps[i].focus();
            divToDoHead_inps[i].select();
            divToDoHead_spans[i].style.display = "none";
            e.stopPropagation();
            document.addEventListener("click", () => {
                divToDoHead_inps[i].style.display = "none";
                divToDoHead_spans[i].style.display = "block";
                divToDoHead_spans[i].innerHTML = divToDoHead_inps[i].value;
            })
        })
    }
}
inpSpan();











function addda() { // inchvor ban sarqelu functia ***********************************************************
    let divToDoCard_add = document.querySelectorAll(".divToDoCard_add");
    let divToDoCard = document.querySelectorAll(".divToDoCard");
    let divToDo = document.querySelectorAll(".divToDo");


    for (let i = 0; i < divToDo.length; i++) {
        divToDo[i].addEventListener("dragstart", dragstart);
        divToDo[i].addEventListener("dragend", dragend);
        divToDo[i].addEventListener("dragenter", dragenter);
        divToDo[i].addEventListener("dragover", dragover);
        divToDo[i].addEventListener("dragleave", dragleave);
        divToDo[i].addEventListener("drop", drop);
    }


    for (let i = 0; i < divToDo.length; i++) {
        divToDo[i].addEventListener("dragover", (event) => {
            event.preventDefault();
        })
        divToDo[i].addEventListener("drop", (event) => {
            if (draggedNode) {
                return divToDo[i].querySelector(".divToDoContent_all").append(draggedNode)
            }
        })
    }


    let divToDoContent_all = document.querySelectorAll(".divToDoContent_all")
    function creatCardt(what, wher, classname) {
        let el = document.createElement(what);
        el.className = classname;
        wher.append(el);
        return el;
    }
    for (let i = 0; i < divToDoCard_add.length; i++) {
        divToDoCard_add[i].addEventListener("click", () => {
            let card_divs = document.querySelectorAll(".columnCard");
            for (let j = 0; j < divToDoCard_add.length; j++) {
                if (i == j) {
                    divToDoCard[j].style.display = "none";
                }
                else {
                    divToDoCard[j].style.display = "block";
                }
            }
            for (let i = 0; i < card_divs.length; i++) {
                if (card_divs[i]) {
                    for (let j = 0; j < card_divs.length; j++) {
                        card_divs[j].remove();
                    }
                }
            }
            let cart = creatCardt("div", divToDo[i], "columnCard");
            let cart_inp = creatCardt("input", cart, "columnCardInp");
            cart_inp.focus();
            cart_inp.setAttribute("placeholder", "Enter a title for this card.");

            let cart_bot = creatCardt("div", cart, "columnCard_bot");
            let cart_but = creatCardt("button", cart_bot, "columnCard_but");
            cart_but.innerHTML = "Add Card";

            let icon = creatCardt("i", cart_bot, "material-icons");
            icon.innerHTML = "close";
            cart_but.addEventListener("click", () => {
                let divToDoContent = creatCardt("div", divToDoContent_all[i], "divToDoContent");
                divToDoContent.setAttribute("draggable", "true");
                let divToDoContent_span = creatCardt("span", divToDoContent, "divToDoContent_span");
                divToDoContent_span.innerHTML = cart_inp.value;
                let list_pancil = creatCardt("div", divToDoContent, "list_pancil");
                let list_pancil_i = creatCardt("i", list_pancil, "fas fa-pencil-alt");
                let divToDoContent_text = creatCardt("textarea", divToDoContent, "divToDoContent_text");
                divToDoContent_text.innerHTML = cart_inp.value;
                cart.style.display = "none";
                divToDoCard[i].style.display = "block";
                pencle();

                divToDoContent.addEventListener("dragstart", dragStart);
                divToDoContent.addEventListener("dragend", dragEnd);
                divToDoContent.addEventListener("dragenter", dragEnter);
                divToDoContent.addEventListener("dragover", dragOver);
                divToDoContent.addEventListener("dragleave", dragLeave);
                divToDoContent.addEventListener("drop", Drop);
            });
            icon.addEventListener("click", () => {
                cart.remove();
                divToDoCard[i].style.display = "block";
            })
        });
    }
}
addda();












function pencle() { // matiti functian *******************************************************
    let divToDoContent = document.querySelectorAll(".divToDoContent");
    let divToDoContent_text = document.querySelectorAll(".divToDoContent_text");
    let divToDoContent_span = document.querySelectorAll(".divToDoContent_span");
    let listPancil = document.querySelectorAll(".list_pancil");
    for (let i = 0; i < divToDoContent.length; i++) {
        listPancil[i].addEventListener("click", (e) => {
            e.stopPropagation();
            divToDoContent_text[i].style.display = "block";
            divToDoContent_text[i].focus();
            divToDoContent_text[i].select();
            divToDoContent_span[i].style.display = "none";
        })
        document.addEventListener("click", () => {
            divToDoContent_span[i].style.display = "block";
            divToDoContent_span[i].innerHTML = divToDoContent_text[i].value;
            divToDoContent_text[i].style.display = "none";
        })
    }
}
pencle();









// drag && drop node functian *******************************************************
function dragStart(event) {
    event.stopPropagation();
    draggedNode = this;
    this.classList.add("dragged");
}
function dragEnd(event) {
    event.stopPropagation();
    draggedNode = null;
    this.classList.remove("dragged");

    document.querySelectorAll(".divToDoContent").forEach(x => x.classList.remove("under"));
}
function dragEnter(event) {
    event.stopPropagation();
    this.classList.add("under")
    if (this === draggedNode) {
        return;
    }
}
function dragOver(event) {
    event.stopPropagation();
    event.preventDefault();
    if (this === draggedNode) {
        return;
    }
}
function dragLeave(event) {
    event.stopPropagation();
    this.classList.remove("under")
    if (this === draggedNode) {
        return;
    }
}
function Drop(event) {
    if (draggedNode) {
        event.stopPropagation();
    }
    else if(draggedCol){
        return;
    }
    else if (this === draggedNode) {
        return;
    }
    if (this.parentElement === draggedNode.parentElement) {
        const nods = Array.from(this.parentElement.querySelectorAll(".divToDoContent"));
        const indexA = nods.indexOf(this);
        const indexB = nods.indexOf(draggedNode);
        if (indexA < indexB) {
            this.parentElement.insertBefore(draggedNode, this)
        }
        else {
            this.parentElement.insertBefore(draggedNode, this.nextElementSibling)

        }
    }
    else {
        this.parentElement.insertBefore(draggedNode, this)
    }
}


// drag && drop col functian *******************************************************


function dragstart(event) {
    event.stopPropagation();
    draggedCol = this;
    draggedCol.classList.add("dragged");
    document.querySelectorAll(".divToDoContent").forEach(noteElement => noteElement.removeAttribute("draggable"));
}
function dragend(event) {
    event.stopPropagation()
    draggedCol.classList.remove("dragged");
    draggedCol = null;
    droppedCol = null;
    document.querySelectorAll(".divToDoContent").forEach(noteElement => noteElement.setAttribute("draggable", true));
}
function dragenter(event) {
    event.stopPropagation()
    if (!draggedCol || draggedCol == this) {
        return;
    }
    this.classList.add("under");
}
function dragover(event) {
    event.stopPropagation()
    event.preventDefault()
    if (draggedCol === this) {
        if (droppedCol) {
            droppedCol.classList.remove("under")
        }
        droppedCol = null;
    }
    if (!draggedCol || draggedCol == this) {
        return;
    }
    droppedCol = this;
    document.querySelectorAll(".divToDo").forEach(columnElement => columnElement.classList.remove("under"));
    this.classList.add("under")
}
function dragleave(event) {
    event.stopPropagation();
    if (!draggedCol || draggedCol == this) {
        return;
    }
    this.classList.remove("under");

}
function drop(event) {
    if (draggedNode) {
        event.stopPropagation();
        return this.querySelector(".divToDoContent_all").append(draggedNode);
    }
    else if (draggedCol) {
        const children = Array.from(document.querySelector(".todo_column").children);
        let indexA = children.indexOf(this);
        let indexB = children.indexOf(draggedCol);
        if (indexA < indexB) {
            document.querySelector(".todo_column").insertBefore(draggedCol, this);
        }
        else {
            document.querySelector(".todo_column").insertBefore(draggedCol, this.nextElementSibling);
        }
        document.querySelectorAll(".divToDo").forEach(columnElement => columnElement.classList.remove("under"));
    }
}