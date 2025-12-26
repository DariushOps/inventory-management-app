# Inventory Management App

A modern inventory management application built with Next.js 16, React 19, and Prisma, designed to streamline inventory tracking, monitor stock levels, and provide valuable insights into product performance.

## Features

- **User Authentication**: Users can sign in and access their personalized dashboard.
- **Product Management**: Add, edit, and manage products in the inventory.
- **Stock Monitoring**: Keep track of in-stock, low-stock, and out-of-stock products.
- **Analytics**: View key metrics, including total products, total price, and stock levels.
- **Charts**: Visual representation of product growth over time with weekly data.
- **Responsive UI**: Fully responsive and optimized for all device types.
- **Admin Dashboard**: Access to various inventory management features with intuitive navigation.

## Tech Stack

- **Frontend**: React 19, Next.js 16, Tailwind CSS, Recharts, Lucide Icons
- **Backend**: Node.js, Prisma (for database management)
- **Database**: PostgreSQL
- **Authentication**: StackFrame for user authentication
- **State Management**: Prisma for database interactions

## Installation

### Prerequisites

- Node.js (>=16)
- PostgreSQL database
- Prisma CLI

### Steps to Install

```npx create-next-app
   npm run dev
```

## Usage

- Home Page: Users can sign in or learn more about the inventory management system.

- Sign In: Users can log in with their credentials to access the dashboard.

- Dashboard: The user dashboard shows key metrics such as total products, total price, and stock levels. It also includes a chart displaying the growth of products over time.

- Add Product: Users can add new products to their inventory with details like name, price, quantity, SKU, and low stock threshold.

- Inventory: View all products in the inventory with their stock levels and details.

- Settings: Modify user settings and preferences.
