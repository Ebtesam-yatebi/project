// استكمال تحديات HTML
const htmlChallengesAdditional = [
    {
        id: 6,
        title: "إضافة صورة",
        description: "رتب الكلمات لإضافة صورة مع نص بديل.",
        codePrefix: "<!DOCTYPE html>\n<html>\n<head>\n    <title>صور</title>\n</head>\n<body>\n    ",
        codeSuffix: "\n</body>\n</html>",
        words: ["<img", "src=", "\"image.jpg\"", "alt=", "\"وصف الصورة\"", ">"],
        solution: ["<img", "src=", "\"image.jpg\"", "alt=", "\"وصف الصورة\"", ">"],
        hint: "استخدم وسم img مع خاصية src لتحديد مسار الصورة وalt للنص البديل"
    },
    {
        id: 7,
        title: "قوائم غير مرتبة",
        description: "رتب الكلمات لإنشاء قائمة غير مرتبة لثلاثة عناصر.",
        codePrefix: "<!DOCTYPE html>\n<html>\n<head>\n    <title>قوائم</title>\n</head>\n<body>\n    ",
        codeSuffix: "\n</body>\n</html>",
        words: ["<ul>", "<li>", "عنصر", "أول", "</li>", "<li>", "عنصر", "ثاني", "</li>", "<li>", "عنصر", "ثالث", "</li>", "</ul>"],
        solution: ["<ul>", "<li>", "عنصر", "أول", "</li>", "<li>", "عنصر", "ثاني", "</li>", "<li>", "عنصر", "ثالث", "</li>", "</ul>"],
        hint: "استخدم ul لبدء القائمة غير المرتبة وli لكل عنصر"
    },
    {
        id: 8,
        title: "إنشاء نموذج",
        description: "رتب الكلمات لإنشاء نموذج بسيط مع حقل إدخال وزر إرسال.",
        codePrefix: "<!DOCTYPE html>\n<html>\n<head>\n    <title>نموذج</title>\n</head>\n<body>\n    ",
        codeSuffix: "\n</body>\n</html>",
        words: ["<form>", "<input", "type=", "\"text\"", "placeholder=", "\"أدخل اسمك\"", ">", "<button", "type=", "\"submit\">", "إرسال", "</button>", "</form>"],
        solution: ["<form>", "<input", "type=", "\"text\"", "placeholder=", "\"أدخل اسمك\"", ">", "<button", "type=", "\"submit\">", "إرسال", "</button>", "</form>"],
        hint: "استخدم form لتعريف النموذج، ثم input للحقل النصي وbutton لزر الإرسال"
    },
    {
        id: 9,
        title: "جدول بسيط",
        description: "رتب الكلمات لإنشاء جدول بسيط مع صفين وعمودين.",
        codePrefix: "<!DOCTYPE html>\n<html>\n<head>\n    <title>جدول</title>\n</head>\n<body>\n    ",
        codeSuffix: "\n</body>\n</html>",
        words: ["<table>", "<tr>", "<th>", "الاسم", "</th>", "<th>", "العمر", "</th>", "</tr>", "<tr>", "<td>", "أحمد", "</td>", "<td>", "25", "</td>", "</tr>", "</table>"],
        solution: ["<table>", "<tr>", "<th>", "الاسم", "</th>", "<th>", "العمر", "</th>", "</tr>", "<tr>", "<td>", "أحمد", "</td>", "<td>", "25", "</td>", "</tr>", "</table>"],
        hint: "استخدم table لبدء الجدول، tr للصفوف، th لعناوين الأعمدة و td لخلايا البيانات"
    },
    {
        id: 10,
        title: "أقسام الصفحة",
        description: "رتب الكلمات لإنشاء هيكل صفحة مع قسم رأس وقسم محتوى وقسم تذييل.",
        codePrefix: "<!DOCTYPE html>\n<html>\n<head>\n    <title>أقسام الصفحة</title>\n</head>\n<body>\n    ",
        codeSuffix: "\n</body>\n</html>",
        words: ["<header>", "<h1>", "رأس", "الصفحة", "</h1>", "</header>", "<main>", "<p>", "محتوى", "الصفحة", "</p>", "</main>", "<footer>", "<p>", "تذييل", "الصفحة", "</p>", "</footer>"],
        solution: ["<header>", "<h1>", "رأس", "الصفحة", "</h1>", "</header>", "<main>", "<p>", "محتوى", "الصفحة", "</p>", "</main>", "<footer>", "<p>", "تذييل", "الصفحة", "</p>", "</footer>"],
        hint: "استخدم header للجزء العلوي، main للمحتوى الرئيسي، وfooter للجزء السفلي"
    }
];

// تحديات CSS
const cssChallenges = [
    {
        id: 1,
        title: "تطبيق نمط CSS أساسي",
        description: "رتب الكلمات لكتابة قاعدة CSS تغير لون خلفية العنصر إلى أزرق ولون النص إلى أبيض.",
        codePrefix: "",
        codeSuffix: "",
        words: ["body", "{", "background-color:", "#3498db;", "color:", "white;", "}"],
        solution: ["body", "{", "background-color:", "#3498db;", "color:", "white;", "}"],
        hint: "حدد محدد العنصر ثم افتح قوس متعرج وضع الخصائص والقيم مع الفاصلة المنقوطة"
    },
    {
        id: 2,
        title: "تنسيق النص",
        description: "رتب الكلمات لتحديد نمط العنوان الرئيسي بحجم خط 24 بيكسل ونوع خط sans-serif ومحاذاة وسط.",
        codePrefix: "",
        codeSuffix: "",
        words: ["h1", "{", "font-size:", "24px;", "font-family:", "sans-serif;", "text-align:", "center;", "}"],
        solution: ["h1", "{", "font-size:", "24px;", "font-family:", "sans-serif;", "text-align:", "center;", "}"],
        hint: "حدد وسم h1 ثم أضف خصائص حجم ونوع الخط والمحاذاة"
    },
    {
        id: 3,
        title: "هوامش وحشو",
        description: "رتب الكلمات لإضافة هوامش خارجية وحشو داخلي للعنصر.",
        codePrefix: "",
        codeSuffix: "",
        words: [".box", "{", "margin:", "20px;", "padding:", "10px;", "border:", "1px", "solid", "black;", "}"],
        solution: [".box", "{", "margin:", "20px;", "padding:", "10px;", "border:", "1px", "solid", "black;", "}"],
        hint: "استخدم margin للهوامش الخارجية وpadding للحشو الداخلي وborder لإضافة حدود"
    },
    {
        id: 4,
        title: "محدد الفئة والمعرف",
        description: "رتب الكلمات لتطبيق أنماط على عنصر بفئة 'btn' وعنصر بمعرف 'header'.",
        codePrefix: "",
        codeSuffix: "",
        words: [".btn", "{", "color:", "white;", "background:", "blue;", "}", "#header", "{", "height:", "100px;", "}"],
        solution: [".btn", "{", "color:", "white;", "background:", "blue;", "}", "#header", "{", "height:", "100px;", "}"],
        hint: "استخدم النقطة (.) للفئات والشباك (#) للمعرفات"
    },
    {
        id: 5,
        title: "نموذج المربع",
        description: "رتب الكلمات لتعيين عرض وارتفاع عنصر وتحديد خاصية box-sizing.",
        codePrefix: "",
        codeSuffix: "",
        words: [".container", "{", "width:", "300px;", "height:", "200px;", "box-sizing:", "border-box;", "}"],
        solution: [".container", "{", "width:", "300px;", "height:", "200px;", "box-sizing:", "border-box;", "}"],
        hint: "عين عرض وارتفاع ثم أضف box-sizing للتحكم في طريقة حساب الأبعاد"
    },
    {
        id: 6,
        title: "التناسق وتحديد المواقع",
        description: "رتب الكلمات لوضع عنصر في وسط الصفحة باستخدام flexbox.",
        codePrefix: "",
        codeSuffix: "",
        words: [".center", "{", "display:", "flex;", "justify-content:", "center;", "align-items:", "center;", "}"],
        solution: [".center", "{", "display:", "flex;", "justify-content:", "center;", "align-items:", "center;", "}"],
        hint: "استخدم display: flex مع خصائص justify-content و align-items لتوسيط العنصر"
    },
    {
        id: 7,
        title: "الحالات التفاعلية",
        description: "رتب الكلمات لتغيير لون الرابط عند تمرير المؤشر عليه.",
        codePrefix: "",
        codeSuffix: "",
        words: ["a:hover", "{", "color:", "#ff6b6b;", "text-decoration:", "none;", "}"],
        solution: ["a:hover", "{", "color:", "#ff6b6b;", "text-decoration:", "none;", "}"],
        hint: "استخدم pseudo-class :hover مع وسم الرابط a"
    },
    {
        id: 8,
        title: "استجابة الشاشة",
        description: "رتب الكلمات لإنشاء استعلام وسائط يغير تنسيق الشاشات الصغيرة.",
        codePrefix: "",
        codeSuffix: "",
        words: ["@media", "(max-width:", "768px)", "{", ".container", "{", "width:", "100%;", "}", "}"],
        solution: ["@media", "(max-width:", "768px)", "{", ".container", "{", "width:", "100%;", "}", "}"],
        hint: "استخدم @media مع تحديد الحد الأقصى للعرض ثم أضف القواعد داخل الأقواس"
    },
    {
        id: 9,
        title: "التحولات",
        description: "رتب الكلمات لإضافة تأثير تحول عند تغيير الحالة.",
        codePrefix: "",
        codeSuffix: "",
        words: [".button", "{", "transition:", "all", "0.3s", "ease;", "}", ".button:hover", "{", "transform:", "scale(1.1);", "}"],
        solution: [".button", "{", "transition:", "all", "0.3s", "ease;", "}", ".button:hover", "{", "transform:", "scale(1.1);", "}"],
        hint: "استخدم transition في العنصر الأساسي ثم transform في حالة hover"
    },
    {
        id: 10,
        title: "الشبكة",
        description: "رتب الكلمات لإنشاء تخطيط شبكي بثلاثة أعمدة.",
        codePrefix: "",
        codeSuffix: "",
        words: [".grid", "{", "display:", "grid;", "grid-template-columns:", "repeat(3,", "1fr);", "gap:", "20px;", "}"],
        solution: [".grid", "{", "display:", "grid;", "grid-template-columns:", "repeat(3,", "1fr);", "gap:", "20px;", "}"],
        hint: "استخدم display: grid مع grid-template-columns لتحديد الأعمدة و gap للمسافات"
    }
];

// دمج التحديات مع الملف الرئيسي
document.addEventListener('DOMContentLoaded', function() {
    // ضم تحديات HTML الإضافية
    challenges.html = challenges.html.concat(htmlChallengesAdditional);
    
    // إضافة تحديات CSS
    challenges.css = cssChallenges;
});
