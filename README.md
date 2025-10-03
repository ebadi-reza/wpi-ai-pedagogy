# AI Pedagogy @ WPI

A JavaScript-templated static website for sharing AI pedagogy resources, news, and updates at Worcester Polytechnic Institute.

## 📁 Project Structure

```
wpi-ai-pedagogy/
├── index.html              # Router shell (loads templates)
├── css/
│   └── styles.css          # WPI-branded stylesheet
├── images/
│   └── wpi-logo.png        # WPI logo
├── js/
│   └── router.js           # JavaScript router & template loader
├── templates/              # All content templates
│   ├── header.html         # Site header (edit once, applies to all pages)
│   ├── footer.html         # Site footer (edit once, applies to all pages)
│   ├── home.html           # Homepage content
│   ├── about.html          # About page content
│   ├── resources.html      # Resources page content
│   └── news.html           # News page content
├── venv/                   # Python virtual environment (not in git)
├── .gitignore              # Git ignore file
├── requirements.txt        # Python dependencies (minimal)
└── README.md               # This file
```

## 🚀 Quick Start

### 1. Clone or Set Up Repository

```bash
# If starting fresh
mkdir wpi-ai-pedagogy
cd wpi-ai-pedagogy

# Initialize git
git init
git branch -M main
```

### 2. Create Virtual Environment (Mac)

```bash
# Create venv
python3 -m venv venv

# Activate venv
source venv/bin/activate

# Install dependencies (optional, for development server)
pip3 install -r requirements.txt
```

### 3. Run Local Development Server

**Option A: Python's built-in server (Recommended)**
```bash
python3 -m http.server 8000
```

**Option B: Using Flask (if installed)**
```bash
python3 -m flask run
```

Then open: **http://localhost:8000**

### 4. Deactivate Virtual Environment

```bash
deactivate
```

## 🎨 How It Works

### JavaScript Templating
- **Single HTML file** (`index.html`) serves as the shell
- **Router** (`js/router.js`) loads content dynamically based on URL hash
- **Templates** in `templates/` folder contain page-specific content
- **Header & Footer** defined once in `templates/header.html` and `templates/footer.html`

### Navigation
Links use hash routing:
- `#home` → loads `templates/home.html`
- `#about` → loads `templates/about.html`
- `#resources` → loads `templates/resources.html`
- `#news` → loads `templates/news.html`

## ✏️ Editing Content

### Update Navigation (Header)
Edit `templates/header.html` - changes apply to ALL pages automatically.

### Update Footer
Edit `templates/footer.html` - changes apply to ALL pages automatically.

### Add/Edit Page Content
Edit files in `templates/` folder:
- `home.html` - Homepage
- `about.html` - About page
- `resources.html` - Resources page
- `news.html` - News page

### Add a New Page
1. Create `templates/yourpage.html`
2. Add route to `js/router.js`:
   ```javascript
   'yourpage': {
       title: 'Your Page - AI Pedagogy - WPI',
       template: 'templates/yourpage.html'
   }
   ```
3. Add link to `templates/header.html`:
   ```html
   <a href="#yourpage" data-page="yourpage">Your Page</a>
   ```

## 🎨 WPI Brand Colors

- **Crimson**: `#AC2B37` (primary)
- **Gray**: `#A8AAAD` (secondary)
- **Dark Gray**: `#2E2E2E` (text)
- **Light Gray**: `#EAECEE` (backgrounds)

## 🔧 Git Workflow

### Initial Commit
```bash
git add .
git commit -m "Initial commit: AI Pedagogy static site with JS templating"
```

### Create Remote Repository
1. Go to GitHub/GitLab
2. Create new repository: `wpi-ai-pedagogy`
3. Connect local to remote:
   ```bash
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

### Regular Updates
```bash
git add .
git commit -m "Update: description of changes"
git push
```

## 🌐 Deploying to WPI

### Contact WPI IT Services
1. **Request subdomain**: aipedagogy.wpi.edu
2. **Ask for**:
   - FTP/SFTP credentials
   - Server path
   - Any restrictions

### Upload Files
Upload ALL files except `venv/`:
```bash
# Using sftp
sftp your-username@wpi-server
put -r * /path/to/web/root/
```

### Requirements
- Web server must serve `index.html` by default
- Must support serving static files (HTML, CSS, JS, images)
- No server-side processing needed

## 🔒 Security Notes

- This is a **client-side only** application
- No backend/database
- No sensitive data stored
- Safe for public deployment

## 📞 Support

- **Technical Issues**: WPI IT Services
- **Content Questions**: aipedagogy@wpi.edu
- **Repository**: [Your Git URL here]

## 📄 License

© 2025 Worcester Polytechnic Institute. All rights reserved.