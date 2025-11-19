# NewsFeed - Automation Guide

This document explains how to automate news publishing on the NewsFeed GitHub Pages website using GitHub Copilot Agent or any other automation tool.

## Overview

NewsFeed is designed with automation in mind. All news articles are stored in a single JSON file (`news-data.json`), making it easy to add, update, or remove articles programmatically.

## Data Structure

The `news-data.json` file contains an array of article objects. Each article has the following structure:

```json
{
  "articles": [
    {
      "id": "unique-article-id",
      "title": "Article Title",
      "snippet": "Brief summary for the home page (recommended 150-200 characters)",
      "content": "Full article content (HTML supported)",
      "date": "YYYY-MM-DD",
      "author": "Author Name (optional)",
      "image": "image-url.jpg (optional)"
    }
  ]
}
```

## Adding New Articles

To add a new article programmatically:

1. Read the current `news-data.json` file
2. Parse it as JSON
3. Add your new article object to the `articles` array
4. Write the updated JSON back to the file
5. Commit and push the changes to the repository

## Automation with GitHub Copilot Agent

GitHub Copilot Agent can be configured to:

1. **Fetch news from external sources** on a scheduled basis
2. **Format the news** into the required JSON structure
3. **Update news-data.json** with new articles
4. **Commit and push** changes automatically

### Recommended Schedule

- Daily updates: Good for general news
- Hourly updates: For breaking news or high-frequency content
- Weekly updates: For curated or analysis-based content

## Best Practices

1. **Unique IDs**: Always generate unique IDs for articles (e.g., `article-001`, `article-YYYYMMDD-001`, etc.)

2. **Date Format**: Use ISO date format (YYYY-MM-DD) for consistency

3. **Content Formatting**: 
   - Use HTML tags for formatting in the `content` field
   - Supported tags: `<p>`, `<h2>`, `<h3>`, `<ul>`, `<ol>`, `<li>`, `<strong>`, `<em>`, `<code>`
   - Keep snippets concise (150-200 characters)

4. **Image URLs**: 
   - Use absolute URLs for images
   - Ensure images are publicly accessible
   - Leave empty string if no image

5. **Article Ordering**: Articles are automatically sorted by date (newest first) in the frontend

6. **Content Safety**: Always validate and sanitize content to prevent XSS attacks

## Example Automation Workflow

```bash
# 1. Clone or pull the repository
git pull origin main

# 2. Read and parse news-data.json
# 3. Add new article(s)
# 4. Write updated JSON

# 5. Commit and push
git add news-data.json
git commit -m "Add new article: [Article Title]"
git push origin main
```

## Testing Changes

Before pushing updates:

1. Validate JSON syntax (use `jsonlint` or similar)
2. Test locally using a simple HTTP server:
   ```bash
   python -m http.server 8000
   # or
   npx http-server
   ```
3. Navigate to `http://localhost:8000` to preview changes

## GitHub Pages Deployment

- GitHub Pages automatically rebuilds the site when changes are pushed
- Updates typically appear within 1-2 minutes
- The site is accessible at: `https://[username].github.io/NewsFeed`

## Troubleshooting

**Articles not showing:**
- Check JSON syntax for errors
- Verify the file is named exactly `news-data.json`
- Ensure the file is in the root directory

**Formatting issues:**
- Review HTML in the `content` field
- Ensure all HTML tags are properly closed
- Check that special characters are properly escaped

**Images not displaying:**
- Verify image URLs are absolute and publicly accessible
- Check CORS settings if images are from external sources

## Security Considerations

- Always validate input when fetching external content
- Sanitize HTML to prevent XSS attacks
- Use HTTPS for all external resources
- Keep sensitive information out of the repository

## Support

For issues or questions, please open an issue on the GitHub repository.
