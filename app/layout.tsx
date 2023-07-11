import Navbar from '@/components/Navbar'
import './globals.css'
import { Outfit } from 'next/font/google'

export const metadata = {
  title: 'Workflow - Your all-in-one productivity app',
  description: 'Reach new heights by completing all the tasks that are between you and your success.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='
        bg-[#1f2140]
        flex
        flex-col
        items-center
        gap-[100px]
      '>
        <Navbar />
        <main>
          {children}
        </main>
        Footer
      </body>
    </html>
  )
}
