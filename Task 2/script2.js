let inputs = document.getElementById("inpt");
let text = document.querySelector(".text");

function Add(){
    if(inputs.value == ""){
        alert("Please Enter Task")
    }else{
        let nElement = document.createElement("ul");
        nElement.innerHTML=`${inputs.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(nElement);
        inputs.value="";
        nElement.querySelector("i").addEventListener("click" , remove);
        function remove(){
            nElement.remove()
        }
    }
}