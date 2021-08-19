names_of_guests_array=[];

function addname(){
    var guest_name=document.getElementById("name1").value;
    names_of_guests_array.push(guest_name);
    console.log(names_of_guests_array);
    document.getElementById("add_names").innerHTML=names_of_guests_array;
   


}
function show()
{
    document.getElementById("show_names").innerHTML=names_of_guests_array;
}

function sorting()
{
    names_of_guests_array.sort();
    console.log(names_of_guests_array);
    document.getElementById("show_sorted_names").innerHTML= names_of_guests_array;
}