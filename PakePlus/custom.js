window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});// PakePlus 纯净后台遮罩脚本 - 点击不黑屏，仅切后台黑屏
(function() {
    // 创建全屏黑色遮罩（仅切后台时显示）
    const mask = document.createElement('div');
    mask.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        z-index: 999999999;
        display: none;
    `;
    document.documentElement.appendChild(mask);

    // 监听：只有切后台/切APP 才显示黑屏
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            // 切后台 → 黑屏
            mask.style.display = 'block';
        } else {
            // 切回APP → 恢复
            mask.style.display = 'none';
        }
    });
})();

// ==================== 你原来的链接打开功能（完全保留） ====================
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