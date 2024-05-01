function loadContent(hash) {
    const content = document.getElementById('mainContent');
    switch (hash) {
        case '#home':
            fetch('./htmls/home.html')
                .then(response => response.text())
                .then(html => {
                    content.innerHTML = html;
                })
                .catch(error => console.error('Error loading the content:', error));
            break;
        case '#blog':
            fetch('./htmls/blog.html')
                .then(response => response.text())
                .then(html => {
                    content.innerHTML = html;
                })
                .catch(error => console.error('Error loading the content:', error));
            break;
        case '#photo':
            fetch('./htmls/photo.html')
                .then(response => response.text())
                .then(html => {
                    content.innerHTML = html;
                })
                .catch(error => console.error('Error loading the content:', error));
            break;
        case '#plan':
            fetch('./htmls/plan.html')
                .then(response => response.text())
                .then(html => {
                    content.innerHTML = html;
                })
                .catch(error => console.error('Error loading the content:', error));
            break;
        default:
            fetch('./htmls/404.html')
                .then(response => response.text())
                .then(html => {
                    content.innerHTML = html;
                })
                .catch(error => console.error('Error loading the content:', error));
    }
}


// 监听 hashchange 事件
window.addEventListener('hashchange', function() {
    // alert(window.location) 是url
    // alert(window.location.hash)
    loadContent(window.location.hash);
});

// 初始化页面
window.addEventListener("load", function() {
    if (window.location.hash) {
        loadContent(window.location.hash);
    } else {
        window.location.hash = '#home';
    }
})
