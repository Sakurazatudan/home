const button = document.getElementById("theme-toggle");

// クッキーからテーマを取得
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

// クッキーにテーマを保存
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// ページ読み込み時にクッキーを適用
const currentTheme = getCookie("theme");
if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
    button.textContent = "ライトモードにする";
}

button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        setCookie("theme", "dark", 30); // 30日間保存
        button.textContent = "ライトモードにする";
    } else {
        setCookie("theme", "light", 30);
        button.textContent = "ダークモードにする";
    }
});
