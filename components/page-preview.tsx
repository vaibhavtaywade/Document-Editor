interface PagePreviewProps {
  pageNumber: number
  total: number
}

export function PagePreview({ pageNumber, total }: PagePreviewProps) {
  return (
    <div className="mb-3 p-2 rounded border border-border bg-background hover:bg-accent cursor-pointer transition-colors">
      <div className="text-xs text-muted-foreground">
        Page {pageNumber} of {total}
      </div>
      <div className="w-full aspect-[8.5/11] bg-white rounded mt-1 border border-border" />
    </div>
  )
}
