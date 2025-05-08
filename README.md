NewsLetter
A modern newsletter subscription application with a clean, responsive interface built using React and styled with Tailwind CSS.

📋 Project Overview
NewsLetter is a streamlined web application that allows users to subscribe to newsletters with their email address. The application offers a beautiful interface with full responsiveness across different screen sizes. It features multiple pages including a home page, about page, contact page, and a newsletter subscription component.

✨ Key Features

Newsletter Subscription: Easy email subscription system
Responsive Design: Fully responsive UI that works seamlessly on mobile, tablet, and desktop
Modern UI: Clean and attractive interface built with Tailwind CSS
Multi-page Navigation: Home, About, Contact, and other pages connected with React Router
Form Validation: Client-side validation for user inputs
Toast Notifications: User-friendly status notifications via React-Toastify

🛠️ Technologies & Tools

React.js: Frontend library for building the user interface
Tailwind CSS: Utility-first CSS framework for styling
React Router: For handling navigation between pages
React-Toastify: For displaying toast notifications
Vite: Build tool and development server

🖥️ Pages & Components
The application includes:

Home Page: Landing page with main features and information
About Page: Information about the newsletter and its purpose
Contact Page: Contact form and information
Footer: Consistent footer across all pages with navigation and social links
Navbar: Responsive navigation bar with mobile menu support
Newsletter Form: The core subscription component

📱 Responsive Design
The application is built with a mobile-first approach using Tailwind CSS, ensuring a seamless experience across:

Mobile devices
Tablets
Desktop screens

🚀 Getting Started
Prerequisites

Node.js (v14+ recommended)
npm or yarn

Installation

1. Clone the repository

  bash
  git clone https://github.com/dhyeyfarasram/NewsLetter.git
  cd NewsLetter

2. Install dependencies

  npm install
  # or
  yarn install

3. Start the development server
   bash
   npm run dev
   # or
   yarn dev
   
4. Open your browser and navigate to http://localhost:5173

  Building for Production
  npm run build
  # or
  yarn build
  
📂 Project Structure

NewsLetter/

├── public/              # Static assets

├── src/

│   ├── assets/          # Images and other static resources

│   ├── components/      # Reusable UI components

│   │   ├── Footer/      # Footer component

│   │   ├── Navbar/      # Navigation component

│   │   └── Newsletter/  # Newsletter subscription component

│   ├── pages/           # Page components

│   │   ├── About/       # About page

│   │   ├── Contact/     # Contact page

│   │   └── Home/        # Home page

│   ├── App.jsx          # Main application component

│   ├── index.css        # Global CSS and Tailwind imports

│   └── main.jsx         # Application entry point

├── .gitignore           # Git ignore file

├── index.html           # HTML entry point

├── package.json         # Project dependencies and scripts

├── postcss.config.js    # PostCSS configuration

├── tailwind.config.js   # Tailwind CSS configuration

└── vite.config.js       # Vite configuration


🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.
  1. Fork the project
  2. Create your feature branch (git checkout -b feature/amazing-feature)
  3. Commit your changes (git commit -m 'Add some amazing feature')
  4. Push to the branch (git push origin feature/amazing-feature)
  5. Open a Pull Request

📝 License
This project is open source and available under the MIT License.

📞 Contact
Dhyey Farasram - GitHub
Project Link: https://github.com/dhyeyfarasram/NewsLetter
