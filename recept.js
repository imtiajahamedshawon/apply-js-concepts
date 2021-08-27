// variable ata
var time = '10:15pm';
// Number ata
var bookPrice = 120;
//  ata boliam
var isWhiteColor = false;

                  // Array

var partners =["imtiaj, shawon, nojir, mito, ahamed"];

// akhane koita elemen ase lengthd diye ber kre
var elementCount =  partners.length
// indexOf() diye ble elemen koto number a ase
var ahamedIndex=  partners.indexOf('ahamed')
// pus mane element ke jog kore
partners.push('mito')
// pop diye element ke ber kore
partners.pop()


               // conditionals

    // if , else ar vebo har
if(bookPrice < 120){
    console.log('i nwill buy this book');
}
else{
    console.log('mama, kicho dicount den na');
}
//    loop

var i =0;
while(i <= 7){
    i ++;
    console.log(i);
}
for(i = 0; i <=7;i++){
    console.log(1);
}
       
              // function

function bringKomola(taka){
    console.log('komolar jonno dise', taka);
    console.log('mama komola den');
}
bringKomola(250);

             //  let const

        // value of variable could change

let price = 23;
price = 34;
price = 45;

// value of variable will not change

const myName =  'lal alal mr.helal';
console.log('myName');
myName = 23
   