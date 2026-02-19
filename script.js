// ==================== Skill Documentation Data ====================
const skillDocs = {
    html: {
        title: "HTML - HyperText Markup Language",
        description: "HTML is the standard markup language for creating web pages. It describes the structure of a web page using elements and tags.",
        syntax: `<!-- Basic HTML Structure -->
<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
</head>
<body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>
    <a href="https://example.com">This is a link</a>
</body>
</html>`,
        examples: [
            {
                title: "Headings",
                code: `<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>`
            },
            {
                title: "Lists",
                code: `<!-- Unordered List -->
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>

<!-- Ordered List -->
<ol>
    <li>First</li>
    <li>Second</li>
</ol>`
            },
            {
                title: "Forms",
                code: `<form action="/submit" method="post">
    <input type="text" name="username" placeholder="Username">
    <input type="email" name="email" placeholder="Email">
    <button type="submit">Submit</button>
</form>`
            }
        ],
        usage: "HTML is used in web development, email templates, web applications, mobile app webviews, and as the foundation of all websites."
    },
    css: {
        title: "CSS - Cascading Style Sheets",
        description: "CSS is used to style and layout web pages. It controls colors, fonts, spacing, positioning, and responsive design.",
        syntax: `/* CSS Syntax */
selector {
    property: value;
    another-property: value;
}

/* Example */
h1 {
    color: blue;
    font-size: 24px;
    text-align: center;
}`,
        examples: [
            {
                title: "Box Model",
                code: `.box {
    width: 200px;
    height: 100px;
    padding: 20px;
    margin: 10px;
    border: 2px solid black;
}`
            },
            {
                title: "Flexbox Layout",
                code: `.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}`
            },
            {
                title: "Animations",
                code: `@keyframes slide {
    from { transform: translateX(0); }
    to { transform: translateX(100px); }
}

.element {
    animation: slide 2s ease-in-out infinite;
}`
            }
        ],
        usage: "CSS is used for styling websites, creating responsive designs, animations, print stylesheets, and theme customization across all modern web applications."
    },
    tailwind: {
        title: "Tailwind CSS - Utility-First Framework",
        description: "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without writing CSS.",
        syntax: `<!-- Tailwind uses utility classes directly in HTML -->
<div class="flex items-center justify-center">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Click Me
    </button>
</div>`,
        examples: [
            {
                title: "Responsive Grid",
                code: `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div class="bg-white p-6 rounded-lg shadow">Card 1</div>
    <div class="bg-white p-6 rounded-lg shadow">Card 2</div>
    <div class="bg-white p-6 rounded-lg shadow">Card 3</div>
</div>`
            },
            {
                title: "Dark Mode",
                code: `<div class="bg-white dark:bg-gray-800 text-black dark:text-white">
    <h1 class="text-2xl font-bold">Dark Mode Support</h1>
</div>`
            },
            {
                title: "Custom Spacing",
                code: `<div class="m-4 p-8 mt-16 mb-8 ml-auto mr-auto">
    <!-- Margins and Padding -->
</div>`
            }
        ],
        usage: "Tailwind is used in rapid prototyping, production websites, React/Vue/Angular applications, and modern web development workflows where design consistency is crucial."
    },
    javascript: {
        title: "JavaScript - Programming Language",
        description: "JavaScript is a versatile programming language that adds interactivity to web pages. It runs in the browser and on servers (Node.js).",
        syntax: `// Variable Declaration
let name = "John";
const age = 25;

// Function
function greet(name) {
    return \`Hello, \${name}!\`;
}

// Arrow Function
const add = (a, b) => a + b;`,
        examples: [
            {
                title: "DOM Manipulation",
                code: `// Select elements
const button = document.querySelector('button');
const heading = document.getElementById('title');

// Add event listener
button.addEventListener('click', () => {
    heading.textContent = 'Clicked!';
    heading.style.color = 'blue';
});`
            },
            {
                title: "Arrays and Methods",
                code: `const numbers = [1, 2, 3, 4, 5];

// Map
const doubled = numbers.map(n => n * 2);

// Filter
const evens = numbers.filter(n => n % 2 === 0);

// Reduce
const sum = numbers.reduce((acc, n) => acc + n, 0);`
            },
            {
                title: "Async/Await",
                code: `async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}`
            }
        ],
        usage: "JavaScript powers interactive websites, web applications, mobile apps (React Native), server-side development (Node.js), game development, and automation scripts."
    },
    c: {
        title: "C - System Programming Language",
        description: "C is a powerful general-purpose programming language that provides low-level access to memory and is widely used for system programming.",
        syntax: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
        examples: [
            {
                title: "Variables and Data Types",
                code: `int age = 25;
float price = 19.99;
char grade = 'A';
double pi = 3.14159265359;

// Arrays
int numbers[5] = {1, 2, 3, 4, 5};`
            },
            {
                title: "Pointers",
                code: `int x = 10;
int *ptr = &x;  // Pointer to x

printf("Value: %d\\n", x);      // 10
printf("Address: %p\\n", &x);   // Memory address
printf("Via pointer: %d\\n", *ptr);  // 10`
            },
            {
                title: "Structures",
                code: `struct Person {
    char name[50];
    int age;
    float salary;
};

struct Person emp = {"John", 30, 50000.50};
printf("Name: %s, Age: %d\\n", emp.name, emp.age);`
            }
        ],
        usage: "C is used in operating systems, embedded systems, device drivers, compilers, databases, and performance-critical applications where hardware-level control is needed."
    },
    cpp: {
        title: "C++ - Object-Oriented Programming",
        description: "C++ extends C with object-oriented features, providing classes, inheritance, polymorphism, and other modern programming paradigms.",
        syntax: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,
        examples: [
            {
                title: "Classes and Objects",
                code: `class Rectangle {
private:
    int width, height;
public:
    Rectangle(int w, int h) : width(w), height(h) {}
    
    int area() {
        return width * height;
    }
};

Rectangle rect(5, 3);
cout << "Area: " << rect.area() << endl;`
            },
            {
                title: "Inheritance",
                code: `class Animal {
public:
    void eat() { cout << "Eating..." << endl; }
};

class Dog : public Animal {
public:
    void bark() { cout << "Woof!" << endl; }
};

Dog myDog;
myDog.eat();   // Inherited
myDog.bark();  // Own method`
            },
            {
                title: "Templates",
                code: `template <typename T>
T maximum(T a, T b) {
    return (a > b) ? a : b;
}

cout << maximum(10, 20) << endl;        // 20
cout << maximum(10.5, 5.2) << endl;     // 10.5`
            }
        ],
        usage: "C++ is used in game development, graphics programming, embedded systems, high-performance applications, operating systems, and software requiring both performance and abstraction."
    },
    sql: {
        title: "SQL - Structured Query Language",
        description: "SQL is a domain-specific language used to manage and query relational databases. It enables data storage, retrieval, and manipulation.",
        syntax: `-- Basic SELECT query
SELECT column1, column2
FROM table_name
WHERE condition
ORDER BY column1;`,
        examples: [
            {
                title: "Creating Tables",
                code: `CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`
            },
            {
                title: "INSERT, UPDATE, DELETE",
                code: `-- Insert data
INSERT INTO users (username, email)
VALUES ('john_doe', 'john@example.com');

-- Update data
UPDATE users
SET email = 'newemail@example.com'
WHERE username = 'john_doe';

-- Delete data
DELETE FROM users WHERE id = 5;`
            },
            {
                title: "JOINs",
                code: `-- Inner Join
SELECT users.username, orders.order_date
FROM users
INNER JOIN orders ON users.id = orders.user_id;

-- Left Join
SELECT users.username, orders.order_date
FROM users
LEFT JOIN orders ON users.id = orders.user_id;`
            }
        ],
        usage: "SQL is used in web applications, data analysis, business intelligence, reporting systems, data warehousing, and any application that requires structured data management."
    }
};

// ==================== Theme Toggle ====================
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', savedTheme);
updateIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
});

function updateIcon(theme) {
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// ==================== Smooth Scrolling ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== Skill Cards Modal ====================
const modal = document.getElementById('skillModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
    card.addEventListener('click', () => {
        const skill = card.getAttribute('data-skill');
        const doc = skillDocs[skill];
        
        if (doc) {
            let examplesHTML = doc.examples.map(ex => `
                <h3>${ex.title}</h3>
                <pre><code>${escapeHtml(ex.code)}</code></pre>
            `).join('');
            
            modalBody.innerHTML = `
                <h2>${doc.title}</h2>
                <p>${doc.description}</p>
                
                <h3>Basic Syntax</h3>
                <pre><code>${escapeHtml(doc.syntax)}</code></pre>
                
                ${examplesHTML}
                
                <h3>Where It's Used</h3>
                <p>${doc.usage}</p>
            `;
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ==================== Contact Form ====================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', { name, email, message });
    
    // Show success message
    alert('Thank you for your message! I\'ll get back to you soon.');
    
    // Reset form
    contactForm.reset();
});

// ==================== Navbar Scroll Effect ====================
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 10px var(--shadow)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ==================== Intersection Observer for Animations ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// ==================== Active Nav Link ====================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ==================== Typing Effect for Home Section ====================
const tagline = document.querySelector('.tagline');
const originalText = tagline.textContent;
let index = 0;

function typeWriter() {
    if (index === 0) {
        tagline.textContent = '';
    }
    if (index < originalText.length) {
        tagline.textContent += originalText.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing effect after page load
window.addEventListener('load', () => {
    setTimeout(typeWriter, 500);
});

console.log('Portfolio loaded successfully! 🚀');
