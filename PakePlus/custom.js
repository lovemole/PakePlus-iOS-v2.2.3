window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});// PakePlus 终极黑屏伪装（支付宝同款 100%生效）
(function() {
    // 创建全屏黑色遮罩（永远在最顶层）
    const mask = document.createElement('div');
    mask.style.cssText = `
        position:fixed;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background:#000000;
        z-index:999999999;
        display:none;
    `;
    document.documentElement.appendChild(mask);

    // 切后台 → 立刻黑屏
    function goBlack() {
        mask.style.display = "block";
    }

    // 切回来 → 恢复正常
    function goShow() {
        mask.style.display = "none";
    }

    // 监听所有后台事件
    document.addEventListener('visibilitychange', function() {
        document.hidden ? goBlack() : goShow();
    });
    document.addEventListener('pause', goBlack);
    document.addEventListener('resume', goShow);
    window.addEventListener('blur', goBlack);
    window.addEventListener('focus', goShow);
})();

// ==================== 你原来的功能 完全保留 ====================
const hookClick = (e) => {
    const origin = e.target.closest('a')
    const isBaseTargetBlank = document.querySelector('head base[target="_blank"]')
    if ((origin && origin.href && origin.target === '_blank') || (origin && origin.href && isBaseTargetBlank)) {
        e.preventDefault()
        location.href = origin.href
    }
}
window.open = function (url) { location.href = url }
document.addEventListener('click', hookClick, { capture: true })