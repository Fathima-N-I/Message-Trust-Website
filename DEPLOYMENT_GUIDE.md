# 🚀 Deployment Guide

This guide will walk you through deploying your Hope Foundation website to Netlify, Vercel, or Firebase Hosting.

## Prerequisites

Before deploying, make sure you have:
- ✅ Configured Firebase credentials in `src/config/firebase.js`
- ✅ Tested the site locally with `npm run dev`
- ✅ Built the project successfully with `npm run build`

## Option 1: Deploy to Netlify (Recommended for Beginners)

### Method A: Using Netlify Dashboard (Easiest)

1. **Create a Netlify Account**
   - Go to [netlify.com](https://www.netlify.com/)
   - Sign up with GitHub, GitLab, or email

2. **Push Your Code to Git**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

3. **Import to Netlify**
   - Click "Add new site" > "Import an existing project"
   - Choose your Git provider (GitHub, GitLab, Bitbucket)
   - Select your repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

4. **Custom Domain (Optional)**
   - Go to Site settings > Domain management
   - Add your custom domain
   - Update DNS records as instructed

### Method B: Using Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build Your Site**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   netlify deploy
   ```
   - Follow the prompts
   - For first deployment, it will ask to create a new site
   - Choose `dist` as the publish directory

4. **Deploy to Production**
   ```bash
   netlify deploy --prod
   ```

## Option 2: Deploy to Vercel

### Method A: Using Vercel Dashboard

1. **Create a Vercel Account**
   - Go to [vercel.com](https://vercel.com/)
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Push Code to Git** (if not already done)
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

3. **Import to Vercel**
   - Click "Add New..." > "Project"
   - Import your Git repository
   - Vercel will auto-detect Vite settings
   - Configure if needed:
     - Framework Preset: Vite
     - Build Command: `npm run build`
     - Output Directory: `dist`
   - Click "Deploy"

### Method B: Using Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Build Your Site**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Login to your Vercel account
   - Confirm project settings

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## Option 3: Deploy to Firebase Hosting

### Step-by-Step Firebase Deployment

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```
   - This will open a browser for authentication
   - Login with your Google account

3. **Initialize Firebase in Your Project**
   ```bash
   firebase init hosting
   ```
   
   You'll be asked several questions:
   - **Select a Firebase project**: Choose your existing project or create a new one
   - **What do you want to use as your public directory?**: Enter `dist`
   - **Configure as a single-page app?**: Yes
   - **Set up automatic builds with GitHub?**: Optional (choose based on preference)
   - **Overwrite index.html?**: No

4. **Build Your Site**
   ```bash
   npm run build
   ```

5. **Deploy to Firebase**
   ```bash
   firebase deploy
   ```

6. **Your site will be live at**: `https://YOUR-PROJECT-ID.web.app`

### Custom Domain on Firebase

1. Go to Firebase Console > Hosting
2. Click "Add custom domain"
3. Enter your domain name
4. Follow the verification steps
5. Update your DNS records as instructed

## Environment Variables Setup

### For Netlify

1. Go to Site settings > Build & deploy > Environment
2. Add environment variables:
   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

### For Vercel

1. Go to Project Settings > Environment Variables
2. Add the same variables as above

### For Firebase Hosting

Since Firebase Hosting serves static files, you'll need to:
1. Create a `.env.production` file (add to .gitignore)
2. Add your variables there
3. The build process will use them

## Payment Gateway Setup

### Razorpay Integration

1. **Sign up at Razorpay**
   - Go to [razorpay.com](https://razorpay.com/)
   - Complete KYC verification

2. **Get API Keys**
   - Dashboard > Settings > API Keys
   - Generate keys (Test mode for development)

3. **Install Razorpay SDK**
   ```bash
   npm install razorpay
   ```

4. **Update Donate.jsx**
   ```javascript
   // Add Razorpay script to index.html
   <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
   
   // In your component
   const handleRazorpayPayment = () => {
     const options = {
       key: 'YOUR_RAZORPAY_KEY_ID',
       amount: selectedAmount * 100, // Amount in paise
       currency: 'INR',
       name: 'Hope Foundation',
       description: 'Donation',
       handler: function (response) {
         // Payment success
         console.log(response.razorpay_payment_id);
       }
     };
     const rzp = new window.Razorpay(options);
     rzp.open();
   };
   ```

### PayPal Integration

1. **Create PayPal Business Account**
   - Go to [paypal.com/business](https://www.paypal.com/business)

2. **Get Client ID**
   - Developer Dashboard > My Apps & Credentials

3. **Install PayPal SDK**
   ```bash
   npm install @paypal/react-paypal-js
   ```

4. **Wrap your app**
   ```javascript
   import { PayPalScriptProvider } from "@paypal/react-paypal-js";
   
   <PayPalScriptProvider options={{ "client-id": "YOUR_CLIENT_ID" }}>
     <App />
   </PayPalScriptProvider>
   ```

## Post-Deployment Checklist

- [ ] Test all pages and navigation
- [ ] Verify forms submit correctly to Firebase
- [ ] Test payment methods
- [ ] Check responsive design on mobile
- [ ] Verify SSL certificate is active (https)
- [ ] Test loading speed (use Google PageSpeed Insights)
- [ ] Set up analytics (Google Analytics or Firebase Analytics)
- [ ] Configure custom domain (if applicable)
- [ ] Set up email notifications for form submissions
- [ ] Create backup of Firebase data regularly

## Continuous Deployment

### Netlify & Vercel
Both platforms automatically deploy when you push to your main branch. To deploy:
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

### Firebase Hosting with GitHub Actions

Create `.github/workflows/firebase-hosting.yml`:
```yaml
name: Deploy to Firebase Hosting

on:
  push:
    branches:
      - main

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          channelId: live
          projectId: your-project-id
```

## Troubleshooting

### Build Fails
- Check Node.js version (should be 18+)
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check for TypeScript errors in terminal

### Firebase Connection Issues
- Verify Firebase config in `src/config/firebase.js`
- Check Firebase project is active
- Verify Firestore rules allow writes

### Payment Gateway Not Working
- Check API keys are correct
- Verify test mode vs production mode
- Check browser console for errors
- Ensure HTTPS is enabled (required for payments)

### 404 Errors on Refresh
- Make sure rewrites/redirects are configured (already in netlify.toml, vercel.json, firebase.json)
- Check that SPA configuration is set to true

## Need Help?

- **Netlify**: [docs.netlify.com](https://docs.netlify.com/)
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Firebase**: [firebase.google.com/docs/hosting](https://firebase.google.com/docs/hosting)
- **Razorpay**: [razorpay.com/docs](https://razorpay.com/docs/)
- **PayPal**: [developer.paypal.com](https://developer.paypal.com/)

Good luck with your deployment! 🚀
