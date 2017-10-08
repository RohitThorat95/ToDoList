var add = document.getElementById('add');
var removeAll = document.getElementById('rmv');
var list = document.getElementById('list');


//remove all button

removeAll.onclick = function(){
    list.innerHTML = '';
}

//add a new task

add.onclick = function(){
    
    addlis(list);
    document.getElementById('userinput').value = '';
    document.getElementById('userinput').focus();
    
    
}


function addlis(targetUl){
    
    var inputText = document.getElementById('userinput').value;
    var li = document.createElement('li');
    var textNode = document.createTextNode(inputText + ' ');
    var removeButton = document.createElement('button');


if(inputText !== '')
    {
        removeButton.className = 'btn btn-xs btn-danger';
        removeButton.innerHTML = '&times;';
        removeButton.setAttribute('onclick','removeMe(this)');
    

        li.appendChild(textNode);
        li.appendChild(removeButton);
        targetUl.appendChild(li);
        
        
        
        
    }


else{
    alert("Enter a task!");
}
}

function removeMe(item){
    
    var p = item.parentElement;
    p.parentElement.removeChild(p);
    

}