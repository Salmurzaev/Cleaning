import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
  title: 'Уборка и клининг в Бишкеке по цене от 29 сом за м2',
  description:
    'Клининговая компания «Clean Time осуществляет услуги по уборке квартир, офисов, коттеджей, загородных домов, и помещений различного назначения в Бишкеке. Вы можете сделать заказ на профессиональный клининг у нас на сайте или позвонить по телефону.',
  keywords: 'уборка квартир, клининг бишкек, заказать клининг, доступная цена'
}

export default function RootLayout({ children }) {
  return (
    <html lang='ru' className='smooth-scroll'>
      <head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='yandex-verification' content='1fc83d52eaea0baf' />
        <meta
          name='google-site-verification'
          content='t1gmgt73XaEif-4BgxAu43ZldebCRbWtg7SLw0bQwRc'
        />
        <meta property='og:locale' content='ru_RU' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Уборка квартир, домов и офисов в Бишкеке' />
        <meta
          property='og:description'
          content='Клининговая компания «Clean Time» в Бишкеке. Профессиональная клининговая компания сервис на дом ✅Выполняем уборку качественно и в срок ✅Профессиональные клинеры ✅Низкие цены ✅Безопасные средства ☎ +996 (703) 15-69-75.'
        />
        <meta property='og:url' content='https://www.cleantime.kg/' />
        <meta property='og:site_name' content='CleanTime' />
      </head>
      <body suppressHydrationWarning={true}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
