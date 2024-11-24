/*-- NavbarSide --*/
var menuIcon = document.querySelector('#menu-icon');
var navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*-- PesanPesan --*/
const scriptURL = 'https://script.google.com/macros/s/AKfycbxTl41E881Br6Ojac-_lfbKkbmC-HLMXdxcFVxvRqtFRmYF0HQnR133_XS8sy3iXhg/exec';
const form = document.forms['pesan-pesan_web'];
const sendBtn = document.querySelector('.send');
const btnLoad = document.querySelector('.btn2');
const alertBox = document.querySelector('.con-lert');

// Nonaktifkan tombol kirim jika formulir tidak diisi
form.addEventListener('input', () => {
    sendBtn.disabled = !form.checkValidity(); // Tombol aktifkan/nonaktifkan berdasarkan validitas formulir
});

// Ketika button send diklik maka akan berubah menjadi button loading
sendBtn.addEventListener('click', () => {
    // Sembunyikan button send dan menampilkan button loading
    if (form.checkValidity()) { // Hanya dilanjutkan jika form valid
    sendBtn.style.display = 'none'; // Sembunyikan button send
    btnLoad.style.display = 'inline-block'; // Tampilkan button loading
    }
});

// Perintah untuk mengirimkan data ke Google Apps Script
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    try {
        // Atasi pengiriman data
        const response = await fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        console.log('Success!', response); // Atasi keberhasilan disini
        // Tampilkan alert saat proses selesai
        alertBox.style.display = 'block'; // Tampilkan alert

        // Hilangkan tulisan pada form
        form.reset(); // Reset semua tulisan pada form

    } catch (error) {
        console.error('Error!', error.message);
        // Atasi jika ada masalah disini
    } finally {
        // Sembunyikan button loading dan menampilkan button send
        btnLoad.style.display = 'none'; // Sembunyikan button loading
        sendBtn.style.display = 'inline-block'; // Tampilkan button send
    }
});
// Fungsi menghapus alert
document.querySelector('.alert i').addEventListener('click', () => {
  alertBox.style.display = 'none'; // Hilangkan alert saat diklik tanda silang
});

/*-- ButtonLoading --*/
function hourglass() {
    var a;
    a = document.getElementById("div1");
    a.innerHTML = "&#xf251; Loading.";
    setTimeout(function () {
        a.innerHTML = "&#xf252; Loading..";
      }, 1000);
    setTimeout(function () {
        a.innerHTML = "&#xf253; Loading...";
      }, 2000);
  }
  hourglass();
  setInterval(hourglass, 3000);