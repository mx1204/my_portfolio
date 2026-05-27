# Lee Ming Xuan - Personal Portfolio

Personal portfolio website for Lee Ming Xuan, AI Solutions Engineer and CS Undergraduate at SIM-UOW.

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **CSS** - Custom styling with CSS variables

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the site.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/     # React components
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Hero.tsx
│   ├── NavBar.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
├── App.tsx         # Main app component
├── main.tsx        # Entry point
├── index.css       # Global styles
└── App.css         # App-specific styles
```

## Features

- Responsive navigation with mobile menu
- Hero section with call-to-action
- About section with education details
- Skills showcase with categorized badges
- Experience timeline
- Projects grid with tech stack tags
- Contact form (Formspree integration)

## Customization

- Update contact form endpoint in `Contact.tsx`
- Replace placeholder links in `Hero.tsx` and `Projects.tsx`
- Modify color scheme in `index.css` CSS variables
- Update content in component files
