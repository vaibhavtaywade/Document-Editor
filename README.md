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

## Technical Implementation Details

### Page Break Calculation Approach

The pagination system uses a **CSS-based visual approach** combined with **content height measurement**:

1. **A4 Page Dimensions**: Fixed at 8.5" × 11" (210mm × 297mm) with 1-inch margins, resulting in 6.5" × 9" content area
2. **Height Calculation**: Each page can accommodate approximately 2,000-2,500 pixels of content depending on text size and spacing
3. **CSS Page Breaks**: The editor container uses `break-inside: avoid` on elements to prevent content from splitting awkwardly across pages
4. **Real-time Counting**: JavaScript monitors the editor DOM to calculate the number of pages as content changes
5. **Visual Indicators**: Subtle background patterns and spacing visually separate pages without forcing hard breaks

The system calculates pages dynamically by dividing total content height by the fixed A4 page height and rounding up.

### Trade-offs & Limitations

**Current Limitations:**
- **Soft Page Breaks**: Page breaks are visual only—content can span across pages without explicit break points. This is intentional for document flow but means the exact page count may vary slightly when exported to PDF depending on viewer settings
- **Font Variation**: Different fonts and weights affect content height differently. The system assumes standard font sizing; custom fonts may cause pagination discrepancies
- **Complex Layouts**: The editor doesn't support multi-column layouts, nested tables, or floating elements (intentional for USCIS compliance)
- **Export Accuracy**: PDF export uses browser print API, so results may vary slightly across browsers and operating systems
- **No Orphan/Widow Control**: The editor doesn't prevent orphaned lines at page breaks for maximum simplicity

**Why These Trade-offs:**
- Soft page breaks provide a better writing experience and maintain document flow
- Strict hard breaks would require complex algorithms and reduce content flexibility
- Simplicity ensures compatibility with USCIS document requirements

### Future Improvements

With more development time, we would add:

1. **Hard Page Breaks**: Insert explicit page break elements that users can place manually
2. **Advanced Styling**: Support for images, custom fonts, and styled text blocks with proper pagination
3. **Multi-page Export**: Better PDF export with precise page boundaries and header/footer support
4. **Page Templates**: Pre-designed templates for different document types (forms, letters, etc.)
5. **Orphan/Widow Control**: Smart algorithms to prevent isolated lines at page breaks
6. **Collaborative Editing**: Real-time multi-user editing with Yjs integration
7. **Version History**: Track changes and maintain document versions
8. **Custom Margins**: Allow users to adjust margin sizes per page
9. **Table Support**: Full table implementation with proper pagination handling
10. **Comments & Annotations**: Review mode with tracked changes for USCIS form filling


