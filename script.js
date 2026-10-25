const products = [
  { id: 1, title: "Смартфон Nexus 5", category: "electronics", price: 42990, desc: "6.4\" AMOLED, 8/256 ГБ", icon: "phone" },
  { id: 2, title: "Ноутбук Vertex 14", category: "electronics", price: 74990, desc: "14\" IPS, 16 ГБ RAM, SSD 512 ГБ", icon: "laptop" },
  { id: 3, title: "Наушники Aero Pro", category: "electronics", price: 14990, desc: "TWS, активное шумоподавление", icon: "headphones" },
  { id: 4, title: "Клавиатура Meridian", category: "electronics", price: 6990, desc: "Механика, подсветка, USB-C", icon: "keyboard" },
  { id: 5, title: "Монитор Vista 27", category: "electronics", price: 32990, desc: "2560×1440, 75 Гц, IPS", icon: "monitor" },
  { id: 6, title: "Колонка Pulse Mini", category: "electronics", price: 7990, desc: "Bluetooth 5.3, 12 ч работы", icon: "speaker" },

  { id: 7, title: "Куртка Nord Shell", category: "clothing", price: 12990, desc: "Мембрана, водоотталкивающая", icon: "jacket" },
  { id: 8, title: "Худи Basic Heavy", category: "clothing", price: 5490, desc: "Плотный футер, унисекс", icon: "hoodie" },
  { id: 9, title: "Кроссовки Trail Run", category: "clothing", price: 8990, desc: "Амортизация, дышащий верх", icon: "sneakers" },
  { id: 10, title: "Джинсы Slim Raw", category: "clothing", price: 6490, desc: "Прямой крой, плотный деним", icon: "jeans" },

  { id: 11, title: "Лампа Loft Desk", category: "home", price: 4290, desc: "Металл, регулировка угла", icon: "lamp" },
  { id: 12, title: "Кресло Fold Lounge", category: "home", price: 18990, desc: "Каркас из массива, ткань", icon: "chair" },
  { id: 13, title: "Кофемолка Mill Pro", category: "home", price: 5490, desc: "Керамические жернова", icon: "coffee" },
  { id: 14, title: "Набор посуды Steel 6", category: "home", price: 9990, desc: "6 предметов, нержавеющая сталь", icon: "cookware" },

  { id: 15, title: "Коврик Yoga Mat", category: "sports", price: 3490, desc: "6 мм, нескользящее покрытие", icon: "mat" },
  { id: 16, title: "Гантели Hex 2×8", category: "sports", price: 7490, desc: "Пара, обрезиненные диски", icon: "dumbbell" },
  { id: 17, title: "Скакалка Speed Rope", category: "sports", price: 1290, desc: "Стальной трос, подшипники", icon: "rope" },
  { id: 18, title: "Бутылка Hydro 1L", category: "sports", price: 1990, desc: "Нержавеющая сталь, 12 ч", icon: "bottle" }
];

const PER_PAGE = 6;

const state = {
  category: "all",
  query: "",
  shown: PER_PAGE
};

const categoryNames = {
  all: "Все категории",
  electronics: "Электроника",
  clothing: "Одежда",
  home: "Дом",
  sports: "Спорт"
};

const icons = {
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/></svg>',
  laptop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="12" rx="2"/><path d="M2 19h20"/></svg>',
  headphones: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a8 8 0 0 1 16 0"/><rect x="3" y="14" width="4" height="6" rx="1"/><rect x="17" y="14" width="4" height="6" rx="1"/></svg>',
  keyboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M6 11h.01M10 11h.01M14 11h.01M18 11h.01M8 14h8"/></svg>',
  monitor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
  speaker: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="14" r="3"/><circle cx="12" cy="6" r="1"/></svg>',
  jacket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3l4 3 4-3 3 3-2 4v11H7V10L5 6z"/><path d="M12 6v15"/></svg>',
  hoodie: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4a5 5 0 0 1 10 0v3l3 3v10H4V10l3-3z"/><path d="M9 7c1 1 5 1 6 0"/></svg>',
  sneakers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 16v-3l4-1 5-5 3 2 6 3v4z"/><path d="M3 16h18"/></svg>',
  jeans: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3h8l1 18h-4l-1-10-1 10H7z"/><path d="M8 3v4M16 3v4"/></svg>',
  lamp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v3M8 6h8l-2 6H10z"/><path d="M12 12v8M9 21h6"/></svg>',
  chair: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12v10H6z"/><path d="M5 14h14"/><path d="M7 14v7M17 14v7"/></svg>',
  coffee: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8h12v8a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z"/><path d="M17 10h2a2 2 0 0 1 0 4h-2"/><path d="M9 3v2M12 3v2"/></svg>',
  cookware: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10h16v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"/><path d="M2 12h2M20 12h2"/></svg>',
  mat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2" width="12" height="20" rx="3"/><path d="M12 6v12"/></svg>',
  dumbbell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9v6M6 7v10M18 7v10M21 9v6"/><path d="M6 12h12"/></svg>',
  rope: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4v16M17 4v16"/><path d="M7 8c3 2 7 2 10 0M7 16c3-2 7-2 10 0"/></svg>',
  bottle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M10 3h4v3l1 3v11a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V9l1-3z"/><path d="M9 13h6"/></svg>'
};

const productsEl = document.getElementById("products");
const filtersEl = document.getElementById("filters");
const searchInput = document.getElementById("searchInput");
const resultInfo = document.getElementById("resultInfo");
const loadMoreBtn = document.getElementById("loadMore");

function formatPrice(value) {
  return value.toLocaleString("ru-RU") + " \u20BD";
}

function getFiltered() {
  const query = state.query.trim().toLowerCase();

  return products.filter((product) => {
    const matchesCategory = state.category === "all" || product.category === state.category;
    const matchesQuery = !query || product.title.toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });
}

function createProductCard(product) {
  const li = document.createElement("li");
  li.className = "product";

  // Добавляем атрибут AOS для анимации появления
  li.setAttribute("data-aos", "fade-up");

  li.innerHTML = `
    <div class="product__media" aria-hidden="true">${icons[product.icon] || ""}</div>
    <div class="product__body">
      <p class="product__category">${categoryNames[product.category]}</p>
      <h3 class="product__title">${product.title}</h3>
      <p class="product__desc">${product.desc}</p>
      <div class="product__bottom">
        <span class="product__price">${formatPrice(product.price)}</span>
        <button type="button" class="product__action">В корзину</button>
      </div>
    </div>
  `;

  return li;
}

function renderEmpty() {
  productsEl.innerHTML = `
    <li class="empty">
      <p class="empty__title">Ничего не найдено</p>
      <p class="empty__text">Измените категорию или поисковый запрос.</p>
    </li>
  `;
}

function render() {
  const filtered = getFiltered();
  const visible = filtered.slice(0, state.shown);

  productsEl.innerHTML = "";

  if (!filtered.length) {
    renderEmpty();
  } else {
    const fragment = document.createDocumentFragment();
    visible.forEach((product) => fragment.appendChild(createProductCard(product)));
    productsEl.appendChild(fragment);
  }

  const total = filtered.length;
  const shownNow = visible.length;

  resultInfo.textContent = total === 0
    ? "Найдено: 0 товаров"
    : `Показано ${shownNow} из ${total}`;

  loadMoreBtn.disabled = shownNow >= total;

  // Обязательно обновляем AOS после перерисовки HTML, 
  // чтобы новые карточки анимировались при клике на фильтры или поиск
  if (window.AOS) {
    AOS.refresh();
  }
}

filtersEl.addEventListener("click", (event) => {
  const button = event.target.closest(".filter");
  if (!button) return;

  filtersEl.querySelectorAll(".filter").forEach((btn) => btn.classList.remove("is-active"));
  button.classList.add("is-active");

  state.category = button.dataset.category;
  state.shown = PER_PAGE;
  render();
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  state.shown = PER_PAGE;
  render();
});

loadMoreBtn.addEventListener("click", () => {
  state.shown += PER_PAGE;
  render();
});

render();