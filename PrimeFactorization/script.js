document.addEventListener('DOMContentLoaded', () => {

    // --- Scroll Animation ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach(el => observer.observe(el));

    // --- Header Scroll Effect ---
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Translations ---
    const translations = {
        ja: {
            "contact.title": "お問い合わせ・ご要望",
            "contact.form_desc": "ご意見・ご要望・不具合報告は、以下のフォームより受け付けております。",
            "contact.btn_form": "お問い合わせフォームへ",
            "contact.email_desc": "メールでのお問い合わせはこちら",

            "pf.title": "Prime Rush: 素因数分解の数学脳トレ",
            "pf.status": "12月上旬リリース予定",
            "pf.dev": "デベロッパー：POCHIMU TECH",
            "pf.cat": "カテゴリ：教育 / エンターテイメント",
            "pf.btn.terms": "利用規約 & プライバシーポリシー",
            "pf.btn.other_works": "POCHIMU TECHの他の作品はこちら",

            "pf.overview.title": "アプリ概要",
            "pf.intro": "ご利用いただきありがとうございます！<br>このページでは、アプリ「素因数分解タイムアタック」に関するお問い合わせや、不具合報告を受け付けています。",

            "pf.purpose.title": "利用目的",
            "pf.purpose.text": "本アプリは、素因数分解タイムアタックゲームを楽しむことを目的として提供されています。",
            "pf.features.title": "機能の概要",
            "pf.features.1": "素因数分解のタイムアタックゲーム",
            "pf.features.2": "スコアの記録およびランキング機能（Firebase使用）",

            "pf.disclaimer.title": "🛡️ 免責事項",
            "pf.disclaimer.text": "本アプリの情報は正確を期していますが、内容の保証は致しかねます。<br>不具合などが発生した場合、できる限り迅速に対応いたしますが、保証はできません。",

            // Terms & Privacy
            "terms.title": "📜 利用規約",
            "terms.updated": "最終更新日",
            "terms.intro": "この利用規約（以下、「本規約」といいます）は、Prime Rush（以下、「本アプリ」といいます）の利用に関する条件を定めるものです。本アプリをご利用になる前に、必ず本規約をお読みください。",
            "terms.art1.title": "第1条（適用）",
            "terms.art1.text1": "本規約は、本アプリを利用するすべての方（以下、「利用者」といいます）と、本アプリの開発者との間に適用されます。",
            "terms.art1.text2": "利用者は、本アプリをインストールまたは利用した時点で、本規約に同意したものとみなします。",
            "terms.art2.title": "第2条（利用目的）",
            "terms.art2.text": "本アプリは、素因数分解タイムアタックゲームを楽しむことを目的として提供されています。",
            "terms.art3.title": "第3条（機能の概要）",
            "terms.art3.li1": "素因数分解のタイムアタックゲーム",
            "terms.art3.li2": "スコアの記録およびランキング機能（Firebase使用）",
            "terms.art4.title": "第4条（著作権）",
            "terms.art4.text1": "本アプリのプログラム、デザイン、機能等の著作権は、開発者に帰属します。",
            "terms.art4.text2": "利用者は、本アプリを無断で複製・改変・再配布することはできません。",
            "terms.art5.title": "第5条（禁止事項）",
            "terms.art5.intro": "以下の行為を禁止します：",
            "terms.art5.li1": "本アプリのリバースエンジニアリング、改変、複製、再配布",
            "terms.art5.li2": "サーバー（Firebase等）への過剰・不正なリクエスト送信",
            "terms.art5.li3": "本アプリの不正利用、ランキングの不正操作",
            "terms.art5.li4": "法令または公序良俗に反する行為",
            "terms.art6.title": "第6条（免責事項）",
            "terms.art6.li1": "本アプリは、正確な動作を保証するものではありません。",
            "terms.art6.li2": "利用者が本アプリを使用したことにより発生した損害について、開発者は一切責任を負いません。",
            "terms.art6.li3": "Firebase等の外部サービス障害により機能の一部が正常に動作しない場合があります。",
            "terms.art7.title": "第7条（変更・終了）",
            "terms.art7.text1": "開発者は、予告なく本アプリの仕様変更、提供停止、または本規約を変更する場合があります。",
            "terms.art7.text2": "変更後の規約は、本アプリ内または関連ページで告知した時点から効力を有します。",
            "terms.art8.title": "第8条（準拠法）",
            "terms.art8.text": "本規約の解釈および適用は日本法に準拠します。",

            "privacy.title": "🔒 プライバシーポリシー",
            "privacy.intro": "本アプリでは、ユーザーのプライバシーを尊重し、以下の方針に基づいて運営しています。",
            "privacy.sec1.title": "1. 収集する情報",
            "privacy.sec1.text1": "本アプリでは、氏名、メールアドレス、位置情報など、個人を特定できる情報を一切収集しません。",
            "privacy.sec1.text2": "ただし、以下の情報を取得する場合があります：",
            "privacy.sec1.li1": "ゲームスコア等のランキングに必要なデータ（Firebaseに保存）",
            "privacy.sec1.li2": "プレイ回数や端末識別が必要な最低限の匿名情報（Firebaseに送信される場合があります）",
            "privacy.sec2.title": "2. Firebaseの利用について",
            "privacy.sec2.text1": "本アプリでは、Google社のFirebaseを利用してランキング機能を提供しています。",
            "privacy.sec2.li1": "Firebaseを通じて収集される情報は匿名化されており、個人を特定するものではありません",
            "privacy.sec2.li2": "Firebase利用には、Googleのプライバシーポリシーが適用されます",
            "privacy.sec3.title": "3. 広告・解析について",
            "privacy.sec3.text": "現時点では、広告配信およびアクセス解析機能は導入していません。今後導入する場合は、アプリ内またはプライバシーポリシーにて事前に告知します。",
            "privacy.sec4.title": "4. 通信について",
            "privacy.sec4.text": "ランキングへの登録・取得のため、Firebaseとの通信が行われますが、それ以外の目的でのデータ送信は行いません。",
            "privacy.sec5.title": "5. 第三者提供",
            "privacy.sec5.text": "法令に基づく場合を除き、ユーザー情報を第三者に提供することはありません。",
            "privacy.sec6.title": "6. データの保存期間",
            "privacy.sec6.text": "ランキング関連データはFirebase上に保存されます。アプリ削除後も、データがFirebaseに残る場合があります。",
            "privacy.sec7.title": "7. 改訂",
            "privacy.sec7.text": "必要に応じて本ポリシーを改訂することがあります。改訂後はアプリ内または関連ページにて告知します。"
        },
        en: {
            "contact.title": "Contact / Feedback",
            "contact.form_desc": "We accept feedback, requests, and bug reports via the form below.",
            "contact.btn_form": "Go to Contact Form",
            "contact.email_desc": "For inquiries via email:",

            "pf.title": "Prime Rush: Math Time Attack",
            "pf.status": "Scheduled for Release Early Dec",
            "pf.dev": "Developer: POCHIMU TECH",
            "pf.cat": "Category: Education / Entertainment",
            "pf.btn.terms": "Terms & Privacy Policy",
            "pf.btn.other_works": "Check out other apps by POCHIMU TECH",

            "pf.overview.title": "App Overview",
            "pf.intro": "Thank you for using our app!<br>This page accepts inquiries and bug reports regarding \"Prime Rush\".",

            "pf.purpose.title": "Purpose",
            "pf.purpose.text": "This app is provided for the purpose of enjoying a prime factorization time attack game.",
            "pf.features.title": "Features",
            "pf.features.1": "Prime factorization time attack game",
            "pf.features.2": "Score recording and ranking function (using Firebase)",

            "pf.disclaimer.title": "🛡️ Disclaimer",
            "pf.disclaimer.text": "We strive for accuracy, but cannot guarantee the content.<br>We will respond to bugs as quickly as possible, but cannot guarantee a fix.",

            // Terms & Privacy (English)
            "terms.title": "📜 Terms of Service",
            "terms.updated": "Last Updated",
            "terms.intro": "These Terms of Use (hereinafter referred to as \"Terms\") set forth the conditions for using Prime Rush (hereinafter referred to as \"App\"). Please read these Terms carefully before using the App.",
            "terms.art1.title": "Article 1 (Applicability)",
            "terms.art1.text1": "These Terms apply to all users of the App (hereinafter referred to as \"Users\") and the developer of the App.",
            "terms.art1.text2": "Users are deemed to have agreed to these Terms upon installing or using the App.",
            "terms.art2.title": "Article 2 (Purpose)",
            "terms.art2.text": "This App is provided for the purpose of enjoying a prime factorization time attack game.",
            "terms.art3.title": "Article 3 (Features)",
            "terms.art3.li1": "Prime factorization time attack game",
            "terms.art3.li2": "Score recording and ranking function (using Firebase)",
            "terms.art4.title": "Article 4 (Copyright)",
            "terms.art4.text1": "The copyright of the program, design, functions, etc., of this App belongs to the developer.",
            "terms.art4.text2": "Users may not copy, modify, or redistribute this App without permission.",
            "terms.art5.title": "Article 5 (Prohibitions)",
            "terms.art5.intro": "The following acts are prohibited:",
            "terms.art5.li1": "Reverse engineering, modification, duplication, or redistribution of the App",
            "terms.art5.li2": "Excessive or unauthorized requests to servers (Firebase, etc.)",
            "terms.art5.li3": "Unauthorized use of the App or manipulation of rankings",
            "terms.art5.li4": "Acts contrary to laws or public order and morals",
            "terms.art6.title": "Article 6 (Disclaimer)",
            "terms.art6.li1": "This App does not guarantee accurate operation.",
            "terms.art6.li2": "The developer is not responsible for any damages incurred by the User using this App.",
            "terms.art6.li3": "Some functions may not work properly due to failures of external services such as Firebase.",
            "terms.art7.title": "Article 7 (Changes/Termination)",
            "terms.art7.text1": "The developer may change the specifications of the App, suspend provision, or change these Terms without notice.",
            "terms.art7.text2": "The modified Terms shall be effective from the time they are announced within the App or on related pages.",
            "terms.art8.title": "Article 8 (Governing Law)",
            "terms.art8.text": "The interpretation and application of these Terms shall be governed by Japanese law.",

            "privacy.title": "🔒 Privacy Policy",
            "privacy.intro": "This App respects user privacy and operates based on the following policy.",
            "privacy.sec1.title": "1. Information Collected",
            "privacy.sec1.text1": "This App does not collect any personally identifiable information such as names, email addresses, or location data.",
            "privacy.sec1.text2": "However, the following information may be acquired:",
            "privacy.sec1.li1": "Data required for rankings such as game scores (saved in Firebase)",
            "privacy.sec1.li2": "Minimum anonymous information required for play counts or device identification (may be sent to Firebase)",
            "privacy.sec2.title": "2. Use of Firebase",
            "privacy.sec2.text1": "This App uses Google Firebase to provide ranking functions.",
            "privacy.sec2.li1": "Information collected through Firebase is anonymized and does not identify individuals.",
            "privacy.sec2.li2": "Google's privacy policy applies to the use of Firebase.",
            "privacy.sec3.title": "3. Ads & Analytics",
            "privacy.sec3.text": "At this time, no ad delivery or access analysis functions are implemented. If introduced in the future, we will notify you in advance within the App or Privacy Policy.",
            "privacy.sec4.title": "4. Communication",
            "privacy.sec4.text": "Communication with Firebase occurs for registering/retrieving rankings, but data is not sent for other purposes.",
            "privacy.sec5.title": "5. Third-Party Provision",
            "privacy.sec5.text": "User information will not be provided to third parties unless required by law.",
            "privacy.sec6.title": "6. Data Retention Period",
            "privacy.sec6.text": "Ranking-related data is stored on Firebase. Data may remain on Firebase even after deleting the App.",
            "privacy.sec7.title": "7. Revisions",
            "privacy.sec7.text": "We may revise this policy as necessary. Revisions will be announced within the App or on related pages."
        },
        zh: {
            "contact.title": "联系我们 / 反馈",
            "contact.form_desc": "关于应用的意见、需求及故障报告，请通过以下表单提交。",
            "contact.btn_form": "前往咨询表单",
            "contact.email_desc": "通过电子邮件联系：",

            "pf.title": "Prime Rush: 质因数分解数学脑力挑战",
            "pf.status": "预计12月上旬发布",
            "pf.dev": "开发者：POCHIMU TECH",
            "pf.cat": "类别：教育 / 娱乐",
            "pf.btn.terms": "使用条款 & 隐私政策",
            "pf.btn.other_works": "查看 POCHIMU TECH 的其他作品",

            "pf.overview.title": "应用概要",
            "pf.intro": "感谢您的使用！<br>本页面接受关于“Prime Rush”的咨询及故障报告。",

            "pf.purpose.title": "使用目的",
            "pf.purpose.text": "本应用旨在提供享受质因数分解计时挑战游戏的乐趣。",
            "pf.features.title": "功能概要",
            "pf.features.1": "质因数分解的计时挑战游戏",
            "pf.features.2": "分数记录及排名功能（使用Firebase）",

            "pf.disclaimer.title": "🛡️ 免责声明",
            "pf.disclaimer.text": "我们力求信息准确，但不保证内容的准确性。<br>如果发生故障，我们将尽可能迅速应对，但无法做出保证。",

            // Terms & Privacy (Chinese)
            "terms.title": "📜 使用条款",
            "terms.updated": "最后更新",
            "terms.intro": "本使用条款（以下简称“本条款”）规定了关于使用Prime Rush（以下简称“本应用”）的条件。在使用本应用之前，请务必阅读本条款。",
            "terms.art1.title": "第1条（适用）",
            "terms.art1.text1": "本条款适用于所有使用本应用的用户（以下简称“用户”）与本应用开发者之间。",
            "terms.art1.text2": "用户安装或使用本应用即视为同意本条款。",
            "terms.art2.title": "第2条（使用目的）",
            "terms.art2.text": "本应用旨在提供享受质因数分解计时挑战游戏的乐趣。",
            "terms.art3.title": "第3条（功能概要）",
            "terms.art3.li1": "质因数分解的计时挑战游戏",
            "terms.art3.li2": "分数记录及排名功能（使用Firebase）",
            "terms.art4.title": "第4条（版权）",
            "terms.art4.text1": "本应用的程序、设计、功能等的版权归开发者所有。",
            "terms.art4.text2": "用户不得擅自复制、修改或重新分发本应用。",
            "terms.art5.title": "第5条（禁止事项）",
            "terms.art5.intro": "禁止以下行为：",
            "terms.art5.li1": "对本应用进行逆向工程、修改、复制、重新分发",
            "terms.art5.li2": "向服务器（Firebase等）发送过量或不正当请求",
            "terms.art5.li3": "不正当使用本应用、操纵排名",
            "terms.art5.li4": "违反法律法规或公序良俗的行为",
            "terms.art6.title": "第6条（免责声明）",
            "terms.art6.li1": "本应用不保证准确运行。",
            "terms.art6.li2": "开发者不对用户因使用本应用而产生的任何损害承担责任。",
            "terms.art6.li3": "由于Firebase等外部服务故障，部分功能可能无法正常运行。",
            "terms.art7.title": "第7条（变更・终止）",
            "terms.art7.text1": "开发者可能会在不预先通知的情况下更改本应用的规格、停止提供或更改本条款。",
            "terms.art7.text2": "变更后的条款自本应用内或相关页面公布之日起生效。",
            "terms.art8.title": "第8条（管辖法律）",
            "terms.art8.text": "本条款的解释及适用均遵循日本法律。",

            "privacy.title": "🔒 隐私政策",
            "privacy.intro": "本应用尊重用户隐私，并根据以下方针运营。",
            "privacy.sec1.title": "1. 收集的信息",
            "privacy.sec1.text1": "本应用绝不收集姓名、电子邮件地址、位置信息等可识别个人的信息。",
            "privacy.sec1.text2": "但是，可能会获取以下信息：",
            "privacy.sec1.li1": "游戏分数等排名所需的数据（保存在Firebase中）",
            "privacy.sec1.li2": "游戏次数或设备识别所需的最低限度的匿名信息（可能会发送到Firebase）",
            "privacy.sec2.title": "2. 关于Firebase的使用",
            "privacy.sec2.text1": "本应用使用Google公司的Firebase提供排名功能。",
            "privacy.sec2.li1": "通过Firebase收集的信息已匿名化，不识别个人。",
            "privacy.sec2.li2": "Firebase的使用适用Google的隐私政策。",
            "privacy.sec3.title": "3. 关于广告・分析",
            "privacy.sec3.text": "目前未引入广告投放及访问分析功能。如果将来引入，将在应用内或隐私政策中提前通知。",
            "privacy.sec4.title": "4. 关于通信",
            "privacy.sec4.text": "为了注册・获取排名，会与Firebase进行通信，但不会出于其他目的发送数据。",
            "privacy.sec5.title": "5. 第三方提供",
            "privacy.sec5.text": "除法律规定外，不会向第三方提供用户信息。",
            "privacy.sec6.title": "6. 数据保存期限",
            "privacy.sec6.text": "排名相关数据保存在Firebase上。删除应用后，数据可能仍留在Firebase中。",
            "privacy.sec7.title": "7. 修订",
            "privacy.sec7.text": "可能会根据需要修订本政策。修订后将在应用内或相关页面通知。"
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