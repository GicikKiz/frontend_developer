// console.log("loglama"); // yazılımcının görmesini istiyorsak console log kullanıcaz
// console.info("info");
// console.warn("warn"); // warn uyarı anlamında
// console.error("error"); // error ise yapmış olduğumuz hataları bize console üzerinden gösterir

// alert("pop-up bilgilendirme"); // alert ise bize bilgilendirme mesajı gösterir

// document.writeln("");  // ekranda yazı kullanmak istiyorsam document kullanıcaz

// window.document.writeln(""); 
// window temel yapı her şeyin en tepesindeki olan yapıdır.window kullansak da  kullanmasak da kodlarda bir şey değişmiyor

// console üzerinden javascript yazılabilir orada yazdıklarımız clear diyerek de silebiliriz. yada alert verebiliriz

// noktalı virgül bir komutun bittiğini ve başka bir komutun başlamasını belirtir(;)

// blokların başlangıç ve bitiş yerini gösteren şekle küme parantezi denir.({}) süslü parantez de denilebilir.

// javascript dilinde boşluk karakterlerinin bir önemi yoktur. istediğimiz kadar boşluk bırakabiliriz.

// variable de kısaltılması "var" olarak kullanılır.

// sözel veri, degişkenlere atanan karakter veya metinler değişkenin veri tipini string yapar.sözel veri atamaları çift tırnak "" içine atanır.
var ad="Derya";

// mantıksal veri, eğer bir değişkene true veya false değerini atarsanız bu değişken boolean tipine dönüşür.
var result=false;

// diziler birden fazla değer taşıyan değişkenlerdir.
var dersler=["fen", "din", "beden", "matematik"];

// çif tırnak içindeki değişkene tek tırnak kullanılabilir.
var mekan="derya'nın yeri";

// değişkene değer atanmadıysa değişken değeri undefined olarak görülür.
document.write(d);

// console.log(typeof result); yazıldığında ne yazarsak onun ne anlama geldiğini bize söyler. eğer aşağıdaki bilgileri yazarsak parantezin içine typeof yazarsak orada number kullandığımızı bize console gösterir.
// var result =44.23;
// console.log(result); 

var result =44.23;
console.log(result);

var result =4423;
console.log(typeof result+" => "+result);

var result=true;
console.log(typeof result+" => "+result);

var result="js öğreniyorum";
console.log(typeof result+" => "+result);



