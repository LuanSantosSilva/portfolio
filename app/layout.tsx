import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LuanSant - HOME',
  description: 'HOME',
}

const currentYear: number = new Date().getFullYear();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="logo4.svg" sizes="96x96"></link>
      </head>
      <body className={inter.className}>
        <header>
          <div id="menu" className="alinhando">
            <h2 id="logo"><a href="#">&lt;<span id="color-logo-1">luan</span><span id="color-logo-2">Sant</span>/&gt;</a></h2>
            <nav>
              <div className="mobile-menu">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
              </div>
              <ul className="nav-list">
                <li><a href="#about-me">Sobre mim</a></li>
                <li><a href="#projects">Projetos</a></li>
                <li><a href="#skills">Habilidades</a></li>
                <li><a href="#contacts">Contatos</a></li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
        <footer>
          <section className="background section-contact">
            <div className="alinhando contact">
              <div className="apresent-contact">
                <div className="text-contact" id="contacts">
                  <h1>ENTRE EM CONTATO!</h1>
                  <div className="infos-contact">
                    <p className="text-info-contact">Pode ser via o email luan48924@gmail.com ou pelos links/plataformas abaixo:</p>
                    <div className="icons-contact">
                      <a href="https://www.linkedin.com/in/luan-dos-santos-35759b186/"><img src="/contact/linkedin.svg" alt="" /></a>
                      <a href="https://api.whatsapp.com/send?phone=5585994353616&text=Olá+Luan+vim+pelo+seu+site"><img src="/contact/zap.svg" alt="" /></a>
                      <a href="https://github.com/LuanSantosSilva"><img src="/contact/github.svg" alt="" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="copy">
                <p>
                  Copyright &copy; {currentYear} - by Luan Santos
                </p>
              </div>
            </div>
          </section>

        </footer>
        <Script src="js/menu.js"></Script>
      </body>
    </html>
  )
}
