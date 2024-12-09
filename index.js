const element = document.getElementById('sample-btn');
element.addEventListener('click', () => {
    console.log('Button is clicked!');
    repro.track("WebViewでイベントがトラッキングされました！");
});