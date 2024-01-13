export const metadata = {
  title: "Next.js o'rganish",
  description: 'Hali biz sinmadik',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
