/* رقم واتساب (بالصيغة الدولية، بدون + أو 00) */
const WHATSAPP = "212688962517";
const DELIVERY_FEE = 15, FREE_FROM = 200;

// نظام اللغات (العربية والإنجليزية)
let currentLang = localStorage.getItem("nv-lang") || "ar";

const TRANSLATIONS = {
  ar: {
    pageTitle: "Nutrivibe | وجبات صحية للرياضيين",
    logoSub: "نيوتريفايب",
    navCalc: "الحاسبة",
    navMeals: "الوجبات",
    navHow: "كيف نعمل",
    cartText: "السلة",
    heroTitle: "وجبات مضبوطة حسب هدفك الرياضي",
    heroLead: "أدخل معلوماتك، وشاهد السعرات الحرارية والماكروز الخاصة بك فوراً. ثم اختر الوجبات والحصص التي تناسب احتياجاتك، ونوصلها إلى باب منزلك في طنجة.",
    macroProtein: "بروتين",
    macroCarb: "كربوهيدرات",
    macroFat: "دهون",
    calcTitleText: "حاسبة السعرات والماكروز",
    calcSub: "تتحدث النتيجة مباشرة مع كل تعديل.",
    labelGender: "الجنس",
    genderMale: "ذكر",
    genderFemale: "أنثى",
    labelAge: "العمر",
    labelWeight: "الوزن (كغ)",
    labelHeight: "الطول (سم)",
    labelActivity: "النشاط البدني",
    act1: "قليل: جلوس طوال اليوم غالباً",
    act2: "خفيف: تمرين من 1 إلى 3 مرات أسبوعياً",
    act3: "متوسط: تمرين من 3 إلى 5 مرات أسبوعياً",
    act4: "عالي: تمرين من 6 إلى 7 مرات أسبوعياً",
    labelGoal: "الهدف",
    goalCut: "تنشيف (خسارة دهون)",
    goalMain: "ثبات الوزن",
    goalBulk: "تضخيم (بناء عضلات)",
    labelMealsCount: "عدد الوجبات في اليوم",
    mealsWord: "وجبات",
    kcalPerDay: "سعرة في اليوم",
    perSingleMeal: "الوجبة الواحدة تقريباً:",
    kcalShort: "سعرة",
    gramProt: "غ بروتين",
    seeMealsBtn: "عرض الوجبات المناسبة لي",
    calcNote: "التقدير مبني على معادلة Mifflin-St Jeor، وهو تقدير عام ولا يعد بديلاً لاستشارة أخصائي تغذية معتمد.",
    mealsHeader: "الوجبات",
    mealsHintInit: "اختر الحصة التي تناسبك وأضف البروتين إن رغبت. يتم احتساب السعرات والماكروز تلقائياً بناءً على اختيارك.",
    mealsHintCalculated: "قُمنا بترتيب الوجبات حسب هدفك. الوجبات التي تحمل شارة التمييز هي الأقرب لاحتياجات وجبتك الفردية.",
    filterAll: "الكل",
    filterCut: "تنشيف",
    filterMaintain: "ثبات",
    filterBulk: "تضخيم",
    howHeader: "كيف نعمل",
    step1Title: "حسب احتياجك",
    step1Desc: "أدخل وزنك، طولك، وهدفك في الحاسبة لنتعرف على سعراتك ومغذياتك بدقة.",
    step2Title: "ركّب طلبك",
    step2Desc: "اختر الوجبات، حدد حجم الحصة المناسبة، وأضف بروتيناً إضافياً إذا احتجت.",
    step3Title: "تواصل معنا",
    step3Desc: "املأ معلومات التوصيل وأرسل الطلب مباشرة عبر واتساب لنؤكد معك وقت الاستلام.",
    footerText: "نيوتريفايب، وجبات صحية للرياضيين في طنجة",
    currencyText: "الأسعار بالدرهم المغربي",
    currencyText2: "مشروع تجريبي من انتاج حمزة 7R",
    cartHeader: "السلة",
    emptyCart: "السلة فارغة. أضف وجبة من القائمة لبدء الطلب.",
    seeMealsGhost: "عرض الوجبات",
    subtotal: "مجموع الوجبات",
    deliveryTangier: "التوصيل في طنجة",
    freeDelivery: "مجاني",
    totalLabel: "المجموع",
    freeDeliveryNote: "التوصيل مجاني ابتداءً من",
    remainingForFree: "متبقي لك",
    currency: "درهم",
    orderNutritionSummary: "مجموع طلبك الغذائي:",
    namePlaceholder: "الاسم الكامل",
    phonePlaceholder: "رقم الهاتف",
    addrPlaceholder: "العنوان في طنجة (الحي، الشارع، رقم المنزل)",
    sendWaBtn: "أرسل الطلب عبر واتساب",
    copyOrderBtn: "نسخ الطلب",
    toastAdded: "تمت إضافة الوجبة إلى السلة",
    toastCopied: "تم نسخ الطلب",
    toastCopyFail: "تعذر نسخ الطلب",
    errName: "يرجى كتابة الاسم الكامل.",
    errPhone: "يرجى كتابة رقم هاتف صحيح.",
    errAddr: "يرجى كتابة عنوان التوصيل.",
    fitBadge: "مناسب لك",
    suggestedNote: "★ الحصة المقترحة لك بناءً على الحاسبة",
    extraProteinLabel: "أضف بروتيناً إضافياً (+",
    grams: "غ",
    addToCartBtn: "أضف إلى السلة",
    noMealsCategory: "لا توجد وجبات في هذا التصنيف.",
    sizeS: "صغيرة",
    sizeM: "عادية",
    sizeL: "كبيرة"
  },
  en: {
    pageTitle: "Nutrivibe | Healthy Meals for Athletes",
    logoSub: "Nutrivibe",
    navCalc: "Calculator",
    navMeals: "Meals",
    navHow: "How It Works",
    cartText: "Cart",
    heroTitle: "Precise Meals Tailored to Your Fitness Goal",
    heroLead: "Enter your details and instantly view your calories and macros. Choose meals and portions that fit your needs, and we'll deliver them straight to your door in Tangier.",
    macroProtein: "Protein",
    macroCarb: "Carbs",
    macroFat: "Fats",
    calcTitleText: "Calorie & Macro Calculator",
    calcSub: "Results update live with every adjustment.",
    labelGender: "Gender",
    genderMale: "Male",
    genderFemale: "Female",
    labelAge: "Age",
    labelWeight: "Weight (kg)",
    labelHeight: "Height (cm)",
    labelActivity: "Physical Activity",
    act1: "Sedentary: Little to no exercise, desk job",
    act2: "Light: Exercise 1-3 times a week",
    act3: "Moderate: Exercise 3-5 times a week",
    act4: "High: Exercise 6-7 times a week",
    labelGoal: "Goal",
    goalCut: "Cut (Fat Loss)",
    goalMain: "Maintain Weight",
    goalBulk: "Bulk (Muscle Gain)",
    labelMealsCount: "Meals per Day",
    mealsWord: "meals",
    kcalPerDay: "kcal / day",
    perSingleMeal: "Per single meal approx:",
    kcalShort: "kcal",
    gramProt: "g protein",
    seeMealsBtn: "View Meals Suited For Me",
    calcNote: "Estimates are based on the Mifflin-St Jeor equation and are general guidelines, not a replacement for professional nutrition advice.",
    mealsHeader: "Meals",
    mealsHintInit: "Choose your preferred portion and add extra protein if desired. Calories and macros update automatically.",
    mealsHintCalculated: "We've sorted meals based on your goal. Highlighted meals are closest to your single-meal targets.",
    filterAll: "All",
    filterCut: "Cut",
    filterMaintain: "Maintain",
    filterBulk: "Bulk",
    howHeader: "How It Works",
    step1Title: "Set Your Needs",
    step1Desc: "Enter your weight, height, and goal in the calculator to determine your exact target calories and macros.",
    step2Title: "Build Your Order",
    step2Desc: "Pick your meals, select the ideal portion size, and add extra protein if needed.",
    step3Title: "Connect With Us",
    step3Desc: "Fill in your delivery details and send your order via WhatsApp to confirm the delivery schedule.",
    footerText: "Nutrivibe, healthy meals for athletes in Tangier",
    currencyText: "Prices in Moroccan Dirham",
    currencyText2: "Demo project By Hamza7R®",
    cartHeader: "Cart",
    emptyCart: "Your cart is empty. Add a meal from the menu to start your order.",
    seeMealsGhost: "View Meals",
    subtotal: "Meals Subtotal",
    deliveryTangier: "Tangier Delivery",
    freeDelivery: "Free",
    totalLabel: "Total",
    freeDeliveryNote: "Free delivery on orders from",
    remainingForFree: "You are short by",
    currency: "MAD",
    orderNutritionSummary: "Order Nutrition Summary:",
    namePlaceholder: "Full Name",
    phonePlaceholder: "Phone Number",
    addrPlaceholder: "Address in Tangier (Neighborhood, Street, House No.)",
    sendWaBtn: "Send Order via WhatsApp",
    copyOrderBtn: "Copy Order",
    toastAdded: "Meal added to cart",
    toastCopied: "Order copied",
    toastCopyFail: "Could not copy order",
    errName: "Please enter your full name.",
    errPhone: "Please enter a valid phone number.",
    errAddr: "Please enter your delivery address.",
    fitBadge: "Best Fit",
    suggestedNote: "★ Suggested portion based on your calculator",
    extraProteinLabel: "Add extra protein (+",
    grams: "g",
    addToCartBtn: "Add to Cart",
    noMealsCategory: "No meals found in this category.",
    sizeS: "Small",
    sizeM: "Regular",
    sizeL: "Large"
  }
};

function t(key) {
  return TRANSLATIONS[currentLang][key] || TRANSLATIONS["ar"][key] || key;
}

function switchLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("nv-lang", lang);
  const htmlRoot = document.getElementById("htmlRoot");
  if (lang === 'en') {
    htmlRoot.setAttribute("lang", "en");
    htmlRoot.setAttribute("dir", "ltr");
    document.getElementById("langEnBtn").style.fontWeight = "bold";
    document.getElementById("langArBtn").style.fontWeight = "normal";
  } else {
    htmlRoot.setAttribute("lang", "ar");
    htmlRoot.setAttribute("dir", "rtl");
    document.getElementById("langArBtn").style.fontWeight = "bold";
    document.getElementById("langEnBtn").style.fontWeight = "normal";
  }
  updateStaticTexts();
  calculate();
  renderMeals();
  updateCount();
}

function updateStaticTexts() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (TRANSLATIONS[currentLang][key]) {
      el.textContent = TRANSLATIONS[currentLang][key];
    }
  });
}

const SIZES = {
  get s() { return { n: t("sizeS"), f: 0.8, pf: 0.85 }; },
  get m() { return { n: t("sizeM"), f: 1, pf: 1 }; },
  get l() { return { n: t("sizeL"), f: 1.25, pf: 1.2 }; }
};
const EXTRA = {p:20, kcal:80, price:10};

const MEALS = [
 {id:"chicken-quinoa",e:"🍗",name:{ar:"دجاج مشوي بالليمون والكينوا",en:"Lemon Herb Grilled Chicken & Quinoa"},desc:{ar:"صدر دجاج متبل بالليمون والأعشاب مع كينوا وخضر مشوية.",en:"Herb and lemon marinated chicken breast with quinoa and roasted veggies."},kcal:520,p:46,c:48,f:14,price:55,goals:["maintain","cut"]},
 {id:"turkey-kefta",e:"🥘",name:{ar:"كفتة الديك الرومي بالبطاطا الحلوة",en:"Turkey Kefta with Sweet Potatoes"},desc:{ar:"كفتة خفيفة بالطماطم والتوابل المغربية مع بطاطا حلوة.",en:"Light turkey meatballs with tomatoes, Moroccan spices, and sweet potatoes."},kcal:480,p:42,c:45,f:12,price:52,goals:["maintain","cut"]},
 {id:"sardine-rice",e:"🐟",name:{ar:"سردين مشوي مع أرز أسمر",en:"Grilled Sardines with Brown Rice"},desc:{ar:"سردين طازج مشوي مع أرز أسمر وسلطة طماطم وبصل.",en:"Fresh grilled sardines served with brown rice and tomato-onion salad."},kcal:560,p:38,c:55,f:20,price:48,goals:["maintain","bulk"]},
 {id:"beef-bowl",e:"🥩",name:{ar:"بول لحم مع أرز وخضر",en:"Lean Beef Rice Bowl"},desc:{ar:"شرائح لحم قليلة الدهون مع أرز وخضر مطهية وصلصة خفيفة.",en:"Lean beef strips with rice, cooked vegetables, and a light sauce."},kcal:640,p:48,c:60,f:22,price:68,goals:["bulk"]},
 {id:"omelette",e:"🍳",name:{ar:"أومليت السبانخ مع الشوفان",en:"Spinach Omelette with Oats"},desc:{ar:"بيض وسبانخ وجبن خفيف مع شوفان مطبوخ بالحليب.",en:"Eggs, spinach, and low-fat cheese with milk-cooked oats."},kcal:410,p:32,c:30,f:18,price:38,goals:["maintain","cut"]},
 {id:"tuna-salad",e:"🥗",name:{ar:"سلطة التونة والحمص",en:"Tuna & Chickpea Salad"},desc:{ar:"تونة بالماء وحمص وخيار وطماطم وزيت زيتون بكمية مضبوطة.",en:"Water-packed tuna, chickpeas, cucumber, tomatoes, and measured olive oil."},kcal:380,p:36,c:28,f:14,price:40,goals:["cut"]},
 {id:"pasta-chicken",e:"🍝",name:{ar:"باستا القمح الكامل بالدجاج",en:"Whole Wheat Chicken Pasta"},desc:{ar:"باستا قمح كامل مع دجاج وبروكلي وصلصة طماطم منزلية.",en:"Whole wheat pasta with chicken, broccoli, and homemade tomato sauce."},kcal:700,p:52,c:78,f:18,price:62,goals:["bulk"]},
 {id:"white-fish",e:"🐠",name:{ar:"فيليه سمك أبيض مع خضر مبخّرة",en:"White Fish Fillet with Steamed Veggies"},desc:{ar:"سمك أبيض خفيف مع خضر مبخرة وقطرة زيت زيتون.",en:"Light white fish with steamed vegetables and a touch of olive oil."},kcal:340,p:40,c:20,f:9,price:50,goals:["cut"]}
];

const $ = s => document.querySelector(s);
const fmt = n => Math.round(n).toLocaleString("en");
const store = {
  get(k){ try{ const v=localStorage.getItem(k); return v?JSON.parse(v):null; }catch(e){ return null; } },
  set(k,v){ try{ localStorage.setItem(k,JSON.stringify(v)); }catch(e){} }
};

/* ---------- calculator ---------- */
let target = null;
let calcDone = false;
const FOCUS = {cut:{prot:2.2,mult:0.8}, maintain:{prot:1.9,mult:1}, bulk:{prot:1.8,mult:1.12}};

function donutSVG(parts, r, sw, size){
  const C = 2*Math.PI*r, total = parts.reduce((a,b)=>a+b.v,0) || 1;
  let off = 0, out = `<circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="var(--line)" stroke-width="${sw}"/>`;
  parts.forEach(p=>{
    const len = (p.v/total)*C;
    out += `<circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="${p.c}" stroke-width="${sw}" stroke-dasharray="${len} ${C-len}" stroke-dashoffset="${-off}" transform="rotate(-90 ${size/2} ${size/2})"/>`;
    off += len;
  });
  return out;
}

function readInputs(){
  const g = n => parseFloat($(n).value);
  return {
    sex: document.querySelector('input[name=sex]:checked').value,
    age: g('#age'), w: g('#weight'), h: g('#height'),
    act: parseFloat($('#activity').value),
    goal: document.querySelector('input[name=goal]:checked').value,
    mpd: parseInt(document.querySelector('input[name=mpd]:checked').value,10)
  };
}

function calculate(){
  const i = readInputs();
  if(!(i.age>0 && i.w>0 && i.h>0)) return;
  const bmr = 10*i.w + 6.25*i.h - 5*i.age + (i.sex==="m" ? 5 : -161);
  const fc = FOCUS[i.goal];
  const kcal = bmr * i.act * fc.mult;
  const p = fc.prot * i.w;
  const f = (kcal*0.25)/9;
  const c = Math.max(0,(kcal - p*4 - f*9)/4);
  target = {kcal,p,c,f,goal:i.goal,mpd:i.mpd};
  $('#kcalOut').textContent = fmt(kcal);
  $('#pOut').textContent = fmt(p)+" "+t("grams");
  $('#cOut').textContent = fmt(c)+" "+t("grams");
  $('#fOut').textContent = fmt(f)+" "+t("grams");
  const sum = p*4+c*4+f*9;
  $('#barP').style.width = (p*4/sum*100)+"%";
  $('#barC').style.width = (c*4/sum*100)+"%";
  $('#barF').style.width = (f*9/sum*100)+"%";
  $('#bigRing').innerHTML = donutSVG([{v:p*4,c:"var(--pro)"},{v:c*4,c:"var(--carb)"},{v:f*9,c:"var(--fat)"}],48,14,120);
  $('#pmK').textContent = fmt(kcal/i.mpd);
  $('#pmP').textContent = fmt(p/i.mpd);
  store.set("nv-profile", i);
  renderMeals();
}

/* ---------- meals ---------- */
let filter = "all";
const picks = {};
const pick = id => picks[id] || (picks[id] = {size:"m", extra:false});

function mealCalc(m, size, extra){
  const sSizes = SIZES;
  const s = sSizes[size];
  return {
    kcal: m.kcal*s.f + (extra?EXTRA.kcal:0),
    p: m.p*s.f + (extra?EXTRA.p:0),
    c: m.c*s.f, f: m.f*s.f,
    price: Math.round(m.price*s.pf) + (extra?EXTRA.price:0)
  };
}
function bestSize(m){
  if(!target) return "m";
  const tk = target.kcal/target.mpd, tp = target.p/target.mpd;
  let best="m", bs=Infinity;
  for(const k of Object.keys(SIZES)){
    const v = mealCalc(m,k,false);
    const sc = Math.abs(v.kcal-tk)/tk + 0.5*Math.abs(v.p-tp)/tp;
    if(sc<bs){bs=sc;best=k;}
  }
  return best;
}
function fitScore(m){
  if(!target) return 0;
  const tk = target.kcal/target.mpd, tp = target.p/target.mpd;
  const v = mealCalc(m,bestSize(m),false);
  return Math.abs(v.kcal-tk)/tk + 0.5*Math.abs(v.p-tp)/tp + (m.goals.includes(target.goal)?0:0.6);
}

function renderMeals(){
  let list = MEALS.filter(m => filter==="all" || m.goals.includes(filter));
  let fitIds = [];
  if(calcDone && target){
    list = list.slice().sort((a,b)=>fitScore(a)-fitScore(b));
    fitIds = MEALS.slice().sort((a,b)=>fitScore(a)-fitScore(b)).slice(0,3).map(m=>m.id);
  }
  const sSizes = SIZES;
  $('#mealGrid').innerHTML = list.length ? list.map(m=>{
    const pk = pick(m.id), v = mealCalc(m,pk.size,pk.extra);
    const isFit = fitIds.includes(m.id);
    const sug = calcDone && target ? bestSize(m) : null;
    return `<article class="card ${isFit?'fit':''}" data-id="${m.id}">
      ${isFit?`<span class="badge">${t("fitBadge")}</span>`:''}
      <div class="plate">
        <div class="ring-s"><svg viewBox="0 0 76 76" aria-hidden="true">${donutSVG([{v:v.p*4,c:"var(--pro)"},{v:v.c*4,c:"var(--carb)"},{v:v.f*9,c:"var(--fat)"}],32,7,76)}</svg><span aria-hidden="true">${m.e}</span></div>
        <div><h3>${m.name[currentLang]}</h3><div class="kcal"><span class="num">${fmt(v.kcal)}</span> ${t("kcalShort")}</div></div>
      </div>
      <p class="desc">${m.desc[currentLang]}</p>
      <div class="mrow">
        <span><i class="dot p"></i>${t("macroProtein")} <b class="num">${fmt(v.p)}</b> ${t("grams")}</span>
        <span><i class="dot c"></i>${t("macroCarb")} <b class="num">${fmt(v.c)}</b> ${t("grams")}</span>
        <span><i class="dot f"></i>${t("macroFat")} <b class="num">${fmt(v.f)}</b> ${t("grams")}</span>
      </div>
      <div class="opts">
        <div class="seg" role="radiogroup" aria-label="حجم الحصة">
          ${Object.keys(SIZES).map(k=>`<input type="radio" name="sz-${m.id}" id="sz-${m.id}-${k}" value="${k}" data-act="size" ${pk.size===k?'checked':''}><label for="sz-${m.id}-${k}">${sSizes[k].n}${sug===k?' ★':''}</label>`).join("")}
        </div>
        ${sug?`<span class="note" style="margin:0">${t("suggestedNote")}</span>`:''}
        <label class="extra"><input type="checkbox" data-act="extra" ${pk.extra?'checked':''}> ${t("extraProteinLabel")}<span class="num">${EXTRA.p}</span> ${t("grams")}، +<span class="num">${EXTRA.price}</span> ${t("currency")})</label>
      </div>
      <div class="buy"><div class="price"><span class="num">${v.price}</span><small>${t("currency")}</small></div><button class="add" data-act="add">${t("addToCartBtn")}</button></div>
    </article>`;
  }).join("") : `<div class="empty">${t("noMealsCategory")}</div>`;
  $('#mealsHint').textContent = calcDone && target ? t("mealsHintCalculated") : t("mealsHintInit");
}

/* ---------- cart ---------- */
let cart = store.get("nv-cart") || [];
const keyOf = (id,size,extra) => `${id}|${size}|${extra?1:0}`;

function saveCart(){ store.set("nv-cart", cart); updateCount(); }
function updateCount(){ $('#cartCount').textContent = cart.reduce((a,b)=>a+b.qty,0); }

function addToCart(id){
  const pk = pick(id), key = keyOf(id,pk.size,pk.extra);
  const ex = cart.find(x=>x.key===key);
  if(ex) ex.qty++; else cart.push({key,id,size:pk.size,extra:pk.extra,qty:1});
  saveCart(); renderCart();
  toast(t("toastAdded"));
}

function cartTotals(){
  let sub=0,k=0,p=0;
  cart.forEach(it=>{
    const m = MEALS.find(x=>x.id===it.id), v = mealCalc(m,it.size,it.extra);
    sub += v.price*it.qty; k += v.kcal*it.qty; p += v.p*it.qty;
  });
  const fee = cart.length===0 ? 0 : (sub>=FREE_FROM ? 0 : DELIVERY_FEE);
  return {sub,fee,total:sub+fee,k,p};
}

function renderCart(){
  const body = $('#dbody'), foot = $('#dfoot');
  if(cart.length===0){
    body.innerHTML = `<div class="empty" style="margin-top:12px">${t("emptyCart")}</div>`;
    foot.innerHTML = `<button class="ghost" data-act="close">${t("seeMealsGhost")}</button>`;
    return;
  }
  const tVals = cartTotals();
  const saved = store.get("nv-delivery") || {};
  const sSizes = SIZES;
  body.innerHTML = cart.map(it=>{
    const m = MEALS.find(x=>x.id===it.id), v = mealCalc(m,it.size,it.extra);
    return `<div class="line" data-key="${it.key}">
      <div><h4>${m.name[currentLang]}</h4>
        <div class="meta">${sSizes[it.size].n} ${currentLang==='en'?'portion':''} ${it.extra?(currentLang==='en'?'· Extra Protein':"· بروتين إضافي"):""} · <span class="num">${fmt(v.kcal)}</span> ${t("kcalShort")} · <span class="num">${fmt(v.p)}</span> ${t("gramProt")}</div>
        <div class="qty"><button data-act="dec" aria-label="نقص">−</button><span class="num">${it.qty}</span><button data-act="inc" aria-label="زيد">+</button></div>
      </div>
      <div class="lp"><span class="num">${v.price*it.qty}</span> ${t("currency")}</div>
    </div>`;
  }).join("") + `
    <div class="sum">
      <div><span>${t("subtotal")}</span><span><span class="num">${tVals.sub}</span> ${t("currency")}</span></div>
      <div><span>${t("deliveryTangier")}</span><span>${tVals.fee===0?t("freeDelivery"):`<span class="num">${tVals.fee}</span>${t("currency")}`}</span></div>
      <div class="tot"><span>${t("totalLabel")}</span><span><span class="num">${tVals.total}</span> ${t("currency")}</span></div>
    </div>
    ${tVals.fee>0?`<p class="note">${t("freeDeliveryNote")} <span class="num">${FREE_FROM}</span> ${t("currency")}. ${t("remainingForFree")} <span class="num">${FREE_FROM-tVals.sub}</span>${t("currency")}.</p>`:''}
    <div class="nut">${t("orderNutritionSummary")} <b><span class="num">${fmt(tVals.k)}</span> ${t("kcalShort")}</b> & <b><span class="num">${fmt(tVals.p)}</span> ${t("gramProt")}</b></div>
    <div class="form">
      <input id="fName" placeholder="${t("namePlaceholder")}" autocomplete="name" value="${esc(saved.name||"")}">
      <input id="fPhone" placeholder="${t("phonePlaceholder")}" inputmode="tel" autocomplete="tel" value="${esc(saved.phone||"")}">
      <input id="fAddr" placeholder="${t("addrPlaceholder")}" autocomplete="street-address" value="${esc(saved.addr||"")}">
      <select id="fSlot" aria-label="وقت التوصيل">
        <option>12:00 - 14:00</option><option>18:00 - 20:00</option><option>20:00 - 22:00</option>
      </select>
      <div class="err" id="fErr" role="alert"></div>
    </div>`;
  if(saved.slot) $('#fSlot').value = saved.slot;
  foot.innerHTML = `<a class="wa" id="waBtn" href="#" target="_blank" rel="noopener">${t("sendWaBtn")}</a>
    <button class="ghost" data-act="copy">${t("copyOrderBtn")}</button>`;
  ["fName","fPhone","fAddr","fSlot"].forEach(id=>$("#"+id).addEventListener("input",syncOrder));
  syncOrder();
}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}

function orderText(){
  const tVals = cartTotals();
  const sSizes = SIZES;
  const lines = cart.map(it=>{
    const m = MEALS.find(x=>x.id===it.id), v = mealCalc(m,it.size,it.extra);
    return `- ${it.qty} × ${m.name[currentLang]} (${sSizes[it.size].n}${it.extra?(currentLang==='en'?', Extra Protein':'، بروتين إضافي'):""}) = ${v.price*it.qty} ${t("currency")}`;
  });
  return [
    currentLang==='en' ? "New Order from Nutrivibe" : "طلب جديد من Nutrivibe",
    ...lines,
    currentLang==='en' ? `Meals Subtotal: ${tVals.sub} ${t("currency")}` : `مجموع الوجبات: ${tVals.sub} درهم`,
    currentLang==='en' ? `Delivery: ${tVals.fee===0?"Free":tVals.fee+" MAD"}` : `التوصيل: ${tVals.fee===0?"مجاني":tVals.fee+" درهم"}`,
    currentLang==='en' ? `Total: ${tVals.total} ${t("currency")}` : `المجموع: ${tVals.total} درهم`,
    currentLang==='en' ? `Nutrition Total: ${fmt(tVals.k)} kcal, ${fmt(tVals.p)} g protein` : `المجموع الغذائي: ${fmt(tVals.k)} سعرة، ${fmt(tVals.p)} غ بروتين`,
    "",
    currentLang==='en' ? `Name: ${$('#fName').value.trim()}` : `الاسم: ${$('#fName').value.trim()}`,
    currentLang==='en' ? `Phone: ${$('#fPhone').value.trim()}` : `الهاتف: ${$('#fPhone').value.trim()}`,
    currentLang==='en' ? `Address: ${$('#fAddr').value.trim()}` : `العنوان: ${$('#fAddr').value.trim()}`,
    currentLang==='en' ? `Delivery Time: ${$('#fSlot').value}` : `وقت التوصيل: ${$('#fSlot').value}`
  ].join("\n");
}

function formValid(){
  const n=$('#fName').value.trim(), p=$('#fPhone').value.trim(), a=$('#fAddr').value.trim();
  if(!n) return t("errName");
  if(p.replace(/\D/g,"").length<9) return t("errPhone");
  if(!a) return t("errAddr");
  return "";
}

function syncOrder(){
  store.set("nv-delivery",{name:$('#fName').value,phone:$('#fPhone').value,addr:$('#fAddr').value,slot:$('#fSlot').value});
  $('#waBtn').href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(orderText())}`;
  $('#fErr').textContent = "";
}

/* ---------- drawer ---------- */
let lastFocus = null;
function openCart(){
  lastFocus = document.activeElement;
  renderCart();
  $('#drawer').classList.add('open'); $('#scrim').classList.add('open');
  $('#drawer').setAttribute('aria-hidden','false');
  $('#closeCart').focus();
}
function closeCart(){
  $('#drawer').classList.remove('open'); $('#scrim').classList.remove('open');
  $('#drawer').setAttribute('aria-hidden','true');
  if(lastFocus) lastFocus.focus();
}
let tt;
function toast(msg){
  const el=$('#toast'); el.textContent=msg; el.classList.add('show');
  clearTimeout(tt); tt=setTimeout(()=>el.classList.remove('show'),1800);
}

/* ---------- events ---------- */
document.querySelectorAll('.calc input, .calc select').forEach(el=>el.addEventListener('input',calculate));
$('#seeMeals').addEventListener('click',()=>{
  calcDone = true;
  if(target) filter = target.goal;
  document.querySelectorAll('.chip').forEach(c=>c.setAttribute('aria-pressed', c.dataset.filter===filter));
  MEALS.forEach(m=>{ pick(m.id).size = bestSize(m); });
  renderMeals();
  $('#meals').scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
});
document.querySelectorAll('.chip').forEach(c=>c.addEventListener('click',()=>{
  filter = c.dataset.filter;
  document.querySelectorAll('.chip').forEach(x=>x.setAttribute('aria-pressed', x===c));
  renderMeals();
}));
$('#mealGrid').addEventListener('change',e=>{
  const card = e.target.closest('.card'); if(!card) return;
  const pk = pick(card.dataset.id);
  if(e.target.dataset.act==="size") pk.size = e.target.value;
  if(e.target.dataset.act==="extra") pk.extra = e.target.checked;
  const focusId = e.target.id;
  renderMeals();
  const again = focusId ? document.getElementById(focusId) : null;
  if(again) again.focus();
});
$('#mealGrid').addEventListener('click',e=>{
  const b = e.target.closest('[data-act=add]'); if(!b) return;
  addToCart(b.closest('.card').dataset.id);
});
$('#openCart').addEventListener('click',openCart);
$('#closeCart').addEventListener('click',closeCart);
$('#scrim').addEventListener('click',closeCart);
document.addEventListener('keydown',e=>{ if(e.key==="Escape" && $('#drawer').classList.contains('open')) closeCart(); });
$('#drawer').addEventListener('click',e=>{
  const b = e.target.closest('[data-act]'); if(!b) return;
  const act = b.dataset.act;
  if(act==="close"){ closeCart(); return; }
  if(act==="copy"){
    const err = formValid();
    if(err){ $('#fErr').textContent = err; return; }
    const txt = orderText();
    (navigator.clipboard ? navigator.clipboard.writeText(txt) : Promise.reject()).then(()=>toast(t("toastCopied"))).catch(()=>toast(t("toastCopyFail")));
    return;
  }
  const line = b.closest('.line'); if(!line) return;
  const it = cart.find(x=>x.key===line.dataset.key); if(!it) return;
  if(act==="inc") it.qty++;
  if(act==="dec"){ it.qty--; if(it.qty<=0) cart = cart.filter(x=>x!==it); }
  saveCart(); renderCart();
});
$('#drawer').addEventListener('click',e=>{
  const a = e.target.closest('#waBtn'); if(!a) return;
  const err = formValid();
  if(err){ e.preventDefault(); $('#fErr').textContent = err; }
});

/* ---------- init ---------- */
const saved = store.get("nv-profile");
if(saved){
  try{
    document.querySelector(`input[name=sex][value=${saved.sex}]`).checked = true;
    $('#age').value = saved.age; $('#weight').value = saved.w; $('#height').value = saved.h;
    $('#activity').value = String(saved.act);
    document.querySelector(`input[name=goal][value=${saved.goal}]`).checked = true;
    document.querySelector(`input[name=mpd][value=${saved.mpd}]`).checked = true;
  }catch(e){}
}
// تهيئة اللغة المحفوظة
switchLanguage(currentLang);
updateCount();
calculate();