# Tiptap Editor with Pagination

A modern, feature-rich document editor built with [Tiptap](https://tiptap.dev/) and [Next.js](https://nextjs.org/). Perfect for creating and formatting documents with automatic A4 page pagination, pagination preview, and PDF export functionality.

## Features

✨ **Rich Text Editing**
- Bold, italic, and text formatting
- Heading styles (H1, H2, H3)
- Bullet lists and ordered lists
- Clean, intuitive toolbar

📄 **Page Formatting**
- A4 letter size pages with 1-inch margins
- Real-time page counting
- Visual page break indicators
- Professional document layout

🖨️ **Export & Printing**
- PDF export with preserved formatting
- Print-friendly styling
- USCIS document ready format

👁️ **Page Preview**
- Sidebar page thumbnails
- Real-time preview updates
- Visual page navigation

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd tiptap-editor-pagination
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

- **Format Text**: Use the toolbar buttons to apply formatting
- **Create Pages**: Content automatically flows across A4 pages
- **Export PDF**: Click the export button to download as PDF
- **View Pages**: Check the sidebar for page previews

## Tech Stack

- **Next.js 16** - React framework with App Router
- **Tiptap** - Headless rich-text editor
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript

## Project Structure

```
├── app/
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/
│   ├── tiptap-editor.tsx # Main editor component
│   ├── editor-toolbar.tsx # Formatting toolbar
│   └── page-preview.tsx  # Page preview sidebar
├── styles/
│   └── editor.css        # Editor-specific styles
└── package.json          # Dependencies

```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Browser Support

Works on all modern browsers that support:
- ES6+ JavaScript
- CSS Grid & Flexbox
- Local Storage API


