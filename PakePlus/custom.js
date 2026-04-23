window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});// LiteTalk + PakePlus 专用：修复 CSRF 错误
(function() {
    // 把这里改成你的真实网站域名（必须正确！）
    const MY_DOMAIN = "http://fn.gmole.win:8888";

    // 强制修正 WebView 的 Origin，绕过 CSRF 校验
    Object.defineProperty(document, 'referrer', { value: MY_DOMAIN });
    Object.defineProperty(window, 'origin', { value: MY_DOMAIN });

    // 拦截所有请求，自动带上正确的 CSRF 头
    const origFetch = window.fetch;
    window.fetch = function(...args) {
        if (args[1] && typeof args[1] === 'object') {
            if (!args[1].headers) args[1].headers = {};
            args[1].headers['Referer'] = MY_DOMAIN;
            args[1].headers['Origin'] = MY_DOMAIN;
        }
        return origFetch.apply(this, args);
    };

    // 拦截 AJAX 请求
    const origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(...args) {
        this.setRequestHeader('Referer', MY_DOMAIN);
        this.setRequestHeader('Origin', MY_DOMAIN);
        origOpen.apply(this, args);
    };
})();