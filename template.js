// dark mode
let darkModu=()=>{
    //alert("Dark modu");
    document.body.classList.toggle("dark_mode");
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

// jquery cdn kaynak sayfaları
// 1-jQuery CDN 
// 2-cdnjs
// 3-W3Schools













//jquery de "$" işareti kullanılır
