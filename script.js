const inputBox=document.getElementById("search");
const listcont =document.getElementById("list-cont");

function addtask(){
    if(inputBox.value==""){
        alert("Please enter a task");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listcont.appendChild(li);

        let span=document.createElement("span"); 
        span.innerHTML= "\u00d7";
        listcont.appendChild(span);
    }
    inputBox.value="";
    saveData();
}
listcont.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("check");
        saveData();

    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        // saveData();
    }

},false);

function saveData(){
    localStorage.setItem("data", listcont.innerHTML);
}
function showData(){
    listcont.innerHTML =localStorage.getItem("data");
}
showData();