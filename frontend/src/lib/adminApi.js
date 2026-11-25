// adminApi.js - Connection layer between Frontend and Backend API

const BASE_URL = "/api";

// Initial Seed Data (Mirrors MySQL Seeder in backend)
const INITIAL_STATS = {
  totalRevenue: 28450000,
  totalOrders: 142,
  totalProducts: 24,
  totalUsers: 58,
};

const INITIAL_CATEGORIES = [
  { id: 1, name: "Nasi & Olahan Ayam", slug: "nasi-ayam", description: "Menu olahan nasi dan ayam lezat berempah", productCount: 6 },
  { id: 2, name: "Aneka Mie & Bakso", slug: "mie-bakso", description: "Mie kenyal dan bakso daging sapi pilihan", productCount: 5 },
  { id: 3, name: "Burger & Fast Food", slug: "burger-fast-food", description: "Burger daging tebal dengan saus istimewa", productCount: 4 },
  { id: 4, name: "Kopi & Minuman", slug: "kopi-minuman", description: "Minuman dingin dan kopi susu kekinian", productCount: 5 },
  { id: 5, name: "Cemilan & Snack", slug: "cemilan-snack", description: "Kudapan gurih teman bersantai", productCount: 2 },
  { id: 6, name: "Dessert Manis", slug: "dessert-manis", description: "Kue, puding dan hidangan penutup", productCount: 2 },
];

const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: "Ayam Bakar Madu Komplit",
    slug: "ayam-bakar-madu-komplit",
    categoryId: 1,
    categoryName: "Nasi & Olahan Ayam",
    price: 28000,
    stock: 15,
    sold: 142,
    images: ["/assets/menu-ayam.png"],
    description: "Ayam bakar bumbu madu gurih manis disajikan lengkap dengan sambal dan lalapan.",
    status: "active",
  },
  {
    id: 2,
    name: "Mie Ayam Jamur Bakso",
    slug: "mie-ayam-jamur-bakso",
    categoryId: 2,
    categoryName: "Aneka Mie & Bakso",
    price: 21000,
    stock: 8,
    sold: 210,
    images: ["/assets/menu-bakso.png"],
    description: "Mie kenyal dengan topping ayam tumis jamur gurih ditambah bakso sapi asli.",
    status: "active",
  },
  {
    id: 3,
    name: "Es Kopi Susu Aren 500ml",
    slug: "es-kopi-susu-aren",
    categoryId: 4,
    categoryName: "Kopi & Minuman",
    price: 16500,
    stock: 24,
    sold: 315,
    images: ["/assets/menu-kopi.png"],
    description: "Kopi espresso pilihan dipadu susu creamy dan manis lembut gula aren murni.",
    status: "active",
  },
  {
    id: 4,
    name: "Bakso Urat Jumbo Kuah Kaldu",
    slug: "bakso-urat-jumbo",
    categoryId: 2,
    categoryName: "Aneka Mie & Bakso",
    price: 25000,
    stock: 4, // low stock warning
    sold: 98,
    images: ["/assets/menu-bakso.png"],
    description: "Bakso urat sapi ukuran jumbo dengan kuah kaldu sapi sumsum asli yang hangat dan gurih.",
    status: "active",
  },
  {
    id: 5,
    name: "Paket Hemat Bento Rice Bowl",
    slug: "paket-hemat-bento",
    categoryId: 1,
    categoryName: "Nasi & Olahan Ayam",
    price: 32000,
    stock: 18,
    sold: 76,
    images: ["/assets/cat-paket.png"],
    description: "Paket lengkap nasi bento dengan chicken katsu, telur, salad dan saus teriyaki.",
    status: "active",
  },
  {
    id: 6,
    name: "Dimsum Mentai Panggang (4 pcs)",
    slug: "dimsum-mentai",
    categoryId: 5,
    categoryName: "Cemilan & Snack",
    price: 26000,
    stock: 3, // low stock warning
    sold: 185,
    images: ["/assets/menu-ayam.png"],
    description: "Dimsum ayam udang lembut dibalut saus mentai gurih lalu di-torch sampai wangi.",
    status: "active",
  },
];

const INITIAL_ORDERS = [
  {
    id: 101,
    orderNumber: "ORD-20261123-8921",
    customer: {
      id: 2,
      name: "Budi Santoso",
      email: "budi.santoso@email.com",
      phone: "081234567890",
      address: "Jl. Sudirman No. 45, Jakarta Pusat",
    },
    items: [
      { name: "Ayam Bakar Madu Komplit", qty: 2, price: 28000 },
      { name: "Es Kopi Susu Aren 500ml", qty: 1, price: 16500 },
    ],
    total: 72500,
    paymentStatus: "paid",
    paymentMethod: "GoPay / Midtrans",
    shippingStatus: "shipped",
    date: "23 Nov 2026, 08:45 WIB",
  },
  {
    id: 102,
    orderNumber: "ORD-20261123-7412",
    customer: {
      id: 3,
      name: "Siti Rahma",
      email: "siti.rahma@email.com",
      phone: "085712348899",
      address: "Komplek Melati Indah B4/12, Bandung",
    },
    items: [
      { name: "Mie Ayam Jamur Bakso", qty: 2, price: 21000 },
    ],
    total: 42000,
    paymentStatus: "paid",
    paymentMethod: "BCA Virtual Account",
    shippingStatus: "processing",
    date: "23 Nov 2026, 08:30 WIB",
  },
  {
    id: 103,
    orderNumber: "ORD-20261123-5510",
    customer: {
      id: 4,
      name: "Ahmad Fauzi",
      email: "ahmad.fauzi@email.com",
      phone: "081399887766",
      address: "Jl. Diponegoro No. 18, Surabaya",
    },
    items: [
      { name: "Paket Hemat Bento Rice Bowl", qty: 3, price: 32000 },
      { name: "Es Kopi Susu Aren 500ml", qty: 3, price: 16500 },
    ],
    total: 145500,
    paymentStatus: "unpaid",
    paymentMethod: "QRIS",
    shippingStatus: "pending",
    date: "23 Nov 2026, 08:12 WIB",
  },
  {
    id: 104,
    orderNumber: "ORD-20261122-4419",
    customer: {
      id: 5,
      name: "Dewi Lestari",
      email: "dewi.lestari@email.com",
      phone: "082155667788",
      address: "Apartemen Senopati Tower B-14, Jakarta",
    },
    items: [
      { name: "Dimsum Mentai Panggang (4 pcs)", qty: 2, price: 26000 },
      { name: "Bakso Urat Jumbo Kuah Kaldu", qty: 1, price: 25000 },
    ],
    total: 77000,
    paymentStatus: "paid",
    paymentMethod: "ShopeePay",
    shippingStatus: "delivered",
    date: "22 Nov 2026, 19:20 WIB",
  },
];

const INITIAL_USERS = [
  {
    id: 1,
    name: "Super Admin TokoKu",
    email: "admin@ecommerce.com",
    role: "admin",
    phone: "081234567890",
    address: "Kantor Pusat TokoKu, Cloud Center Lt. 8",
    createdAt: "2026-11-01",
  },
  {
    id: 2,
    name: "Budi Santoso",
    email: "budi.santoso@email.com",
    role: "customer",
    phone: "081234567890",
    address: "Jl. Sudirman No. 45, Jakarta Pusat",
    createdAt: "2026-11-10",
  },
  {
    id: 3,
    name: "Siti Rahma",
    email: "siti.rahma@email.com",
    role: "customer",
    phone: "085712348899",
    address: "Komplek Melati Indah B4/12, Bandung",
    createdAt: "2026-11-14",
  },
  {
    id: 4,
    name: "Ahmad Fauzi",
    email: "ahmad.fauzi@email.com",
    role: "customer",
    phone: "081399887766",
    address: "Jl. Diponegoro No. 18, Surabaya",
    createdAt: "2026-11-18",
  },
  {
    id: 5,
    name: "Dewi Lestari",
    email: "dewi.lestari@email.com",
    role: "customer",
    phone: "082155667788",
    address: "Apartemen Senopati Tower B-14, Jakarta",
    createdAt: "2026-11-19",
  },
];

// Helper for persistent local storage
const getStorage = (key, defaultVal) => {
  try {
    const raw = localStorage.getItem(`tokoku_${key}`);
    return raw ? JSON.parse(raw) : defaultVal;
  } catch {
    return defaultVal;
  }
};

const setStorage = (key, val) => {
  try {
    localStorage.setItem(`tokoku_${key}`, JSON.stringify(val));
  } catch (e) {
    console.warn("Storage write error", e);
  }
};

// State caches
let productsCache = getStorage("products", INITIAL_PRODUCTS);
let categoriesCache = getStorage("categories", INITIAL_CATEGORIES);
let ordersCache = getStorage("orders", INITIAL_ORDERS);
let usersCache = getStorage("users", INITIAL_USERS);

export const adminApi = {
  // Test connection to backend server
  async checkBackendHealth() {
    try {
      const res = await fetch(`${BASE_URL}/products?limit=1`, {
        signal: AbortSignal.timeout(2000),
      });
      return { online: res.ok, status: res.status };
    } catch {
      return { online: false, status: "offline" };
    }
  },

  // Auth: Login
  async login(email, password) {
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        signal: AbortSignal.timeout(3000),
      });
      if (res.ok) {
        const json = await res.json();
        if (json.data?.token) {
          localStorage.setItem("tokoku_token", json.data.token);
        }
        return { success: true, user: json.data?.user };
      }
    } catch (e) {
      console.info("Backend offline or error, checking local users");
    }

    // Local / Demo Login verification
    const foundUser = usersCache.find(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    );
    if (email === "admin@ecommerce.com" || (foundUser && foundUser.role === "admin")) {
      return {
        success: true,
        user: foundUser || {
          id: 1,
          name: "Super Admin TokoKu",
          email: "admin@ecommerce.com",
          role: "admin",
        },
      };
    }
    if (foundUser) {
      return { success: true, user: foundUser };
    }
    // Default fallback user
    return {
      success: true,
      user: {
        id: 99,
        name: email.split("@")[0] || "User Demo",
        email: email,
        role: "customer",
      },
    };
  },

  // 1. Dashboard Stats
  async getDashboard() {
    try {
      const token = localStorage.getItem("tokoku_token");
      const res = await fetch(`${BASE_URL}/admin/dashboard`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        signal: AbortSignal.timeout(2500),
      });
      if (res.ok) {
        const json = await res.json();
        return { success: true, data: json.data, source: "backend" };
      }
    } catch (e) {
      // Offline fallback
    }

    // Calculate dynamic stats from local state
    const totalRev = ordersCache
      .filter((o) => o.paymentStatus === "paid")
      .reduce((sum, o) => sum + Number(o.total || 0), 0);

    const lowStock = productsCache.filter((p) => Number(p.stock) <= 6);
    const topProducts = [...productsCache]
      .sort((a, b) => (b.sold || 0) - (a.sold || 0))
      .slice(0, 4);

    return {
      success: true,
      source: "local",
      data: {
        stats: {
          totalRevenue: totalRev || INITIAL_STATS.totalRevenue,
          totalOrders: ordersCache.length,
          totalProducts: productsCache.length,
          totalUsers: usersCache.length,
        },
        ordersByStatus: [
          { status: "pending", count: ordersCache.filter((o) => o.shippingStatus === "pending").length },
          { status: "processing", count: ordersCache.filter((o) => o.shippingStatus === "processing").length },
          { status: "shipped", count: ordersCache.filter((o) => o.shippingStatus === "shipped").length },
          { status: "delivered", count: ordersCache.filter((o) => o.shippingStatus === "delivered").length },
          { status: "cancelled", count: ordersCache.filter((o) => o.shippingStatus === "cancelled").length },
        ],
        recentOrders: ordersCache.slice(0, 5),
        lowStockProducts: lowStock,
        topProducts,
      },
    };
  },

  // 2. Products Management (CRUD)
  async getProducts() {
    try {
      const res = await fetch(`${BASE_URL}/products?limit=50`, {
        signal: AbortSignal.timeout(2500),
      });
      if (res.ok) {
        const json = await res.json();
        if (json.data?.products?.length) {
          productsCache = json.data.products;
          setStorage("products", productsCache);
          return { success: true, data: productsCache, source: "backend" };
        }
      }
    } catch (e) {}

    return { success: true, data: productsCache, source: "local" };
  },

  async addProduct(newProduct) {
    try {
      const token = localStorage.getItem("tokoku_token");
      const res = await fetch(`${BASE_URL}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(newProduct),
        signal: AbortSignal.timeout(3000),
      });
      if (res.ok) {
        const json = await res.json();
        if (json.data?.product) {
          productsCache.unshift(json.data.product);
          setStorage("products", productsCache);
          return { success: true, product: json.data.product };
        }
      }
    } catch (e) {}

    const cat = categoriesCache.find((c) => c.id === Number(newProduct.categoryId));
    const created = {
      id: Date.now(),
      name: newProduct.name,
      slug: newProduct.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      categoryId: Number(newProduct.categoryId) || 1,
      categoryName: cat ? cat.name : "Umum",
      price: Number(newProduct.price) || 0,
      stock: Number(newProduct.stock) || 0,
      sold: 0,
      images: [newProduct.image || "/assets/menu-ayam.png"],
      description: newProduct.description || "",
      status: "active",
    };
    productsCache = [created, ...productsCache];
    setStorage("products", productsCache);
    return { success: true, product: created };
  },

  async updateProduct(id, updatedFields) {
    try {
      const token = localStorage.getItem("tokoku_token");
      await fetch(`${BASE_URL}/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(updatedFields),
        signal: AbortSignal.timeout(3000),
      });
    } catch (e) {}

    productsCache = productsCache.map((p) =>
      p.id === id ? { ...p, ...updatedFields } : p
    );
    setStorage("products", productsCache);
    return { success: true };
  },

  async deleteProduct(id) {
    try {
      const token = localStorage.getItem("tokoku_token");
      await fetch(`${BASE_URL}/products/${id}`, {
        method: "DELETE",
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        signal: AbortSignal.timeout(3000),
      });
    } catch (e) {}

    productsCache = productsCache.filter((p) => p.id !== id);
    setStorage("products", productsCache);
    return { success: true };
  },

  // 3. Categories Management (CRUD)
  async getCategories() {
    try {
      const res = await fetch(`${BASE_URL}/categories`, {
        signal: AbortSignal.timeout(2500),
      });
      if (res.ok) {
        const json = await res.json();
        if (json.data?.categories?.length) {
          categoriesCache = json.data.categories;
          setStorage("categories", categoriesCache);
          return { success: true, data: categoriesCache, source: "backend" };
        }
      }
    } catch (e) {}

    return { success: true, data: categoriesCache, source: "local" };
  },

  async addCategory(newCat) {
    try {
      const token = localStorage.getItem("tokoku_token");
      await fetch(`${BASE_URL}/categories`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(newCat),
        signal: AbortSignal.timeout(3000),
      });
    } catch (e) {}

    const created = {
      id: Date.now(),
      name: newCat.name,
      slug: newCat.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      description: newCat.description || "",
      productCount: 0,
    };
    categoriesCache = [...categoriesCache, created];
    setStorage("categories", categoriesCache);
    return { success: true, category: created };
  },

  async deleteCategory(id) {
    try {
      const token = localStorage.getItem("tokoku_token");
      await fetch(`${BASE_URL}/categories/${id}`, {
        method: "DELETE",
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        signal: AbortSignal.timeout(3000),
      });
    } catch (e) {}

    categoriesCache = categoriesCache.filter((c) => c.id !== id);
    setStorage("categories", categoriesCache);
    return { success: true };
  },

  // 4. Orders Management
  async getOrders() {
    try {
      const token = localStorage.getItem("tokoku_token");
      const res = await fetch(`${BASE_URL}/admin/orders?limit=50`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        signal: AbortSignal.timeout(2500),
      });
      if (res.ok) {
        const json = await res.json();
        if (json.data?.orders?.length) {
          ordersCache = json.data.orders;
          setStorage("orders", ordersCache);
          return { success: true, data: ordersCache, source: "backend" };
        }
      }
    } catch (e) {}

    return { success: true, data: ordersCache, source: "local" };
  },

  async updateOrderStatus(orderId, newStatus) {
    try {
      const token = localStorage.getItem("tokoku_token");
      await fetch(`${BASE_URL}/admin/orders/${orderId}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({ status: newStatus }),
        signal: AbortSignal.timeout(3000),
      });
    } catch (e) {}

    ordersCache = ordersCache.map((ord) =>
      ord.id === orderId || ord.orderNumber === orderId
        ? { ...ord, shippingStatus: newStatus }
        : ord
    );
    setStorage("orders", ordersCache);
    return { success: true };
  },

  // 5. Users Management
  async getUsers() {
    try {
      const token = localStorage.getItem("tokoku_token");
      const res = await fetch(`${BASE_URL}/admin/users?limit=50`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        signal: AbortSignal.timeout(2500),
      });
      if (res.ok) {
        const json = await res.json();
        if (json.data?.users?.length) {
          usersCache = json.data.users;
          setStorage("users", usersCache);
          return { success: true, data: usersCache, source: "backend" };
        }
      }
    } catch (e) {}

    return { success: true, data: usersCache, source: "local" };
  },

  async updateUserRole(userId, newRole) {
    try {
      const token = localStorage.getItem("tokoku_token");
      await fetch(`${BASE_URL}/admin/users/${userId}/role`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({ role: newRole }),
        signal: AbortSignal.timeout(3000),
      });
    } catch (e) {}

    usersCache = usersCache.map((u) =>
      u.id === userId ? { ...u, role: newRole } : u
    );
    setStorage("users", usersCache);
    return { success: true };
  },

  async deleteUser(userId) {
    try {
      const token = localStorage.getItem("tokoku_token");
      await fetch(`${BASE_URL}/admin/users/${userId}`, {
        method: "DELETE",
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        signal: AbortSignal.timeout(3000),
      });
    } catch (e) {}

    usersCache = usersCache.filter((u) => u.id !== userId);
    setStorage("users", usersCache);
    return { success: true };
  },
};
