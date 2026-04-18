# Portfolio Customization Guide

This guide will help you quickly personalize the portfolio to match your information and style.

## 📝 Step-by-Step Customization

### 1. Update Personal Information

**In the Hero Section (Line ~80-90 in index.html)**:
```html
<!-- Change this: -->
<span class="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
    Hi, I'm a Web & App Developer
</span>

<!-- To this: -->
<span class="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
    Hi, I'm [Your Name]
</span>
```

**Update your title (Line ~91-92)**:
```html
<p class="text-xl md:text-2xl text-slate-300 mb-8">
    CS Graduate | Full Stack Developer | UI/UX Enthusiast
</p>
```

**Update your description (Line ~94-98)**:
```html
<p class="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
    Crafting beautiful, functional, and user-centric web and mobile applications with modern technologies and best practices.
</p>
```

### 2. Update Social Media Links

**Find all these sections and replace with your actual URLs**:

In Navigation Bar (~Line 40):
```html
<a href="https://github.com/your-username" class="text-2xl text-slate-400 hover:text-cyan-400">
    <i class="fab fa-github"></i>
</a>
<a href="https://linkedin.com/in/your-profile" class="text-2xl text-slate-400 hover:text-cyan-400">
    <i class="fab fa-linkedin"></i>
</a>
<a href="https://twitter.com/your-handle" class="text-2xl text-slate-400 hover:text-cyan-400">
    <i class="fab fa-twitter"></i>
</a>
<a href="mailto:your@email.com" class="text-2xl text-slate-400 hover:text-cyan-400">
    <i class="fas fa-envelope"></i>
</a>
```

### 3. Update About Section

**Find "About Me" section (~Line 150)** and update:

```html
<p class="text-lg text-slate-300 mb-6">
    I'm a passionate computer science graduate with a strong foundation in web and mobile application development. 
    With expertise in modern technologies and frameworks, I create solutions that are not only functional but also intuitive and beautiful.
</p>

<p class="text-lg text-slate-300 mb-8">
    My journey in tech has been driven by a curiosity to understand how things work and a desire to solve real-world problems. 
    I believe in continuous learning and staying updated with industry trends.
</p>
```

### 4. Update Skills

**Navigate to Skills Section (~Line 230)** and customize:

For Frontend Skills:
```html
<div class="flex items-center justify-between">
    <span>HTML & CSS</span>
    <span class="text-cyan-400">95%</span>
</div>
<div class="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
    <div class="bg-gradient-to-r from-cyan-400 to-blue-500 h-full skill-bar" style="width: 95%"></div>
</div>
```

Update the skill names, percentages, and add/remove skills as needed.

### 5. Update Projects

**Find Projects Section (~Line 380)** and replace projects:

```html
<div class="project-card group cursor-pointer">
    <div class="relative overflow-hidden rounded-lg h-64 mb-6">
        <!-- Replace this image URL -->
        <img src="your-project-image.jpg" alt="Your Project Name" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
        <div class="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
            <button class="px-6 py-3 bg-cyan-400 text-black rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Project <i class="fas fa-arrow-right ml-2"></i>
            </button>
        </div>
    </div>
    <div class="bg-slate-800 p-6 rounded-lg border border-slate-700 group-hover:border-cyan-400 transition-all duration-300">
        <h3 class="text-2xl font-bold mb-3">Your Project Name</h3>
        <p class="text-slate-400 mb-4">Your project description goes here...</p>
        <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-3 py-1 bg-cyan-400/20 text-cyan-300 rounded-full text-sm">Technology 1</span>
            <span class="px-3 py-1 bg-cyan-400/20 text-cyan-300 rounded-full text-sm">Technology 2</span>
            <span class="px-3 py-1 bg-cyan-400/20 text-cyan-300 rounded-full text-sm">Technology 3</span>
        </div>
        <div class="flex gap-4">
            <a href="your-live-demo-url" class="text-cyan-400 hover:text-cyan-300 transition-colors">
                <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
            <a href="your-github-repo-url" class="text-cyan-400 hover:text-cyan-300 transition-colors">
                <i class="fab fa-github"></i> Code
            </a>
        </div>
    </div>
</div>
```

### 6. Update Contact Information

**Find Contact Section (~Line 580)** and update:

```html
<div class="text-center">
    <h3 class="text-xl font-bold mb-2">Email</h3>
    <a href="mailto:your@email.com" class="text-slate-400 hover:text-cyan-400">your@email.com</a>
</div>

<div class="text-center">
    <h3 class="text-xl font-bold mb-2">Phone</h3>
    <a href="tel:+1234567890" class="text-slate-400 hover:text-purple-400">+1 (234) 567-890</a>
</div>

<div class="text-center">
    <h3 class="text-xl font-bold mb-2">Location</h3>
    <p class="text-slate-400">Your City, Country</p>
</div>
```

### 7. Update Footer

**Find Footer Section (~Line 640)** and update:

```html
<p>&copy; 2026 Your Name. All rights reserved.</p>
```

And update footer social links:
```html
<a href="https://github.com/your-username" class="text-2xl text-slate-400 hover:text-cyan-400">
    <i class="fab fa-github"></i>
</a>
<!-- Update other social links similarly -->
```

## 🎨 Color Customization

To change the overall color scheme, search and replace in both `index.html` and `styles.css`:

**Current Primary Colors:**
- Cyan: `cyan-400`, `cyan-500`, `cyan-900`
- Blue: `blue-400`, `blue-500`, `blue-900`

**To use different colors**, replace all instances. For example:
- Cyan → Green: `cyan-400` → `green-400`
- Blue → Purple: `blue-500` → `purple-500`

### Color Palette Suggestions

**Option 1: Green & Teal**
```
Primary: emerald-400, emerald-500
Secondary: teal-400, teal-500
```

**Option 2: Purple & Pink**
```
Primary: purple-400, purple-500
Secondary: pink-400, pink-500
```

**Option 3: Orange & Red**
```
Primary: orange-400, orange-500
Secondary: red-400, red-500
```

## 📸 Adding Project Images

1. Create a `images/` folder in the portfolio directory
2. Add your project screenshots or mockups
3. Update the image paths in the HTML:

```html
<img src="images/project-name.jpg" alt="Your Project Name" class="w-full h-full object-cover">
```

## 🔗 Important Links to Update

Find and replace these placeholder links:

- Email: `mailto:your@email.com`
- Phone: `tel:+1234567890`
- GitHub: `https://github.com/your-username`
- LinkedIn: `https://linkedin.com/in/your-profile`
- Twitter: `https://twitter.com/your-handle`
- Project Live URLs: Replace with actual deployed links
- Project GitHub Repos: Replace with actual repo links

## 🎯 CV/Resume Button

To make the "Download CV" button functional:

1. Add your resume file to the portfolio folder (e.g., `resume.pdf`)
2. Update the button link:

```html
<a href="resume.pdf" download class="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300">
    Download CV <i class="fas fa-download ml-2"></i>
</a>
```

## 🎬 Animation Adjustments

To slow down/speed up animations, edit `styles.css`:

```css
/* Change animation duration (currently 0.8s) */
.animate-fade-in-down {
    animation: fadeInDown 1.2s ease-out forwards; /* Slower */
}

/* Adjust blob animation speed */
.animate-blob {
    animation: blob 10s infinite; /* Slower blob movement */
}
```

## 🔧 Form Setup

The contact form currently shows a success message but doesn't send emails. To make it functional:

1. **Using Formspree** (Free):
   - Go to formspree.io
   - Create a form with your email
   - Replace the form action in HTML

2. **Using EmailJS**:
   - Sign up at emailjs.com
   - Get your API keys
   - Add the script to send emails directly from the browser

3. **Using a Backend**:
   - Set up a Node.js/Flask server
   - Create an API endpoint
   - Update the form submission in `script.js`

## 📱 Testing on Mobile

1. Open the portfolio in your browser
2. Press `F12` to open Developer Tools
3. Click the mobile device icon
4. Test on different screen sizes
5. Check that all text and images are readable

## 🚀 Before Publishing

Checklist:
- ✅ Update all placeholder text with your information
- ✅ Replace all social media links
- ✅ Add your project details and images
- ✅ Update contact information
- ✅ Test on mobile devices
- ✅ Check all links work correctly
- ✅ Verify images load properly
- ✅ Test contact form submission
- ✅ Check spelling and grammar
- ✅ Test browser compatibility

## 🎓 Additional Customization

### Add More Sections
Create new sections by copying the structure of existing ones and updating the ID, title, and content.

### Add Dark/Light Mode Toggle
Uncomment the dark mode code in `script.js` to enable theme switching.

### Add Blog Section
Create a new section with blog post cards, similar to the projects section.

### Add Testimonials
Add a testimonials section with client quotes and ratings.

### Add Certificate Section
Showcase your certifications and achievements.

## 📖 File Structure Reference

```
portfolio/
├── index.html (Main structure - 700+ lines)
│   ├── Head section (Meta, title, imports)
│   ├── Navigation (Fixed header)
│   ├── Hero section
│   ├── About section
│   ├── Skills section
│   ├── Projects section
│   ├── Contact section
│   └── Footer
├── styles.css (All animations and custom styles)
│   ├── Keyframe animations
│   ├── Component styles
│   ├── Utility classes
│   └── Responsive design
└── script.js (Interactivity and effects)
    ├── Scroll animations
    ├── Form handling
    ├── Navigation
    └── Utility functions
```

---

**Need help?** Check the code comments throughout the HTML, CSS, and JS files for more detailed information.

Good luck customizing your portfolio! 🎉
