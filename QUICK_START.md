# ⚡ Quick Start Guide

Get your Hope Foundation website running in 5 minutes!

## 🎯 What You've Got

A complete, production-ready charity website with:
- ✅ React + Vite + Tailwind CSS + Framer Motion
- ✅ Firebase backend (donations, volunteers, contacts)
- ✅ Multiple payment options (UPI, Razorpay, PayPal, Bank)
- ✅ Beautiful animations and responsive design
- ✅ Ready to deploy to Netlify, Vercel, or Firebase

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies

```bash
cd hope-foundation
npm install
```

This will install all required packages (~2-3 minutes).

### Step 2: Configure Firebase (5 minutes)

1. **Create a Firebase Project**
   - Go to https://console.firebase.google.com/
   - Click "Add project"
   - Name it (e.g., "hope-foundation")
   - Disable Google Analytics (optional)
   - Click "Create project"

2. **Enable Firestore Database**
   - In Firebase Console, go to "Firestore Database"
   - Click "Create database"
   - Start in **test mode** (for now)
   - Choose a location close to you
   - Click "Enable"

3. **Get Your Firebase Config**
   - Go to Project Settings (gear icon) > General
   - Scroll to "Your apps" section
   - Click the web icon (</>)
   - Register app (name: "Hope Foundation")
   - Copy the `firebaseConfig` object

4. **Update Your Code**
   - Open `src/config/firebase.js`
   - Replace the placeholder values with your actual Firebase config:
   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_ACTUAL_API_KEY",
     authDomain: "YOUR_PROJECT.firebaseapp.com",
     projectId: "YOUR_PROJECT_ID",
     // ... etc
   };
   ```

### Step 3: Run Your Site

```bash
npm run dev
```

Open http://localhost:3000 in your browser!

## 🎨 Customize Your Site

### Update Basic Info (5 minutes)

1. **Organization Name**
   - Search for "Hope Foundation" across all files
   - Replace with your organization name

2. **Contact Information**
   - Edit `src/pages/ImpactContact.jsx` (Contact page)
   - Update address, phone, email

3. **Social Media Links**
   - Edit `src/components/Footer.jsx`
   - Update the social media URLs

4. **Payment Details**
   - Edit `src/pages/Donate.jsx`
   - Update UPI ID, bank account details

### Change Colors (2 minutes)

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    600: '#YOUR_PRIMARY_COLOR',  // Main brand color
    // ... other shades
  },
  accent: {
    500: '#YOUR_ACCENT_COLOR',   // Call-to-action color
    // ... other shades
  },
}
```

## 📱 Test Your Forms

1. **Volunteer Form**
   - Go to "Get Involved" page
   - Fill out and submit the form
   - Check Firebase Console > Firestore Database
   - You should see a new document in "volunteers" collection

2. **Donation Tracking**
   - Go to "Donate" page
   - Select an amount and payment method
   - Click donate
   - Check Firestore "donations" collection

3. **Contact Form**
   - Go to "Contact" page
   - Submit a message
   - Check Firestore "contacts" collection

## 🚀 Deploy Your Site (10 minutes)

### Option 1: Deploy to Netlify (Easiest)

1. **Create a free Netlify account**: https://app.netlify.com/signup
2. **Drag and drop**:
   ```bash
   npm run build
   ```
   Then drag the `dist` folder to Netlify's deploy zone
3. **Done!** Your site is live!

### Option 2: Deploy to Vercel

1. **Create a free Vercel account**: https://vercel.com/signup
2. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```
3. **Deploy**:
   ```bash
   npm run build
   vercel
   ```
4. **Done!** Follow the prompts.

### Option 3: Deploy to Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# Choose 'dist' as public directory
# Configure as single-page app: Yes
npm run build
firebase deploy
```

## 🔐 Important Security Steps

### Update Firestore Security Rules

Go to Firebase Console > Firestore Database > Rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow public to submit forms
    match /volunteers/{document} {
      allow write: if true;
      allow read: if false;
    }
    match /donations/{document} {
      allow write: if true;
      allow read: if false;
    }
    match /contacts/{document} {
      allow write: if true;
      allow read: if false;
    }
  }
}
```

Click "Publish" to save.

## 💳 Set Up Payment Gateways (Later)

### Razorpay (India)
1. Sign up at https://razorpay.com/
2. Complete KYC verification
3. Get API keys from Dashboard
4. See DEPLOYMENT_GUIDE.md for integration code

### PayPal (International)
1. Create business account at https://paypal.com/business
2. Get Client ID from Developer Dashboard
3. See DEPLOYMENT_GUIDE.md for integration code

## 📊 Add Analytics (Optional)

### Firebase Analytics
Already configured! Check Firebase Console > Analytics.

### Google Analytics
1. Get GA4 tracking ID
2. Add to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## 🐛 Common Issues

**Site won't start?**
- Make sure Node.js 18+ is installed: `node --version`
- Delete `node_modules` and run `npm install` again

**Forms not submitting?**
- Check Firebase config in `src/config/firebase.js`
- Verify Firestore is enabled in Firebase Console
- Check browser console for errors (F12)

**Build fails?**
- Run `npm run build` and check for errors
- Make sure all imports are correct

## 📚 Next Steps

1. ✅ Read the full README.md for detailed documentation
2. ✅ Check DEPLOYMENT_GUIDE.md for advanced deployment options
3. ✅ Customize content in all pages
4. ✅ Add real images and photos
5. ✅ Set up custom domain
6. ✅ Integrate payment gateways
7. ✅ Set up email notifications for form submissions

## 🆘 Need Help?

- **React**: https://react.dev/
- **Vite**: https://vitejs.dev/
- **Tailwind CSS**: https://tailwindcss.com/
- **Framer Motion**: https://www.framer.com/motion/
- **Firebase**: https://firebase.google.com/docs

## 🎉 You're All Set!

Your charity website is ready to make an impact. Good luck with your mission!

---

**Remember**: This is a template. Customize it to reflect your organization's unique story and mission! 💪
