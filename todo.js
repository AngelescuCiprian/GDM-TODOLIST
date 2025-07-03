console.log("salut")
console.log("ce faci?")

const input=document.getElementById("myInput");
const addBtn=document.querySelector(".addBtn");
const list=document.getElementById("myUL");

//creare element nou <li>
function createTaskElement(taskText){
    const li=document.createElement("li");
    li.textContent=taskText;

    //cream si butonul de stergere corespunzator task-ului
    const deleteBtn=document.createElement("span");
    deleteBtn.textContent="x";
    deleteBtn.classList.add("delete-btn");
    li.append(deleteBtn);
    
    return li;
}
//adaugam elementul in lista
function addTask(){
    const task=input.value;
    if(task === "")
     {   
        alert("Te rog scrie ceva!");
        return;
     }
     const newTask=createTaskElement(task);
     list.append(newTask);
     input.value="";
     saveData();
}
//la apasarea butonului se adauga task
addBtn.addEventListener("click",addTask);

//marcarea unui task ca facut
function marcareTask(event){
    if ( event.target.tagName === "LI")
    {
        event.target.classList.toggle("completed");
        saveData();
    }
}
list.addEventListener("click",marcareTask)

//afisare data
function displayDate(){
    document.getElementById("demo").innerHTML=Date();
}
document.getElementById("DateButton").addEventListener("click",displayDate);

//Stergere task cand se apasa pe x
function deleteTask(event){
    if ( event.target.classList.contains("delete-btn"))
    {
        const task = event.target.parentElement;
        task.remove();
        saveData();
    }
}
list.addEventListener("click",deleteTask);
//local storage pentru salvarea datelor
function saveData(){
    localStorage.setItem("data",myUL.innerHTML);
}

function showTask(){
    myUL.innerHTML=localStorage.getItem("data");
}
showTask();