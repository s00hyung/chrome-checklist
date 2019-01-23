createCheckBox();

function createCheckBox() {
    var li = document.getElementsByTagName("li"); 
    for(var i = 0; i < li.length; i++){
        if (li[i].getElementsByTagName('ul').length < 1) {
            let checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.id = i;
            checkbox.addEventListener('click', strikes);  
            li[i].appendChild(document.createTextNode (" "));
            li[i].appendChild(checkbox);
        }
    }
}

function strikes() {
    var li = document.getElementsByTagName('li'); 
    for(var i = 0; i < li.length; i++) {
        if (li[i].getElementsByTagName('ul').length < 1) {
            var checkbox = document.getElementById(i); 
            var el = li[i];
            if (checkbox.checked) {
                el.style.textDecoration='line-through';
            } else {
                el.style.textDecoration="none";
            }
        }
    } 
}   