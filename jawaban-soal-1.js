const prompt = require('prompt-sync')({sigint: true});
const x = prompt('masukkan angka: ');


if(x < 0){
    console.log("Tidak bisa input bilangan negatif")
}
else if (x % 2 !==0) {
    console.log("Tidak bisa input bilangan ganjil")
}