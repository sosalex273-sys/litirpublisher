# Panduan Menambahkan Gambar & Link Portofolio (Karya yang Telah Terbit)

Untuk menambahkan gambar dan link baru ke bagian "Karya yang Telah Terbit", ikuti langkah mudah berikut:

### Langkah 1: Masukkan Gambar
1. Siapkan file gambar cover buku / jurnal Anda (format `.png` atau `.jpg`).
2. Masukkan file gambar tersebut ke dalam folder ini (`public/portfolio/`).
   - Contoh nama file: `jurnal-teknik.png`

---

### Langkah 2: Tambahkan Data & Link ke File `src/data/portfolio.ts`
Buka file `src/data/portfolio.ts` dan tambahkan data baru pada array `portfoliosData`.

Contoh menambahkan item baru:
```ts
{
  id: "5",
  title: "Jurnal Riset Kecerdasan Buatan",
  scope: "Scopus Q1",
  image: "/portfolio/jurnal-teknik.png",
  link: "https://link-jurnal-atau-whatsapp.com",
  buttonText: "Lihat Publikasi"
},
```

### Keterangan Field:
- **`title`**: Judul buku, jurnal, atau karya paten Anda.
- **`scope`**: Badge kategori di pojok kiri atas (misal: `"Scopus Q1"`, `"SINTA 2"`, `"Ber-ISBN"`, `"HKI Terdaftar"`).
- **`image`**: Lokasi file gambar (dimulai dengan `/portfolio/nama-file.png`).
- **`link`**: URL tujuan ketika tombol ditekan (akan membuka di tab baru secara otomatis).
- **`buttonText`**: Tulisan pada tombol (misal: `"Lihat Publikasi"`, `"Detail Buku"`, `"Baca Selengkapnya"`).
