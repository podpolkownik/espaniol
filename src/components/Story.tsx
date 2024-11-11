import React from 'react';
import { motion } from 'framer-motion';
import { Clock, AlertCircle, Heart, CheckCircle2, XCircle } from 'lucide-react';

export const Story = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const symptoms = [
    { before: "Molestia constante", after: "Ausencia total de molestias" },
    { before: "Dolor al moverse", after: "Movimiento libre sin dolor" },
    { before: "Sueño interrumpido", after: "Sueño saludable" },
    { before: "Actividad limitada", after: "Regreso a una vida activa" }
  ];

  return (
    <section className="py-20 bg-gray-50" id="story">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Situación inicial */}
        <motion.div 
          className="text-center mb-16"
          {...fadeInUp}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Historia de Marta</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A los 43 años, mi vida cambió. A pesar de llevar un estilo de vida saludable, me enfrenté a un problema delicado que dio vuelta mi mundo.
          </p>
        </motion.div>

        {/* Línea de tiempo */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-16"
          {...fadeInUp}
        >
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Clock className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Primeros síntomas</h3>
            <p className="text-gray-700 mb-4">
              Todo comenzó con una ligera molestia que al principio ignoré.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-500" />
                Molestia ligera
              </li>
              <li className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-500" />
                Ligera sensación de ardor
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <AlertCircle className="w-12 h-12 text-red-600 mb-6" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Progresión</h3>
            <p className="text-gray-700 mb-4">
              Los síntomas empeoraron, afectando significativamente mi calidad de vida.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-500" />
                Dolor intenso
              </li>
              <li className="flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-500" />
                Insomnio
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Heart className="w-12 h-12 text-green-600 mb-6" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Recuperación</h3>
            <p className="text-gray-700 mb-4">
              Después de consultar con un especialista, comenzó mi recuperación.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                Ayuda profesional
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                Tratamiento efectivo
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Antes y después */}
        <motion.div 
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16"
          {...fadeInUp}
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 bg-red-50">
              <h3 className="text-2xl font-bold text-red-900 mb-6">Antes del tratamiento</h3>
              <ul className="space-y-4">
                {symptoms.map((symptom, index) => (
                  <li key={`before-${index}`} className="flex items-center gap-3">
                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                    <span className="text-red-900">{symptom.before}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-green-50">
              <h3 className="text-2xl font-bold text-green-900 mb-6">Después de Vitacaps</h3>
              <ul className="space-y-4">
                {symptoms.map((symptom, index) => (
                  <li key={`after-${index}`} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-green-900">{symptom.after}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Conclusión */}
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          {...fadeInUp}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Mi camino hacia la recuperación</h3>
          <p className="text-lg text-gray-700 mb-8">
            Gracias a Vitacaps, volví a llevar una vida plena. El medicamento no solo eliminó los síntomas, 
            sino que también me ayudó a recuperar la confianza en mí misma. Hoy en día, disfruto nuevamente de 
            una vida activa y comparto mi historia para ayudar a otros a no temer pedir ayuda.
          </p>
          <motion.button
            className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Saber más sobre Vitacaps
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
