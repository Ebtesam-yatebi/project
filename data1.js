const challenges = {
    python: [
        {
            id: 1,
            title: "طباعة أول برنامج",
            description: "رتب الكلمات لإنشاء برنامج يطبع 'مرحباً بالعالم!' على الشاشة.",
            codePrefix: "",
            codeSuffix: "",
            words: ["print", "(", "'مرحباً", "بالعالم!'", ")"],
            solution: ["print", "(", "'مرحباً", "بالعالم!'", ")"],
            hint: "استخدم دالة print للطباعة وضع النص بين علامات اقتباس"
        },
        {
            id: 2,
            title: "المتغيرات في بايثون",
            description: "رتب الكلمات لإنشاء متغير يخزن اسمك ثم يطبعه.",
            codePrefix: "",
            codeSuffix: "",
            words: ["name", "=", "'أحمد'", "print", "(", "name", ")"],
            solution: ["name", "=", "'أحمد'", "print", "(", "name", ")"],
            hint: "أولاً قم بتعيين قيمة للمتغير باستخدام علامة = ثم اطبع قيمة المتغير"
        },
        {
            id: 3,
            title: "العمليات الحسابية",
            description: "رتب الكلمات لإنشاء برنامج يجمع عددين ويطبع النتيجة.",
            codePrefix: "",
            codeSuffix: "",
            words: ["x", "=", "10", "y", "=", "5", "print", "(", "x", "+", "y", ")"],
            solution: ["x", "=", "10", "y", "=", "5", "print", "(", "x", "+", "y", ")"],
            hint: "عرّف المتغيرين أولاً ثم استخدم عملية الجمع داخل دالة الطباعة"
        },
        {
            id: 4,
            title: "الشروط في بايثون",
            description: "رتب الكلمات لإنشاء جملة شرطية تتحقق إذا كان العدد أكبر من 10.",
            codePrefix: "number = 15\n",
            codeSuffix: '    print("العدد أكبر من 10")',
            words: ["if", "number", ">", "10", ":"],
            solution: ["if", "number", ">", "10", ":"],
            hint: "استخدم if متبوعة بالشرط ثم علامة النقطتين :"
        },
        {
            id: 5,
            title: "الحلقات التكرارية",
            description: "رتب الكلمات لإنشاء حلقة تكرارية تطبع الأرقام من 1 إلى 5.",
            codePrefix: "",
            codeSuffix: "    print(i)",
            words: ["for", "i", "in", "range", "(", "1", ",", "6", "):", ],
            solution: ["for", "i", "in", "range", "(", "1", ",", "6", "):"],
            hint: "استخدم for i in range مع تحديد قيم البداية والنهاية داخل الأقواس"
        },
        {
            id: 6,
            title: "إنشاء دالة",
            description: "رتب الكلمات لإنشاء دالة تقوم بجمع عددين.",
            codePrefix: "",
            codeSuffix: "    return x + y\n\nresult = add(3, 5)\nprint(result)",
            words: ["def", "add", "(", "x", ",", "y", ")", ":"],
            solution: ["def", "add", "(", "x", ",", "y", ")", ":"],
            hint: "تبدأ الدالة بكلمة def متبوعة باسم الدالة ثم قائمة المعاملات بين قوسين ثم :"
        },
        {
            id: 7,
            title: "قوائم في بايثون",
            description: "رتب الكلمات لإنشاء قائمة من الفواكه ثم اطبع العنصر الأول.",
            codePrefix: "",
            codeSuffix: "",
            words: ["fruits", "=", "[", "'تفاح'", ",", "'موز'", ",", "'برتقال'", "]", "print", "(", "fruits", "[", "0", "]", ")"],
            solution: ["fruits", "=", "[", "'تفاح'", ",", "'موز'", ",", "'برتقال'", "]", "print", "(", "fruits", "[", "0", "]", ")"],
            hint: "عرف القائمة باستخدام الأقواس المربعة ثم استخدم print للطباعة مع تحديد موقع العنصر"
        },
        {
            id: 8,
            title: "القواميس في بايثون",
            description: "رتب الكلمات لإنشاء قاموس يحتوي على معلومات شخص ثم اطبع العمر.",
            codePrefix: "",
            codeSuffix: "",
            words: ["person", "=", "{", "'name'", ":", "'علي'", ",", "'age'", ":", "25", "}", "print", "(", "person", "[", "'age'", "]", ")"],
            solution: ["person", "=", "{", "'name'", ":", "'علي'", ",", "'age'", ":", "25", "}", "print", "(", "person", "[", "'age'", "]", ")"],
            hint: "عرف القاموس باستخدام الأقواس المتعرجة مع تحديد المفاتيح والقيم، ثم استخدم المفتاح للوصول للقيمة"
        },
        {
            id: 9,
            title: "التعامل مع الملفات",
            description: "رتب الكلمات لفتح ملف للقراءة وطباعة محتواه.",
            codePrefix: "",
            codeSuffix: "    content = file.read()\n    print(content)",
            words: ["with", "open", "(", "'data.txt'", ",", "'r'", ")", "as", "file", ":"],
            solution: ["with", "open", "(", "'data.txt'", ",", "'r'", ")", "as", "file", ":"],
            hint: "استخدم with open لفتح الملف بشكل آمن مع تحديد اسم الملف ووضع r للقراءة"
        },
        {
            id: 10,
            title: "معالجة الأخطاء",
            description: "رتب الكلمات لإنشاء كتلة معالجة الأخطاء عند محاولة قسمة على صفر.",
            codePrefix: "x = 10\ny = 0\n\n",
            codeSuffix: "    result = x / y\nexcept ZeroDivisionError:\n    print('لا يمكن القسمة على صفر')",
            words: ["try", ":"],
            solution: ["try", ":"],
            hint: "استخدم كلمة try متبوعة بنقطتين : قبل الكود الذي قد يسبب خطأ"
        }
    ],
    html: [
        {
            id: 1,
            title: "هيكل صفحة HTML الأساسي",
            description: "رتب الكلمات لإنشاء هيكل HTML أساسي.",
            codePrefix: "",
            codeSuffix: "",
            words: ["<!DOCTYPE", "html>", "<html>", "<head>", "</head>", "<body>", "</body>", "</html>"],
            solution: ["<!DOCTYPE", "html>", "<html>", "<head>", "</head>", "<body>", "</body>", "</html>"],
            hint: "الهيكل الأساسي يبدأ بنوع المستند ثم وسم html ثم head و body"
        },
        {
            id: 2,
            title: "عنوان الصفحة",
            description: "رتب الكلمات لإضافة عنوان للصفحة في قسم الرأس (head).",
            codePrefix: "<!DOCTYPE html>\n<html>\n<head>\n    ",
            codeSuffix: "\n</head>\n<body>\n</body>\n</html>",
            words: ["<title>", "صفحتي", "الأولى", "</title>"],
            solution: ["<title>", "صفحتي", "الأولى", "</title>"],
            hint: "استخدم وسم title لإضافة عنوان الصفحة الذي يظهر في تبويب المتصفح"
        },
        {
            id: 3,
            title: "العناوين في HTML",
            description: "رتب الكلمات لإضافة عنوان رئيسي وعنوان فرعي في صفحة HTML.",
            codePrefix: "<!DOCTYPE html>\n<html>\n<head>\n    <title>العناوين</title>\n</head>\n<body>\n    ",
            codeSuffix: "\n</body>\n</html>",
            words: ["<h1>", "عنوان", "رئيسي", "</h1>", "<h2>", "عنوان", "فرعي", "</h2>"],
            solution: ["<h1>", "عنوان", "رئيسي", "</h1>", "<h2>", "عنوان", "فرعي", "</h2>"],
            hint: "استخدم h1 للعنوان الرئيسي وh2 للعنوان الفرعي"
        },
        {
            id: 4,
            title: "فقرات النص",
            description: "رتب الكلمات لإضافة فقرتين من النص.",
            codePrefix: "<!DOCTYPE html>\n<html>\n<head>\n    <title>فقرات</title>\n</head>\n<body>\n    ",
            codeSuffix: "\n</body>\n</html>",
            words: ["<p>", "هذه", "فقرة", "أولى.", "</p>", "<p>", "هذه", "فقرة", "ثانية.", "</p>"],
            solution: ["<p>", "هذه", "فقرة", "أولى.", "</p>", "<p>", "هذه", "فقرة", "ثانية.", "</p>"],
            hint: "استخدم وسم p لكل فقرة من النص"
        },
        {
            id: 5,
            title: "الروابط في HTML",
            description: "رتب الكلمات لإنشاء رابط يفتح موقع جوجل في نافذة جديدة.",
            codePrefix: "<!DOCTYPE html>\n<html>\n<head>\n    <title>روابط</title>\n</head>\n<body>\n    ",
            codeSuffix: "\n</body>\n</html>",
            words: ["<a", "href=", "\"https://www.google.com\"", "target=", "\"_blank\">", "زيارة", "جوجل", "</a>"],
            solution: ["<a", "href=", "\"https://www.google.com\"", "target=", "\"_blank\">", "زيارة", "جوجل", "</a>"],
            hint: "استخدم وسم a مع خاصية href لتحديد الرابط و target=_blank لفتح الرابط في نافذة جديدة"
        }
    ]
};

// سيتم استكمال التحديات في ملفات إضافية
