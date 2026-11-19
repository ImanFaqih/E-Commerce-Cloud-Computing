import { useState } from "react";
import {
  IconArrowLeft,
  IconChevronDown,
  IconChevronRight,
  IconFlame,
  IconHome,
  IconMicrophone,
  IconPlus,
  IconSearch,
  IconShoppingBag,
  IconStarFilled,
  IconTools,
  IconUser,
  IconAdjustmentsHorizontal,
} from "@tabler/icons-react";

const categoriesData = [
  {
    id: 1,
    name: "Nasi & Olahan Ayam",
    desc: "Geprek, bakar, penyet",
    count: "18 Menu",
    tag: "Favorit",
    tagColor: "bg-[#BB0112]",
    img: "/assets/cat-nasi.jpg",
  },
  {
    id: 2,
    name: "Aneka Mie & Bakso",
    desc: "Mie ayam, kuah urap",
    count: "12 Menu",
    tag: "Populer",
    tagColor: "bg-[#0EA5E9]",
    img: "/assets/cat-mie.jpg",
  },
  {
    id: 3,
    name: "Burger & Fast Food",
    desc: "Beef patty, kentang krispi",
    count: "8 Menu",
    img: "/assets/cat-burger.jpg",
  },
  {
    id: 4,
    name: "Kopi & Minuman",
    desc: "Kopi susu, jus buah segar",
    count: "15 Menu",
    img: "/assets/cat-kopi.jpg",
  },
  {
    id: 5,
    name: "Cemilan & Gorengan",
    desc: "Dimsum, pisang krispi",
    count: "14 Menu",
    img: "/assets/cat-cemilan.jpg",
  },
  {
    id: 6,
    name: "Menu Sehat & Salad",
    desc: "Salad wrap, bowl bernutrisi",
    count: "6 Menu",
    img: "/assets/cat-sehat.jpg",
  },
  {
    id: 7,
    name: "Dessert & Pastry",
    desc: "Cake lembut & puding",
    count: "9 Menu",
    img: "/assets/cat-dessert.jpg",
  },
  {
    id: 8,
    name: "Paket Rombongan",
    desc: "Nasi kotak, porsi banyak",
    count: "5 Menu",
    tag: "Hemat 25%",
    tagColor: "bg-[#006E2F]",
    img: "/assets/cat-paket.jpg",
  },
];

const menuItemsData = [
  {
    id: 1,
    name: "Ayam Geprek Sambal Korek Mozza",
    desc: "Pedas level 1-5, include nasi hangat",
    stock: "Sisa 12 porsi",
    rating: "4.9",
    reviews: "1.4k",
    price: "Rp28.000",
    oldPrice: "Rp35.000",
    discount: "-20%",
    tags: ["laris", "cepat", "promo", "halal"],
    img: "/assets/menu-ayam.jpg",
  },
  {
    id: 2,
    name: "Bakso Urat Granat & Tetelan",
    desc: "Kuah kaldu sumsum sapi asli kental",
    stock: "Sisa 7 porsi",
    rating: "4.9",
    reviews: "980",
    price: "Rp24.500",
    oldPrice: "Rp30.000",
    tag: "Best Seller",
    tagColor: "bg-[#006591]",
    tags: ["laris", "promo", "halal"],
    img: "/assets/menu-bakso.jpg",
  },
  {
    id: 3,
    name: "Kopi Susu Aren Gula Malaka",
    desc: "100% Arabika Flores, legit pas",
    stock: "Stok Melimpah",
    rating: "4.8",
    reviews: "2.1k",
    price: "Rp18.000",
    tags: ["laris", "cepat", "halal"],
    img: "/assets/menu-kopi.jpg",
  },
];

const filterChips = [
  { id: "laris", label: "Paling Laris", icon: "🔥" },
  { id: "cepat", label: "Siap Antar 15 Mnt", icon: "⚡" },
  { id: "promo", label: "Promo Diskon", icon: "🏷️" },
  { id: "halal", label: "Halal Bersertifikat", icon: "🌿" },
];

export default function Explorer({ onBackToDashboard, onOpenCart, onOpenAccount, onLogout }) {
  const [cart, setCart] = useState(3);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeChip, setActiveChip] = useState("laris");

  const filteredCategories = categoriesData.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredMenus = menuItemsData.filter((m) =>
    m.tags.includes(activeChip) &&
    (searchQuery === "" || m.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-[#FAF8FF] text-[#131B2E] font-sans antialiased">
      {/* ── Header ── */}
      <header className="fixed inset-x-0 top-0 z-20 bg-white/95 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between gap-3 px-4">
          <div className="flex items-center gap-2">
            <button
              onClick={onBackToDashboard}
              aria-label="Kembali ke Dashboard"
              className="flex size-9 items-center justify-center rounded-xl bg-[#F2F3FF] text-[#006591] transition hover:bg-[#EAEDFF]"
            >
              <IconArrowLeft size={18} />
            </button>
            <div className="flex flex-col">
              <img
                src="/logo.jpg"
                alt="My Food Buy And Eat"
                className="h-9 w-auto object-contain object-left"
              />
              <button className="flex items-center gap-0.5 py-0.5 text-xs text-[#3E4850]">
                <span className="font-medium">Antar ke:</span>
                <span className="max-w-[130px] truncate font-bold text-[#131B2E]">
                  Jl. Sudirman No. 45
                </span>
                <IconChevronDown size={10} className="text-[#0EA5E9]" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenCart}
              className="relative flex size-11 items-center justify-center transition hover:text-[#0EA5E9]"
              aria-label="Keranjang"
            >
              <IconShoppingBag size={20} />
              <span className="absolute right-1 top-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#BB0112] px-1 text-[10px] font-bold text-white">
                {cart}
              </span>
            </button>

            <button
              onClick={onOpenAccount}
              title="Akun Saya"
              className="flex size-8 items-center justify-center rounded-full bg-[#006591] text-sm font-bold text-white shadow-sm transition hover:ring-2 hover:ring-[#0EA5E9]"
            >
              U
            </button>
          </div>
        </div>
      </header>

      {/* ── Main Content ── */}
      <main className="mx-auto max-w-3xl pb-24 pt-20 px-4">
        {/* Intro */}
        <section className="pt-2">
          <div className="flex items-center justify-between gap-2">
            <div>
              <h1 className="text-xl font-bold tracking-tight text-[#131B2E]">
                Eksplorasi Kuliner
              </h1>
              <p className="text-xs text-[#6E7881]">
                Pilih menu favoritmu dari 87+ pilihan lezat
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#C9E6FF] px-3 py-1 text-[11px] font-semibold text-[#001E2F]">
              <span className="size-1.5 rounded-full bg-[#006591] animate-pulse" />
              Buka Sekarang
            </span>
          </div>

          {/* Search Bar */}
          <div className="mt-3 flex items-center gap-2">
            <div className="relative flex flex-1 items-center rounded-xl bg-white px-3.5 py-2.5 shadow-sm border border-[#E2E7FF]/60">
              <IconSearch size={16} className="text-[#6E7881] mr-2 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari nasi bakar, boba, mie..."
                className="w-full bg-transparent text-xs text-[#131B2E] outline-none placeholder:text-[#6E7881]"
              />
              <button
                type="button"
                className="text-[#6E7881] hover:text-[#006591]"
                aria-label="Cari dengan suara"
              >
                <IconMicrophone size={16} />
              </button>
            </div>
            <button
              type="button"
              className="flex size-11 items-center justify-center rounded-xl bg-[#0EA5E9] text-white shadow-sm hover:bg-[#0284C7] transition"
              aria-label="Filter"
            >
              <IconAdjustmentsHorizontal size={18} />
            </button>
          </div>
        </section>

        {/* ── Kategori Menu ── */}
        <section className="pt-6">
          <div className="flex items-center justify-between pb-3">
            <div className="flex items-center gap-2">
              <span className="text-[#0EA5E9]">
                <IconTools size={18} />
              </span>
              <h2 className="text-sm font-bold text-[#131B2E]">Kategori Menu</h2>
            </div>
            <span className="text-xs text-[#6E7881]">
              {filteredCategories.length} Kategori Pilihan
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {filteredCategories.map((cat) => (
              <div
                key={cat.id}
                className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-md active:scale-[0.98] border border-[#E2E7FF]/50"
              >
                <div className="relative h-28 w-full overflow-hidden bg-[#EAEDFF]">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {cat.tag && (
                    <span
                      className={`absolute left-2 top-2 rounded-full px-2 py-0.5 text-[10px] font-bold text-white shadow ${cat.tagColor}`}
                    >
                      {cat.tag}
                    </span>
                  )}
                  <span className="absolute bottom-2 left-2 rounded-md bg-white/80 px-1.5 py-0.5 text-[10px] font-semibold text-[#131B2E] backdrop-blur-sm">
                    {cat.count}
                  </span>
                </div>
                <div className="p-2.5">
                  <h3 className="truncate text-xs font-bold text-[#131B2E]">
                    {cat.name}
                  </h3>
                  <p className="truncate text-[11px] text-[#6E7881]">
                    {cat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <p className="py-6 text-center text-xs text-[#6E7881]">
              Kategori tidak ditemukan.
            </p>
          )}
        </section>

        {/* ── Koleksi Populer ── */}
        <section className="pt-6">
          <div className="flex items-center justify-between pb-3">
            <div>
              <h2 className="text-sm font-bold text-[#131B2E]">
                Koleksi Populer
              </h2>
              <p className="text-xs text-[#6E7881]">
                Rekomendasi chef untuk santapan hari ini
              </p>
            </div>
            <button className="flex items-center gap-0.5 text-xs font-semibold text-[#006591]">
              Lihat Semua <IconChevronRight size={12} />
            </button>
          </div>

          {/* Chips Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {filterChips.map((chip) => {
              const active = activeChip === chip.id;
              return (
                <button
                  key={chip.id}
                  onClick={() => setActiveChip(chip.id)}
                  className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition shadow-sm ${
                    active
                      ? "bg-[#0EA5E9] font-bold text-white"
                      : "bg-white text-[#3E4850] hover:bg-[#F2F3FF]"
                  }`}
                >
                  <span>{chip.icon}</span>
                  {chip.label}
                </button>
              );
            })}
          </div>

          {/* Menu Items List */}
          <div className="mt-2 flex flex-col gap-3">
            {filteredMenus.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 rounded-xl bg-white p-3 shadow-sm border border-[#E2E7FF]/50"
              >
                <div className="relative size-24 shrink-0 overflow-hidden rounded-lg bg-[#EAEDFF]">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                  {item.discount && (
                    <span className="absolute left-1.5 top-1.5 rounded bg-[#BB0112] px-1.5 py-0.5 text-[10px] font-bold text-white">
                      {item.discount}
                    </span>
                  )}
                  {item.tag && (
                    <span
                      className={`absolute left-1.5 top-1.5 rounded px-1.5 py-0.5 text-[10px] font-bold text-white ${item.tagColor}`}
                    >
                      {item.tag}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 rounded bg-[#6BFF8F]/20 px-1.5 py-0.5 text-[10px] font-semibold text-[#006E2F]">
                        <span className="size-1.5 rounded-full bg-[#006E2F]" />
                        {item.stock}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] font-bold text-[#131B2E]">
                        <IconStarFilled size={11} className="text-[#F5B301]" />
                        {item.rating}
                        <small className="font-normal text-[#6E7881]">
                          ({item.reviews})
                        </small>
                      </span>
                    </div>
                    <h4 className="mt-1 text-xs font-bold text-[#131B2E]">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-[#6E7881]">{item.desc}</p>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-sm font-extrabold text-[#0EA5E9]">
                        {item.price}
                      </span>
                      {item.oldPrice && (
                        <span className="text-[11px] text-[#6E7881] line-through">
                          {item.oldPrice}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => setCart((c) => c + 1)}
                      aria-label="Tambah ke keranjang"
                      className="flex size-7 items-center justify-center rounded-lg bg-[#C9E6FF] text-[#006591] transition hover:bg-[#0EA5E9] hover:text-white active:scale-95"
                    >
                      <IconPlus size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {filteredMenus.length === 0 && (
              <p className="py-6 text-center text-xs text-[#6E7881]">
                Belum ada menu untuk filter ini.
              </p>
            )}
          </div>
        </section>
      </main>

      {/* ── Bottom Nav ── */}
      <nav className="fixed inset-x-0 bottom-0 z-20 bg-white/95 shadow-[0_-2px_10px_rgba(0,0,0,0.04)] backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-around px-2">
          <button
            onClick={onBackToDashboard}
            className="flex h-12 w-16 flex-col items-center justify-center gap-0.5 text-xs text-[#3E4850] transition hover:text-[#0EA5E9]"
          >
            <IconHome size={18} />
            Beranda
          </button>

          <button
            className="flex h-12 w-16 flex-col items-center justify-center gap-0.5 text-xs text-[#0EA5E9] font-bold"
          >
            <IconTools size={18} />
            Kategori
          </button>

          <button
            onClick={onOpenCart}
            className="relative flex h-12 w-16 flex-col items-center justify-center gap-0.5 text-xs text-[#3E4850] transition hover:text-[#0EA5E9]"
          >
            <span className="relative">
              <IconShoppingBag size={18} />
              <span className="absolute -right-2 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#BB0112] px-1 text-[9px] font-bold text-white">
                {cart}
              </span>
            </span>
            Keranjang
          </button>

          <button
            onClick={onOpenAccount}
            className="flex h-12 w-16 flex-col items-center justify-center gap-0.5 text-xs text-[#3E4850] transition hover:text-[#0EA5E9]"
          >
            <IconUser size={18} />
            Akun
          </button>
        </div>
      </nav>
    </div>
  );
}
