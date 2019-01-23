removeCheckBox();
function removeCheckBox() {
    var li = document.getElementsByTagName("li"); 
    for(var i = 0; i < li.length; i++){
        if (li[i].getElementsByTagName('ul').length < 1) {
            var checkbox = document.getElementById(i); 
            li[i].removeChild(checkbox);
        }
    }
    location.reload();
}