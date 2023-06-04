import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
  title: 'Уборка и клининг в Бишкеке по цене от 39 сом за м2',
  description:
    'Клининговая компания «Clean Time осуществляет услуги по уборке квартир, офисов, коттеджей, загородных домов, и помещений различного назначения в Бишкеке. Вы можете сделать заказ на профессиональный клининг у нас на сайте или позвонить по телефону.',
  keywords: 'уборка квартир, клининг бишкек, заказать клининг, доступная цена'
}

export default function RootLayout({ children }) {
  return (
    <html lang='ru' className='smooth-scroll'>
      <head>
        <meta name='yandex-verification' content='1fc83d52eaea0baf' />
        <meta name="google-site-verification" content="t1gmgt73XaEif-4BgxAu43ZldebCRbWtg7SLw0bQwRc" />
      </head>
      <body suppressHydrationWarning={true}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
