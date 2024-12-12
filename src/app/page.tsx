// import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export default function Page() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-20" id="hero">
        <h1 className="text-4xl font-extrabold mb-4">SINCRONIX - SOLUÇÕES</h1>
        <p className="text-lg text-gray-700 max-w-xl mb-6">
          Terceirização de serviços técnicos e mão de obra especializada, integrando soluções em energia solar, segurança eletrônica, CFTV, automação, IoT e muito mais. Sincronizando pessoas, empresas e negócios.
        </p>
        <Button className="text-white bg-blue-600 hover:bg-blue-700" asChild>
          <a href="#contato">Entre em Contato</a>
        </Button>
      </section>

      <Separator className="my-10" />

      {/* Sobre - Missão, Visão, Valores */}
      <section id="sobre" className="py-10">
        <h2 className="text-3xl font-bold text-center mb-8">Sobre a SINCRONIX</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Missão</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Sincronizar excelência e inovação em todas as etapas dos projetos, fornecendo soluções integradas e serviços de qualidade superior no setor de segurança eletrônica e tecnologias correlatas.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Visão</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Ser líder reconhecida no mercado de segurança eletrônica e integração tecnológica, referência em soluções integradas e inovadoras, expandindo globalmente com excelência.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Valores</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Excelência</li>
                <li>Inovação</li>
                <li>Integridade</li>
                <li>Compromisso</li>
                <li>Colaboração</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-10" />

      {/* Serviços */}
      <section id="servicos" className="py-10">
        <h2 className="text-3xl font-bold text-center mb-8">Nossos Serviços</h2>
        <p className="text-center max-w-2xl mx-auto mb-10 text-gray-700">
          A SINCRONIX oferece uma gama completa de soluções: terceirização de mão de obra especializada, energia solar, segurança eletrônica, automação residencial e industrial, CFTV, interfonia, telecomunicações, IoT e muito mais.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="font-bold">Terceirização de Serviços Técnicos</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Obtenha mão de obra qualificada para projetos residenciais, comerciais e industriais, garantindo eficiência, redução de custos e qualidade inspecionada 100%.</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="font-bold">Energia Solar</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Instalação de painéis fotovoltaicos, consultoria em energia renovável e integração de sistemas inteligentes para economia e sustentabilidade.</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="font-bold">Segurança Eletrônica & Automação</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Sistemas de CFTV, controle de acesso, automação residencial e industrial, IoT e integração tecnológica completa para máxima segurança e comodidade.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-10" />

      {/* ESG e Impacto Social */}
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center mb-8">Compromisso ESG</h2>
        <p className="max-w-2xl mx-auto text-center text-gray-700 mb-8">
          A SINCRONIX busca contribuir para um mundo mais sustentável, justo e inclusivo. Investimos em projetos sociais, criamos empregos locais e promovemos profissionalização para integrar pessoas ao mercado de trabalho.
        </p>
      </section>

      <Separator className="my-10" />

      {/* CTA Contato */}
      <section id="contato" className="py-20 bg-blue-50 text-center rounded-lg">
        <h3 className="text-3xl font-bold mb-4">Pronto para impulsionar seu negócio?</h3>
        <p className="text-gray-700 max-w-md mx-auto mb-6">
          Entre em contato conosco e descubra como nossas soluções integradas podem tornar seu projeto mais eficiente, seguro e sustentável.
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3" asChild>
          <a href="mailto:contato@sincronix.com.br">Fale Conosco</a>
        </Button>
      </section>
    </main>
  )
}
