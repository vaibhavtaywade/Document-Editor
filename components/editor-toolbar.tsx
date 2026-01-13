"use client"

import type { Editor } from "@tiptap/react"
import { Bold, Italic, List, ListOrdered, Heading1, Heading2, Heading3, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface EditorToolbarProps {
  editor: Editor | null
}

export function EditorToolbar({ editor }: EditorToolbarProps) {
  if (!editor) {
    return null
  }

  const handleExportPDF = () => {
    const content = editor.getHTML()
    const printWindow = window.open("", "", "width=800,height=600")
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Document</title>
            <style>
              @page {
                size: A4;
                margin: 1in;
              }
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                line-height: 1.6;
                color: #000;
              }
              h1 { font-size: 2em; margin: 0.5em 0; }
              h2 { font-size: 1.5em; margin: 0.4em 0; }
              h3 { font-size: 1.17em; margin: 0.3em 0; }
              p { margin: 1em 0; }
              ul, ol { margin: 1em 0; }
              table { border-collapse: collapse; width: 100%; margin: 1em 0; }
              th, td { border: 1px solid #ddd; padding: 0.5em; text-align: left; }
              th { background-color: #f5f5f5; }
            </style>
          </head>
          <body>
            ${content}
          </body>
        </html>
      `)
      printWindow.document.close()
      printWindow.print()
    }
  }

  return (
    <div className="flex items-center gap-2 p-4 border-b border-border bg-background">
      {/* Text Formatting */}
      <Button
        onClick={() => editor.chain().focus().toggleBold().run()}
        variant={editor.isActive("bold") ? "default" : "ghost"}
        size="sm"
        title="Bold (Ctrl+B)"
      >
        <Bold className="w-4 h-4" />
      </Button>

      <Button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        variant={editor.isActive("italic") ? "default" : "ghost"}
        size="sm"
        title="Italic (Ctrl+I)"
      >
        <Italic className="w-4 h-4" />
      </Button>

      <Separator orientation="vertical" className="h-6" />

      {/* Headings */}
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        variant={editor.isActive("heading", { level: 1 }) ? "default" : "ghost"}
        size="sm"
        title="Heading 1"
      >
        <Heading1 className="w-4 h-4" />
      </Button>

      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        variant={editor.isActive("heading", { level: 2 }) ? "default" : "ghost"}
        size="sm"
        title="Heading 2"
      >
        <Heading2 className="w-4 h-4" />
      </Button>

      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        variant={editor.isActive("heading", { level: 3 }) ? "default" : "ghost"}
        size="sm"
        title="Heading 3"
      >
        <Heading3 className="w-4 h-4" />
      </Button>

      <Separator orientation="vertical" className="h-6" />

      {/* Lists */}
      <Button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        variant={editor.isActive("bulletList") ? "default" : "ghost"}
        size="sm"
        title="Bullet List"
      >
        <List className="w-4 h-4" />
      </Button>

      <Button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        variant={editor.isActive("orderedList") ? "default" : "ghost"}
        size="sm"
        title="Ordered List"
      >
        <ListOrdered className="w-4 h-4" />
      </Button>

      <Separator orientation="vertical" className="h-6" />

      {/* Export */}
      <Button onClick={handleExportPDF} variant="default" size="sm" title="Export as PDF">
        <Download className="w-4 h-4 mr-2" />
        Export
      </Button>
    </div>
  )
}
