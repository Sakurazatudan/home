window.onload = function() {
    setTimeout(function() {
        document.getElementById("welcome-screen").style.opacity = "0";
        setTimeout(function() {
            document.getElementById("welcome-screen").style.display = "none";
            document.getElementById("main-content").classList.remove("hidden");
        }, 1000); // フェードアウト時間
    }, 2000); // ウェルカムスクリーンの表示時間
};
