function format(command){
    document.execCommand(command,false,null);
}

function changeColor(){
    const color=document.getElementById("fontcolor").value;
    document.execCommand("foreColor",false,color);
}

function align(alignment){
    document.execCommand("justify" + alignment,false,null);
}

function undo(){
    document.execCommand("undo",false,null)
}

function redo(){
    document.execCommand("redo",false,null)
}

