// dark mode
let darkModu=()=>{
    //alert("Dark modu");
    window.document.classList.toggle("dark_mode");
}

//input search
$(document).ready(function(){
    const searchApi=["Adana","Bursa","Çorum","Denizli","Edirne","Malatya"];
    $("#tags").autocomplete({
        source:searchApi
    })
});//end


//footer
let newDate=()=>{
    const date=new Date().getFullYear();
//JS de tarih yazma DOM
// document.getElementById("date_id").innerHTML=new Date().getFullYear();

// jquery de tarih yazma DOM
$("#date_id").html(date)
}
newDate()















//jquery de "$" işareti kullanılır
