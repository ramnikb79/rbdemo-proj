# NextJS + shadcn/ui + Tailwind CSS

A modern React application built with NextJS 15, shadcn/ui components, and Tailwind CSS.

## 🚀 Tech Stack

- **NextJS 15** - React framework with App Router
- **React 19** - Latest React version
- **TypeScript** - Type safety and better developer experience
- **shadcn/ui** - Beautiful and accessible components
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting and formatting

## 📦 Installation

This project is already set up and ready to use. To get started:

```bash
# Navigate to the project directory
cd nextjs-app

# Install dependencies (if not already installed)
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Adding shadcn/ui Components

To add new shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

For example:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
```

## 📁 Project Structure

```
nextjs-app/
├── src/
│   ├── app/                 # App Router pages
│   │   ├── globals.css     # Global styles with shadcn variables
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/          # React components
│   │   └── ui/             # shadcn/ui components
│   └── lib/                # Utility functions
├── public/                  # Static assets
├── components.json          # shadcn/ui configuration
└── package.json            # Dependencies and scripts
```

## 🎯 Features

- ✅ NextJS 15 with App Router
- ✅ React 19
- ✅ TypeScript support
- ✅ Tailwind CSS v4
- ✅ shadcn/ui components
- ✅ Dark mode support
- ✅ ESLint configuration
- ✅ Modern development setup

## 🔧 Configuration

The project uses the following key configurations:

- **shadcn/ui**: Configured in `components.json`
- **Tailwind CSS**: Uses v4 with shadcn variables
- **TypeScript**: Strict mode enabled
- **ESLint**: NextJS recommended rules

## 🚀 Deployment

This project can be deployed to Vercel, Netlify, or any other hosting platform that supports NextJS applications.

## 📚 Resources

- [NextJS Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
