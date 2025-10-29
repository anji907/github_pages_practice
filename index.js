const element = document.getElementById('sample-btn');
element.addEventListener('click', () => {
    console.log('Button is clicked!');
    repro.track("【画面】海外航空券+ホテル_詳細画面表示");
});