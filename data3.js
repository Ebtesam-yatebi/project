// تحديات JavaScript
const javascriptChallenges = [
    {
        id: 1,
        title: "طباعة أول برنامج",
        description: "رتب الكلمات لإنشاء برنامج يطبع 'مرحباً بالعالم!' في وحدة التحكم.",
        codePrefix: "",
        codeSuffix: "",
        words: ["console", ".", "log", "(", "'مرحباً", "بالعالم!'", ")"],
        solution: ["console", ".", "log", "(", "'مرحباً", "بالعالم!'", ")"],
        hint: "استخدم دالة console.log للطباعة في وحدة التحكم"
    },
    {
        id: 2,
        title: "المتغيرات في جافا سكريبت",
        description: "رتب الكلمات لإنشاء متغير يخزن اسمك ثم يطبعه.",
        codePrefix: "",
        codeSuffix: "",
        words: ["const", "name", "=", "'أحمد'", ";", "console", ".", "log", "(", "name", ")"],
        solution: ["const", "name", "=", "'أحمد'", ";", "console", ".", "log", "(", "name", ")"],
        hint: "استخدم 'const' لتعريف متغير ثابت، و'=' لتعيين القيمة"
    },
    {
        id: 3,
        title: "العمليات الحسابية",
        description: "رتب الكلمات لإنشاء برنامج يجمع عددين ويخزن النتيجة ثم يطبعها.",
        codePrefix: "",
        codeSuffix: "",
        words: ["const", "x", "=", "10", ";", "const", "y", "=", "5", ";", "const", "sum", "=", "x", "+", "y", ";", "console", ".", "log", "(", "sum", ")"],
        solution: ["const", "x", "=", "10", ";", "const", "y", "=", "5", ";", "const", "sum", "=", "x", "+", "y", ";", "console", ".", "log", "(", "sum", ")"],
        hint: "عرّف المتغيرات أولاً ثم استخدم عملية الجمع ثم اطبع النتيجة"
    },
    {
        id: 4,
        title: "الشروط في جافا سكريبت",
        description: "رتب الكلمات لإنشاء جملة شرطية تتحقق إذا كان العدد أكبر من 10.",
        codePrefix: "const number = 15;\n",
        codeSuffix: '\n    console.log("العدد أكبر من 10");\n}',
        words: ["if", "(", "number", ">", "10", ")", "{"],
        solution: ["if", "(", "number", ">", "10", ")", "{"],
        hint: "استخدم if متبوعة بالشرط بين أقواس ثم الأقواس المعقوفة"
    },
    {
        id: 5,
        title: "الحلقات التكرارية",
        description: "رتب الكلمات لإنشاء حلقة تكرارية تطبع الأرقام من 1 إلى 5.",
        codePrefix: "",
        codeSuffix: "\n    console.log(i);\n}",
        words: ["for", "(", "let", "i", "=", "1", ";", "i", "<=", "5", ";", "i++", ")"],
        solution: ["for", "(", "let", "i", "=", "1", ";", "i", "<=", "5", ";", "i++", ")"],
        hint: "استخدم for مع تحديد قيمة البداية والشرط والزيادة بين الأقواس"
    },
    {
        id: 6,
        title: "إنشاء دالة",
        description: "رتب الكلمات لإنشاء دالة تقوم بجمع عددين.",
        codePrefix: "",
        codeSuffix: "\n    return a + b;\n}\n\nconst result = add(3, 5);\nconsole.log(result);",
        words: ["function", "add", "(", "a", ",", "b", ")", "{"],
        solution: ["function", "add", "(", "a", ",", "b", ")", "{"],
        hint: "استخدم كلمة function متبوعة باسم الدالة وقائمة المعاملات بين أقواس"
    },
    {
        id: 7,
        title: "المصفوفات في جافا سكريبت",
        description: "رتب الكلمات لإنشاء مصفوفة من الفواكه ثم اطبع العنصر الأول.",
        codePrefix: "",
        codeSuffix: "",
        words: ["const", "fruits", "=", "[", "'تفاح'", ",", "'موز'", ",", "'برتقال'", "]", ";", "console", ".", "log", "(", "fruits", "[", "0", "]", ")"],
        solution: ["const", "fruits", "=", "[", "'تفاح'", ",", "'موز'", ",", "'برتقال'", "]", ";", "console", ".", "log", "(", "fruits", "[", "0", "]", ")"],
        hint: "عرف المصفوفة باستخدام الأقواس المربعة ثم استخدم console.log للطباعة مع تحديد موقع العنصر"
    },
    {
        id: 8,
        title: "الكائنات في جافا سكريبت",
        description: "رتب الكلمات لإنشاء كائن يحتوي على معلومات شخص ثم اطبع العمر.",
        codePrefix: "",
        codeSuffix: "",
        words: ["const", "person", "=", "{", "name", ":", "'علي'", ",", "age", ":", "25", "}", ";", "console", ".", "log", "(", "person", ".", "age", ")"],
        solution: ["const", "person", "=", "{", "name", ":", "'علي'", ",", "age", ":", "25", "}", ";", "console", ".", "log", "(", "person", ".", "age", ")"],
        hint: "عرف الكائن باستخدام الأقواس المتعرجة مع تحديد الخصائص والقيم، ثم استخدم النقطة للوصول للخاصية"
    },
    {
        id: 9,
        title: "التعامل مع الأحداث",
        description: "رتب الكلمات لإضافة مستمع حدث النقر على زر.",
        codePrefix: "const button = document.querySelector('#myButton');\n",
        codeSuffix: "\n    console.log('تم النقر على الزر');\n});",
        words: ["button", ".", "addEventListener", "(", "'click'", ",", "function", "(", ")", "{"],
        solution: ["button", ".", "addEventListener", "(", "'click'", ",", "function", "(", ")", "{"],
        hint: "استخدم addEventListenter لإضافة مستمع مع تحديد نوع الحدث والدالة التي ستنفذ"
    },
    {
        id: 10,
        title: "معالجة الأخطاء",
        description: "رتب الكلمات لإنشاء كتلة معالجة الأخطاء عند محاولة تنفيذ كود قد يسبب خطأ.",
        codePrefix: "",
        codeSuffix: "\n    // كود قد يسبب خطأ\n    JSON.parse('{invalid}');\n} catch (error) {\n    console.error('حدث خطأ:', error.message);\n}",
        words: ["try", "{"],
        solution: ["try", "{"],
        hint: "استخدم كلمة try قبل الكود الذي قد يسبب خطأ متبوعة بقوس متعرجة"
    }
];

// إضافة تحديات JavaScript إلى قائمة التحديات
document.addEventListener('DOMContentLoaded', function() {
    challenges.javascript = javascriptChallenges;
});
