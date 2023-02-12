function search_Places()
{
    let input=document.getElementById('Searchbar').value
    let x=document.getElementsByClassName('Places');
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}
