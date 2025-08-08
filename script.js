
const noteContainer = document.querySelector(".notes-container");
const CreateBtn = document.querySelector(".btn");
const notes = document.querySelector(".input-box");



function showNotes(){
    noteContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();

function updateStorage(){
    localStorage.setItem("notes" , noteContainer.innerHTML);
};

CreateBtn.addEventListener("click",function(){
  
    const inputBox = document.createElement("p");
    const img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable" , "true");
    img.src = "images/delete.png";
    img.alt = "icon-del";
    noteContainer.appendChild(inputBox).appendChild(img);
    inputBox.focus();
    
});

noteContainer.addEventListener("click",function(e){
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage()
    }else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage(
            
                );
            };
        });
    };
});

document.addEventListener("keydown", event =>{
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }


})



// const inputBox = document.getElementById("textarea");
// const button = document.getElementById("addBtn")
// const ul = document.getElementById("note")
// // add a new task when the add button checked
// button.addEventListener("click",function(){ 
//     if (inputBox.value === '') { // check if input is empty
//         alert("you must write something")
// }else{
//     const li = document.createElement("li") // create a new li element for the note
//     li.textContent = inputBox.value;  // set the task
//     li.classList.add("note-item") //  add a css class
//     ul.appendChild(li); // add to the task list
//     inputBox.value = ""; // clear the input field after adding the note
//    // create a delete button 
//     const deleteBtn = document.createElement("button");
//     li.appendChild(deleteBtn);
//     deleteBtn.classList.add("deleteBtn")
//     deleteBtn.textContent = "delete"
//     // add click event to delete the task when the button is clicked
//     deleteBtn.addEventListener("click",function(){
//         li.remove(); // remove the task
//     })

//      }
//      inputBox.focus();
// })

// // save the current task list to localstorage
// function saveData(){
//     localStorage.setItem("data",ul.innerHTML);
// }
// // load tasks from localstorage when the page loads 
// function showNotes(){
//     if(localStorage.getItem("data")){
//         ul,innerHTML = localStorage.getItem("data");
//     }
// }

// showNotes() // call the function to show tasks on page load