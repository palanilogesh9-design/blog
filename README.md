# My Blog - Static Website

A modern, minimal blog website built with HTML, CSS, and JavaScript. Perfect for sharing your thoughts, stories, and insights!

## Features

✨ **Fully Functional Blog**
- Home page with responsive blog grid
- Individual blog post pages with full content
- Search functionality to find posts by title, excerpt, or tags
- Category/tag filtering
- About page
- Contact form
- Modern, minimal design
- Fully responsive (works on mobile, tablet, and desktop)

## Project Structure

```
blog/
├── index.html              # Home page with blog list
├── post.html               # Individual post page
├── about.html              # About page
├── contact.html            # Contact form page
├── css/
│   └── style.css           # All styles (modern minimal design)
├── js/
│   └── main.js             # All JavaScript functionality
├── data/
│   └── posts.json          # Blog posts data (6 sample posts included)
└── README.md               # This file
```

## Getting Started

### 1. Open the Website
Simply open `index.html` in your web browser. No server or installation needed!

**Option A: Double-click** `index.html` file
**Option B: Right-click** `index.html` → Open with → Your browser
**Option C: Drag** `index.html` into your browser window

### 2. View the Blog
- **Home Page**: Browse all blog posts in a beautiful grid layout
- **Search**: Use the search bar to find posts by title, content, or tags
- **Filter**: Use the category dropdown to filter posts by category
- **Read Post**: Click any post card to read the full article
- **Navigation**: Use the navbar to navigate between Home, About, and Contact pages

## Adding Your Own Blog Posts

Edit the file `data/posts.json` and add new posts to the array. Each post needs:

```json
{
  "id": 7,
  "title": "Your Post Title",
  "excerpt": "Brief summary of the post",
  "content": "<p>Full HTML content...</p><h2>Heading</h2><p>More content...</p>",
  "category": "Technology",
  "tags": ["tag1", "tag2", "tag3"],
  "date": "2026-06-30",
  "image": "https://your-image-url.jpg"
}
```

### Content Formatting Tips
- Use HTML tags in the `content` field: `<p>`, `<h2>`, `<h3>`, `<ul>`, `<li>`, `<code>`, `<pre>`, etc.
- Images in posts use HTML: `<img src="url" alt="description">`
- For code blocks: `<pre><code>your code here</code></pre>`

### Image URLs
Use any public image URL from services like:
- Unsplash: https://unsplash.com
- Pexels: https://pexels.com
- Pixabay: https://pixabay.com

## Customization

### Change Blog Title & Description
Edit `index.html`:
- Line 7: `<title>` - Browser tab title
- Line 35: `<h1>` - Main heading
- Line 36: `<p>` - Subtitle

### Change Colors
Edit `css/style.css` and modify the CSS variables at the top:
```css
:root {
    --primary: #2c3e50;      /* Dark blue */
    --secondary: #3498db;    /* Light blue */
    --accent: #e74c3c;       /* Red */
    --background: #f8f9fa;   /* Light gray */
    --surface: #ffffff;      /* White */
}
```

### Change Fonts
In `css/style.css`, modify the `body` font-family property

## Contact Form

The contact form on `contact.html` validates user input and shows success/error messages. In a real application, you would need to integrate it with a backend service (like Formspree, Netlify, or your own API) to actually send emails.

To enable email functionality:
1. Sign up for Formspree (https://formspree.io)
2. Update the form `action` in `contact.html`

## Pages

### Home (index.html)
- Display all blog posts
- Search and filter functionality
- Responsive grid layout

### Individual Post (post.html)
- Full article content
- Post metadata (date, category, tags)
- Featured image
- Back to home link

### About (about.html)
- Personal introduction
- Your story and expertise

### Contact (contact.html)
- Contact form with validation
- Name, email, subject, and message fields

## Browser Support

Works in all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Tips for Best Results

1. **Write engaging excerpts** - The excerpt is shown on the home page
2. **Use good images** - High-quality featured images make posts stand out
3. **Keep content organized** - Use proper HTML heading hierarchy
4. **Update categories** - Keep your category list consistent
5. **Add relevant tags** - Tags help with search and discoverability

## Deploying Your Blog

### Option 1: GitHub Pages (FREE)
1. Create a GitHub repository
2. Upload all files
3. Go to Settings → Pages
4. Select `main` branch as source
5. Your blog is live at `https://yourusername.github.io/blog`

### Option 2: Netlify (FREE)
1. Go to https://netlify.com
2. Drag and drop your blog folder
3. Your blog is live instantly

### Option 3: Your Own Server
Upload all files to your web hosting via FTP

## Future Enhancements

Consider adding:
- Comments section
- Dark mode toggle
- Social sharing buttons
- Related posts
- RSS feed
- Newsletter signup
- Advanced search filters

## License

Feel free to use this template for personal or commercial projects!

---

**Happy Blogging!** 📝
