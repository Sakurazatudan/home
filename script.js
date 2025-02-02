window.onload = function() {
    let welcomeScreen = document.getElementById("welcome-screen");
    let mainContent = document.getElementById("main-content");

    setTimeout(function() {
        welcomeScreen.classList.add("fade-out"); // フェードアウト
        setTimeout(function() {
            welcomeScreen.style.display = "none"; // 完全に非表示
            mainContent.classList.remove("hidden"); // メインコンテンツ表示
        }, 1000); // フェードアウト時間
    }, 3400); // ウェルカムスクリーンの表示時間
};
