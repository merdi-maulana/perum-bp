import Link from "next/link";

export default function Navbar(){
const whatsappUrl = "https://wa.me/6281234567890";

return (
    <nav className="w-full fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-light to-primary flex items-center justify-center text-white font-display font-bold">O</div>
            <span className="font-display font-bold text-xl text-primary">The Organic Sanctuary</span>
          </div>
          <div className="hidden md:flex gap-8">
            <Link href="#keunggulan" className="text-foreground hover:text-primary transition-colors text-sm font-medium">Keunggulan</Link>
            <Link href="#tipe-rumah" className="text-foreground hover:text-primary transition-colors text-sm font-medium">Tipe Rumah</Link>
            <Link href="#faq" className="text-foreground hover:text-primary transition-colors text-sm font-medium">FAQ</Link>
          </div>
          <Link 
            href={whatsappUrl}
            className="bg-primary text-white px-5 py-2.5 rounded-2xl font-medium text-sm hover:bg-primary-light transition-all shadow-[0_10px_20px_rgba(9,97,56,0.15)]"
          >
            Hubungi Kami
          </Link>
        </div>
    </nav>
    )}