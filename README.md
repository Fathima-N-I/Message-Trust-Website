# Hope Foundation Website

A modern, responsive charity organization website built with React, Vite, Tailwind CSS, Framer Motion, and Firebase.

## 🌟 Features

- **Modern Tech Stack**: React 18, Vite, Tailwind CSS, Framer Motion
- **Backend Integration**: Firebase (Authentication, Firestore, Hosting)
- **Responsive Design**: Mobile-first design that works on all devices
- **Beautiful Animations**: Smooth page transitions and micro-interactions with Framer Motion
- **Multiple Pages**:
  - Home - Hero section with impact stats
  - About - Organization story, values, and team
  - Programs - Detailed program information
  - Impact Stories - Real testimonials from beneficiaries
  - Donate - Multiple payment methods (UPI, Razorpay, PayPal, Bank Transfer)
  - Get Involved - Volunteer form and upcoming events
  - Contact - Contact form with office information

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Firebase account (for backend features)

### Installation

1. **Clone or extract the project**
   ```bash
   cd hope-foundation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   
   a. Go to [Firebase Console](https://console.firebase.google.com/)
   
   b. Create a new project or use an existing one
   
   c. Enable the following services:
      - Authentication (optional, for admin features)
      - Firestore Database
      - Hosting
   
   d. Get your Firebase config from Project Settings > General > Your apps
   
   e. Update `src/config/firebase.js` with your Firebase credentials:
   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_PROJECT_ID.appspot.com",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID",
     measurementId: "YOUR_MEASUREMENT_ID"
   };
   ```

4. **Set up Firestore Database**
   
   Create the following collections in Firestore:
   - `donations` - Stores donation records
   - `volunteers` - Stores volunteer applications
   - `contacts` - Stores contact form submissions
C
5. **Run the development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔧 Payment Gateway Integration

### UPI
- Update the UPI ID in `src/pages/Donate.jsx`
- Consider adding QR code generation

### Razorpay
1. Sign up at [Razorpay](https://razorpay.com/)
2. Get your API keys from Dashboard
3. Install Razorpay SDK: `npm install razorpay`
4. Integrate in `src/pages/Donate.jsx`
5. Add server-side verification for security

### PayPal
1. Create a PayPal Business account
2. Get your Client ID from Developer Dashboard
3. Install PayPal SDK: `npm install @paypal/react-paypal-js`
4. Integrate in `src/pages/Donate.jsx`

## 📦 Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 🚀 Deployment

### Deploy to Netlify

1. **Using Netlify CLI**
   ```bash
   npm install -g netlify-cli
   npm run build
   netlify deploy --prod
   ```

2. **Using Netlify Dashboard**
   - Connect your Git repository
   - Build command: `npm run build`
   - Publish directory: `dist`

### Deploy to Vercel

1. **Using Vercel CLI**
   ```bash
   npm install -g vercel
   npm run build
   vercel --prod
   ```

2. **Using Vercel Dashboard**
   - Import your Git repository
   - Framework preset: Vite
   - Build command: `npm run build`
   - Output directory: `dist`

### Deploy to Firebase Hosting

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase Hosting**
   ```bash
   firebase init hosting
   ```
   - Choose your Firebase project
   - Public directory: `dist`
   - Single-page app: `Yes`
   - GitHub integration: Optional

4. **Build and Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

## 📁 Project Structure

```
hope-foundation/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navigation.jsx
│   │   └── Footer.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Programs.jsx
│   │   ├── Donate.jsx
│   │   ├── GetInvolved.jsx
│   │   └── ImpactContact.jsx
│   ├── config/         # Configuration files
│   │   └── firebase.js
│   ├── hooks/          # Custom React hooks
│   │   └── useFirestore.js
│   ├── utils/          # Utility functions
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  primary: { /* your primary colors */ },
  accent: { /* your accent colors */ },
}
```

### Fonts
Update the Google Fonts import in `src/index.css` and font families in `tailwind.config.js`

### Content
- Update text content in page components
- Replace images and icons
- Modify team member information
- Update contact details and social links

## 🔐 Security Notes

1. **Never commit Firebase credentials** to version control
2. Set up **Firestore Security Rules**:
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /donations/{document} {
         allow write: if request.auth != null || true; // Adjust based on needs
         allow read: if request.auth != null;
       }
       match /volunteers/{document} {
         allow write: if true; // Public can submit
         allow read: if request.auth != null; // Only authenticated admins
       }
       match /contacts/{document} {
         allow write: if true;
         allow read: if request.auth != null;
       }
     }
   }
   ```
3. **Enable reCAPTCHA** for forms to prevent spam
4. **Use environment variables** for sensitive data

## 📝 Environment Variables

Create a `.env` file in the root:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

Then update `src/config/firebase.js` to use environment variables.

## 🤝 Contributing

This is a template project. Feel free to customize it for your organization!

## 📄 License

This project is provided as-is for charitable organizations to use and modify.

## 📞 Support

For questions or issues, please create an issue in the repository or contact the development team.

---

Built with ❤️ for Hope Foundation
