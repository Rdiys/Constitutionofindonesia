// Ambil elemen input dan tombol
const searchBox = document.getElementById("searchBox");
const searchButton = document.getElementById("searchButton");

// Data halaman dan kata kunci terkait
const pages = [
    { url: "index.html", keywords: ["beranda", "home", "awal", "balik"] },
    { url: "about.html", keywords: ["tentang", "about", "informasi", "info"] },
    { url: "chapters.html", keywords: ["bab", "pasal", "chapters", "isi"] },
    { url: "amendments.html", keywords: ["amandemen", "perubahan", "uud", "2000", "1999", "2001", "2002"] },
    { url: "https://s.id/uhuyntap", keywords: ["kontak", "contact", "hubungi", "telepon", "pengurus", "pembuat"] },
    { url: "opening.html", keywords: ["pembukaan", "preambule", "opening"] }
];

// Fungsi untuk menampilkan pop-up
function showPopup(message) {
    // Buat elemen pop-up
    const popup = document.createElement("div");
    popup.className = "popup";
    popup.innerText = message;

    // Tambahkan elemen ke dalam body
    document.body.appendChild(popup);

    // Hilangkan pop-up setelah 3 detik
    setTimeout(() => {
        popup.remove();
    }, 3000);
}

// Fungsi untuk mencari kata kunci di halaman
searchButton.addEventListener("click", () => {
    const keyword = searchBox.value.trim().toLowerCase();

    if (keyword === "") {
        showPopup("Masukkan kata kunci untuk mencari.");
        return;
    }

    // Cari halaman yang mengandung kata kunci
    const foundPage = pages.find(page =>
        page.keywords.some(k => k.includes(keyword))
    );

    if (foundPage) {
        // Arahkan ke halaman yang ditemukan
        window.location.href = foundPage.url;
    } else {
        showPopup(`Kata kunci "${keyword}" tidak ditemukan di halaman mana pun.`);
    }
});
