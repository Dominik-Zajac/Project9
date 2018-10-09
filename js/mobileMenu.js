var dropdownBtn = document.getElementById('dropdown-toggle');
var menuContent = document.getElementById('dropdown-content');
dropdownBtn.addEventListener('click', function(){
    menuContent.classList.toggle('unvisible-menu'); 
})