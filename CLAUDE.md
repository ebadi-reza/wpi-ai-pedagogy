# WPI AI Pedagogy Website

A JavaScript-templated static website for AI pedagogy resources at Worcester Polytechnic Institute.

**Live URL:** https://ebadi-reza.github.io/wpi-ai-pedagogy  
**Repository:** Private GitHub repo, deployed via GitHub Pages

## Directory Structure

```
wpi-ai-pedagogy/
├── index.html              # Router shell (loads templates)
├── requirements.txt        # Dev instructions & git workflow
├── README.md
├── css/
│   └── styles.css          # WPI-branded stylesheet
├── files/                  # PDFs and downloadable resources
├── images/                 # Photos and logos
├── js/
│   └── router.js           # Hash-based router & template loader
├── templates/              # All HTML content partials
│   ├── header.html
│   ├── footer.html
│   ├── home.html
│   ├── about.html
│   ├── programs.html
│   ├── resources.html
│   ├── news.html           # ← MOST FREQUENTLY UPDATED
│   └── help-form.html
└── venv/                   # Python venv (not in git)
```

## Git Workflow

**ALWAYS follow this workflow for changes:**

```bash
cd ~/Documents/wpi-ai-pedagogy
source venv/bin/activate
git checkout main
git pull origin main
git checkout -b <descriptive-branch-name>

# Make changes...

# Test locally:
python3 -m http.server 8000
# Review at http://localhost:8000

git add .
git commit -m "Descriptive commit message"
git push -u origin <branch-name>

# Then create PR on GitHub for review
```

**Branch naming convention:** `news/event-name` or `update/description`

---

## Adding News Items

The most common update is adding news to `templates/news.html`.

### News Article Structure

```html
<article class="news-article" data-featured="false">
    <div class="news-date">Month Day, Year</div>
    <h2>Article Title</h2>
    <p>
        First paragraph of content.
    </p>
    <p>
        Second paragraph (optional).<br>
        Date/time/location info often goes here with line breaks.
    </p>
    <!-- Optional: Button for registration or resources -->
    <a href="URL_HERE" class="btn btn-primary" target="_blank">
        Button Text
    </a>
</article>
```

### Rules for News Items

1. **Date format:** Always `Month Day, Year` (e.g., "February 4, 2026")
2. **Placement:** New articles go at the TOP, right after `<p class="intro-text">...</p>`
3. **Featured flag:** Set `data-featured="true"` for ONE article to show on homepage
4. **Event details:** Put date/time/location in a separate `<p>` with `<br>` for line breaks
5. **External links:** Always use `target="_blank"` for outside links
6. **Files:** Put PDFs in `/files/` folder, link as `files/filename.pdf`

### Example: Adding an Event

```html
<article class="news-article" data-featured="true">
    <div class="news-date">March 15, 2026</div>
    <h2>AI Pedagogy Lab #3: AI in Assessment Design</h2>
    <p>
        Join colleagues for a hands-on workshop exploring how to design 
        assessments that work alongside AI tools while maintaining academic integrity.
    </p>
    <p>
        Friday, March 15, 2026<br>
        12:00pm to 1:30pm<br>
        Location: Innovation Studios 205
    </p>
    <a href="https://wpi.qualtrics.com/jfe/form/FORM_ID" class="btn btn-primary" target="_blank">
        Register
    </a>
</article>
```

### Example: Adding an Announcement (no button)

```html
<article class="news-article" data-featured="false">
    <div class="news-date">March 1, 2026</div>
    <h2>New Resource: AI Assignment Rubric Templates</h2>
    <p>
        We've added a new collection of rubric templates designed for 
        AI-integrated assignments. These templates help faculty set clear 
        expectations for appropriate AI use while maintaining focus on 
        learning outcomes.
    </p>
    <p>
        Find them in our Resources section under "Assignment Design Tools."
    </p>
</article>
```

---

## Other Common Updates

### Adding a Resource (templates/resources.html)

```html
<li>
    <h4>Resource Name</h4>
    <p>Description of the resource.</p>
    <a href="https://example.com" class="btn btn-primary" target="_blank">View Resource</a>
</li>
```

### Adding a Program Session (templates/programs.html)

Follow the existing `session-card` pattern in the file.

### Adding Files

1. Put PDF/documents in `/files/` folder
2. Link as: `href="files/filename.pdf"`
3. Always include `target="_blank"` for file downloads

---

## WPI Brand Colors (for reference)

- **Crimson:** #AC2B37 (primary buttons, accents)
- **Gray:** #A8AAAD (secondary)
- **Dark Gray:** #2E2E2E (text)
- **Light Gray:** #EAECEE (backgrounds)

---

## Testing

Always test locally before pushing:

```bash
python3 -m http.server 8000
```

Then check:
- http://localhost:8000/#home (verify featured news if changed)
- http://localhost:8000/#news (verify new articles appear)
- Click any new links to verify they work

---

## Quick Reference Commands

```bash
# Start fresh
git checkout main && git pull && git checkout -b news/new-event

# After making changes
git add . && git commit -m "Add news: Event Name" && git push -u origin HEAD

# Test locally
python3 -m http.server 8000
```
