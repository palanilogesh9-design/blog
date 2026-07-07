// Global variables
let allPosts = [];
let currentPage = '';

// Embedded posts data (works when opening file directly)
const postsData = [
  {
    "id": 1,
    "title": "Getting Started with Web Development",
    "excerpt": "Learn the fundamentals of web development and start your journey in the tech world. From HTML basics to understanding the DOM.",
    "content": "<p>Web development is one of the most exciting fields to work in today. Whether you're interested in frontend, backend, or full-stack development, there's always something new to learn.</p><h2>Why Web Development?</h2><p>The web is everywhere. Every business needs a web presence, and the demand for skilled developers continues to grow. In this article, we'll explore the basics of web development and how to get started.</p><h2>The Three Pillars</h2><p>Web development is built on three core technologies:</p><ul><li><strong>HTML:</strong> The structure of web pages</li><li><strong>CSS:</strong> The styling and layout</li><li><strong>JavaScript:</strong> The interactivity and functionality</li></ul><p>Master these three languages, and you'll have a solid foundation for any web development journey.</p><h2>Next Steps</h2><p>Start by learning HTML and CSS, then move on to JavaScript. Practice by building small projects, and gradually increase the complexity. Join communities, read blogs, and never stop learning.</p>",
    "category": "Technology",
    "tags": ["web development", "beginner", "html", "css", "javascript"],
    "date": "2026-06-15",
    "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"
  },
  {
    "id": 2,
    "title": "10 UI/UX Design Principles for Modern Websites",
    "excerpt": "Discover the key principles that make web design effective and user-friendly. Essential tips for creating beautiful interfaces.",
    "content": "<p>Good design is invisible. Users shouldn't think about the design; they should just enjoy using your product. In this article, we'll explore 10 essential UI/UX design principles that every designer should know.</p><h2>Principle 1: User-Centric Design</h2><p>Always design with your user in mind. Understand their needs, pain points, and behaviors. Conduct user research, create personas, and test your designs with real users.</p><h2>Principle 2: Simplicity</h2><p>Keep it simple. Remove unnecessary elements, use whitespace effectively, and make navigation intuitive. A cluttered interface confuses users.</p><h2>Principle 3: Consistency</h2><p>Maintain consistency across your entire design. Use the same colors, fonts, spacing, and interaction patterns throughout. This creates a cohesive experience.</p><h2>Principle 4: Accessibility</h2><p>Design for everyone. Consider color blindness, motor disabilities, and cognitive differences. Use semantic HTML, provide alt text for images, and ensure keyboard navigation works.</p><h2>More Principles to Follow</h2><p>These are just the beginning. Other important principles include feedback visibility, error prevention, aesthetic appeal, and performance optimization. Great design is a continuous journey of learning and improvement.</p>",
    "category": "Design",
    "tags": ["design", "ui/ux", "web design", "principles", "best practices"],
    "date": "2026-05-28",
    "image": "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"
  },
  {
    "id": 3,
    "title": "Reflections on Personal Growth and Learning",
    "excerpt": "A personal essay about the importance of continuous learning and growing beyond your comfort zone.",
    "content": "<p>Life is a journey of continuous growth and learning. Every day presents opportunities to improve ourselves, develop new skills, and understand ourselves better. In this article, I share some reflections on personal growth.</p><h2>Embrace Discomfort</h2><p>Growth happens outside your comfort zone. When you're uncomfortable, you're learning. It might be scary, but that's where the magic happens. Don't be afraid to take on new challenges.</p><h2>Learn from Failure</h2><p>Failure is not the opposite of success; it's a stepping stone toward it. Every failed project, every mistake, and every setback teaches us something valuable. Embrace failures as learning opportunities.</p><h2>Consistency Over Intensity</h2><p>Small, consistent efforts compound over time. You don't need to make drastic changes overnight. Focus on making small improvements every day, and you'll be amazed by the results over time.</p><h2>Community and Support</h2><p>Surround yourself with people who inspire you and support your growth. Share your journey with others, ask for help when needed, and be willing to help others on their paths.</p><p>Remember, personal growth is not a destination; it's a continuous journey. Embrace it, enjoy it, and celebrate your progress along the way.</p>",
    "category": "Life",
    "tags": ["personal growth", "learning", "motivation", "reflection", "self-improvement"],
    "date": "2026-05-10",
    "image": "https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=600&h=400&fit=crop"
  },
  {
    "id": 4,
    "title": "JavaScript ES6 Features Every Developer Should Know",
    "excerpt": "A comprehensive guide to modern JavaScript features that make your code cleaner and more efficient.",
    "content": "<p>ES6 (ECMAScript 2015) brought significant improvements to JavaScript, making it more powerful and developer-friendly. Let's explore some essential features that every JavaScript developer should know.</p><h2>Arrow Functions</h2><p>Arrow functions provide a concise syntax for writing functions. They also have a lexical 'this' binding, which solves many 'this' context problems.</p><pre><code>// Traditional function\nfunction add(a, b) {\n  return a + b;\n}\n\n// Arrow function\nconst add = (a, b) => a + b;</code></pre><h2>Template Literals</h2><p>Template literals allow you to embed expressions in strings, making string manipulation much easier.</p><h2>Destructuring</h2><p>Destructuring assignment makes it easy to extract values from objects and arrays.</p><h2>Promises and Async/Await</h2><p>These features revolutionized asynchronous programming in JavaScript. Promises provide a better way to handle async operations, while async/await makes the code look synchronous and more readable.</p><h2>Classes</h2><p>ES6 introduced class syntax, making object-oriented programming more straightforward in JavaScript.</p>",
    "category": "Technology",
    "tags": ["javascript", "es6", "programming", "dev tips", "modern javascript"],
    "date": "2026-05-01",
    "image": "https://images.unsplash.com/photo-1579468118864-1c238e6e98d0?w=600&h=400&fit=crop"
  },
  {
    "id": 5,
    "title": "The Art of Writing Clean Code",
    "excerpt": "Best practices for writing maintainable, readable, and efficient code that your team will love.",
    "content": "<p>Clean code is not just about making code work; it's about making it understandable, maintainable, and a pleasure to work with. In this article, we explore the principles of writing clean code.</p><h2>Meaningful Names</h2><p>Use clear, descriptive names for variables, functions, and classes. A good name should answer why it exists, what it does, and how it's used. Avoid cryptic abbreviations; clarity is more important than brevity.</p><h2>Keep Functions Small</h2><p>A function should do one thing and do it well. If a function is doing multiple things, break it down into smaller functions. This makes code easier to test, understand, and reuse.</p><h2>Comment Wisely</h2><p>Comments should explain 'why', not 'what'. The 'what' should be clear from the code itself. Use comments sparingly and only when necessary.</p><h2>DRY Principle</h2><p>Don't Repeat Yourself. If you find yourself copying and pasting code, refactor it into a reusable function. This reduces bugs and makes maintenance easier.</p><h2>Error Handling</h2><p>Don't ignore errors. Handle them gracefully and provide meaningful error messages. Users appreciate helpful feedback when something goes wrong.</p>",
    "category": "Technology",
    "tags": ["coding", "best practices", "clean code", "software engineering", "programming"],
    "date": "2026-04-15",
    "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"
  },
  {
    "id": 6,
    "title": "Introduction to Responsive Web Design",
    "excerpt": "Learn how to create websites that look great on all devices, from mobile phones to desktop computers.",
    "content": "<p>In today's world, your website needs to look great on all devices. Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes.</p><h2>Mobile First Approach</h2><p>Design for mobile first, then progressively enhance for larger screens. This ensures that your website works well on the smallest devices and provides a better experience on larger ones.</p><h2>Flexible Grids</h2><p>Use flexible, proportional layouts instead of fixed-width layouts. CSS Grid and Flexbox are powerful tools for creating responsive layouts.</p><h2>Flexible Images</h2><p>Make images responsive using CSS. Ensure images scale proportionally and never exceed their container's width.</p><h2>Media Queries</h2><p>Use media queries to apply different styles for different screen sizes. This allows you to create a tailored experience for each device type.</p><h2>Testing</h2><p>Test your website on real devices, not just browser emulators. Performance and behavior can differ significantly between real devices and simulators.</p>",
    "category": "Design",
    "tags": ["responsive design", "mobile design", "css", "web development", "accessibility"],
    "date": "2026-04-01",
    "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"
  }
];

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    if (currentPage === 'index.html' || currentPage === '') {
        initHomePage();
    } else if (currentPage === 'post.html') {
        initPostPage();
    } else if (currentPage === 'contact.html') {
        initContactForm();
    }
});

// ==================== HOME PAGE ====================
async function initHomePage() {
    try {
        allPosts = await loadPosts();
        displayPosts(allPosts);
        populateCategoryFilter();
        setupEventListeners();
    } catch (error) {
        console.error('Error initializing home page:', error);
        document.querySelector('#postsContainer').innerHTML = '<p>Error loading posts.</p>';
    }
}

async function loadPosts() {
    // Try to load from JSON file first (for server deployments)
    try {
        const response = await fetch('data/posts.json');
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.log('Could not load from JSON, using embedded data');
    }
    // Fall back to embedded data (works for local file:// protocol)
    return postsData;
}

function displayPosts(posts) {
    const container = document.querySelector('#postsContainer');
    const noResults = document.querySelector('#noResults');
    
    if (posts.length === 0) {
        container.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    container.innerHTML = posts.map(post => createPostCard(post)).join('');
}

function createPostCard(post) {
    const date = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    
    return `
        <div class="post-card" onclick="viewPost(${post.id})">
            ${post.image ? `<img src="${post.image}" alt="${post.title}" class="post-image" onerror="this.style.display='none'">` : ''}
            <div class="post-info">
                <h3 class="post-title">${escapeHtml(post.title)}</h3>
                <p class="post-excerpt">${escapeHtml(post.excerpt)}</p>
                <div class="post-meta-card">
                    <span class="post-date">${date}</span>
                    <span class="post-category">${escapeHtml(post.category)}</span>
                </div>
            </div>
        </div>
    `;
}

function populateCategoryFilter() {
    const categories = [...new Set(allPosts.map(post => post.category))];
    const select = document.querySelector('#categoryFilter');
    
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        select.appendChild(option);
    });
}

function setupEventListeners() {
    const searchInput = document.querySelector('#searchInput');
    const categoryFilter = document.querySelector('#categoryFilter');
    
    searchInput.addEventListener('input', filterPosts);
    categoryFilter.addEventListener('change', filterPosts);
}

function filterPosts() {
    const searchTerm = document.querySelector('#searchInput').value.toLowerCase();
    const selectedCategory = document.querySelector('#categoryFilter').value;
    
    const filtered = allPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm) ||
                            post.excerpt.toLowerCase().includes(searchTerm) ||
                            post.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        const matchesCategory = !selectedCategory || post.category === selectedCategory;
        
        return matchesSearch && matchesCategory;
    });
    
    displayPosts(filtered);
}

function viewPost(postId) {
    sessionStorage.setItem('selectedPostId', postId);
    window.location.href = 'post.html';
}

// ==================== POST PAGE ====================
function initPostPage() {
    const postId = parseInt(sessionStorage.getItem('selectedPostId'));
    
    if (!postId) {
        window.location.href = 'index.html';
        return;
    }
    
    loadPosts().then(posts => {
        const post = posts.find(p => p.id === postId);
        if (post) {
            displayPostDetail(post);
        } else {
            window.location.href = 'index.html';
        }
    });
}

function displayPostDetail(post) {
    const date = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    document.title = `${post.title} - My Blog`;
    document.querySelector('#postTitle').textContent = post.title;
    document.querySelector('#postDate').textContent = date;
    document.querySelector('#postCategory').textContent = post.category;
    document.querySelector('#postContent').innerHTML = post.content;
    
    if (post.image) {
        const img = document.querySelector('#postImage');
        img.src = post.image;
        img.alt = post.title;
        img.style.display = 'block';
        img.onerror = function() { this.style.display = 'none'; };
    }
    
    // Display tags
    const tagsContainer = document.querySelector('#postTags');
    tagsContainer.innerHTML = post.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('');
}

// ==================== CONTACT FORM ====================
function initContactForm() {
    const form = document.querySelector('#contactForm');
    if (form) {
        form.addEventListener('submit', handleContactSubmit);
    }
}

function handleContactSubmit(e) {
    e.preventDefault();
    
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const subject = document.querySelector('#subject').value.trim();
    const message = document.querySelector('#message').value.trim();
    
    // Basic validation
    if (!name || !email || !subject || !message) {
        showFormMessage('Please fill in all fields.', 'error');
        return;
    }
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showFormMessage('Please enter a valid email address.', 'error');
        return;
    }
    
    // In a real application, you would send this data to a server
    // For now, we'll just show a success message
    console.log('Form data:', { name, email, subject, message });
    
    showFormMessage('Thank you! Your message has been received. I\'ll get back to you soon.', 'success');
    document.querySelector('#contactForm').reset();
}

function showFormMessage(message, type) {
    const messageEl = document.querySelector('#formMessage');
    messageEl.textContent = message;
    messageEl.className = `form-message ${type}`;
    messageEl.style.display = 'block';
    
    if (type === 'success') {
        setTimeout(() => {
            messageEl.style.display = 'none';
        }, 5000);
    }
}

// ==================== UTILITY FUNCTIONS ====================
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Highlight current navigation link
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage || 
            (currentPage === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});