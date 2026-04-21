window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});// 核心功能：开启系统级隐私保护（支付宝同款）
document.addEventListener('DOMContentLoaded', function() {
    try {
        // PakePlus / Tauri 内核：开启安全窗口（核心代码）
        if (window.__TAURI__) {
            window.__TAURI__.window.appWindow.setContentProtected(true);
        }
        // 兼容模式：强制后台隐藏
        window.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                document.body.style.opacity = '0';
            } else {
                document.body.style.opacity = '1';
            }
        });
    } catch(e){}
});

// ==================== 以下是你原来的功能，完全保留 ====================
const hookClick = (e) => {
    const origin = e.target.closest('a')
    const isBaseTargetBlank = document.querySelector(
        'head base[target="_blank"]'
    )
    console.log('origin', origin, isBaseTargetBlank)
    if (
        (origin && origin.href && origin.target === '_blank') ||
        (origin && origin.href && isBaseTargetBlank)
    ) {
        e.preventDefault()
        console.log('handle origin', origin)
        location.href = origin.href
    } else {
        console.log('not handle origin', origin)
    }
}

window.open = function (url, target, features) {
    console.log('open', url, target, features)
    location.href = url
}

document.addEventListener('click', hookClick, { capture: true })