// console.log("loglama"); // yazılımcının görmesini istiyorsak console log kullanılır
// console.info("info");
// console.warn("warn"); //  uyarı anlamında
// console.error("error"); // error ise yapmış olduğumuz hataları bize console üzerinden gösterir

// alert("pop-up bilgilendirme"); // alert ise bize bilgilendirme mesajı gösterir

// document.writeln("");  // ekranda yazı kullanmak istiyorsam document kullanılır

// window.document.writeln(""); 
// window temel yapı her şeyin en tepesindeki olan yapıdır.window kullansak da  kullanmasak da kodlarda bir şey değişmiyor

// console üzerinden javascript yazılabilir orada yazdıklarımız clear diyerek de silebiliriz. yada alert verebiliriz

// noktalı virgül bir komutun bittiğini ve başka bir komutun başlamasını belirtir(;)

// blokların başlangıç ve bitiş yerini gösteren şekle küme parantezi denir.({}) süslü parantez de denilebilir.

// javascript dilinde boşluk karakterlerinin bir önemi yoktur. istediğimiz kadar boşluk bırakabiliriz.

// variable de kısaltılması "var" olarak kullanılır.

// sözel veri, değişkenlere atanan karakter veya metinler değişkenin veri tipini string yapar.sözel veri atamaları çift tırnak "" içine atanır.
/* örnek:
var ad="Derya";
console.log(typeof result+" => "+result);*/

// mantıksal veri, eğer bir değişkene true veya false değerini atarsanız bu değişken boolean tipine dönüşür.
// var result=false;

// diziler birden fazla değer taşıyan değişkenlerdir.
// var dersler=["fen", "din", "beden", "matematik"];

// çif tırnak içindeki değişkene tek tırnak kullanılabilir.
// var mekan="derya'nın yeri";


// değişkenin başına rakam konulmaz hata verir.
/* örnek: 
var 44deneme44="JS Data";
console.log(44deneme44); */

// $ işareti ile başlayabilir.yada alttan tire işareti olabilir '_' .
/* örnek:
var $deneme="JS Data";
console.log($deneme);
*/ 

// camel case kullanılabilir. ilk'i küçük harfle ikincisi büyük harfle başlar
/* örnek:
var denemeVerisi="JS Data";
console.log(denemeVerisi); */

// console.log(typeof result); yazıldığında ne yazarsak onun ne anlama geldiğini bize söyler. eğer aşağıdaki bilgileri yazarsak parantezin içine typeof yazarsak orada number kullandığımızı bize console gösterir.
// var result =44.23;
// console.log(result); 

var result =44.23;
console.log(typeof result+" => "+result);

var result =4423;
console.log(typeof result+" => "+result);

var result=true;
console.log(typeof result+" => "+result);

var result="js öğreniyorum";
console.log(typeof result+" => "+result);



// dört işlem 
var number1 =40;
var number2=5;
console.log(number1+number2);
console.log(number1-number2);
console.log(number1*number2);
console.log(number1/number2);
console.log(number1%number2);

// kullanıcıdan almak istersek;
var userData=prompt("Lütfen sayı giriniz");
// girilen sayıyı teyit etmek için; fakat sayıları toplanmıyorsa hata vardır. bunun sebebi "prompt datası'n"  dan gelen veri string dir yani yazı olarak bize çıktı olarak verir.
console.log(userData+45); 

// biz bunu sayıya çevirmek için; "Number" kullanırız.bunun özel adı "cast" demektir
var userData=Number(prompt("Lütfen sayı giriniz"));
console.log(userData+45);

// undefined yapısı; // değişkene değer atanmadıysa değişken değeri undefined olarak görülür.
var result4;
console.log(result4);

// nan yapısı; rakam girilmesi gereken bazı fonksiyonlarda rakam dışında bir değer girildiği zaman "NAN" değeri ile karşılaşırız
var result5="asd"/4;
console.log(result5);

// isNaN yapısı; kullanıcıdan veya bir ifade içerisinden gelen değerin sayısal değer olup olmadığını kontrol edebilmekteyiz.

// Fonksiyon içerisine girilen deger eğer sayısal bir ifade ise false, eğer deger sayısal ifade değilse (NaN)true değerini döndürecektir.
var result6=4;
console.log(isNaN(result6));

// Infinity; bir sayıyı sıfıra bölersen sonuç olarak sana Infinity verir. tanımsızdır
console.log(4/0);

// math (matematik) örnekleri;
console.log(Math.PI);
console.log(Math.E);
// aralarında en küçüğünü bulmak istersek "min" kullanılır, büyüğü için ise "max" kullanılır
console.log(Math.min(4,1,99,555,-100));
console.log(Math.max(4,1,99,555,-100));

// sayının karekökünü bulmak için;
console.log(Math.sqrt(16));

// tam sayı için;
console.log(Math.abs(-25));

// üslü sayılar için;
console.log(Math.pow(2,5));

// sayıyı aşağı  yuvarlar için;
console.log(Math.floor(2.9));

// sayıyı yukarıya yuvarlar için;
console.log(Math.ceil(3.2));

// ikisinin de yaptığı işe round denilir.
console.log(Math.round(6.4));
console.log(Math.round(6.5));

// sinüs hesaplamak için;
/*console.log(Math.sin(45)); 
yazmamız yeterli*/

// random ise bize rastgele sayılar üretir
/*console.log(Math.random()*9+1);
*/
console.log(Math.round(Math.random())*9+1);

// eğer bir değişkene hem sayısal hem de sözel değişken atamaya kalkarsanız "sözel toplama" yapılır.
// eğer değişkene ikinci değer string ise ilk değeri string olarak görür
var x=5+"bilimsel";
console.log(x);

// değişkenler soldan sağa doğru çalışır. eğer değişkene atanan ilk 2 ifade number, üçüncü ifade string ise sonuç yine string olur. (ama ilk iki sayısal değere işlem yapılır)
var x=5+3+"bilimsel";
console.log(x);

// binary (ikilik) sistem "0 ve 1" den oluşur. tabanı "2"dir.
var binary=0b00011;
console.log(binary);

// octal (sekizlik) sistem "0' dan 7'ye" kadar devam eder.
var octal=0o00011;
console.log(octal);

// decimal (onluk) sistemidir. "0'dan 9'a" kadardır.
var decimal=1234;
console.log(decimal);

// hexadecimal (16'lık) sistemidir. "0'dan 9'a" kadardır. fakat 10'dan 15'e kadar farklı gösterilir. şu şekildedir;
// 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F gösterilir
var hexadecimal=0xff;
console.log(hexadecimal);

// cast yapısı: bir sayıyı string'e dönüştürme string'i sayıya dönüştürme