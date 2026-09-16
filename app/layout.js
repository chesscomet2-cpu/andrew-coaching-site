import './globals.css'

export const metadata = {
  title: 'Andrew Jeselson - Chess Coach',
  description: 'Expert chess coaching from a 2055-rated player. Online lessons customized to your goals.',
  openGraph: {
    title: 'Andrew Jeselson - Chess Coach',
    description: 'Expert chess coaching from a 2055-rated player. Online lessons customized to your goals.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
