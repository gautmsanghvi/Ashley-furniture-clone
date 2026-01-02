# 🛋️ Ashley Furniture Clone

A modern, responsive **Ashley Furniture–inspired e-commerce web application** built using **React + Vite**, featuring dynamic product pages, category-based filtering, authentication, and cart functionality.

This project focuses on clean frontend architecture, reusable components, and real-world e-commerce flows.

---

## 🚀 Features

- 🏠 Category-based product listing (Living Room, Bedroom, Dining, etc.)
- 🔍 Dynamic filters by **Price**, **Color**, and **Material**
- 🧭 Dynamic product detail pages using route parameters
- 🛒 Cart functionality with quantity and product options
- 🔐 User authentication (Sign Up / Login) using **Supabase Auth**
- 📦 Checkout flow with order placement
- 🎨 Responsive UI built with **Tailwind CSS**
- ⚡ Fast build and dev experience using **Vite**

---

## 🧰 Tech Stack

- **Frontend:** React (TypeScript), Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **State Management:** React Context API
- **Backend Services:** Supabase (Authentication)
- **Version Control:** Git & GitHub

---

## 📂 Project Structure

src/
├── components/        # Reusable UI components
├── context/           # Auth & Cart context
├── data/              # Category-based product data
├── pages/             # Application pages (Home, Category, Product, Cart, Checkout)
├── services/          # Supabase client & auth helpers
├── App.tsx
└── main.tsx


🔑 Authentication
User authentication is implemented using Supabase Authentication:
Secure user Sign Up / Login
Session-based authentication
Environment variables for secure credentials

🔄 Dynamic Product Routing
Each product page is rendered dynamically using route parameters:
bash
/product/:id

The product data is resolved based on the id, ensuring:
Correct product opens on click
No hardcoded product pages
Scalable architecture

🛠️ Getting Started
1️⃣ Clone the repository
bash
git clone https://github.com/gautmsanghvi/Ashley-furniture-clone.git
cd Ashley-furniture-clone
2️⃣ Install dependencies
bash
npm install
3️⃣ Set up environment variables
Create a .env file in the root:
env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
4️⃣ Run the project
bash
npm run dev

📌 Notes
This project is a frontend-focused clone for learning and demonstration purposes.
Product data is currently stored locally for simplicity.
The architecture supports easy migration to a full backend or database-driven product system.

👨‍💻 Author
Gautm Sanghvi
