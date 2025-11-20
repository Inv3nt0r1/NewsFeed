// Fetch and display news articles from news.json
async function loadNews() {
    const newsContainer = document.getElementById('news-container');
    
    try {
        const response = await fetch('news.json');
        
        if (!response.ok) {
            throw new Error(`Failed to load news: ${response.status}`);
        }
        
        const articles = await response.json();
        
        // Sort articles by date (most recent first)
        articles.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        // Clear loading message
        newsContainer.innerHTML = '';
        
        // Display articles
        if (articles.length === 0) {
            newsContainer.innerHTML = '<p class="loading">No news articles available.</p>';
            return;
        }
        
        articles.forEach(article => {
            const articleElement = createArticleElement(article);
            newsContainer.appendChild(articleElement);
        });
        
    } catch (error) {
        console.error('Error loading news:', error);
        newsContainer.innerHTML = `
            <div class="error-message">
                <p>Failed to load news articles. Please try again later.</p>
                <p><small>${error.message}</small></p>
            </div>
        `;
    }
}

// Create HTML element for a single article
function createArticleElement(article) {
    const articleDiv = document.createElement('article');
    articleDiv.className = 'news-article';
    
    const title = document.createElement('h2');
    title.textContent = article.title;
    
    const date = document.createElement('span');
    date.className = 'news-date';
    date.textContent = formatDate(article.date);
    
    const content = document.createElement('p');
    content.textContent = article.article;
    
    articleDiv.appendChild(title);
    articleDiv.appendChild(date);
    articleDiv.appendChild(content);
    
    return articleDiv;
}

// Format date to be more readable
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Load news when page loads
document.addEventListener('DOMContentLoaded', loadNews);
