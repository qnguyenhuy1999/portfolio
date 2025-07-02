# My Portfolio

A modern, responsive personal portfolio website built with Next.js 15, React 19, and Tailwind CSS. Features smooth animations, a beautiful gradient background, and showcases my professional experience, skills, and projects.

## ✨ Features

- **Modern Design**: Clean and professional UI with custom gradient backgrounds
- **Smooth Animations**: Enhanced user experience with Framer Motion animations
- **Responsive Layout**: Optimized for all device sizes
- **Performance Optimized**: Built with Next.js 15 and Turbopack for fast development
- **TypeScript**: Fully typed for better development experience
- **Component-Based Architecture**: Modular and maintainable code structure

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── About/
    ├── Certifications/
    ├── Contact/
    ├── Experience/
    ├── Footer/
    ├── Hero/
    ├── Navbar/
    ├── Project/
    ├── TechStack/
    └── Testimonials/
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/qnguyenhuy1999/my-portfolio.git
cd my-portfolio
```

2. Install dependencies:

```bash
pnpm install
# or
npm install
```

3. **Environment Configuration** (Required for contact form):

Create a `.env.local` file in the root directory:

```bash
# Google Apps Script URL for contact form
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

**Note**: You need to set up a Google Apps Script to handle the contact form submissions. See the [Contact Form Setup](#contact-form-setup) section below.

4. Run the development server:

```bash
pnpm dev
# or
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📜 Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint for code quality

## 🎨 Customization

The portfolio is designed to be easily customizable:

1. **Personal Information**: Update the Hero component with your details
2. **Social Links**: Modify the social media links in the Hero component
3. **Content**: Add your experience, projects, and skills in respective components
4. **Styling**: Customize colors and themes in `globals.css` and component styles
5. **Icons**: Add your own icons to the `/public/icons/` directory

## 🌐 Sections

- **Hero**: Introduction with social links and profile
- **About**: Personal background and summary
- **Tech Stack**: Skills and technologies
- **Experience**: Professional experience timeline
- **Certifications**: Achievements and certifications
- **Contact**: Contact form and information
- **Footer**: Additional links and information

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 📧 Contact Form Setup

The contact form uses Google Apps Script to handle form submissions. Here's how to set it up:

### 1. Create Google Apps Script

1. Go to [Google Apps Script](https://script.google.com/)
2. Create a new project
3. Replace the default code with:

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const { name, email, message } = data;

    // Log the submission (optional)
    console.log("Form submission:", { name, email, message });

    // You can add email sending logic here
    // Example: sendEmail(name, email, message);

    return ContentService.createTextOutput(
      JSON.stringify({ result: "success" })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error("Error processing form:", error);
    return ContentService.createTextOutput(
      JSON.stringify({ result: "error", error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: Function to send email notifications
function sendEmail(name, email, message) {
  const recipient = "your-email@gmail.com"; // Replace with your email
  const subject = `New Contact Form Submission from ${name}`;
  const body = `
    Name: ${name}
    Email: ${email}
    Message: ${message}
  `;

  GmailApp.sendEmail(recipient, subject, body);
}
```

### 2. Deploy as Web App

1. Click "Deploy" → "New deployment"
2. Choose "Web app" as the type
3. Set "Execute as" to "Me"
4. Set "Who has access" to "Anyone"
5. Click "Deploy"
6. Copy the Web app URL

### 3. Configure Environment Variable

Add the Web app URL to your `.env.local` file:

```bash
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add the environment variable in Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` with your Google Script URL
4. Deploy with one click

### Other Platforms

The app can be deployed on any platform that supports Next.js:

- Netlify
- Railway
- AWS Amplify
- Google Cloud Platform

**Remember to add the `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` environment variable on your deployment platform.**

## 🔗 Links

- **Live Demo**: [Your Portfolio URL]
- **GitHub**: [https://github.com/qnguyenhuy1999](https://github.com/qnguyenhuy1999)
- **LinkedIn**: [https://linkedin.com/in/huynq-2912](https://linkedin.com/in/huynq-2912)
- **Email**: [qnguyenhuy1999@gmail.com](mailto:qnguyenhuy1999@gmail.com)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/qnguyenhuy1999/my-portfolio/issues).

---

⭐ If you like this project, please give it a star on GitHub!
