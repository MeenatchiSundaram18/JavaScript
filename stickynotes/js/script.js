const containerElement=document.getElementById("container");
const btnAdd=document.getElementsByClassName("btn-add")[0];

function getAppStorage(){
    return JSON.parse(localStorage.getItem('note-app')||"[]");
}

getAppStorage().forEach(element => {
   const textElement=createTextElement(element.id,element.content);
   containerElement.insertBefore(textElement,btnAdd);
});

function createTextElement(id,content){
const textElement=document.createElement('textarea');
textElement.classList.add('sticky');
textElement.value=content;
textElement.placeholder='ENTER YOUR NOTES HERE';

textElement.addEventListener("change",()=>{
    updateNote(id,textElement.value)
});
textElement.addEventListener("dblclick",()=>{
    const check=confirm("Are you sure to delete?")
    if(check){
        deleteNotes(id,textElement);
    }
});
return textElement;
}
//add or update new stickynote

function addSticky(){
    const notes=getAppStorage();
    const noteObject={
        id:Math.floor(Math.random()*100000),
        content:""
    }
   const textElement= createTextElement(noteObject.id,noteObject.content);
    containerElement.insertBefore(textElement,btnAdd);
     notes.push(noteObject);
     saveNotes(notes);   
}
btnAdd.addEventListener('click',()=>addSticky());
 
function saveNotes(notes){
    localStorage.setItem('note-app',JSON.stringify(notes));
}

//update sticky note
function updateNote(id,content){
    const notes=getAppStorage();
    const updateElement=notes.filter((notes)=>notes.id==id)[0];
    updateElement.content=content;
    saveNotes(notes);
};
//deleteNotes
function deleteNotes(id,textElement){
    const notes=getAppStorage().filter((notes)=>notes.id!=id);
    saveNotes(notes);
    containerElement.removeChild(textElement);
};