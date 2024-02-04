

let result = "";
let a = prompt('İçedönük müsünüz yoksa dışadönük müsünüz? içedönük/dışadönük');


while (a.toLowerCase() !== 'dışadönük' && a.toLowerCase() !== 'içedönük') {
    alert('Cevabınız içedönük ya da dışadönük olmalı');
    a = prompt('İçedönük müsünüz yoksa dışadönük müsünüz?');
}

if (a == 'dışadönük') {
    result += 'E'
}
else {
    result += 'I'
}
alert(result)
let b = prompt('Sağduyulu musunuz yoksa sezgilerini mi kullanıyorsunuz? sağduyulu/sezgisel');


while (b.toLowerCase() !== 'sağduyulu' && b.toLowerCase() !== 'sezgisel') {
    alert('Cevabınız sağduyulu ya da sezgisel olmalı');
    b = prompt('Sağduyulu musunuz yoksa sezgilerini mi kullanıyorsunuz? sağduyulu/sezgisel');
}

if (b == 'sağduyulu') {
    result += 'S'
}
else {
    result += 'N'
}

alert(result)
let c = prompt('Sizin için düşünceler mi daha çok önemlidir hisler mi? düşünceler/hisler');


while (c.toLowerCase() !== 'düşünceler' && c.toLowerCase() !== 'hisler') {
    alert('Cevabınız düşünceler ya da hisler olmalı');
    c = prompt('Sizin için düşünceler mi daha çok önemlidir hisler mi? düşünceler/hisler');
}

if (c == 'düşünceler') {
    result += 'T'
}
else {
    result += 'F'
}
alert(result)
let d = prompt('Yargılayıcı mısınız yoksa kavrayacı mısınız? yargılayıcı/kavrayacı');


while (d.toLowerCase() !== 'yargılayıcı' && d.toLowerCase() !== 'kavrayıcı') {
    alert('Cevabınız yargılayıcı ya da kavrayıcı olmalı');
    d = prompt('Yargılayıcı mısınız yoksa kavrayacı mısınız? yargılayıcı/kavrayacı');
}

if (d == 'yargılayıcı') {
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
