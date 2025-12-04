document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animation (Fade In)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach(el => observer.observe(el));

    // Header Scroll Effect
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Card Hover Effect (3D Tilt - subtle)
    const cards = document.querySelectorAll('.app-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Calculate rotation based on mouse position
            // Center of card is (0,0)
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -2; // Max -2 to 2 deg
            const rotateY = ((x - centerX) / centerX) * 2;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)'; // Reset
        });
    });
    // Language Switching
    const translations = {
        ja: {
            "header.tagline": "Creating intuitive iOS experiences.",
            "hero.subtitle": "iOSアプリ開発を通して、<br>日常を少し便利に、少し楽しく。",
            "hero.button": "View Apps",
            "apps.title": "制作したアプリ",
            "app.ai_greats.title": "AI偉人とチャット",
            "app.ai_greats.subtitle": "50人の偉人と会話・恋愛・勉強学習トーク",
            "app.prime_rush.title": "Prime Rush: 素因数分解の数学脳トレ・暗算ゲーム",
            "app.prime_rush.subtitle": "瞬時に計算！頭が良くなる素数パズルゲームで受験勉強",
            "app.blue_library.title": "青の書架",
            "app.blue_library.subtitle": "高機能な青空文庫リーダー",
            "app.household.title": "かんたん外貨家計簿",
            "app.household.subtitle": "世界中の通貨に対応した家計簿アプリ",
            "app.currency.title": "為替両替電卓",
            "app.currency.subtitle": "163の通貨変換がお手軽！オフラインでも使える",
            "app.senryu.title": "川柳AI採点",
            "app.senryu.subtitle": "才能アリ？才能ナシ？",
            "app.haiku.title": "俳句AI採点",
            "app.haiku.subtitle": "才能アリ？才能ナシ？",
            "app.airport_code.title": "空港コード暗記",
            "app.airport_code.subtitle": "３レターマスター!",
            "app.airport_go.title": "空港GO！",
            "app.airport_go.subtitle": "スタンプラリー＆ガチャ旅＆クイズ",
            "app.common.overview": "概要・サポート",
            "app.common.terms": "利用規約 & プライバシーポリシー",
            "app.common.review": "レビューを投稿する",
            "contact.title": "お問い合わせ",
            "contact.text": "ご連絡は以下のメールアドレスまでお願いいたします。",
            "footer.github": "GitHubプロフィール"
        },
        en: {
            "header.tagline": "Creating intuitive iOS experiences.",
            "hero.subtitle": "Making daily life a little more convenient and fun<br>through iOS app development.",
            "hero.button": "View Apps",
            "apps.title": "Apps",
            "app.ai_greats.title": "Chat with AI Greats",
            "app.ai_greats.subtitle": "Talk, romance, and study with 50 historical figures",
            "app.prime_rush.title": "Prime Rush: Math Time Attack",
            "app.prime_rush.subtitle": "Brain Speed Factorization Game",
            "app.blue_library.title": "Blue Library",
            "app.blue_library.subtitle": "Advanced Aozora Bunko Reader",
            "app.household.title": "Easy Foreign Currency Budget",
            "app.household.subtitle": "Budget app supporting currencies worldwide",
            "app.currency.title": "Currency Converter Calculator",
            "app.currency.subtitle": "Easy conversion for 163 currencies! Works offline",
            "app.senryu.title": "Senryu AI Grading",
            "app.senryu.subtitle": "Do you have talent? Or not?",
            "app.haiku.title": "Haiku AI Grading",
            "app.haiku.subtitle": "Do you have talent? Or not?",
            "app.airport_code.title": "Airport Code Memorization",
            "app.airport_code.subtitle": "Master the 3-letter codes!",
            "app.airport_go.title": "Airport GO!",
            "app.airport_go.subtitle": "Stamp Rally & Gacha Trip & Quiz",
            "app.common.overview": "Overview & Support",
            "app.common.terms": "Terms & Privacy Policy",
            "app.common.review": "Write a Review",
            "contact.title": "Contact",
            "contact.text": "Please contact us at the email address below.",
            "footer.github": "GitHub Profile"
        },
        zh: {
            "header.tagline": "Creating intuitive iOS experiences.",
            "hero.subtitle": "通过iOS应用开发，<br>让日常生活更便利、更有趣。",
            "hero.button": "查看应用",
            "apps.title": "应用列表",
            "app.ai_greats.title": "与AI伟人聊天",
            "app.ai_greats.subtitle": "与50位伟人进行对话、恋爱、学习交流",
            "app.prime_rush.title": "Prime Rush: 质因数分解数学心算IQ脑力挑战",
            "app.prime_rush.subtitle": "极限速算与心算！锻炼大脑IQ与逻辑的数学益智游戏",
            "app.blue_library.title": "青之书架",
            "app.blue_library.subtitle": "高性能青空文库阅读器",
            "app.household.title": "简易外币家计簿",
            "app.household.subtitle": "支持全球货币的记账应用",
            "app.currency.title": "汇率换算计算器",
            "app.currency.subtitle": "轻松换算163种货币！支持离线使用",
            "app.senryu.title": "川柳AI评分",
            "app.senryu.subtitle": "有才华？还是没才华？",
            "app.haiku.title": "俳句AI评分",
            "app.haiku.subtitle": "有才华？还是没才华？",
            "app.airport_code.title": "机场代码背诵",
            "app.airport_code.subtitle": "掌握三字代码！",
            "app.airport_go.title": "机场GO！",
            "app.airport_go.subtitle": "集章拉力 & 扭蛋旅行 & 测验",
            "app.common.overview": "概要与支持",
            "app.common.terms": "使用条款 & 隐私政策",
            "app.common.review": "撰写评论",
            "contact.title": "联系我们",
            "contact.text": "请通过以下电子邮件地址联系我们。",
            "footer.github": "GitHub 个人资料"
        }
    };

    const langSelect = document.getElementById('lang-select');

    function updateLanguage(lang) {
        document.documentElement.lang = lang;
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // セレクトボックスの選択状態も更新
        if (langSelect) {
            langSelect.value = lang;
        }
    }

    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            updateLanguage(e.target.value);
        });
    }

    // --- 自動言語検出 (Auto Language Detection) ---
    // ブラウザの言語を取得 (例: "ja-JP" -> "ja", "en-US" -> "en")
    const browserLang = (navigator.language || navigator.userLanguage).substring(0, 2);

    // サポートしている言語リスト
    const supportedLangs = ['ja', 'en', 'zh'];

    // サポートしている言語ならそれを、そうでなければ英語(en)をデフォルトにする
    const defaultLang = supportedLangs.includes(browserLang) ? browserLang : 'en';

    // 言語を適用
    updateLanguage(defaultLang);
});
