function inchToFeet(inches){
    var feet = inches / 12;
    return feet;
}

//  feet and inche ar bebohar
var myInches = 132;
 var feet = inchToFeet (myInches);
console.log('myInche in feet',feet);


var dadiInches = 144;
var feet = dadiInches / 12;
console.log(feet);

var dadaInches = 156;
var feet = dadaInches / 12;
console.log(feet);

       // mile to km

       function mileTokilometer(miles){
           var km  = miles * 1.60934
           return km;
       }
       var marathon = mileTokilometer(26.2);
       console.log('marathon in km:', marathon);
