import { useState } from "react";
import {
  IconBolt,
  IconBowlChopsticks,
  IconBurger,
  IconChevronDown,
  IconChevronRight,
  IconCake,
  IconCoffee,
  IconCookie,
  IconFlame,
  IconHome,
  IconBan,
  IconPlus,
  IconSearch,
  IconShoppingBag,
  IconSoup,
  IconStarFilled,
  IconTools,
  IconTruckDelivery,
  IconUser,
  IconShieldLock,
  IconLayoutDashboard,
} from "@tabler/icons-react";


const img = (id) =>
  `https://api.builder.io/api/v1/image/assets/TEMP/${id}?width=368`;

const categories = [
  { label: "Nasi/Ayam", Icon: IconBowlChopsticks },
  { label: "Mie/Bakso", Icon: IconSoup },
  { label: "Burger",    Icon: IconBurger },
  { label: "Minuman",   Icon: IconCoffee },
  { label: "Cemilan",   Icon: IconCookie },
  { label: "Dessert",   Icon: IconCake },
];

const flash = [
  {
    name:  "Nasi Goreng Spesial + Sate",
    price: "Rp 24.000",
    old:   "Rp 37.000",
    badge: "-35%",
    left:  "Tersisa 4 porsi",
    sold:  80,
    src:   img("24910e8effa2e64600cbc77c316f5ad46fdee4b1"),
  },
  {
    name:  "Mie Ayam Jamur Bakso",
    price: "Rp 21.000",
    old:   "Rp 30.000",
    badge: "-30%",
    left:  "Tersisa 2 porsi!",
    sold:  92,
    src:   img("ea6de5dd1c841eaab34e18564ed296bc752a8a53"),
  },
  {
    name:  "Es Kopi Susu Aren 500ml",
    price: "Rp 16.500",
    old:   "Rp 28.000",
    badge: "-40%",
    left:  "Tersisa 6 botol",
    sold:  65,
    src:   img("1e99bc8074b027cfa9d0f00eeb3dc92bbad053ce"),
  },
];

const foods = [
  {
    name:      "Ayam Bakar Madu Komplit",
    src:       "https://api.builder.io/api/v1/image/assets/TEMP/f7805d776cf7ccd8773d30ed28804c6abdc2842b?width=306",
    badge:     "-20%",
    stock:     "safe",
    stockText: "Sisa 15 porsi",
    rating:    "4.9",
    sold:      "Terjual 3,2rb",
    price:     "Rp 28.000",
    old:       "Rp 35.000",
  },
  {
    name:      "Beef Rice Bowl Teriyaki Spesial",
    src:       "https://api.builder.io/api/v1/image/assets/TEMP/10f155d301aea63195ae8f032beb36f8744bf067?width=306",
    badge:     "Promo",
    stock:     "safe",
    stockText: "Sisa 11 porsi",
    rating:    "4.8",
    sold:      "Terjual 1,8rb",
    price:     "Rp 33.500",
    old:       "Rp 42.000",
  },
  {
    name:      "Dimsum Mentai Panggang (4 pcs)",
    src:       "https://api.builder.io/api/v1/image/assets/TEMP/92fe0b28f119651142750d990e2d2af6092024f8?width=306",
    stock:     "low",
    stockText: "Sisa 3 porsi!",
    rating:    "4.9",
    sold:      "Terjual 2,1rb",
    price:     "Rp 26.000",
  },
  {
    name:      "Bakso Urat Jumbo Kuah Kaldu",
    src:       "https://api.builder.io/api/v1/image/assets/TEMP/7c3be2b887be6fb0d097e904944a03b2aa5d6185?width=306",
    stock:     "out",
    stockText: "Stok Habis Hari Ini",
    rating:    "4.7",
    sold:      "Terjual 950",
    price:     "Rp 25.000",
  },
];

const stockStyle = {
  safe: { dot: "bg-[#006E2F]", text: "text-[#006E2F] font-medium" },
  low:  { dot: "bg-[#F59E0B]", text: "text-[#B45309] font-semibold" },
  out:  { dot: "bg-[#BB0112]", text: "text-[#BB0112] font-medium" },
};

function FoodCard({ f, onAdd }) {
  const s   = stockStyle[f.stock];
  const out = f.stock === "out";
  return (
    <div className={`flex flex-col justify-between gap-1 rounded-xl bg-white p-2.5 shadow-sm ${out ? "opacity-85" : ""}`}>
      <div className="flex flex-col gap-[3.5px]">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-[#F2F3FF]">
          <img src={f.src} alt={f.name} className={`h-full w-full object-cover ${out ? "grayscale" : ""}`} />
          {f.badge && (
            <span className="absolute left-1.5 top-1.5 rounded bg-[#BB0112] px-1.5 py-0.5 text-[10px] font-bold leading-[15px] text-white">
              {f.badge}
            </span>
          )}
          {out && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#131B2E]/30 backdrop-blur-[1px]">
              <span className="rounded bg-[#BB0112] px-2 py-0.5 text-[11px] font-bold uppercase tracking-[0.55px] text-white shadow">
                HABIS
              </span>
            </div>
          )}
        </div>
        <div className="flex items-center gap-1 pt-[4.5px]">
          <span className={`size-1.5 rounded-full ${s.dot}`} />
          <span className={`text-[10px] leading-[15px] ${s.text}`}>{f.stockText}</span>
        </div>
        <h4 className="text-sm font-semibold leading-[19.25px] text-[#131B2E]">{f.name}</h4>
        <div className="flex items-center gap-1.5 text-[11px] leading-[16.5px]">
          <span className="flex items-center gap-0.5 font-semibold text-[#F59E0B]">
            <IconStarFilled size={11} /> {f.rating}
          </span>
          <span className="text-[#3E4850]">•</span>
          <span className="text-[#6E7881]">{f.sold}</span>
        </div>
      </div>
      <div className="flex items-center justify-between pt-2">
        <div className="flex flex-col">
          {f.old && <span className="text-xs leading-3 text-[#6E7881] line-through">{f.old}</span>}
          <span className={`text-[15px] font-bold leading-[18.75px] ${out ? "text-[#6E7881]" : "text-[#006591]"}`}>
            {f.price}
          </span>
        </div>
        {out ? (
          <button disabled aria-label="Habis" className="flex size-8 items-center justify-center rounded-full bg-[#EAEDFF] text-[#6E7881]">
            <IconBan size={15} />
          </button>
        ) : (
          <button onClick={onAdd} aria-label={`Tambah ${f.name}`} className="flex size-8 items-center justify-center rounded-full bg-[#0EA5E9] text-white transition active:scale-95">
            <IconPlus size={14} />
          </button>
        )}
      </div>
    </div>
  );
}

export default function Dashboard({ onLogout, onOpenExplorer, onOpenCart, onOpenAccount, onOpenAdmin, currentUser }) {
  const [cart,      setCart]      = useState(3);
  const [query,     setQuery]     = useState("");
  const [activeNav, setActiveNav] = useState("Beranda");
  const userName = currentUser?.name || "Pengguna";
  const userEmail = currentUser?.email || "pengguna@tokoku.id";
  const isAdmin = currentUser?.role === "admin";

  const shown = foods.filter((f) =>
    f.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#FAF8FF] text-[#131B2E]">

      {/* ── Header ── */}
      <header className="fixed inset-x-0 top-0 z-20 bg-white/90 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-3xl items-center gap-3 px-4">
          <div className="flex min-w-0 flex-1 flex-col">
            <img src="/logo.jpg" alt="My Food Buy And Eat" className="h-10 w-auto object-contain object-left" />
            <button className="flex items-center gap-0.5 py-0.5 text-xs">
              <span className="font-medium text-[#3E4850]">Antar ke:</span>
              <span className="max-w-[130px] truncate font-bold">Jl. Sudirman No. 45</span>
              <IconChevronDown size={10} className="text-[#0EA5E9]" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            {/* Tombol Akses Cepat Admin Panel */}
            <button
              onClick={onOpenAdmin}
              className="flex items-center gap-1.5 rounded-xl bg-[#006591] px-2.5 py-1.5 text-xs font-bold text-white shadow-sm transition hover:bg-[#005175]"
              title="Buka Panel Admin E-Commerce"
            >
              <IconShieldLock size={15} />
              <span>Admin</span>
            </button>

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

            {/* Avatar -> Halaman Akun */}
            <button
              onClick={onOpenAccount}
              title="Akun Saya"
              className="flex size-8 items-center justify-center rounded-full bg-[#006591] text-sm font-bold text-white shadow-sm transition hover:ring-2 hover:ring-[#0EA5E9]"
            >
              {userName.charAt(0)}
            </button>
          </div>
        </div>
      </header>

      {/* ── Main ── */}
      <main className="mx-auto max-w-3xl pb-24 pt-16">

        {/* Search */}
        <div className="px-4 pb-2 pt-3">
          <div className="relative">
            <IconSearch size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6E7881]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari menu makanan lezat..."
              className="h-10 w-full rounded-full bg-[#F2F3FF] pl-9 pr-3 text-[13px] shadow-sm outline-none placeholder:text-[#6E7881] focus:ring-2 focus:ring-[#0EA5E9]/40"
            />
          </div>
        </div>

        {/* Banner Flash Sale */}
        <div className="px-4 py-2">
          <div className="flex min-h-[105px] items-center justify-between gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-[#0EA5E9] from-50% to-[#006591] p-4 shadow-md">
            <div className="flex max-w-[222px] flex-col items-start gap-[3px]">
              <span className="flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold uppercase leading-[15px] tracking-[0.5px] text-white backdrop-blur">
                <IconBolt size={10} /> FLASH SALE
              </span>
              <h2 className="text-lg font-bold leading-[22.5px] tracking-[-0.18px] text-white">Diskon Kilat 50%</h2>
              <div className="flex items-center gap-0.5 text-xs leading-4 text-white/90">
                Gunakan kode:
                <span className="rounded bg-white px-1.5 text-[10px] font-bold tracking-[0.25px] text-[#006591]">
                  MAKANPUAS
                </span>
              </div>
            </div>
            <div className="size-24 shrink-0 overflow-hidden rounded-full bg-[#F2F3FF]/20 shadow-inner">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/f58245b43f6808c7bdebbffe02853e1969978a42?width=192"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Kategori */}
        <div className="px-4 pb-1 pt-4">
          <div className="flex justify-between gap-1 overflow-x-auto">
            {categories.map(({ label, Icon }) => (
              <button
                key={label}
                onClick={onOpenExplorer}
                className="flex flex-col items-center gap-[6px] transition active:scale-95"
              >
                <span className="flex size-12 items-center justify-center rounded-full bg-[#F2F3FF] text-[#006591] shadow-sm hover:bg-[#EAEDFF]">
                  <Icon size={20} />
                </span>
                <span className="text-[11px] font-medium leading-[13.75px]">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Promo Lapar Terbatas */}
        <div className="px-4 pt-4">
          <div className="flex flex-col gap-3 rounded-xl bg-[#F2F3FF] p-3.5 shadow-sm">
            <div className="flex items-center gap-1.5">
              <IconFlame size={16} className="text-[#E02928]" />
              <h3 className="text-[15px] font-bold">Promo Lapar Terbatas</h3>
            </div>
            <div className="flex gap-2.5 overflow-x-auto pb-1">
              {flash.map((c) => (
                <div key={c.name} className="flex w-[200px] shrink-0 flex-col gap-1.5 rounded-lg bg-white p-2 shadow-sm">
                  <div className="relative h-24 overflow-hidden rounded-md bg-[#EAEDFF]">
                    <img src={c.src} alt={c.name} className="h-full w-full object-cover" />
                    <span className="absolute left-1 top-1 rounded bg-[#E02928] px-1.5 py-0.5 text-[10px] font-bold leading-[15px] text-white">
                      {c.badge}
                    </span>
                  </div>
                  <div className="truncate text-[13px] font-semibold leading-[19.5px]">{c.name}</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-bold text-[#006591]">{c.price}</span>
                    <span className="text-xs text-[#6E7881] line-through">{c.old}</span>
                  </div>
                  <div className="flex flex-col gap-0.5 pt-1">
                    <div className="flex justify-between text-[10px] leading-[15px]">
                      <span className="font-semibold text-[#BB0112]">{c.left}</span>
                      <span className="text-[#6E7881]">{c.sold}% terjual</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-[#EAEDFF]">
                      <div className="h-full rounded-full bg-[#E02928]" style={{ width: `${c.sold}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Rekomendasi */}
        <div className="flex items-center justify-between px-4 pb-2 pt-5">
          <div>
            <h3 className="text-lg font-bold leading-6 tracking-[-0.18px]">Menu Rekomendasi</h3>
            <p className="text-xs leading-4 text-[#3E4850]">Langsung matang & fresh dari dapur</p>
          </div>
          <button
            onClick={onOpenExplorer}
            className="flex items-center text-xs font-semibold text-[#006591] hover:underline"
          >
            Lihat Semua <IconChevronRight size={12} />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 px-4 sm:grid-cols-3 md:grid-cols-4">
          {shown.length > 0 ? (
            shown.map((f) => (
              <FoodCard key={f.name} f={f} onAdd={() => setCart((c) => c + 1)} />
            ))
          ) : (
            <div className="col-span-2 py-8 text-center text-sm text-[#6E7881]">
              Tidak ada menu yang sesuai dengan pencarian.
            </div>
          )}
        </div>

        {/* Jaminan Pengiriman */}
        <div className="px-4 pt-6">
          <div className="flex items-center gap-3 rounded-xl bg-[#F2F3FF] p-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#006591]/10 text-[#006591]">
              <IconTruckDelivery size={17} />
            </div>
            <div>
              <div className="text-[13px] font-bold leading-[18px]">Jaminan Hangat Tiba di Meja</div>
              <div className="text-xs leading-4 text-[#3E4850]">Dikemas higienis dengan thermal bag khusus TokoKu.</div>
            </div>
          </div>
        </div>

        {/* Info akun */}
        <div className="px-4 pt-4">
          <div className="flex items-center justify-between rounded-xl border border-[#E2E7FF] bg-white p-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-full bg-[#006591] text-sm font-bold text-white">
                {userName.charAt(0)}
              </div>
              <div>
                <p className="text-[13px] font-semibold text-[#131B2E]">{userName}</p>
                <p className="text-[11px] text-[#6E7881]">{userEmail}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={onOpenAdmin}
                className="flex items-center gap-1 rounded-lg bg-[#EAEDFF] px-2.5 py-1.5 text-xs font-bold text-[#006591] hover:bg-[#C9E6FF]"
              >
                <IconShieldLock size={14} />
                <span>Panel Admin</span>
              </button>
              <button
                onClick={onLogout}
                className="rounded-lg bg-rose-50 px-3 py-1.5 text-xs font-semibold text-rose-600 hover:bg-rose-100"
              >
                Keluar
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* ── Bottom Nav ── */}
      <nav className="fixed inset-x-0 bottom-0 z-20 bg-white/90 shadow-[0_-2px_10px_rgba(0,0,0,0.04)] backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-around px-2">
          {[
            { label: "Beranda",   Icon: IconHome },
            { label: "Kategori",  Icon: IconTools, onClick: onOpenExplorer },
            { label: "Keranjang", Icon: IconShoppingBag, badge: cart, onClick: onOpenCart },
            { label: "Akun",      Icon: IconUser, onClick: onOpenAccount },
          ].map(({ label, Icon, badge, onClick }) => {
            const active = activeNav === label;
            return (
              <button
                key={label}
                onClick={() => {
                  setActiveNav(label);
                  if (onClick) onClick();
                }}
                className={`flex h-12 w-16 flex-col items-center justify-center gap-0.5 text-xs transition-colors ${
                  active ? "text-[#0EA5E9]" : "text-[#3E4850]"
                }`}
              >
                <span className="relative">
                  <Icon size={18} />
                  {badge !== undefined && (
                    <span className="absolute -right-2 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#BB0112] px-1 text-[9px] font-bold text-white">
                      {badge}
                    </span>
                  )}
                </span>
                {label}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
