"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, CheckCircle, Circle, ArrowRight } from "lucide-react";
import { biorefineryStages } from "@/lib/data/research";

export default function BiorefineryJourney() {
  const [activeStep, setActiveStep] = useState(0);
  const active = biorefineryStages[activeStep];

  return (
    <section id="biorefinery" className="section-py bg-ivory" aria-labelledby="biorefinery-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-widest uppercase text-sage-aqua"
          >
            Tahapan Cascade Biorefinery
          </motion.span>
          <motion.h2
            id="biorefinery-heading"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-3xl sm:text-4xl text-deep-sage mt-3 mb-4"
          >
            Perjalanan dari Limbah ke Produk
          </motion.h2>
          <p className="text-deep-sage/60 text-base">
            Setiap tahap menggunakan residu dari tahap sebelumnya — zero-waste closed-loop biorefinery
          </p>
        </div>

        {/* Step Tabs */}
        <div className="flex gap-2 sm:gap-3 mb-10 overflow-x-auto pb-2 scrollbar-hide">
          {biorefineryStages.map((stage, i) => (
            <button
              key={stage.id}
              onClick={() => setActiveStep(i)}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border ${
                activeStep === i
                  ? "bg-deep-sage text-ivory border-deep-sage shadow-md"
                  : "bg-ivory text-deep-sage/60 border-sage-aqua/30 hover:border-sage-aqua hover:text-deep-sage"
              }`}
              aria-pressed={activeStep === i}
              aria-label={`Tahap ${stage.step}: ${stage.titleId}`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${activeStep === i ? "bg-sage-aqua/30 text-ivory" : "bg-sage-aqua/10 text-deep-sage/50"}`}>
                {stage.step}
              </span>
              <span className="hidden sm:inline">{stage.titleId.split(" ").slice(0, 2).join(" ")}</span>
            </button>
          ))}
        </div>

        {/* Active Step Detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Left: Info */}
            <div className="bg-soft-beige/50 rounded-3xl p-8 border border-sage-aqua/15">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-10 rounded-full bg-deep-sage text-ivory flex items-center justify-center font-bold text-lg font-playfair">
                  {active.step}
                </span>
                <div>
                  <p className="text-xs text-deep-sage/40 uppercase tracking-widest font-semibold">Tahap {active.step} / 5</p>
                  <h3 className="font-playfair text-xl text-deep-sage">{active.titleId}</h3>
                </div>
              </div>
              <p className="text-deep-sage/70 leading-relaxed mb-6 text-sm">{active.descriptionId}</p>

              <div className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <span className="font-semibold text-deep-sage w-24 shrink-0">Metode:</span>
                  <span className="text-deep-sage/70">{active.method}</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-deep-sage w-24 shrink-0">Kondisi:</span>
                  <span className="text-deep-sage/70">{active.conditions}</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-deep-sage w-24 shrink-0">Target:</span>
                  <span className="text-deep-sage/70">{active.targetYield}</span>
                </div>
              </div>

              <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold">
                <Circle className="w-3 h-3" />
                Tahap Direncanakan — Jan–Jun 2027
              </div>
            </div>

            {/* Right: Inputs/Outputs flow */}
            <div className="space-y-4">
              <div className="bg-cocoa-brown/5 border border-cocoa-brown/15 rounded-2xl p-6">
                <h4 className="font-semibold text-cocoa-brown text-sm uppercase tracking-wider mb-3">Input</h4>
                <ul className="space-y-2">
                  {active.inputs.map((input) => (
                    <li key={input} className="flex items-center gap-2 text-sm text-deep-sage/70">
                      <ChevronRight className="w-4 h-4 text-cocoa-brown shrink-0" />
                      {input}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-center">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-0.5 h-6 bg-sage-aqua/40" />
                  <ArrowRight className="w-5 h-5 text-sage-aqua rotate-90" />
                  <div className="w-0.5 h-6 bg-sage-aqua/40" />
                </div>
              </div>

              <div className="bg-sage-aqua/10 border border-sage-aqua/25 rounded-2xl p-6">
                <h4 className="font-semibold text-deep-sage text-sm uppercase tracking-wider mb-3">Output</h4>
                <ul className="space-y-2">
                  {active.outputs.map((output) => (
                    <li key={output} className="flex items-center gap-2 text-sm text-deep-sage/70">
                      <CheckCircle className="w-4 h-4 text-deep-sage shrink-0" />
                      {output}
                    </li>
                  ))}
                </ul>
              </div>

              {active.residueUsedIn && (
                <div className="flex items-center gap-2 text-xs text-deep-sage/50 px-2">
                  <ArrowRight className="w-3.5 h-3.5 text-sage-aqua" />
                  <span>Residu digunakan pada Tahap {biorefineryStages.find(s => s.id === active.residueUsedIn)?.step}</span>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
            disabled={activeStep === 0}
            className="px-5 py-2.5 rounded-xl border border-deep-sage/20 text-sm font-medium text-deep-sage/60 disabled:opacity-30 hover:bg-sage-aqua/10 transition-all"
          >
            ← Sebelumnya
          </button>
          <button
            onClick={() => setActiveStep(Math.min(biorefineryStages.length - 1, activeStep + 1))}
            disabled={activeStep === biorefineryStages.length - 1}
            className="px-5 py-2.5 rounded-xl bg-deep-sage text-ivory text-sm font-medium disabled:opacity-30 hover:bg-forest-green transition-all"
          >
            Tahap Berikutnya →
          </button>
        </div>
      </div>
    </section>
  );
}
