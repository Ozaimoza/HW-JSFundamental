// Soal No 1 

let suhu1 = -150    // "Suhu" pertama
let suhu2 = -50     // "Suhu" kedua
let suhu3 = 20      // "Suhu" ketiga
let suhu4 = 150     // "Suhu" keempat  
let suhu5 = 800     // "Suhu" kelima

let suhu = [suhu1 ,suhu2, suhu3, suhu4, suhu5] //array suhu

console.log("Soal No 1")
console.log("Hasil : ")

//function pengecekan suhu
function KondisiAir(suhu) {
    return SuhuAir =    suhu[i] >= -100 && suhu[i] <= 0 ? "Membeku" :
                        suhu[i] >= 1 && suhu[i] <= 100 ? "Cair" :
                        suhu[i] >= 101 && suhu[i] <= 500 ? "Menguap" :
                        "tidak terdefinisi";
    }       
// Menampilkan kondisi air 
for (i = 0 ; i < suhu.length ; i++ ){
    console.log( "Suhu air pada " + suhu[i] + "°C : " + "air dalam kondisi: "  + KondisiAir(suhu)) // menampilkan hasil
}
console.log("\n")

// Soal nomor 2
let type = "motor"
let plat = "kuning"
let CC = 1500

// array menggunakan object jenis, plat dan cc
let kendaraan1 = {jenis : "motor", plat : "hitam", cc : 350 }       //kendaraan Pertama
let kendaraan2 = {jenis : "mobil", plat : "kuning", cc : 1000 }     //kendaraan kedua
let kendaraan3 = {jenis : "mobil", plat : "hitam", cc : 1300 }      //kendaraan ketiga
let kendaraan4 = {jenis : "mobil", plat : "hitam", cc : 1600 }      //kendaraan keempat

let kendaraan = [kendaraan1, kendaraan2, kendaraan3, kendaraan4]

console.log("Soal No 2")
console.log("Hasil : ")

// Pengecekan BBM 
function CekKendaraan(kendaraan) {
    return  kendaraan.jenis == type || kendaraan.plat == plat ? "BBM Subsidi" :
            kendaraan.cc < CC ? "BBM Pertamax" :
            "BBM Pertamax Turbo";
    
}

// menampilkan hasil pengecekan
for (let i = 0; i < kendaraan.length; i++) {
    console.log("Kendaraan Jenis " + kendaraan[i].jenis + " Dengan Plat Berwarna " +kendaraan[i].plat+ 
    " Dengan CC " + kendaraan[i].cc+" Menggunakan " + CekKendaraan(kendaraan[i]))
}
