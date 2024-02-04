document.addEventListener('DOMContentLoaded', function () {
    var radio = document.getElementById("radio");

    function toggleRadio() {
        if (radio.paused) {
            radio.play();
        } else {
            radio.pause();
        }
        radio.volume = 0.03;
    }

    function pauseRadio() {
        radio.pause();
    }

    function setVolume(volume) {
        radio.volume = parseFloat(volume);
    }

    radio.addEventListener('playing', function () {
        radio.volume = 0.03;
    });
    
    // You can add any additional code from test.js here.

});

let result = "";
let a = +prompt('İçedönük müsünüz yoksa dışadönük müsünüz? 1=içedönük/2=dışadönük');


while (a !== 1 && a !== 2) {
    alert('Cevabınız 1 ya da 2 olmalı');
    a = +prompt('İçedönük müsünüz yoksa dışadönük müsünüz? 1=içedönük/2=dışadönük   ');
}

if (a == 1) {
    result += 'E'
}
else {
    result += 'I'
}

let b = +prompt('Sağduyulu musunuz yoksa sezgilerini mi kullanıyorsunuz? 1=sağduyulu/2=sezgisel');


while (b !== 1 && b !== 2) {
    alert('Cevabınız 1 ya da 2 olmalı');
    b = +prompt('Sağduyulu musunuz yoksa sezgilerini mi kullanıyorsunuz? 1=sağduyulu/2=sezgisel');
}

if (b == 1) {
    result += 'S'
}
else {
    result += 'N'
}


let c = +prompt('Sizin için düşünceler mi daha çok önemlidir hisler mi? 1=düşünceler/2=hisler');


while (c !== 1 && c !== 2) {
    alert('Cevabınız 1 ya da 2 olmalı');
    c = +prompt('Sizin için düşünceler mi daha çok önemlidir hisler mi? 1=düşünceler/2=hisler');
}

if (c == 1 ) {
    result += 'T'
}
else {
    result += 'F'
}

let d = +prompt('Yargılayıcı mısınız yoksa kavrayacı mısınız? 1=yargılayıcı/2=kavrayacı');


while (d !== 1 && d !== 2) {
    alert('Cevabınız 1 ya da 2 olmalı');
    d = +prompt('Yargılayıcı mısınız yoksa kavrayacı mısınız? 1=yargılayıcı/2=kavrayacı') ;
}

if (d == 1) {
    result += 'J'
}
else {
    result += 'P'
}




if (result == 'INTJ') {
    alert('INTJ Kişilik yapısı: Hayal gücü geniş ve stratejik düşünürlerdir. Herşey için planları vardır.')
}
else if(result == 'INTP'){
    alert('INTP Kişilik yapısı: Bilgi edinmeye yönelik hiç bitmeyen bir istek duyan yenilikçi mucitlerdir.')
}
else if(result == 'ENTJ'){
    alert('ENTJ Kişilik yapısı: Cesur, yaratıcı ve iradelidirler. Her zaman bir yol bulurlar ya da yeni bir yol yaratırlar.')
}
else if(result == 'ENTP'){
    alert('ENTP Kişilik yapısı: Entelektüel, meydan okumaya karşı koyamayan; meraklı ve esnek düşünürlerdir.')
}
else if(result == 'INFJ'){
    alert('INFJ Kişilik yapısı: Sessiz ve mistik fakat oldukça ilham verici, yorulmak bilmeyen idealistlerdir. ')
}
else if(result == 'INFP'){
    alert('INFP Kişilik yapısı: Romantik, kibar ve fedakar insanlardır. Her zaman iyi bir amaca yardım etmeye isteklilerdir. ')
}
else if(result == 'ENFJ'){
    alert('ENFJ Kişilik yapısı: Karizmatik ve ilham verici liderlerdir. Dinleyicilerini büyülerler.')
}
else if(result == 'ENFP'){
    alert('ENFP Kişilik yapısı: Her zaman gülümsemek için bir neden bulabilen coşkulu, yaratıcı ve sosyal özgür ruhlardır.')
}
else if(result == 'ISTJ'){
    alert('ISTJ Kişilik yapısı: Güvenilirlikleri şüphe götürmeyen, pratik ve gerçeklere dayalı düşünen bireylerdir.')
}
else if(result == 'ISFJ'){
    alert('ISFJ Kişilik yapısı: Sevdiklerini savunmaya her zaman hazır, kendini tamamen adamış ve şefkatlı korumacılardır.')
}
else if(result == 'ESTJ'){
    alert('ESTJ Kişilik yapısı: Mükemmel organizatörlerdir. Birşeyleri yada insanları yönetmede eşsizlerdir. ')
}
else if(result == 'ESFJ'){
    alert('ESFJ Kişilik yapısı: Çok ilgili, sosyal ve popüler insanlardır. Her zaman yardım etmeye heveslidirler. ')
}
else if(result == 'ISTP'){
    alert('ISTP Kişilik yapısı: Her türlü aleti kullanmada usta olan, cesur ve pratik deneyicilerdir.')
}
else if(result == 'ISFP'){
    alert('ISFP Kişilik yapısı: Yeni bir şeyi araştırmaya ve deneyimlemeye daima hazır olan, rahat ve büyüleyici sanatçılardır.')
}
else if(result == 'ESTP'){
    alert('ESTP Kişilik yapısı: Akıllı ve algıları oldukça güçlü, enerjik insanlardır. Gerçekten sınırda yaşamaktan hoşlanırlar. ')
}
else if(result == 'ESFP'){
    alert('ESFP Kişilik yapısı: Spontane, enerjik ve coşkulu insanlardır. Hayat onların yanında asla sıkıcı değildir.')
}
else(
    alert('Birşeyler ters gitti :(')
)
