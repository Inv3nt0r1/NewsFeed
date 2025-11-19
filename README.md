# NewsFeed 📰

A simple, elegant GitHub Pages website for displaying latest news articles.

## Features

- **Clean, Modern Design**: Simple and responsive interface that works on all devices
- **Article Snippets**: Home page displays news article summaries with easy navigation
- **Full Article View**: Click on any snippet to read the complete article
- **Automated Publishing**: Optimized for automated news updates via GitHub Copilot Agent
- **JSON-Based**: Easy-to-manage data structure for programmatic updates

## Live Website

Visit the live website at: `https://[username].github.io/NewsFeed`

## Structure

```
NewsFeed/
├── index.html          # Home page with article snippets
├── article.html        # Individual article page
├── styles.css          # Styling for the entire site
├── app.js             # Home page JavaScript
├── article.js         # Article page JavaScript
├── news-data.json     # News articles data (edit this to add/update articles)
├── AUTOMATION.md      # Guide for automating news publishing
└── README.md          # This file
```

## How to Use

### Viewing the Website

1. Enable GitHub Pages in your repository settings (Settings > Pages)
2. Select the main branch as the source
3. Your site will be published at `https://[username].github.io/NewsFeed`

### Adding New Articles

Edit the `news-data.json` file to add new articles. Each article should follow this structure:

```json
{
  "id": "unique-article-id",
  "title": "Article Title",
  "snippet": "Brief summary for home page",
  "content": "Full article content (HTML supported)",
  "date": "YYYY-MM-DD",
  "author": "Author Name (optional)",
  "image": "image-url.jpg (optional)"
}
```

### Automated Publishing

This website is designed to work with GitHub Copilot Agent for automated news publishing. See [AUTOMATION.md](AUTOMATION.md) for detailed instructions.

## Local Development

To test changes locally:

```bash
# Using Python
python -m http.server 8000

# Or using Node.js
npx http-server

# Then open http://localhost:8000 in your browser
```

## Customization

- **Colors**: Edit the gradient colors in `styles.css` (search for `#667eea` and `#764ba2`)
- **Layout**: Modify grid settings in `.articles-grid` class
- **Content**: Update articles in `news-data.json`

## Technologies Used

- HTML5
- CSS3 (Grid, Flexbox)
- Vanilla JavaScript
- GitHub Pages

## License

This project is open source and available under the MIT License.
