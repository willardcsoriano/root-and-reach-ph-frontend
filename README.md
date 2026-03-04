# 🌱 Root & Reach PH

[![Status](https://img.shields.io/badge/status-prototype-blue.svg)]()
[![Built With](https://img.shields.io/badge/Made%20with-Next.js%20%7C%20React%20%7C%20TypeScript-black.svg)]()
[![Deployment](https://img.shields.io/badge/Deployed%20on-Vercel-lightgrey.svg)](https://root-and-reach-ph-frontend.vercel.app/)

**Root & Reach PH** is a front-end landing page prototype for a concept platform that connects local producers directly with consumers in the Philippines. The design focuses on transparency, sustainability, and community-driven commerce — making it easy to discover and support nearby farmers.

Originally developed as part of a **Human–Computer Interaction** course, the project demonstrates UI/UX design decisions, page layout, and front-end component architecture.

🔗 **Live Demo:** [root-and-reach-ph-frontend.vercel.app](https://root-and-reach-ph-frontend.vercel.app/)

> ⚠️ This is a front-end prototype using mock data. No backend services or payments are implemented.

---

## 📖 Table of Contents

- [Purpose](#-purpose)
- [Pages & Sections](#-pages--sections)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Screenshots](#-screenshots)
- [Contact](#-contact)
- [License](#-license)

---

## 📝 Purpose

Root & Reach PH explores how thoughtful interface design can build trust and engagement in a local food marketplace concept. The goal was to design a platform that feels **simple, transparent, and approachable** — balancing producer visibility with a smooth consumer experience.

This project was built as a design and front-end development exercise, not a production application.

---

## 📄 Pages & Sections

🏠 **Homepage / Landing** – Hero section, platform mission, and featured calls to action.  
👩‍🌾 **Farmer Profiles** – Showcases mock producer listings and individual profile pages.  
🛒 **Products & Cart** – Browse and filter mock products; add to a simulated shopping cart.  
📦 **Checkout & Orders** – Static checkout flow and order summary screens.  
🗺 **Order Tracking** – Visualized delivery tracking UI with a map placeholder.  
🗂 **Static Pages** – About, FAQ, Contact, and How-It-Works sections.  
🔐 **Auth Screens** – Sign-in and producer signup page layouts (no real auth logic).  
📍 **Nearby Farms** – Location-based farm discovery UI with search.  

---

## 🛠 Tech Stack

- [Next.js 13+](https://nextjs.org/) (App Router) with [React 19](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) – utility-first styling
- [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) – accessible component primitives
- [Framer Motion](https://www.framer.com/motion/) – page transitions and micro-interactions
- [Leaflet](https://leafletjs.com/) / [React Leaflet](https://react-leaflet.js.org/) – interactive maps
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) – form handling and validation
- [Swiper](https://swiperjs.com/) – touch-friendly carousels
- [NextAuth.js](https://next-auth.js.org/) – auth scaffolding only
- [Vercel](https://vercel.com/) – deployment
- Context API – UI state management (`CartContext`, `OrderContext`, `AuthContext`)

---

## 🗂 Project Structure

```plaintext
src/
│   middleware.ts
│
├── app/                        # Next.js App Router pages
│   ├── about/
│   ├── auth/
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── cart/
│   ├── checkout/
│   ├── contact/
│   ├── dashboard/
│   │   ├── orders/
│   │   ├── profile/
│   │   └── settings/
│   ├── faq/
│   ├── farmers/
│   │   └── [id]/               # Dynamic farmer profile
│   ├── how-it-works/
│   ├── join/
│   ├── nearby-farms/
│   ├── orders/
│   ├── producers/
│   │   └── signup/
│   ├── products/
│   ├── profile/
│   ├── shop/
│   ├── support/
│   └── track-order/
│       └── [id]/
│           └── message/
│
├── components/
│   ├── layout/                 # Layout utilities (e.g. PageFadeIn)
│   ├── dashboard/              # Dashboard-specific components
│   ├── pages/                  # Page-specific sections
│   │   ├── about-page/
│   │   ├── auth/
│   │   ├── contact-page/
│   │   ├── farmers-page/
│   │   ├── farmers-profile/
│   │   ├── landing/
│   │   ├── nearby-farms/
│   │   ├── order-page/
│   │   ├── producers-signup/
│   │   ├── products-page/
│   │   └── support-page/
│   └── ui/                     # Shared UI components
│
├── contexts/                   # Context API (Auth, Cart, Orders)
├── data/                       # Mock data
├── hooks/                      # Custom hooks (useFarmers, useProducts)
└── lib/                        # Utilities (motion.ts for Framer Motion config)
```

---

## ⚙️ Local Development

This project is primarily intended to be explored via the live demo.

For local development or code review:

```bash
git clone https://github.com/YOUR_USERNAME/root-and-reach-ph-frontend.git
cd root-and-reach-ph-frontend
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

> Note: Uses mock data only. No backend or external APIs required.

---

## 📸 Screenshots

The following screens highlight key pages and interface decisions across the prototype.

> <img width="1366" height="728" alt="Homepage hero section" src="https://github.com/user-attachments/assets/1dcf3cfb-e690-4762-a6bc-70f4d86927ed" />
**Homepage** – Landing page introducing the platform concept with featured actions.

> <img width="1366" height="728" alt="Nearby Farms page" src="https://github.com/user-attachments/assets/957b848b-910a-4109-8cdc-90d548320167" />
**Nearby Farms** – Search for farms by city or simulated current location.

> <img width="1366" height="728" alt="Farmers Directory" src="https://github.com/user-attachments/assets/22883508-e14f-459b-9d0f-4fcb57444655" />
**Farmers Directory** – Browse mock local growers with searchable, filterable listings.

> <img width="1366" height="728" alt="Products Marketplace" src="https://github.com/user-attachments/assets/e6b15cf4-fd6b-4a35-9265-d99ba6a06ed0" />
**Products Marketplace** – Locally sourced goods with category filters, sort controls, and add-to-cart UI.

---

## 📬 Contact

👤 **Willard C. Soriano**

[![GitHub](https://img.shields.io/badge/GitHub-willardcsoriano-black?logo=github)](https://github.com/willardcsoriano)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Willard%20Soriano-blue?logo=linkedin)](https://www.linkedin.com/in/willardcsoriano/)
[![Facebook](https://img.shields.io/badge/Facebook-Willard%20Soriano-1877F2?logo=facebook&logoColor=white)](https://web.facebook.com/willardcsoriano/)
[![Email](https://img.shields.io/badge/Email-wcsoriano%40mymail.mapua.edu.ph-red?logo=gmail&logoColor=white)](mailto:wcsoriano@mymail.mapua.edu.ph)

---

## 📜 License

This project is licensed under the MIT License.

Originally developed as part of an academic course in **Human–Computer Interaction**, the code and UI are shared openly for learning, reference, and portfolio purposes.

© 2025 Willard C. Soriano
