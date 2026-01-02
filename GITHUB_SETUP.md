# 📚 GitHub Setup Guide

This guide will help you push your Productivity Dashboard project to GitHub.

## 📋 Prerequisites

- Git installed on your computer
- A GitHub account
- SSH keys set up (recommended) or GitHub Personal Access Token

## 🚀 Quick Setup

### 1. Initialize Git Repository

Open terminal in your project directory and run:

```bash
cd productivity-dashboard
git init
```

### 2. Add All Files

```bash
git add .
```

### 3. Make Initial Commit

```bash
git commit -m "Initial commit: Productivity Dashboard with Next.js, React, TypeScript, and Tailwind CSS"
```

### 4. Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the **+** icon in the top right
3. Select **New repository**
4. Fill in the details:
   - **Repository name:** productivity-dashboard
   - **Description:** A modern task management and productivity dashboard
   - **Visibility:** Public (for portfolio) or Private
   - **DO NOT** initialize with README (we already have one)

### 5. Connect to GitHub

Replace `yourusername` with your actual GitHub username:

```bash
git remote add origin https://github.com/yourusername/productivity-dashboard.git
```

Or if you use SSH:

```bash
git remote add origin git@github.com:yourusername/productivity-dashboard.git
```

### 6. Push to GitHub

```bash
git branch -M main
git push -u origin main
```

## 🔐 Authentication Methods

### Option 1: HTTPS with Personal Access Token

1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Give it a name and select `repo` scope
4. Copy the token
5. When pushing, use the token as password

### Option 2: SSH (Recommended)

1. Generate SSH key:
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

2. Copy the public key:
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```

3. Add to GitHub:
   - Go to GitHub Settings → SSH and GPG keys
   - Click **New SSH key**
   - Paste your public key
   - Save

## 📝 Common Git Commands

### Check Status
```bash
git status
```

### Make Changes and Commit
```bash
git add .
git commit -m "Your commit message"
git push
```

### Create a New Branch
```bash
git checkout -b feature/new-feature
```

### Switch Branches
```bash
git checkout main
```

### Pull Latest Changes
```bash
git pull origin main
```

## 🏷️ Adding a License

1. Go to your repository on GitHub
2. Click **Add file** → **Create new file**
3. Name it `LICENSE`
4. Click **Choose a license template**
5. Select MIT License (or your preference)
6. Commit the file

## 📸 Adding Screenshots

1. Take screenshots of your app
2. Create a `screenshots` folder in your project
3. Add images to the folder
4. Update README.md with actual image paths
5. Commit and push

```bash
mkdir screenshots
# Add your screenshot files to the folder
git add screenshots/
git commit -m "Add project screenshots"
git push
```

## 🌐 Deploy to Vercel (Optional)

1. Go to [Vercel](https://vercel.com)
2. Sign in with GitHub
3. Click **Add New** → **Project**
4. Import your repository
5. Click **Deploy**

Your app will be live in minutes! 🎉

## 📊 Adding GitHub Repository Details

Update your repository with:

### About Section
- **Description:** A modern, feature-rich productivity dashboard built with Next.js, React, TypeScript, and Tailwind CSS
- **Website:** [Your deployed URL]
- **Topics:** `nextjs`, `react`, `typescript`, `tailwindcss`, `productivity`, `task-management`, `dashboard`, `framer-motion`, `portfolio`

### README Updates

Replace placeholder values in README.md:
- Replace `yourusername` with your GitHub username
- Replace `yourportfolio.com` with your actual portfolio URL
- Update the author section with your information

## 🔄 Updating Your Project

After making changes:

```bash
# Check what changed
git status

# Add specific files
git add filename

# Or add all changes
git add .

# Commit with a descriptive message
git commit -m "Add new feature: task filtering"

# Push to GitHub
git push
```

## 📋 Best Practices

### Commit Messages
- Use present tense: "Add feature" not "Added feature"
- Be descriptive: "Add task filtering by date" not "Update files"
- Use prefixes:
  - `feat:` for new features
  - `fix:` for bug fixes
  - `docs:` for documentation
  - `style:` for formatting
  - `refactor:` for code restructuring

### Examples
```bash
git commit -m "feat: Add dark mode toggle"
git commit -m "fix: Correct task deletion bug"
git commit -m "docs: Update installation instructions"
git commit -m "style: Improve mobile responsiveness"
```

## 🆘 Troubleshooting

### If you get "repository already exists" error:
```bash
git remote remove origin
git remote add origin https://github.com/yourusername/productivity-dashboard.git
```

### If you get authentication errors:
- Check your token/SSH key is set up correctly
- Try using SSH instead of HTTPS or vice versa

### If you want to undo the last commit:
```bash
git reset --soft HEAD~1
```

### If you have uncommitted changes you want to discard:
```bash
git restore .
```

## 🎉 You're Done!

Your project is now on GitHub! 

### Next Steps:
1. ✅ Add a live demo link
2. ✅ Add screenshots
3. ✅ Star your own repository
4. ✅ Share it on LinkedIn/Twitter
5. ✅ Add it to your portfolio

## 📞 Need Help?

- [GitHub Docs](https://docs.github.com)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [GitHub Desktop](https://desktop.github.com/) - GUI alternative

Happy coding! 🚀
