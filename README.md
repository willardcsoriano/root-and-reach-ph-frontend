# 🌱 Root & Reach PH — Human-Computer Interaction Prototype

[![Status](https://img.shields.io/badge/status-prototype-blue.svg)]()  
[![Built With](https://img.shields.io/badge/Made%20with-Next.js%20%7C%20React%20%7C%20TypeScript-black.svg)]()  
[![Deployment](https://img.shields.io/badge/Deployed%20on-Vercel-lightgrey.svg)](https://root-and-reach-ph-frontend.vercel.app/)

**Root & Reach PH** is a prototype web application designed for our **Human–Computer Interaction (HCI)** course.  
It envisions a digital platform where **local producers can connect directly with consumers**, promoting transparency, sustainability, and community empowerment.  

🔗 **Live Demo:** [root-and-reach-ph-frontend.vercel.app](https://root-and-reach-ph-frontend.vercel.app/)

---

## 📖 Table of Contents

- [Purpose](#-purpose)  
- [Features](#-features)  
- [Tech Stack](#-tech-stack)  
- [Project Structure](#-project-structure)  
- [Installation & Usage](#-installation--usage)  
- [Screenshots](#-screenshots)  
- [Contact](#-contact)  
- [License](#-license)  

---

## 📝 Purpose

This project was created to demonstrate **user-centered design** in a real-world e-commerce scenario.  
Our goal: make buying local produce **as simple, transparent, and engaging** as possible for both farmers and consumers.

---

## 🚀 Features

- 👩‍🌾 **Farmer Profiles** – Showcase producers and their offerings.  
- 🛒 **Products & Cart** – Browse, filter, and add products to a shopping cart.  
- 📦 **Orders & Checkout** – Simple checkout and order tracking system.  
- 🗺 **Track Orders** – Visualized delivery tracking with maps.  
- 📑 **Static Pages** – About, FAQ, Contact, and How-It-Works sections.  
- 🔐 **Authentication Prototype** – Sign-in and producer signup flows (NextAuth scaffolding).  
- 📱 **Responsive Design** – Built with accessibility and usability in mind.  

---

## 🛠 Tech Stack

- [Next.js 13+ (App Router)](https://nextjs.org/)  
- [React](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)  
- [NextAuth.js](https://next-auth.js.org/) (auth scaffolding)  
- [Vercel](https://vercel.com/) for deployment  
- Context API for state management (`CartContext`, `OrderContext`, `AuthContext`)  
- Custom UI components with modular CSS  

---

## 🗂 Project Structure

```plaintext
src/
│   middleware.ts
│
├── app/                  # Next.js app router pages
│   ├── about/            # About page
│   ├── auth/             # Authentication routes
│   ├── cart/             # Cart page
│   ├── checkout/         # Checkout page
│   ├── contact/          # Contact page
│   ├── farmers/          # Farmer profiles & dynamic farmer/[id]
│   ├── nearby-farms/     # Location-based farms
│   ├── orders/           # Orders page
│   ├── producers/        # Producer signup
│   ├── products/         # Products page
│   ├── profile/          # User profile
│   ├── shop/             # Shop landing
│   └── track-order/      # Order tracking (with message thread)
│
├── components/           # Reusable UI & page components
│   ├── pages/            # Page-specific sections (landing, about-page, etc.)
│   └── ui/               # Shared UI components (Button, Card, Footer, etc.)
│
├── contexts/             # Context API providers (Auth, Cart, Orders)
│
└── data/                 # Mock data (farmers, products, about info, etc.)
```

---

## ⚙️ Installation & Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/root-and-reach-ph-frontend.git
   cd root-and-reach-ph-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it locally.  

---

## 📸 Screenshots

> <img width="1366" height="728" alt="Homepage hero section" src="https://github.com/user-attachments/assets/1dcf3cfb-e690-4762-a6bc-70f4d86927ed" />

**Homepage** – Landing page highlighting the platform’s mission and featured actions.

> <img width="1366" height="728" alt="Nearby Farms page" src="https://github.com/user-attachments/assets/957b848b-910a-4109-8cdc-90d548320167" />

**Nearby Farms page** – Users can search for farms by city or use their current location.

---

## 📬 Contact

👤 **Willard C. Soriano**  

- [GitHub](https://github.com/willardcsoriano)  
- [LinkedIn](https://www.linkedin.com/in/willardcsoriano/)  
- [Facebook](https://web.facebook.com/willardcsoriano/)  
- 📧 [wcsoriano@mymail.mapua.edu.ph](mailto:wcsoriano@mymail.mapua.edu.ph)  

---

## 📜 License

This project was developed for **academic purposes** as part of the *Human–Computer Interaction* course.  
All UI/UX design and code are original.  
&copy; 2025 Willard C. Soriano  
