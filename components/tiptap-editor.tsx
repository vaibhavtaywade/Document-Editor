"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { useCallback, useState } from "react"
import { EditorToolbar } from "./editor-toolbar"
import { PagePreview } from "./page-preview"
import "@/styles/editor.css"

export function TiptapEditor() {
  const [pageCount, setPageCount] = useState(1)

  const editor = useEditor({
    immediatelyRender: false, // Added immediatelyRender: false to prevent SSR hydration mismatch
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
        paragraph: {
          HTMLAttributes: {
            class: "text-base leading-6",
          },
        },
      }),
    ],
    content: "<p>Start typing your document here...</p>",
    onUpdate: ({ editor }) => {
      calculatePages(editor.getHTML())
    },
  })

  const calculatePages = useCallback((html: string) => {
    // Calculate approximate page count based on content height
    // Each A4 page is approximately 700px (accounting for margins and standard line height)
    const tempDiv = document.createElement("div")
    tempDiv.innerHTML = html
    tempDiv.className = "page-content"
    tempDiv.style.position = "absolute"
    tempDiv.style.visibility = "hidden"
    tempDiv.style.width = "612px" // A4 width with margins
    document.body.appendChild(tempDiv)

    const height = tempDiv.offsetHeight
    document.body.removeChild(tempDiv)

    // Approximate pages (816px = full A4 page with margins)
    const pages = Math.ceil(height / 816) || 1
    setPageCount(pages)
  }, [])

  if (!editor) {
    return null
  }

  return (
    <div className="flex h-screen bg-muted">
      {/* Toolbar */}
      <div className="border-b border-border w-full fixed top-0 left-0 right-0 bg-background z-50">
        <EditorToolbar editor={editor} />
      </div>

      {/* Editor Container */}
      <div className="flex-1 pt-16 overflow-hidden flex">
        {/* Main Editor */}
        <div className="flex-1 overflow-y-auto bg-background p-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <EditorContent editor={editor} className="page-editor" />
            </div>
            <div className="mt-4 text-center text-sm text-muted-foreground">
              Page {pageCount} • Word count: {editor.storage.characterCount?.words() || 0}
            </div>
          </div>
        </div>

        {/* Page Preview Sidebar */}
        <div className="w-48 bg-muted border-l border-border overflow-y-auto p-4">
          <h3 className="font-semibold text-sm mb-4">Pages</h3>
          {Array.from({ length: pageCount }).map((_, i) => (
            <PagePreview key={i} pageNumber={i + 1} total={pageCount} />
          ))}
        </div>
      </div>
    </div>
  )
}
