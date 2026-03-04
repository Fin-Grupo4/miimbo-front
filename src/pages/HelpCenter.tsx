import { useState } from 'react'
import { miimboColors } from '../theme/colors'

export function HelpCenter() {
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="space-y-8 max-w-3xl">
      <header className="space-y-1">
        <h1
          className="text-xl font-bold tracking-tight"
          style={{ color: miimboColors.brand.midnight }}
        >
          Centro de ayuda & Q&A
        </h1>
        <p className="text-sm" style={{ color: 'rgba(12,8,41,0.7)' }}>
          Envía tus dudas sobre Miimbo y revisa algunas preguntas frecuentes relacionadas con el
          simulador de crédito MiVivienda.
        </p>
      </header>

      <section className="rounded-2xl border border-white/70 bg-white/80 px-5 py-4 shadow-sm space-y-4">
        <h2
          className="text-sm font-semibold tracking-tight"
          style={{ color: miimboColors.brand.midnight }}
        >
          Enviar una consulta rápida
        </h2>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <div className="grid gap-3 md:grid-cols-2">
            <label className="text-xs font-medium space-y-1" style={{ color: 'rgba(12,8,41,0.85)' }}>
              Correo de contacto
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tucorreo@empresa.com"
                className="w-full rounded-xl border px-3 py-2 text-xs outline-none bg-white/90"
                style={{ borderColor: 'rgba(12,8,41,0.08)', color: miimboColors.brand.midnight }}
              />
            </label>
            <label className="text-xs font-medium space-y-1" style={{ color: 'rgba(12,8,41,0.85)' }}>
              Asunto
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Ej: Duda sobre periodos de gracia"
                className="w-full rounded-xl border px-3 py-2 text-xs outline-none bg-white/90"
                style={{ borderColor: 'rgba(12,8,41,0.08)', color: miimboColors.brand.midnight }}
              />
            </label>
          </div>

          <label className="text-xs font-medium space-y-1" style={{ color: 'rgba(12,8,41,0.85)' }}>
            Describe tu duda
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              placeholder="Cuéntanos en qué parte del flujo (clientes, propiedades, simulación, historial) necesitas ayuda."
              className="w-full rounded-xl border px-3 py-2 text-xs outline-none bg-white/90 resize-y"
              style={{ borderColor: 'rgba(12,8,41,0.08)', color: miimboColors.brand.midnight }}
            />
          </label>

          <div className="flex items-center justify-between pt-1">
            {sent && (
              <span className="text-[11px]" style={{ color: 'rgba(12,8,41,0.6)' }}>
                Tu consulta se ha registrado localmente. Puedes seguir trabajando mientras se revisa.
              </span>
            )}
            <button
              type="submit"
              className="ml-auto rounded-full px-5 py-2 text-xs font-semibold tracking-wide"
              style={{
                background:
                  'linear-gradient(145deg, rgba(244,167,160,0.9) 0%, rgba(249,198,181,0.9) 100%)',
                color: '#FFFFFF',
                boxShadow: '0 6px 16px rgba(226,164,153,0.35)',
              }}
            >
              Enviar duda
            </button>
          </div>
        </form>
      </section>

      <section className="space-y-3">
        <h2
          className="text-sm font-semibold tracking-tight"
          style={{ color: miimboColors.brand.midnight }}
        >
          Preguntas y respuestas rápidas
        </h2>
        <div className="space-y-2 text-xs" style={{ color: 'rgba(12,8,41,0.8)' }}>
          <div className="rounded-2xl bg-white/80 border border-white/70 px-4 py-3">
            <p className="font-semibold">¿Qué tipo de crédito simula Miimbo?</p>
            <p>
              Miimbo está pensado para simular el{' '}
              <span className="font-medium">Nuevo Crédito MiVivienda</span> con plan de pagos por el
              método francés vencido (cuotas iguales), permitiendo aplicar bonos como Techo Propio
              y trabajando tanto en Soles como en Dólares.
            </p>
          </div>
          <div className="rounded-2xl bg-white/80 border border-white/70 px-4 py-3">
            <p className="font-semibold">
              ¿Dónde defino moneda, tipo de tasa y periodos de gracia?
            </p>
            <p>
              En la pantalla de <span className="font-medium">Simulación</span> puedes elegir la
              moneda, si la tasa es <span className="font-medium">efectiva o nominal</span>{' '}
              (incluyendo capitalización) y registrar los periodos de gracia total, parcial o sin
              gracia antes de generar el cronograma.
            </p>
          </div>
          <div className="rounded-2xl bg-white/80 border border-white/70 px-4 py-3">
            <p className="font-semibold">
              ¿Qué información se guarda de clientes e inmuebles?
            </p>
            <p>
              Desde <span className="font-medium">Clientes</span> se almacena la información
              socioeconómica necesaria (ingresos, historial crediticio, etc.), y desde{' '}
              <span className="font-medium">Propiedades</span> se registran las características de
              la oferta inmobiliaria. Con ambos datos se puede generar el plan de pagos y calcular
              indicadores como VAN y TIR exigidos por la normativa de transparencia financiera.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}