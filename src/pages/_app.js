import '@/styles/publishproject.css'
import '@/styles/global.css'
import '@/styles/style.css'
import '@/styles/nav.css'
import '@/styles/footer.css'
import '@/styles/startups.css'
import '@/styles/admin.css'
import { StatusContext } from '@/context/context'
import { useState } from 'react'
import Nav from '@/components/Nav/Nav'
import Footer from '@/components/Footer/Footer'
import{ Analytics } from'@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  const [status,setStatus] = useState(false)
  return (
  <StatusContext.Provider value={{status,setStatus}}>
      <header>        
          <Nav/>
        </header>
    <Component {...pageProps} />
    <Footer/>
    <Analytics/>
  </StatusContext.Provider>
  )
}
