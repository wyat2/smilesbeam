# 🚀 GitHub Pages Deployment Guide

This guide will walk you through merging the website and deploying it to GitHub Pages.

## Prerequisites

- You must be the repository owner or have admin access
- The Pull Request (#1) must be approved and ready to merge

## Part 1: Merge the Pull Request

### Step 1: Navigate to the Pull Request

1. Go to https://github.com/wyat2/smilesbeam/pull/1
2. Review the changes in the "Files changed" tab
3. Ensure all checks have passed

### Step 2: Mark as Ready for Review

The PR is currently in "Draft" status. To merge it:

1. Scroll down to the bottom of the PR
2. Click the **"Ready for review"** button
3. This will convert the draft PR to a regular PR

### Step 3: Merge the Pull Request

1. Click the green **"Merge pull request"** button
2. Choose merge type (recommended: "Squash and merge" or "Create a merge commit")
3. Add an optional merge commit message
4. Click **"Confirm merge"**
5. Optionally, delete the source branch after merging

## Part 2: Enable GitHub Pages

### Step 1: Access Repository Settings

1. Go to your repository: https://github.com/wyat2/smilesbeam
2. Click on **"Settings"** (top-right menu)
3. Scroll down and click on **"Pages"** in the left sidebar

### Step 2: Configure GitHub Pages

1. Under **"Build and deployment"** section:
   - **Source**: Select **"GitHub Actions"** from the dropdown
   - This will use the workflow file we created (`.github/workflows/pages.yml`)

2. Click **"Save"** if prompted

### Step 3: Verify Workflow Permissions

1. Go to **Settings** → **Actions** → **General**
2. Scroll to **"Workflow permissions"**
3. Ensure **"Read and write permissions"** is selected
4. Check **"Allow GitHub Actions to create and approve pull requests"**
5. Click **"Save"**

## Part 3: Deploy the Website

### Automatic Deployment

The website will automatically deploy when you merge the PR to main.

### Manual Deployment (Optional)

If you want to trigger deployment manually:

1. Go to the **"Actions"** tab
2. Click on **"Deploy to GitHub Pages"** workflow
3. Click **"Run workflow"** button
4. Select the **"main"** branch
5. Click the green **"Run workflow"** button

### Monitor Deployment

1. Go to the **"Actions"** tab
2. Click on the most recent workflow run
3. Watch the deployment progress
4. Wait for all steps to complete (usually 1-2 minutes)
5. Look for a green checkmark indicating success

## Part 4: Access Your Website

### Find Your GitHub Pages URL

1. Go to **Settings** → **Pages**
2. At the top, you'll see: **"Your site is live at [URL]"**
3. The URL will be: `https://wyat2.github.io/smilesbeam/`

### Test Your Website

1. Click on the URL or navigate to it in a new tab
2. Test all pages:
   - Home: https://wyat2.github.io/smilesbeam/
   - About: https://wyat2.github.io/smilesbeam/about.html
   - Services: https://wyat2.github.io/smilesbeam/services.html
   - Team: https://wyat2.github.io/smilesbeam/team.html
   - Gallery: https://wyat2.github.io/smilesbeam/gallery.html
   - Contact: https://wyat2.github.io/smilesbeam/contact.html

3. Test on different devices:
   - Desktop browser
   - Mobile phone
   - Tablet

## Troubleshooting

### Website Not Loading

- **Wait**: Initial deployment can take 5-10 minutes
- **Check Actions**: Ensure the workflow completed successfully
- **Clear Cache**: Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- **Check URL**: Ensure you're using the correct GitHub Pages URL

### 404 Errors

- Verify the files were committed to the main branch
- Check that index.html exists in the root directory
- Ensure GitHub Pages is pointing to the main branch root

### Workflow Failed

1. Go to **Actions** tab
2. Click on the failed workflow
3. Review the error logs
4. Common issues:
   - Insufficient permissions (check workflow permissions in settings)
   - GitHub Pages not enabled
   - Incorrect workflow syntax

### Need Help?

- Check GitHub Pages documentation: https://docs.github.com/pages
- Review GitHub Actions logs for specific errors
- Ensure all files are in the correct location

## Optional: Custom Domain

If you want to use a custom domain (e.g., www.beamortho.com):

1. Go to **Settings** → **Pages**
2. Under **"Custom domain"**, enter your domain
3. Follow GitHub's instructions to configure DNS
4. Create a CNAME file in your repository root with your domain

## Success! 🎉

Your website is now live and accessible at:
**https://wyat2.github.io/smilesbeam/**

The website will automatically update whenever you push changes to the main branch.
