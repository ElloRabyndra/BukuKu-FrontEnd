// Menangkap Cover Buku
const bookCover = document.querySelector(".book-cover.withCover");

if (bookCover) {
  const bookCoverClass = bookCover.className;
  const coverBookName = bookCoverClass
    .split(" ")
    .find((cls) => /\.(jpg|jpeg)$/i.test(cls));
  bookCover.style.backgroundImage = `url(/asset/book_cover/${coverBookName})`;
  console.log(coverBookName);
}

// Ganti Warna Status (Page Bacaan)
const kolomStatus = document.getElementsByClassName("table-column status");
if (kolomStatus) {
  [...kolomStatus].forEach((item) => {
    if (item.innerHTML == "Belum Dibaca") item.style.color = "#ff3c5c";
    else if (item.innerHTML == "Sedang Dibaca") item.style.color = "#087cf4";
    else if (item.innerHTML == "Selesai Dibaca") item.style.color = "#098609";
  });
}


const popup = document.getElementById("popup");
if(popup) {
  // Menampilkan pop-up saat halaman dimuat
  window.onload = function () {
  popup.style.display = "flex";
  };
  
  // Fungsi untuk menutup pop-up
  function closePopup() {
  popup.style.display = "none";
  }
}
