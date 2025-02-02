window.onload = function() {
    let welcomeScreen = document.getElementById("welcome-screen");
    let mainContent = document.getElementById("main-content");

    setTimeout(function() {
        welcomeScreen.classList.add("fade-out"); // フェードアウト
        setTimeout(function() {
            welcomeScreen.style.display = "none"; // 完全に非表示
            mainContent.classList.remove("hidden"); // メインコンテンツ表示
        }, 300); // フェードアウト時間
    }, 1000); // ウェルカムスクリーンの表示時間
};
