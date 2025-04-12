const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
    // タブを切り替え
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // コンテンツを切り替え
    contents.forEach(c => c.classList.remove('active'));
    const target = document.getElementById(tab.dataset.tab);
    target.classList.add('active');
    });
});