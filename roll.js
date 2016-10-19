var myArray = ["Abu", "Bakar", "Chandra", "Donald", "Emilia", "Farah", "Hafiz", "Isaac", "Jamal", "Kamal", "Liza", "Muhammad", "Norish", "Osman", "Peter", "Qu Puteh", "Rosman", "Saloma", "Tereca", "Usman", "Vanida", "Wan Semail", "XXRay", "Yaakob", "Zebra"];

function stopRoll() {
    var rand = myArray[Math.floor(Math.random() * myArray.length)]; nama.innerHTML = '<h2 class="alert alert-success" role="alert">Tahniah kepada <strong><span class="text-primary">' + rand + '</span></strong>! Anda adalah peserta bertuah yang terpilih pada hari ini.</h2>';
}
function resetNama() {
    nama.innerHTML = '<h2 class="alert alert-info" role="alert">Siapakah peserta bertuah yang menghadiri Minggu ICT pada hari ini?</h2>';
}

function roll() {
    var ct = $("#nama").data("term") || 0;
    $("#nama").data("term", ct == myArray.length - 1 ? 0 : Math.floor(Math.random() * myArray.length)).text(myArray[ct]).fadeIn(200).fadeOut(200, roll);
}