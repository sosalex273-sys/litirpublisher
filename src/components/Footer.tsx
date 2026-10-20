import Link from "next/link";
import Image from "next/image";
import logo from "../../litirlogo.png";
import { Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href="#" className="flex items-center gap-3 mb-6 group">
              <Image 
                src={logo} 
                alt="Litir Publisher Logo" 
                className="h-14 w-auto object-contain rounded-full transition-transform group-hover:scale-105" 
              />
              <span className="font-bold text-xl font-jakarta text-white tracking-tight">
                Litir <span className="text-amber-400">Publisher</span>
              </span>
            </Link>
            <p className="text-slate-400 mb-4 leading-relaxed text-sm">
              Mitra publikasi akademik terpercaya yang memberikan layanan komprehensif mulai dari editing hingga penerbitan dengan standar internasional.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              📍 <span className="font-semibold text-slate-300">Domisili:</span> Desa Tateli Tiga, Jaga III, Kecamatan Mandolang, Kabupaten Minahasa, Sulawesi Utara
            </p>

          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 font-jakarta">Layanan</h4>
            <ul className="space-y-4">
              <li><Link href="/produk" className="hover:text-primary transition-colors">Publikasi Jurnal Nasional</Link></li>
              <li><Link href="/produk" className="hover:text-primary transition-colors">Publikasi Jurnal Internasional</Link></li>
              <li><Link href="/#layanan" className="hover:text-primary transition-colors">Pendaftaran Hak Cipta (HKI)</Link></li>
              <li><Link href="/#layanan" className="hover:text-primary transition-colors">Penerbitan Buku (ISBN)</Link></li>
              <li><Link href="/#layanan" className="hover:text-primary transition-colors">Proofreading & Translation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 font-jakarta">Perusahaan</h4>
            <ul className="space-y-4">
              <li><Link href="/#tentang-kami" className="hover:text-primary transition-colors">Tentang Kami</Link></li>
              <li><Link href="/#tentang-kami" className="hover:text-primary transition-colors">Tim Kami</Link></li>
              <li><Link href="/#tentang-kami" className="hover:text-primary transition-colors">Karir</Link></li>
              <li><Link href="/#testimoni" className="hover:text-primary transition-colors">Testimoni</Link></li>
              <li><a href="https://wa.me/628981669927" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Hubungi Kami</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 font-jakarta">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="hover:text-primary transition-colors">Syarat & Ketentuan</Link></li>
              <li><Link href="/" className="hover:text-primary transition-colors">Kebijakan Privasi</Link></li>
              <li><Link href="/" className="hover:text-primary transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Litir Publisher. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <span>Dibuat dengan ❤️ untuk Akademisi Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
