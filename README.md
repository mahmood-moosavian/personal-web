# وب‌سایت شخصی - سید محمود موسویان پور

<div dir="rtl">

وب‌سایت شخصی و نمونه کارهای **سید محمود موسویان پور** - مهندس نرم‌افزار و توسعه‌دهنده فول‌استک.

## ✨ ویژگی‌ها

- 🎨 طراحی تیره حرفه‌ای با رنگ اکسنت فیروزه‌ای
- 📱 کاملاً واکنشو (Responsive) برای موبایل و تبلت
- 🚀 سایت استاتیک - بدون نیاز به بک‌اند یا دیتابیس
- ⚡ سرعت بالا و سئو بهینه
- 🌐 پشتیبانی کامل از زبان فارسی و RTL
- 🎭 انیمیشن‌های روان و تعاملی
- 🔧 فرم تماس با قابلیت ارسال مستقیم ایمیل
- ♿ پشتیبانی از `prefers-reduced-motion`

## 📋 بخش‌های وب‌سایت

1. **خانه (Hero)** - معرفی کوتاه و دکمه‌های CTA
2. **درباره من** - بیوگرافی، مهارت‌ها، تکنولوژی‌ها
3. **خدمات** - ۶ سرویس اصلی
4. **نمونه کار** - گالری پروژه‌ها
5. **تماس** - فرم تماس + راه‌های ارتباطی

## 🛠 تکنولوژی‌ها

- **HTML5** - ساختار معنایی
- **CSS3** - استایل پیشرفته با Custom Properties و Grid/Flexbox
- **Vanilla JavaScript** - بدون فریم‌ورک، سبک و سریع
- **Vazirmatn Font** - فونت فارسی حرفه‌ای
- **SVG Icons** - بدون نیاز به کتابخانه آیکون

## 📁 ساختار پروژه

```
personal-website/
├── index.html          # فایل اصلی HTML
├── css/
│   └── style.css       # استایل‌ها
├── js/
│   └── main.js         # جاوااسکریپت
├── assets/             # پوشه برای عکس‌ها (در صورت نیاز)
├── README.md           # این فایل
└── .gitignore          # فایل‌های نادیده گرفته شده توسط گیت
```

---

## 🚀 راهنمای دیپلوی

### گزینه ۱: دیپلوی روی Cloudflare Pages (پیشنهادی - رایگان و سریع)

#### روش A: آپلود مستقیم (ساده‌ترین روش - بدون نیاز به گیت)

1. وارد حساب Cloudflare بشید: [https://dash.cloudflare.com](https://dash.cloudflare.com)
2. از منوی سمت چپ، **Workers & Pages** را انتخاب کنید
3. روی **Create application** کلیک کنید
4. تب **Pages** را انتخاب کنید
5. روی **Upload assets** کلیک کنید
6. یک نام برای پروژه وارد کنید (مثلاً `smmousavian`)
7. تمام فایل‌های داخل پوشه `personal-website` را به صورت ZIP فشرده کنید
8. فایل ZIP را آپلود کنید یا فایل‌ها را بکشید (Drag & Drop)
9. روی **Deploy site** کلیک کنید
10. تمام! سایت شما در چند ثانیه آنلاین می‌شود ✅

آدرس سایت شما چیزی شبیه این خواهد بود:
```
https://smmousavian.pages.dev
```

#### روش B: اتصال به GitHub (برای آپدیت خودکار)

1. کدها را به یک ریپوی GitHub پوش کنید (طبق راهنمای زیر)
2. وارد Cloudflare Pages بشید
3. **Create application** → **Pages** → **Connect to Git**
4. ریپوی خود را انتخاب کنید
5. تنظیمات Build:
   - **Framework preset:** None
   - **Build command:** (خالی بگذارید)
   - **Build output directory:** `/` (یا خالی)
6. روی **Save and Deploy** کلیک کنید

هر بار که به گیت پوش کنید، سایت به صورت خودکار آپدیت می‌شود.

---

### گزینه ۲: دیپلوی روی GitHub Pages

#### مرحله ۱: ساخت ریپو در گیت‌هاب

1. وارد [GitHub](https://github.com) بشید
2. روی **+** در گوشه بالا راست کلیک کنید → **New repository**
3. نام ریپو را `your-username.github.io` بگذارید (مثلاً `smmousavian.github.io`)
   - ⚠️ نام ریپو باید دقیقاً با نام کاربری گیت‌هاب شما یکی باشد
4. **Public** را انتخاب کنید
5. **Create repository** را بزنید

#### مرحله ۲: پوش کردن کدها

در ترمینال (Command Prompt در ویندوز / Terminal در مک و لینوکس):

```bash
# وارد پوشه پروژه بشید
cd path/to/personal-website

# راه‌اندازی گیت
git init

# افزودن همه فایل‌ها
git add .

# کامیت اولیه
git commit -m "Initial commit - personal website"

# تنظیم شاخه اصلی
git branch -M main

# اتصال به ریپوی گیت‌هاب (آدرس خودتان را جایگزین کنید)
git remote add origin https://github.com/your-username/your-username.github.io.git

# پوش کردن کدها
git push -u origin main
```

هنگام پوش کردن، گیت‌هاب از شما نام کاربری و توکن می‌خواهد:
- **Username:** نام کاربری گیت‌هاب شما
- **Password:** توکن Personal Access Token (نه پسوورد واقعی!)
  - برای ساخت توکن: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token
  - تیک **repo** را بزنید
  - توکن را کپی کنید و در ترمینال وارد کنید

#### مرحله ۳: فعال‌سازی GitHub Pages

1. وارد ریپو بشید
2. تب **Settings** را انتخاب کنید
3. از منوی سمت چپ، **Pages** را انتخاب کنید
4. در بخش **Source**، گزینه **Deploy from a branch** را انتخاب کنید
5. **Branch** را `main` و فولدر `/root` انتخاب کنید
6. روی **Save** کلیک کنید

سایت شما در چند دقیقه روی این آدرس آنلاین می‌شود:
```
https://your-username.github.io
```

---

### گزینه ۳: دیپلوی روی Netlify (رایگان، آسان)

1. وارد [Netlify](https://netlify.com) بشید
2. از داشبورد، **Add new site** → **Deploy manually**
3. پوشه `personal-website` را بکشید و رها کنید (Drag & Drop)
4. سایت در چند ثانیه آنلاین می‌شود

---

## ✏️ سفارشی‌سازی

### تغییر اطلاعات تماس

فایل `index.html` را باز کنید و در بخش **Contact** این موارد را تغییر دهید:

- ایمیل: `contact@smmousanian.ir` → ایمیل خودتان
- موبایل: `tel:+98` → شماره موبایل شما
- تلگرام: `https://t.me/` → لینک کانال یا چت تلگرام شما

### تغییر رنگ اصلی

فایل `css/style.css` را باز کنید و در ابتدای فایل (بخش `:root`) این مقادیر را تغییر دهید:

```css
--accent: #06b6d4;       /* رنگ اصلی */
--accent-hover: #22d3ee; /* رنگ هنگام هاور */
```

### افزودن عکس نمونه کار

عکس‌ها را در پوشه `assets/` قرار دهید و در فایل `index.html` در بخش Portfolio، به جای `background` گرادیان، از عکس استفاده کنید:

```html
<div class="portfolio-image" style="background: url('assets/project1.jpg') center/cover;">
```

### اتصال فرم تماس به سرویس واقعی (اختیاری)

به صورت پیش‌فرض، فرم تماس از `mailto:` استفاده می‌کند. برای فرم واقعی:

1. در [Formspree](https://formspree.io) ثبت‌نام کنید (رایگان)
2. یک Form بسازید و آدرس URL آن را کپی کنید
3. در فایل `index.html`، تگ `<form>` را پیدا کنید:
   ```html
   <form class="contact-form" data-animate id="contactForm">
   ```
4. اضافه کنید:
   ```html
   <form action="https://formspree.io/f/YOUR_ID" method="POST" class="contact-form" data-animate id="contactForm">
   ```
5. در فایل `js/main.js`، بخش **Contact Form Handling** را با ارسال واقعی AJAX جایگزین کنید.

---

## 🌐 اتصال دامنه اختصاصی (اختیاری)

### روی Cloudflare Pages:

1. وارد سایت بشید → پروژه Pages → **Custom domains**
2. روی **Set up a custom domain** کلیک کنید
3. دامنه خود را وارد کنید (مثلاً `smmousanian.ir`)
4. DNS های دامنه را به Cloudflare تغییر دهید
5. در چند دقیقه دامنه فعال می‌شود (SSL خودکار)

### روی GitHub Pages:

1. ریپو → Settings → Pages → **Custom domain**
2. دامنه خود را وارد کنید
3. در پنل DNS دامنه، رکورد A یا CNAME مناسب اضافه کنید:
   ```
   A     @     185.199.108.153
   A     @     185.199.109.153
   A     @     185.199.110.153
   A     @     185.199.111.153
   CNAME www  your-username.github.io
   ```
4. صبر کنید تا DNS منتشر شود (تا ۲۴ ساعت)

---

## 📊 بهینه‌سازی سئو

این سایت دارای:

- ✅ Meta description و keywords
- ✅ Open Graph tags برای اشتراک‌گذاری در شبکه‌های اجتماعی
- ✅ HTML معنایی (semantic HTML)
- ✅ سرعت بالا (سایت استاتیک بدون فریم‌ورک)
- ✅ Mobile-friendly

برای بهبود بیشتر:
- در Google Search Console سایت را ثبت کنید
- یک فایل `sitemap.xml` اضافه کنید
- در Google Analytics ثبت‌نام کنید

---

## 📝 مجوز

این پروژه متعلق به سید محمود موسویان پور است. استفاده تجاری نیاز به اجازه دارد.

## 📞 تماس

- **موبایل:** 09371990151
- **ایمیل:** mohandes.moosavian@gmail.com
- **تلگرام:** [@mohandesmoosavian](https://t.me/mohandesmoosavian)
- **وب‌سایت:** [mohandesmoosavian.ir](https://mohandesmoosavian.ir)

---

<div align="center">

### ساخته شده با ❤ برای سید محمود موسویان پور

</div>

</div>
