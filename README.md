# 🌱 Root & Reach PH — Human-Computer Interaction Prototype

[![Status](https://img.shields.io/badge/status-prototype-blue.svg)]()  
[![Built With](https://img.shields.io/badge/Made%20with-Next.js%20%7C%20React%20%7C%20TypeScript-black.svg)]()  
[![Deployment](https://img.shields.io/badge/Deployed%20on-Vercel-lightgrey.svg)](https://root-and-reach-ph-frontend.vercel.app/)

**Root & Reach PH** is a user-centered e-commerce prototype that connects local producers directly with consumers.  
The platform focuses on transparency, sustainability, and community-driven commerce by making it easy to discover, trust, and support nearby farmers.

Originally developed as part of a **Human–Computer Interaction** course, the project emphasizes usability, accessibility, and real-world interaction patterns.

🔗 **Live Demo:** [root-and-reach-ph-frontend.vercel.app](https://root-and-reach-ph-frontend.vercel.app/)

> ⚠️ This is a front-end prototype using mock data; backend services and payments are not implemented.

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

Root & Reach PH explores how thoughtful interaction design can improve trust and engagement in local food marketplaces.

The goal is to make buying local produce **simple, transparent, and human-centered**—balancing producer visibility with a smooth consumer experience.

---

## 🚀 Features

- 👩‍🌾 **Farmer Profiles** – Showcase producers and their offerings.  
- 🛒 **Products & Cart** – Browse, filter, and add products to a shopping cart.  
- 📦 **Orders & Checkout** – Simple checkout and order tracking system.  
- 🗺 **Track Orders** – Visualized delivery tracking with maps.  
- 📑 **Static Pages** – About, FAQ, Contact, and How-It-Works sections.  
- 🔐 **Authentication Prototype** – Sign-in and producer signup flows.  
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

## ⚙️ Local Development (Optional)

This project is primarily intended to be explored via the live demo.

For local development or code review purposes:

```bash
git clone https://github.com/YOUR_USERNAME/root-and-reach-ph-frontend.git
cd root-and-reach-ph-frontend
npm install
npm run dev
````

Then open [http://localhost:3000](http://localhost:3000).


```md
> Note: Uses mock data only. No backend or external APIs required.
```

---

## 📸 Screenshots  

The following screens highlight key user flows and interface decisions, focusing on discovery, trust, and ease of navigation across the platform.  

> <img width="1366" height="728" alt="Homepage hero section" src="https://github.com/user-attachments/assets/1dcf3cfb-e690-4762-a6bc-70f4d86927ed" />
**Homepage** – Landing page highlighting the platform’s mission and featured actions.
> <img width="1366" height="728" alt="Nearby Farms page" src="https://github.com/user-attachments/assets/957b848b-910a-4109-8cdc-90d548320167" />
**Nearby Farms page** – Users can search for farms by city or use their current location.
> <img width="1366" height="728" alt="image" src="https://github.com/user-attachments/assets/22883508-e14f-459b-9d0f-4fcb57444655" />
**Farmers Directory** – Browse verified local growers, view their locations and specialties, and explore producer profiles through a searchable, filterable interface.
> <img width="1366" height="728" alt="image" src="https://github.com/user-attachments/assets/e6b15cf4-fd6b-4a35-9265-d99ba6a06ed0" />
**Products Marketplace** – Discover locally sourced goods with category filters, search and sort controls, transparent pricing, and a streamlined add-to-cart experience.

---

## 📬 Contact

👤 **Willard C. Soriano**

[![GitHub](https://img.shields.io/badge/GitHub-willardcsoriano-black?logo=github)](https://github.com/willardcsoriano)  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Willard%20Soriano-blue?logo=linkedin)](https://www.linkedin.com/in/willardcsoriano/)  
[![Facebook](https://img.shields.io/badge/Facebook-Willard%20Soriano-1877F2?logo=facebook&logoColor=white)](https://web.facebook.com/willardcsoriano/)  
[![Email](https://img.shields.io/badge/Email-wcsoriano%40mymail.mapua.edu.ph-red?logo=gmail&logoColor=white)](mailto:wcsoriano@mymail.mapua.edu.ph)

---

## 📜 License

This project was developed as part of an academic course in **Human–Computer Interaction** and is intended as a design and technical prototype.

All UI/UX design and code are original work.  
© 2025 Willard C. Soriano
