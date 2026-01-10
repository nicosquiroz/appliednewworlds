export default function CustomLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en" className="bg-white">
        <body className="min-h-screen">
          {children}
        </body>
      </html>
    )
  }
  