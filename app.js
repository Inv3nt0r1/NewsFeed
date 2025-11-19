// Main application logic for NewsFeed

// Load and display news articles
async function loadArticles() {
    try {
        const response = await fetch('news-data.json');
        const data = await response.json();
        
        // Sort articles by date (newest first)
        const articles = data.articles.sort((a, b) => 
            new Date(b.date) - new Date(a.date)
        );
        
        displayArticles(articles);
    } catch (error) {
        console.error('Error loading articles:', error);
        document.getElementById('news-articles').innerHTML = 
            '<p class="loading">Error loading articles. Please try again later.</p>';
    }
}

// Display articles on the home page
function displayArticles(articles) {
    const container = document.getElementById('news-articles');
    
    if (articles.length === 0) {
        container.innerHTML = '<p class="loading">No articles available yet.</p>';
        return;
    }
    
    container.innerHTML = articles.map(article => `
        <a href="article.html?id=${article.id}" class="article-card">
            <div class="article-image" style="${article.image ? `background-image: url('${article.image}')` : ''}"></div>
            <div class="article-content">
                <div class="article-date">${formatDate(article.date)}</div>
                <h2 class="article-title">${escapeHtml(article.title)}</h2>
                <p class="article-snippet">${escapeHtml(article.snippet)}</p>
                <span class="read-more">Read More</span>
            </div>
        </a>
    `).join('');
}

// Format date to readable format
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Load articles when the page loads
if (document.getElementById('news-articles')) {
    loadArticles();
}
