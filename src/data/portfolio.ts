export interface PortfolioItem {
  id: string | number;
  title: string;
  scope: string; // Contoh: "SINTA 2", "SINTA 3", "SINTA 4", "SINTA 5", "Internasional", "Nasional ISSN"
  image?: string; // Kosongkan atau isi path "/portfolio/nama-file.jpg" jika ada gambar
  link: string;  // Tautan artikel jurnal
  buttonText?: string;
  category?: "sinta" | "internasional" | "nasional" | "buku" | "paten";
}

export const portfoliosData: PortfolioItem[] = [
  // 1-3: Karya dengan Gambar Khusus Poster
  {
    id: "1",
    title: "Selamat atas TERBITNYA Artikel di JURNAL SINTA 5",
    scope: "SINTA 5",
    image: "/portfolio/gambar1.jpeg",
    link: "https://ejournal.goacademica.com/index.php/jv/article/view/1368",
    buttonText: "Lihat Artikel Jurnal",
    category: "sinta"
  },
  {
    id: "2",
    title: "Selamat atas TERBITNYA Artikel di JURNAL SINTA 4",
    scope: "SINTA 4",
    image: "/portfolio/gambar2.jpeg",
    link: "https://ijsoc.goacademica.com/index.php/ijsoc/article/view/1738",
    buttonText: "Lihat Artikel Jurnal",
    category: "sinta"
  },
  {
    id: "3",
    title: "Selamat atas TERBITNYA Artikel di JURNAL SINTA 4",
    scope: "SINTA 4",
    image: "/portfolio/gambar3.jpeg",
    link: "https://idm.or.id/JCS/index.php/JCS/article/view/417",
    buttonText: "Lihat Artikel Jurnal",
    category: "sinta"
  },

  // 4-15: Artikel Publikasi Resmi dengan Auto Cover Card
  {
    id: "4",
    title: "Selamat atas TERBITNYA Artikel di JURNAL SINTA 3",
    scope: "SINTA 3",
    image: "",
    link: "https://ijsoc.goacademica.com/index.php/ijsoc/article/view/1555",
    buttonText: "Lihat Artikel Jurnal",
    category: "sinta"
  },
  {
    id: "5",
    title: "Selamat atas TERBITNYA Artikel di JURNAL NASIONAL ISSN",
    scope: "Nasional ISSN",
    image: "",
    link: "https://ejournal.goacademica.com/index.php/jk/article/view/878",
    buttonText: "Lihat Artikel Jurnal",
    category: "nasional"
  },
  {
    id: "6",
    title: "Selamat atas TERBITNYA Artikel di JURNAL INTERNASIONAL TERINDEKS GLOBAL",
    scope: "Internasional",
    image: "",
    link: "https://endless-journal.com/index.php/endless/article/view/367",
    buttonText: "Lihat Artikel Jurnal",
    category: "internasional"
  },
  {
    id: "7",
    title: "Selamat atas TERBITNYA Artikel di JURNAL SINTA 4",
    scope: "SINTA 4",
    image: "",
    link: "https://influence-journal.com/index.php/influence/article/view/322",
    buttonText: "Lihat Artikel Jurnal",
    category: "sinta"
  },
  {
    id: "8",
    title: "Selamat atas TERBITNYA Artikel di JURNAL SINTA 4",
    scope: "SINTA 4",
    image: "",
    link: "https://journal.uinsgd.ac.id/index.php/branding/article/view/58671",
    buttonText: "Lihat Artikel Jurnal",
    category: "sinta"
  },
  {
    id: "9",
    title: "Selamat atas TERBITNYA Artikel di JURNAL SINTA 4",
    scope: "SINTA 4",
    image: "",
    link: "https://ejournal.goacademica.com/index.php/japp/article/view/1605",
    buttonText: "Lihat Artikel Jurnal",
    category: "sinta"
  },
  {
    id: "10",
    title: "Selamat atas TERBITNYA Artikel di JURNAL SINTA 4",
    scope: "SINTA 4",
    image: "",
    link: "https://influence-journal.com/index.php/influence/article/view/345",
    buttonText: "Lihat Artikel Jurnal",
    category: "sinta"
  },
  {
    id: "11",
    title: "Selamat atas TERBITNYA Artikel di JURNAL SINTA 5",
    scope: "SINTA 5",
    image: "",
    link: "https://jurnal.abdimas.id/index.php/peradaban/article/view/124",
    buttonText: "Lihat Artikel Jurnal",
    category: "sinta"
  },
  {
    id: "12",
    title: "Selamat atas TERBITNYA Artikel di JURNAL SINTA 2",
    scope: "SINTA 2",
    image: "",
    link: "https://journal.uinsgd.ac.id/index.php/jpkp/article/view/57928",
    buttonText: "Lihat Artikel Jurnal",
    category: "sinta"
  },
  {
    id: "13",
    title: "Selamat atas TERBITNYA Artikel di JURNAL INTERNASIONAL TERINDEKS GLOBAL",
    scope: "Internasional",
    image: "",
    link: "https://endless-journal.com/index.php/endless/article/view/351",
    buttonText: "Lihat Artikel Jurnal",
    category: "internasional"
  },
  {
    id: "14",
    title: "Selamat atas TERBITNYA Artikel di JURNAL SINTA 4",
    scope: "SINTA 4",
    image: "",
    link: "https://influence-journal.com/index.php/influence/article/view/292",
    buttonText: "Lihat Artikel Jurnal",
    category: "sinta"
  },
  {
    id: "15",
    title: "Selamat atas TERBITNYA Artikel di JURNAL SINTA 4",
    scope: "SINTA 4",
    image: "",
    link: "https://journal.uinsgd.ac.id/index.php/branding/article/view/58671",
    buttonText: "Lihat Artikel Jurnal",
    category: "sinta"
  }
];
