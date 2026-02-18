# Beam Orthodontics Website

Modern, responsive website for Beam Orthodontics in Encinitas, CA.

## 🌐 Live Website

Once deployed, the website will be available at: **https://wyat2.github.io/smilesbeam/**

## 📋 Features

- **6 Complete Pages**: Home, About, Services, Team, Gallery, Contact
- **Modern Design**: Clean, professional layout with burnt orange (#ff6b35) branding
- **Fully Responsive**: Mobile-first design that works on all devices
- **Professional Content**: Comprehensive orthodontics practice information
- **Interactive Elements**: Navigation menu, contact form with validation

## 🚀 Deployment Instructions

### Step 1: Merge the Pull Request

1. Go to [Pull Request #1](https://github.com/wyat2/smilesbeam/pull/1)
2. Review the changes
3. Click "Ready for review" to mark the PR as ready
4. Click "Merge pull request"
5. Confirm the merge

### Step 2: Enable GitHub Pages

1. Go to **Settings** → **Pages** in your repository
2. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
3. Save the settings

### Step 3: Trigger Deployment

The website will automatically deploy when you merge to main. You can also:
- Go to **Actions** tab
- Click on "Deploy to GitHub Pages" workflow
- Click "Run workflow" to manually trigger deployment

### Step 4: Access Your Website

After deployment completes (usually 1-2 minutes), visit:
```
https://wyat2.github.io/smilesbeam/
```

## 📁 Repository Structure

```
smilesbeam/
├── index.html          # Homepage
├── about.html          # About page
├── services.html       # Services/Treatments page
├── team.html           # Team page
├── gallery.html        # Photo gallery
├── contact.html        # Contact form
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
├── .nojekyll          # GitHub Pages optimization
└── .github/
    └── workflows/
        └── pages.yml   # GitHub Actions deployment workflow
```

## 🎨 Design Details

- **Primary Color**: Burnt Orange (#ff6b35)
- **Secondary Color**: Dark Blue (#2c3e50)
- **Fonts**: Inter (body), Playfair Display (headings)
- **Framework**: Pure HTML/CSS/JS (no dependencies)

## 🛠️ Local Development

To test the website locally:

```bash
# Using Python 3
python3 -m http.server 8080

# Using Python 2
python -m SimpleHTTPServer 8080

# Using Node.js
npx serve

# Using PHP
php -S localhost:8080
```

Then open http://localhost:8080 in your browser.

## 📝 Customization

To customize the website:

1. **Colors**: Edit CSS variables in `styles.css` (lines 2-10)
2. **Content**: Edit the HTML files directly
3. **Contact Info**: Update address, phone in all HTML files
4. **Logo**: Replace logo text in navigation sections

## 📧 Contact Information

- **Address**: 123 Coast Highway, Encinitas, CA 92024
- **Phone**: (760) 555-BEAM
- **Email**: info@beamortho.com

---

Built with ❤️ for Beam Orthodontics
