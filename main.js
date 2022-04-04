let searchInput = document.querySelector('.search-input');
searchInput.addEventListener("keydown", function(event){
 if(event.code === "Enter") {
        search();
    }
});
function search() {
    let url= 'https://www.google.com/search?q='+searchInput.value;
    window.open(url,'_self');
    }
