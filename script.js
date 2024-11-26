// Tangkap elemen tombol Home
const homeButton = document.getElementById("home");

// Tangkap elemen konten utama
const content = document.getElementById("content");

// Fungsi untuk memuat konten Home
function loadHomePage() {
  content.innerHTML = `
    <section class="hero">
      <h1>Welcome Back to Argenticace</h1>
      <p>Explore our photography collection and services!</p>
    </section>
    <section class="services">
      <h2>Our Services</h2>
      <ul>
        <li>Wedding Photography</li>
        <li>Portrait Photography</li>
        <li>Event Photography</li>
      </ul>
    </section>
  `;
}

// Tambahkan event listener untuk klik tombol Home
homeButton.addEventListener("click", (e) => {
  e.preventDefault(); // Mencegah tindakan default (jika ada link)
  loadHomePage(); // Panggil fungsi untuk memuat halaman
});

// Tangkap elemen tombol dan elemen konten galeri
const viewGalleryButton = document.getElementById("viewGallery");
const galleryContent = document.getElementById("galleryContent");

// Daftar foto yang akan ditampilkan
const photos = [
  { src: "images/photo1.jpg", alt: "Photo 1" },
  { src: "images/photo2.jpg", alt: "Photo 2" },
  { src: "images/photo3.jpg", alt: "Photo 3" },
  { src: "images/photo4.jpg", alt: "Photo 4" },
  { src: "images/photo5.jpg", alt: "Photo 5" }
];

// Fungsi untuk memuat galeri
function loadGallery() {
  // Hapus konten sebelumnya (jika ada)
  galleryContent.innerHTML = "";

  // Tambahkan foto ke dalam galeri
  photos.forEach((photo) => {
    const img = document.createElement("img");
    img.src = photo.src;
    img.alt = photo.alt;
    img.classList.add("gallery-item");
    galleryContent.appendChild(img);
  });
}

// Tambahkan event listener pada tombol
viewGalleryButton.addEventListener("click", () => {
  loadGallery();
});