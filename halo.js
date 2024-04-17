//console.log('Halo ges')
//var
//var nama = 'renova';
//var nama = 'reza';

//var umur = 25;
//umur = 60;

//console.log(umur)


//let
//let nama2 = 'renova'
//nama2 = 'reza'
// kalau pake let gabisa keubah 

//console.log(nama2)


//const
//const nama = 'renova';

//console.log(nama)

//const nama = ['renova','reza','andi']
//nama[0] = 'yoyo';
//console.log(nama)

// const iniJson ={
//     'no_invoice': 'INV-000005',
//     'Pelanggan' : 'TOKOPEDIA',
//     'tanggal_transaksi' : '2024-03-18',
//     'dueDate' : '2024-03-25'
// };
//iniJson.Pelanggan = 'SHOPEE'
//console.log (iniJson)


// var iniText = 'TEXT';
// let ini_number = 120 ;
// let ini_number2 = 13 ;
// const IniDate = new Date();
// console.log(iniText);
// console.log(ini_number*ini_number2);
// console.log(IniDate);

//const text1 = 'yoyo'
//const penjumlahan = (text1 + (25+5));

//console.log (penjumlahan);


//postfix prefix

// let a = 1
// let b = a++;
// console.log (a);
// console.log (b);


// let c = 2
// let d = ++a;
// console.log(c);
// console.log(d);

let x = 5;
let y = 3;
// x += y;
//console.log(x);

// x/=y;
// console.log(x);

// x**=y;
// console.log(x);

//logika and
const sudahMakan = false;
const sudahNgopi  = true;
// if (sudahMakan || sudahNgopi) {
//     console.log(true);
// } else{
//     console.log(false);
// }

// console.log(!sudahMakan);
// console.log(!sudahNgopi);

// let age = 17;
// let hasLicense = true;

// console.log(age >= 18 && hasLicense);

// let isStudent = false;
// console.log((age >= 18 && hasLicense)|| !isStudent);


// const a = 5;
// const b = '5';
// console.log(a==b);
// console.log(a===b);
// console.log(a != b);
// console.log(a !== b);

// const c = 8;
// const d = '8';
// console.log (c > d);
// console.log (c >= d);

// const e = 7
// console.log(typeof e);


// const minBelanja = 5;
// const totalBelanja = 200000;
// const diskon = 10; 

// const hargaBarang = 40000;
// const jumlahBarangDibeli = 6;

// const totalHargaSebelumDiskon = hargaBarang * jumlahBarangDibeli;

// const totalLebihDari200K = totalHargaSebelumDiskon >totalBelanja;

// const layakDiskon = jumlahBarangDibeli >= minBelanja && totalLebihDari200K;

// let hargaSetelahDiskon ;
// let dapatDiskon = 0;

// if (layakDiskon){
//     dapatDiskon = (diskon * totalHargaSebelumDiskon * 0.01);
//     hargaSetelahDiskon = (totalHargaSebelumDiskon - dapatDiskon);
// } else {
//     hargaSetelahDiskon = totalHargaSebelumDiskon;
// }

// console.log("Total harga belanjaan sebelum diskon: Rp" + totalHargaSebelumDiskon);
// if (layakDiskon){
//     console.log( "Anda mendapat diskon 10% :", dapatDiskon);
//     console.log("Total harga belanjaan setelah diskon : Rp" + hargaSetelahDiskon);
// }
// else {
//     console.log("Maaf, tidak ada diskon untuk total belanjaan Anda.");
// }




// for (let i  =1; i <= 5; i++) {
//     console.log(i);
// }

//  const colors = ['red', 'green', 'blue'];

// for (const color of colors) {
//     console.log(color);
// }

// const person = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// };

// for (const key in person) {
//     console.log(key + ':' + person [key]);
// }

// let i = 1;
// while (i <= 5){
//     console.log(i);
//     i++;
// }


// let number = 1;
// do {
//     console.log(number);
//     number++;
// }while (number <= 10);


// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function(number){
//     console.log(number);
// });

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map(function(number){
//     return number * 3 ;
// });
// console.log(doubledNumbers);

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce (function(accumulator, currentValue){
//     return accumulator + currentValue;
// }, 0) ;
// console.log(sum);





// function hitungLuasPersegiPanjang (panjang, lebar) {
//     return panjang * lebar;
// }

// const hitungLuasPersegiPanjang = function (panjang, lebar){
//     return panjang * lebar;
// }
// const hitungLuasPersegiPanjang = (panjang, lebar) => panjang * lebar;
// const luasPersegiPanjang = hitungLuasPersegiPanjang (5,2);
// console.log('Luas: ${luashPersegiPanjang}');



// function tambahLima (angka) {
//     angka = angka +5;
//     return angka;
// }
// const nilai = 2;
// const hasil = tambahLima (nilai);

// console.log(`Nilai: ${nilai}`);
// console.log(`Hasil: ${hasil}`);

// function tambahLima (obj){
//     obj.angka = obj.angka + 5;
//     return obj.angka;
// }

// const nilai = {
//     angka: 2
// };
// const hasil = tambahLima(nilai);

// console.log(`Nilai: ${JSON.stringify(nilai)}`);
// console.log(`Hasil: ${hasil}`);


// const salam = function() {
//     console.log ('Senang bertemu denganmu!');
// };

// const halo = function(ucapanSalam) {
//     console.log('Halo!');
//     ucapanSalam();
// }

// halo(salam);


// const {hitungLuasPersegiPanjang} = require('./syalala');

// const hasil = hitungLuasPersegiPanjang (5,2);
// console.log(`Hasil: ${hasil}`);


// cara then
// const axios = require('axios');

// axios.get('https://api2-lb.jubelio.com/ping')
//   .then(function (response) {
    
//     console.log(response.data);
//   })

  //async 
  // async function callAPI() {
  //   const hasil = await axios.get('https://api2-lb.jubelio.com/ping');
  //   console.log (`Hasil: ${JSON.stringify(hasil.data)}`)
  // }
  // callAPI()

  const isOdd = require('is-odd');

  // console.log(isOdd('2')); //=> true
  // console.log(isOdd('3')); //=> true
   
  // console.log(isOdd(2)); //=> false
  // console.log(isOdd(2)); //=> false

  function ganjilGenap(angka){
    if (angka%2===0){
      console.log('Genap')
    
    }else{
      console.log('Ganjil')
    }
  }
ganjilGenap(18);




