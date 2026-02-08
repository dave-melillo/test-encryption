# 🔐 Encryption Test App

**Item ID:** XM-MLE5WR5C  
**Type:** Test Application (X-Men Validation 2/3)  
**Status:** ✅ Deployed

## Live Demo

🌐 **Production URL:** https://test-encryption.vercel.app  
📊 **Vercel Dashboard:** https://vercel.com/daves-projects-c581a67d/test-encryption  
📁 **GitHub Repository:** https://github.com/dave-melillo/test-encryption

## Features

A lightweight web-based encryption demonstration app that supports three encryption methods:

### 🔑 Encryption Methods

1. **Caesar Cipher (Shift 3)**
   - Classic substitution cipher
   - Shifts each letter by 3 positions
   - Non-alphabetic characters remain unchanged
   - Example: "Hello World!" → "Khoor Zruog!"

2. **ROT13**
   - Special case of Caesar cipher (shift 13)
   - Self-inverse: applying twice returns original text
   - Example: "Test" → "Grfg"

3. **Base64**
   - Standard encoding scheme
   - Converts text to Base64 format
   - Example: "OpenAI" → "T3BlbkFJ"

## Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Custom CSS with responsive design
- **Deployment:** Vercel
- **Version Control:** Git + GitHub

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
test-encryption/
├── src/
│   ├── App.jsx              # Main app component
│   ├── App.css              # App styling
│   ├── utils/
│   │   └── encryption.js    # Encryption logic
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── public/
│   └── vite.svg             # Vite logo
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
└── README.md                # This file
```

## Test Cases Verified

### Caesar Cipher
- ✅ "Hello World!" → "Khoor Zruog!"
- ✅ "ABC xyz" → "DEF abc"
- ✅ "123!@#" → "123!@#" (unchanged)

### ROT13
- ✅ "Test" → "Grfg"
- ✅ "Hello" → "Uryyb"
- ✅ "abc123" → "nop123"

### Base64
- ✅ "OpenAI" → "T3BlbkFJ"
- ✅ "Hello World!" → "SGVsbG8gV29ybGQh"
- ✅ Empty string → Empty string

## Features Implemented

- ✅ Text input field with multiline support
- ✅ Dropdown with three encryption methods
- ✅ Encrypt button (disabled when input is empty)
- ✅ Real-time result display
- ✅ Copy to clipboard functionality
- ✅ Responsive design (mobile + desktop)
- ✅ Clean, modern UI with animations
- ✅ Enter key support for quick encryption
- ✅ Information footer explaining each method

## Deployment

The app is automatically deployed to Vercel:
- **Main Branch:** Auto-deploys to production
- **GitHub Integration:** Connected (manual connection post-deploy)
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

## Success Criteria

All Definition of Done criteria met:
- ✅ Functional Requirements: All encryption methods work correctly
- ✅ UI/UX Requirements: Clean, responsive design with no console errors
- ✅ Deployment Requirements: Live on Vercel with public URL
- ✅ Testing Requirements: All test cases validated

## Author

**Agent:** Wolverine (Logan)  
**PRD by:** Beast (Hank McCoy)  
**Project:** X-Men Agent System Validation (Test 2/3)  
**Date:** February 8, 2026

---

**Note:** This is an educational demonstration app. The encryption methods shown (especially Caesar and ROT13) are not suitable for securing sensitive data.
