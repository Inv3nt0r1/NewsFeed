# NewsFeed

A simple and elegant news feed website that displays the latest technology news from a JSON data file.

## Features

- Clean, responsive design
- Automatically sorts articles by date (most recent first)
- Easy-to-update JSON data format
- No backend required - runs entirely in the browser

## How to Use

1. Open `index.html` in your web browser
2. The news feed will automatically load and display articles from `news.json`

## How to Add More News Articles

To add new news articles to the feed, edit the `news.json` file:

1. Open `news.json` in a text editor
2. Copy an existing article block (including the curly braces `{}`)
3. Paste it at the beginning of the array (right after the opening `[`)
4. Add a comma after your new article block
5. Update the `title`, `date`, and `article` fields with your new content
6. Save the file

### Example:

```json
[
  {
    "title": "Your New Article Title Here",
    "date": "2025-11-20",
    "article": "Your article content here. You can write multiple sentences or paragraphs as one continuous text."
  },
  {
    "title": "Existing Article Title",
    "date": "2025-11-18",
    "article": "Existing article content..."
  }
]
```

### Important Notes:

- **Date Format**: Always use `YYYY-MM-DD` format (e.g., `2025-11-20`)
- **Commas**: Make sure to add commas between article objects, but NOT after the last one
- **Quotes**: All text values must be wrapped in double quotes `"`
- **Ordering**: Articles are automatically sorted by date, so you can add them in any order

## File Structure

```
NewsFeed/
├── index.html      # Main HTML page
├── styles.css      # Styling for the news feed
├── script.js       # JavaScript to load and display articles
├── news.json       # News articles data file
└── README.md       # This file
```

## Technology Stack

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)

## License

All rights reserved.
