import Navbar from '@/components/Navbar'
import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Уборка и клининг в Бишкеке по цене от 39 сом за м2',
  description:
    'Клининговая компания «Clean House» осуществляет услуги по уборке квартир, офисов, коттеджей, загородных домов, и помещений различного назначения в Бишкеке. Вы можете сделать заказ на профессиональный клининг у нас на сайте или позвонить по телефону.'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
