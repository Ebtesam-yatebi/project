document.addEventListener('DOMContentLoaded', function() {
    // عناصر واجهة المستخدم
    const languageSelection = document.getElementById('language-selection');
    const challengeContainer = document.getElementById('challenge-container');
    const currentLanguage = document.getElementById('current-language');
    const challengeNumber = document.getElementById('challenge-number');
    const progressIndicator = document.getElementById('progress-indicator');
    const challengeTitle = document.getElementById('challenge-title');
    const challengeDescription = document.getElementById('challenge-description');
    const codePrefix = document.getElementById('code-prefix');
    const codeSuffix = document.getElementById('code-suffix');
    const sortableArea = document.getElementById('sortable-area');
    const codeWords = document.getElementById('code-words');
    const checkAnswerBtn = document.getElementById('check-answer-btn');
    const backBtn = document.getElementById('back-btn');
    const resultModal = document.getElementById('result-modal');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');
    const completionMessage = document.getElementById('completion-message');
    const completedLanguage = document.getElementById('completed-language');
    const certificateCode = document.getElementById('certificate-code');
    const nextChallengeBtn = document.getElementById('next-challenge-btn');
    const tryAgainBtn = document.getElementById('try-again-btn');
    const returnHomeBtn = document.getElementById('return-home-btn');

    // متغيرات حالة
    let selectedLanguage = '';
    let currentChallengeIndex = 0;
    let userSolution = [];
    let availableWords = [];

    // تهيئة تأثيرات الجسيمات
    initParticles();

    // إعداد معالجي الأحداث
    // أزرار اختيار اللغة
    document.querySelectorAll('.card .start-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.card');
            selectedLanguage = card.dataset.language;
            startChallenges(selectedLanguage);
        });
    });

    backBtn.addEventListener('click', showLanguageSelection);
    checkAnswerBtn.addEventListener('click', checkAnswer);
    nextChallengeBtn.addEventListener('click', loadNextChallenge);
    tryAgainBtn.addEventListener('click', hideResultModal);
    returnHomeBtn.addEventListener('click', function() {
        hideResultModal();
        showLanguageSelection();
    });

    // تهيئة تأثيرات الجسيمات
    function initParticles() {
        if (typeof particlesJS !== 'undefined') {
            particlesJS('particles-js', {
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: '#ffffff'
                    },
                    shape: {
                        type: 'circle',
                        stroke: {
                            width: 0,
                            color: '#000000'
                        },
                        polygon: {
                            nb_sides: 5
                        }
                    },
                    opacity: {
                        value: 0.3,
                        random: false,
                        anim: {
                            enable: false,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            enable: false,
                            speed: 40,
                            size_min: 0.1,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: '#ffffff',
                        opacity: 0.2,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: 'none',
                        random: false,
                        straight: false,
                        out_mode: 'out',
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'grab'
                        },
                        onclick: {
                            enable: true,
                            mode: 'push'
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 140,
                            line_linked: {
                                opacity: 1
                            }
                        },
                        bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 8,
                            speed: 3
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4
                        },
                        push: {
                            particles_nb: 4
                        },
                        remove: {
                            particles_nb: 2
                        }
                    }
                },
                retina_detect: true
            });
        }
    }

    // التحقق من التحدي الحالي
    function checkAnswer() {
        const currentChallenge = challenges[selectedLanguage][currentChallengeIndex];
        const isCorrect = compareArrays(userSolution, currentChallenge.solution);

        if (isCorrect) {
            showSuccessMessage();
            
            // التحقق مما إذا كان هذا هو التحدي الأخير
            if (currentChallengeIndex === challenges[selectedLanguage].length - 1) {
                showCompletionMessage();
            }
        } else {
            showErrorMessage();
        }
    }

    // مقارنة مصفوفتين للتحقق من التطابق
    function compareArrays(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;
        
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        
        return true;
    }

    // بدء تحديات لغة معينة
    function startChallenges(language) {
        selectedLanguage = language;
        currentChallengeIndex = 0;
        
        // تعيين اسم اللغة المعروض
        let languageName = '';
        switch(language) {
            case 'python': 
                languageName = 'Python';
                currentLanguage.style.backgroundColor = '#3776ab';
                break;
            case 'html': 
                languageName = 'HTML';
                currentLanguage.style.backgroundColor = '#e44d26';
                break;
            case 'css': 
                languageName = 'CSS';
                currentLanguage.style.backgroundColor = '#264de4';
                break;
        }
        
        currentLanguage.textContent = languageName;
        
        // إخفاء اختيار اللغة وإظهار التحدي
        languageSelection.classList.add('hidden');
        challengeContainer.classList.remove('hidden');
        
        // تحميل أول تحدي
        loadChallenge(0);
    }

    // تحميل تحدي معين
    function loadChallenge(index) {
        if (!challenges[selectedLanguage] || !challenges[selectedLanguage][index]) {
            console.error('التحدي غير موجود:', selectedLanguage, index);
            return;
        }

        const challenge = challenges[selectedLanguage][index];
        
        // تحديث معلومات التحدي
        challengeNumber.textContent = index + 1;
        challengeTitle.textContent = challenge.title;
        challengeDescription.textContent = challenge.description;
        
        // تحديث شريط التقدم
        const progressPercentage = ((index + 1) / challenges[selectedLanguage].length) * 100;
        progressIndicator.style.width = progressPercentage + '%';
        
        // تحميل الكود
        codePrefix.textContent = challenge.codePrefix || '';
        codeSuffix.textContent = challenge.codeSuffix || '';
        
        // مسح المناطق
        sortableArea.innerHTML = '';
        codeWords.innerHTML = '';
        userSolution = [];
        availableWords = [...challenge.words];
        
        // خلط الكلمات
        shuffleArray(availableWords);

        // إنشاء كلمات الكود القابلة للنقر
        renderAvailableWords();
        
        // إضافة مستمع للنقر على منطقة الترتيب لإزالة الكلمات
        sortableArea.addEventListener('click', function(e) {
            if (e.target.classList.contains('code-word')) {
                removeWordFromSolution(e.target);
            }
        });
    }

    // عرض الكلمات المتاحة
    function renderAvailableWords() {
        codeWords.innerHTML = '';
        availableWords.forEach(word => {
            const wordElement = document.createElement('div');
            wordElement.className = 'code-word';
            wordElement.textContent = word;
            wordElement.setAttribute('data-word', word);
            wordElement.addEventListener('click', function() {
                addWordToSolution(word);
            });
            codeWords.appendChild(wordElement);
        });
    }

    // إضافة كلمة إلى الحل
    function addWordToSolution(word) {
        // إزالة الكلمة من الكلمات المتاحة
        const wordIndex = availableWords.indexOf(word);
        if (wordIndex !== -1) {
            availableWords.splice(wordIndex, 1);
        }
        
        // إضافة الكلمة إلى الحل
        userSolution.push(word);
        
        // تحديث العرض
        renderAvailableWords();
        renderSolution();
    }

    // إزالة كلمة من الحل
    function removeWordFromSolution(element) {
        const word = element.getAttribute('data-word');
        const wordIndex = userSolution.indexOf(word);
        
        if (wordIndex !== -1) {
            // إزالة الكلمة من الحل
            userSolution.splice(wordIndex, 1);
            
            // إعادة الكلمة للكلمات المتاحة
            availableWords.push(word);
            
            // تحديث العرض
            renderAvailableWords();
            renderSolution();
        }
    }

    // عرض الحل الحالي
    function renderSolution() {
        sortableArea.innerHTML = '';
        userSolution.forEach(word => {
            const wordElement = document.createElement('div');
            wordElement.className = 'code-word';
            wordElement.textContent = word;
            wordElement.setAttribute('data-word', word);
            sortableArea.appendChild(wordElement);
        });
    }

    // تحميل التحدي التالي
    function loadNextChallenge() {
        hideResultModal();
        
        if (currentChallengeIndex < challenges[selectedLanguage].length - 1) {
            currentChallengeIndex++;
            loadChallenge(currentChallengeIndex);
        } else {
            // تم إكمال جميع التحديات، العودة إلى اختيار اللغة
            showLanguageSelection();
        }
    }

    // العودة إلى اختيار اللغة
    function showLanguageSelection() {
        challengeContainer.classList.add('hidden');
        languageSelection.classList.remove('hidden');
    }

    // عرض رسالة النجاح
    function showSuccessMessage() {
        resultModal.classList.remove('hidden');
        successMessage.classList.remove('hidden');
        errorMessage.classList.add('hidden');
        completionMessage.classList.add('hidden');
        
        nextChallengeBtn.classList.remove('hidden');
        tryAgainBtn.classList.add('hidden');
        returnHomeBtn.classList.add('hidden');
    }

    // عرض رسالة الخطأ
    function showErrorMessage() {
        resultModal.classList.remove('hidden');
        successMessage.classList.add('hidden');
        errorMessage.classList.remove('hidden');
        completionMessage.classList.add('hidden');
        
        nextChallengeBtn.classList.add('hidden');
        tryAgainBtn.classList.remove('hidden');
        returnHomeBtn.classList.add('hidden');
    }

    // عرض رسالة الإكمال
    function showCompletionMessage() {
        resultModal.classList.remove('hidden');
        successMessage.classList.add('hidden');
        errorMessage.classList.add('hidden');
        completionMessage.classList.remove('hidden');
        
        nextChallengeBtn.classList.add('hidden');
        tryAgainBtn.classList.add('hidden');
        returnHomeBtn.classList.remove('hidden');
        
        // عرض اسم اللغة التي تم إكمالها
        let languageName = '';
        switch(selectedLanguage) {
            case 'python': 
                languageName = 'بايثون';
                generatePythonCertificate();
                break;
            case 'html': 
                languageName = 'HTML';
                generateHTMLCertificate();
                break;
            case 'css': 
                languageName = 'CSS';
                generateCSSCertificate();
                break;
        }
        
        completedLanguage.textContent = languageName;

        // تشغيل الرسوم المتحركة للاحتفال
        celebrateCompletion();
    }

    // تهنئة المستخدم بإكمال جميع التحديات مع تأثيرات متحركة
    function celebrateCompletion() {
        // إضافة مكتبة confetti.js بشكل ديناميكي
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js';
        document.head.appendChild(script);
        
        script.onload = function() {
            // تشغيل الألعاب النارية بعد تحميل المكتبة
            const duration = 5 * 1000;
            const animationEnd = Date.now() + duration;
            
            function randomInRange(min, max) {
                return Math.random() * (max - min) + min;
            }
            
            // إطلاق الألعاب النارية
            (function frame() {
                const timeLeft = animationEnd - Date.now();
                
                if (timeLeft <= 0) return;
                
                confetti({
                    particleCount: 3,
                    angle: randomInRange(55, 125),
                    spread: randomInRange(50, 70),
                    origin: { x: 0.5, y: 0.7 },
                    colors: ['#3f51b5', '#4CAF50', '#ff9800', '#e91e63'],
                    zIndex: 1000,
                    disableForReducedMotion: true
                });
                
                requestAnimationFrame(frame);
            }());
            
            // إطلاق انفجار كبير
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                zIndex: 1000,
                disableForReducedMotion: true
            });
        };
    }

    // إنشاء شهادة بايثون
    function generatePythonCertificate() {
        const username = 'المبرمج_المتميز' + Math.floor(Math.random() * 1000);
        const date = new Date().toLocaleDateString('ar-SA');
        
        const certificateHTML = `<span class="comment"># شهادة إتمام تحديات بايثون</span>
<span class="keyword">def</span> <span class="function">congratulate_programmer</span>():
    <span class="variable">name</span> = <span class="string">"${username}"</span>
    <span class="variable">achievement</span> = <span class="string">"إتمام جميع تحديات بايثون بنجاح!"</span>
    <span class="variable">date</span> = <span class="string">"${date}"</span>
    
    <span class="keyword">print</span>(<span class="string">f"تهانينا {name}!"</span>)
    <span class="keyword">print</span>(<span class="string">f"لقد أتممت: {achievement}"</span>)
    <span class="keyword">print</span>(<span class="string">f"بتاريخ: {date}"</span>)
    <span class="keyword">return</span> <span class="string">"مبروك! أنت الآن مبرمج بايثون محترف 🏆"</span>

<span class="variable">result</span> = congratulate_programmer()
<span class="keyword">print</span>(<span class="variable">result</span>)
<span class="comment"># استمر في رحلة البرمجة، مستقبل مشرق ينتظرك!</span>`;

        certificateCode.innerHTML = certificateHTML;
    }

    // إنشاء شهادة HTML
    function generateHTMLCertificate() {
        const username = 'المطور_المتميز' + Math.floor(Math.random() * 1000);
        const date = new Date().toLocaleDateString('ar-SA');
        
        const certificateHTML = `<span class="comment">&lt;!-- شهادة إتمام تحديات HTML --&gt;</span>
<span class="keyword">&lt;html&gt;</span>
<span class="keyword">&lt;head&gt;</span>
    <span class="keyword">&lt;title&gt;</span>شهادة إنجاز<span class="keyword">&lt;/title&gt;</span>
<span class="keyword">&lt;/head&gt;</span>
<span class="keyword">&lt;body&gt;</span>
    <span class="keyword">&lt;div</span> <span class="variable">class=</span><span class="string">"certificate"</span><span class="keyword">&gt;</span>
        <span class="keyword">&lt;h1&gt;</span>تهانينا<span class="keyword">&lt;/h1&gt;</span>
        <span class="keyword">&lt;h2&gt;</span>${username}<span class="keyword">&lt;/h2&gt;</span>
        <span class="keyword">&lt;p&gt;</span>لقد أتممت بنجاح جميع تحديات HTML 🏆<span class="keyword">&lt;/p&gt;</span>
        <span class="keyword">&lt;p&gt;</span>بتاريخ: ${date}<span class="keyword">&lt;/p&gt;</span>
        <span class="keyword">&lt;p</span> <span class="variable">class=</span><span class="string">"message"</span><span class="keyword">&gt;</span>استمر في رحلة البرمجة، مستقبل مشرق ينتظرك!<span class="keyword">&lt;/p&gt;</span>
    <span class="keyword">&lt;/div&gt;</span>
<span class="keyword">&lt;/body&gt;</span>
<span class="keyword">&lt;/html&gt;</span>`;

        certificateCode.innerHTML = certificateHTML;
    }

    // إنشاء شهادة CSS
    function generateCSSCertificate() {
        const username = 'المصمم_المتميز' + Math.floor(Math.random() * 1000);
        const date = new Date().toLocaleDateString('ar-SA');
        
        const certificateHTML = `<span class="comment">/* شهادة إتمام تحديات CSS */</span>

<span class="keyword">.certificate</span> {
    <span class="variable">display</span>: flex;
    <span class="variable">flex-direction</span>: column;
    <span class="variable">align-items</span>: center;
    <span class="variable">justify-content</span>: center;
    <span class="variable">background</span>: linear-gradient(to right, #4f46e5, #34d399);
    <span class="variable">color</span>: white;
    <span class="variable">padding</span>: 20px;
    <span class="variable">border-radius</span>: 10px;
    <span class="variable">box-shadow</span>: 0 8px 30px rgba(0, 0, 0, 0.2);
}

<span class="keyword">.certificate-title</span> {
    <span class="variable">font-size</span>: 24px;
    <span class="variable">color</span>: gold;
    <span class="variable">text-shadow</span>: 0 2px 5px rgba(0, 0, 0, 0.3);
    <span class="variable">margin-bottom</span>: 10px;
    <span class="variable">content</span>: <span class="string">"تهانينا ${username}!"</span>;
}

<span class="keyword">.certificate-achievement</span> {
    <span class="variable">font-weight</span>: bold;
    <span class="variable">content</span>: <span class="string">"لقد أتممت بنجاح جميع تحديات CSS 🏆"</span>;
}

<span class="keyword">.certificate-date</span> {
    <span class="variable">font-style</span>: italic;
    <span class="variable">margin-top</span>: 20px;
    <span class="variable">content</span>: <span class="string">"بتاريخ: ${date}"</span>;
}

<span class="comment">/* استمر في رحلة البرمجة، مستقبل مشرق ينتظرك! */</span>`;

        certificateCode.innerHTML = certificateHTML;
    }

    // إخفاء نافذة النتيجة
    function hideResultModal() {
        resultModal.classList.add('hidden');
    }

    // خلط المصفوفة (لكلمات الكود)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
});
