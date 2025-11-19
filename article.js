// Article page logic

async function loadArticle() {
    // Get article ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');
    
    if (!articleId) {
        displayError('Article not found');
        return;
    }
    
    try {
        const response = await fetch('news-data.json');
        const data = await response.json();
        
        const article = data.articles.find(a => a.id === articleId);
        
        if (article) {
            displayArticle(article);
        } else {
            displayError('Article not found');
        }
    } catch (error) {
        console.error('Error loading article:', error);
        displayError('Error loading article. Please try again later.');
    }
}

function displayArticle(article) {
    const container = document.getElementById('article-container');
    
    container.innerHTML = `
        <a href="index.html" class="back-link">Back to Home</a>
        <article class="article-page">
            <header class="article-header">
                <h1 class="article-full-title">${escapeHtml(article.title)}</h1>
                <div class="article-meta">
                    Published on ${formatDate(article.date)}
                    ${article.author ? ` by ${escapeHtml(article.author)}` : ''}
                </div>
            </header>
            <div class="article-body">
                ${article.content}
            </div>
        </article>
    `;
}

function displayError(message) {
    const container = document.getElementById('article-container');
    container.innerHTML = `
        <a href="index.html" class="back-link">Back to Home</a>
        <div class="article-page">
            <p class="loading">${message}</p>
        </div>
    `;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Load article when page loads
if (document.getElementById('article-container')) {
    loadArticle();
}
