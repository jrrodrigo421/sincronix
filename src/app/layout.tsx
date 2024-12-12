// import './globals.css'
// import { Inter } from 'next/font/google'
// import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"

// const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'SINCRONIX - Soluções',
//   description: 'Terceirização de serviços técnicos e soluções integradas em segurança eletrônica, energia solar e automação.',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="pt-BR">
//       <body className={inter.className}>
//         <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
//           <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
//             <div className="text-xl font-bold">SINCRONIX</div>
//             <NavigationMenu>
//               <NavigationMenuList>
//                 <NavigationMenuItem>
//                   <NavigationMenuLink href="#sobre">Sobre</NavigationMenuLink>
//                 </NavigationMenuItem>
//                 <NavigationMenuItem>
//                   <NavigationMenuLink href="#servicos">Serviços</NavigationMenuLink>
//                 </NavigationMenuItem>
//                 <NavigationMenuItem>
//                   <NavigationMenuLink href="#contato">Contato</NavigationMenuLink>
//                 </NavigationMenuItem>
//               </NavigationMenuList>
//             </NavigationMenu>
//           </div>
//         </header>
//         {children}
//         <footer className="bg-gray-50 border-t border-gray-200 py-6 mt-10">
//           <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-600">
//             © {new Date().getFullYear()} SINCRONIX - Todos os direitos reservados.
//           </div>
//         </footer>
//       </body>
//     </html>
//   )
// }




import './globals.css'
import { Inter } from 'next/font/google'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"
import AnimatedBackground from '@/components/ui/animated-background'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SINCRONIX - Soluções',
  description: 'Terceirização de serviços técnicos e soluções integradas em segurança eletrônica, energia solar e automação.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <AnimatedBackground />
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="text-xl font-bold">SINCRONIX</div>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#sobre">Sobre</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#servicos">Serviços</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#contato">Contato</NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </header>
        {children}
        <footer className="bg-gray-50 border-t border-gray-200 py-6 mt-10">
          <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-600">
            © {new Date().getFullYear()} SINCRONIX - Todos os direitos reservados.
          </div>
        </footer>
      </body>
    </html>
  )
}

