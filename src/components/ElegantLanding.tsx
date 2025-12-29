import React from 'react';
import { Link } from 'react-router-dom';
import { UserCountBadge } from './UserCountBadge';
import TopReviews from './TopReviews';
import { ArrowRight } from 'lucide-react';

export const ElegantLanding: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-calm-turquoise-50 via-calm-lilac-50 to-calm-yellow-50">
      {/* Minimalist Top Navigation */}
      <nav className="px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-sm">
              <span className="text-xl">🧠</span>
            </div>
            <span className="text-xl font-soft font-semibold text-slate-700">
              Microdos.in
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/legal-status">
              <span className="text-slate-600 hover:text-calm-lilac-600 font-soft text-sm transition-colors">
                Rechtsstatus
              </span>
            </Link>
            <Link to="/login">
              <span className="text-slate-600 hover:text-calm-lilac-600 font-soft text-sm transition-colors">
                Anmelden
              </span>
            </Link>
            <Link to="/signup">
              <div className="bg-gradient-to-r from-calm-turquoise-100 to-calm-lilac-100 hover:from-calm-turquoise-200 hover:to-calm-lilac-200 text-slate-700 rounded-full px-6 py-2 shadow-sm hover:shadow-md transition-all duration-300">
                <span className="font-soft text-sm font-medium">
                  Personalisierte Mikrodosierung berechnen
                </span>
              </div>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with Rounded Frame */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Rounded Frame Container */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {/* Hero Background with Abstract Elements */}
            <div className="relative h-[80vh] w-full overflow-hidden">
              {/* Base Gradient Layer - Deep and Rich */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
              
              {/* Animated Gradient Overlay 1 - Turquoise to Lilac */}
              <div className="absolute inset-0 bg-gradient-to-tr from-calm-turquoise-600/40 via-transparent to-calm-lilac-600/40"></div>
              
              {/* Animated Gradient Overlay 2 - Yellow to Peach */}
              <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-calm-yellow-500/30 to-calm-peach-500/30"></div>
              
              {/* Radial Gradient Center - Bright Focus */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-calm-lilac-500/30 via-transparent to-transparent"></div>
              
              {/* Abstract Background Elements - Enhanced */}
              <div className="absolute inset-0">
                {/* Large animated blob - top left - Turquoise */}
                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-calm-turquoise-500/40 to-calm-turquoise-300/20 rounded-full blur-3xl animate-pulse"></div>
                
                {/* Large animated blob - top right - Lilac */}
                <div className="absolute top-10 -right-40 w-[450px] h-[450px] bg-gradient-to-bl from-calm-lilac-500/40 to-calm-lilac-300/20 rounded-full blur-3xl animate-pulse"></div>
                
                {/* Medium blob - center - Yellow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-calm-yellow-400/30 to-calm-peach-400/30 rounded-full blur-3xl"></div>
                
                {/* Medium blob - bottom left - Turquoise */}
                <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-gradient-to-tr from-calm-turquoise-400/30 to-calm-lilac-400/20 rounded-full blur-3xl"></div>
                
                {/* Small blob - bottom right - Lilac */}
                <div className="absolute bottom-20 right-20 w-[300px] h-[300px] bg-gradient-to-bl from-calm-lilac-500/25 to-calm-yellow-400/15 rounded-full blur-3xl"></div>
                
                {/* Additional floating orbs */}
                <div className="absolute top-1/4 right-1/3 w-[200px] h-[200px] bg-calm-turquoise-400/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-1/3 left-1/4 w-[180px] h-[180px] bg-calm-lilac-400/20 rounded-full blur-2xl"></div>
                
                {/* Geometric shapes with gradients */}
                <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-calm-turquoise-400/20 to-calm-lilac-400/20 rotate-45 rounded-3xl blur-sm"></div>
                <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-gradient-to-bl from-calm-lilac-400/20 to-calm-yellow-400/20 rotate-12 rounded-2xl blur-sm"></div>
                <div className="absolute top-1/2 right-1/5 w-20 h-20 bg-gradient-to-tr from-calm-yellow-400/20 to-calm-turquoise-400/20 rotate-45 rounded-xl blur-sm"></div>
                
                {/* Shimmer effect - diagonal gradient lines */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(255,255,255,0.05)_50%,transparent_70%)] bg-[length:200%_200%] animate-shimmer"></div>
                
                {/* Small dots pattern - enhanced */}
                <div className="absolute top-0 left-0 w-full h-full opacity-20">
                  <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-calm-turquoise-300 rounded-full blur-sm"></div>
                  <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-calm-lilac-300 rounded-full blur-sm"></div>
                  <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-calm-yellow-300 rounded-full blur-sm"></div>
                  <div className="absolute top-2/3 right-1/5 w-2 h-2 bg-calm-turquoise-300 rounded-full blur-sm"></div>
                  <div className="absolute top-1/4 right-1/2 w-2 h-2 bg-calm-lilac-300 rounded-full blur-sm"></div>
                  <div className="absolute bottom-1/4 left-1/5 w-3 h-3 bg-calm-yellow-300 rounded-full blur-sm"></div>
                </div>
              </div>
              
              {/* Enhanced overlay for better text contrast with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/20 to-black/40"></div>
              
              {/* Additional depth layer */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,transparent_0%,rgba(0,0,0,0.3)_100%)]"></div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-6 w-full">
                  <div className="grid lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Left Side - Main Content (8 columns) */}
                    <div className="lg:col-span-8 space-y-6">
                      {/* Main Title */}
                      <div className="space-y-4">
                        {/* Badge - Für Performer */}
                        <div className="inline-block">
                          <span className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full text-sm font-soft font-medium shadow-lg">
                            Für Performer
                          </span>
                        </div>
                        {/* Groß: Hauptüberschrift */}
                        <h1 className="text-xl lg:text-2xl xl:text-4xl font-soft font-light leading-tight text-white">
                          Grenzenlos selbstbestimmt durch Microdos.in
                        </h1>
                        {/* Mittel: Untertitel - Pitch */}
                        <p className="text-2xl lg:text-3xl xl:text-4xl font-soft font-light leading-tight text-white">
                        </p>
                        {/* Klein: Beschreibung */}
                        <p className="text-base lg:text-lg xl:text-xl font-soft font-light leading-relaxed text-white/90 mt-2">
                        <span className="mb-4 bg-gradient-to-r from-calm-turquoise-300 via-calm-lilac-300 to-calm-yellow-300 bg-clip-text text-transparent font-medium">
                          Mehr Sicherheit durch personalisierte Mikrodosierung.
                        </span> 
                        <span className="mb-4 text-white/90 mt-2">
                        Angstfrei und mit mehr Flow in 30 Tagen – dank personalisiertem Microdosing, messbarem Fortschritt und Erfolgsgarantie
                        </span>
                        </p>
                      </div>

                      {/* Social Proof and CTA Row */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                        {/* Social Proof Badge - Dynamic User Count */}
                        <UserCountBadge />

                        {/* CTA Button */}
                        <Link to="/signup">
                          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-calm-turquoise-100 to-calm-lilac-100 hover:from-calm-turquoise-200 hover:to-calm-lilac-200 text-slate-700 rounded-xl px-5 py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                            <div className="w-8 h-8 bg-white/40 rounded-lg flex items-center justify-center">
                              <span className="text-slate-600 text-base">🧠</span>
                            </div>
                            <div className="text-left">
                              <div className="font-soft font-semibold text-md">
                                Persönliche Mikrodosierung berechnen
                              </div>
                            </div>
                            <ArrowRight className="h-4 w-4 text-slate-600" />
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Right Side - Floating Elements (4 columns) */}
                    <div className="lg:col-span-4 relative h-96 lg:h-auto">
                      {/* Top Left - Sparkle Icon */}
                      <div className="absolute top-8 left-0 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-white/30">
                        <span className="text-xl">✨</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 96% Badge - Above Video */}
              <div className="absolute bottom-48 right-8">
                <div className="bg-white/15 backdrop-blur-md rounded-2xl px-6 py-4 shadow-lg border border-white/20">
                  <div className="text-center">
                    <div className="text-5xl font-soft font-bold bg-gradient-to-r from-calm-turquoise-300 to-calm-lilac-300 bg-clip-text text-transparent">
                      96%
                    </div>
                    <div className="text-white font-soft font-semibold text-sm uppercase tracking-wide">
                      Zufriedene Kunden
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Frame - Bottom Right Corner (no spacing) */}
              <div className="absolute bottom-0 right-0">
                <div className="relative w-64 h-40 bg-gradient-to-br from-calm-turquoise-50 to-calm-lilac-50 rounded-tl-2xl shadow-lg overflow-hidden">
                  {/* Video Placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-calm-turquoise-100/30 to-calm-lilac-100/30 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl mb-2">🎥</div>
                      <div className="text-xs text-slate-600 font-soft">Video Preview</div>
                    </div>
                  </div>
                  
                  {/* Play Button in Video Frame */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border border-white/50">
                      <div className="w-0 h-0 border-l-[8px] border-l-calm-lilac-500 border-y-[6px] border-y-transparent ml-1 group-hover:border-l-calm-turquoise-500 transition-colors"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flow-Boost Garantie Section - Prominent */}
      <section className="px-6 py-16 bg-gradient-to-br from-calm-turquoise-50 via-calm-lilac-50 to-calm-yellow-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-2 border-calm-turquoise-200 shadow-xl">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-calm-turquoise-400 to-calm-lilac-400 rounded-2xl mb-4">
                <span className="text-4xl">✨</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-soft font-semibold text-slate-800">
                Flow-Boost Garantie
              </h2>
              <p className="text-xl md:text-2xl font-soft font-medium text-slate-700 leading-relaxed">
                Wenn du nach 30 Tagen nicht spürbar leichter in Flow kommst → 
                <span className="block mt-2 bg-gradient-to-r from-calm-turquoise-500 to-calm-lilac-500 bg-clip-text text-transparent">
                  nächster Monat kostenlos.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section - Dein komplettes Flow-System */}
      <section className="px-6 py-24 bg-gradient-to-b from-white via-calm-turquoise-50/30 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-soft font-light text-slate-800 mb-6">
              Deine Journey zu mehr Flow
            </h2>
            <p className="text-xl text-slate-600 font-soft max-w-3xl mx-auto leading-relaxed">
              Ein System, das dich Schritt für Schritt zu deinem besten Selbst führt
            </p>
          </div>
          
          {/* Journey Steps */}
          <div className="space-y-32">
            
            {/* Step 1: Persönliche Berechnung */}
            <div className="relative">
              {/* Connection Line */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-calm-turquoise-200 via-calm-lilac-200 to-calm-yellow-200 transform -translate-x-1/2 -translate-y-16"></div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Visual Element - Left */}
                <div className="relative order-2 lg:order-1">
                  <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                    {/* Emotional Visual Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-calm-turquoise-400 via-calm-turquoise-300 to-calm-lilac-300">
                      {/* Abstract shapes for emotional appeal */}
                      <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
                      <div className="absolute bottom-10 right-10 w-40 h-40 bg-calm-lilac-400/30 rounded-full blur-2xl"></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
                      
                      {/* Scientific/Precision elements */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center space-y-4">
                          <div className="text-7xl mb-4">🧬</div>
                          <div className="w-24 h-1 bg-white/40 mx-auto rounded-full"></div>
                          <div className="w-16 h-1 bg-white/30 mx-auto rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-calm-turquoise-500 to-calm-lilac-500 rounded-2xl flex items-center justify-center shadow-xl border-4 border-white">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                </div>

                {/* Content - Right */}
                <div className="order-1 lg:order-2 space-y-6">
                  <div className="inline-block">
                    <span className="px-4 py-2 bg-calm-turquoise-100 text-calm-turquoise-700 rounded-full text-sm font-soft font-medium">
                      Start deiner Journey
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-soft font-light text-slate-800 leading-tight">
                    Deine persönliche Mikrodosierung
                  </h3>
                  <p className="text-lg text-slate-600 font-soft leading-relaxed">
                    Gib dein Gewicht, Alter und Geschlecht an. Unser wissenschaftlich fundierter Algorithmus berechnet deine individuelle, sichere Mikrodosierung – präzise auf dich abgestimmt.
                  </p>
                  <div className="pt-4">
                    <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-calm-turquoise-50 to-calm-lilac-50 rounded-2xl border border-calm-turquoise-200/50">
                      <span className="text-2xl">🔬</span>
                      <span className="font-soft font-medium text-slate-700">
                        Sicherheit und Präzision, Wissenschaftlich fundiert
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: App-Begleitung & Tracking */}
            <div className="relative">
              {/* Connection Line */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-calm-yellow-200 via-calm-peach-200 to-calm-turquoise-200 transform -translate-x-1/2 -translate-y-16"></div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content - Left */}
                <div className="space-y-6">
                  <div className="inline-block">
                    <span className="px-4 py-2 bg-calm-lilac-100 text-calm-lilac-700 rounded-full text-sm font-soft font-medium">
                      Dein täglicher Begleiter
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-soft font-light text-slate-800 leading-tight">
                    Deine App begleitet dich
                  </h3>
                  <p className="text-lg text-slate-600 font-soft leading-relaxed">
                    Unsere App erinnert dich automatisch an deine Sessions. Durch Journaling holst du das Maximum aus jeder einzelnen Session heraus. Tracke deinen Fokus, deine Stimmung und deinen Output – messbar, sichtbar, belegter Fortschritt.
                  </p>
                  <div className="space-y-4 pt-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-calm-turquoise-400 to-calm-lilac-400 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xl">📊</span>
                      </div>
                      <div>
                        <p className="font-soft font-medium text-slate-800">Flow-Metriken Dashboard</p>
                        <p className="text-slate-600 font-soft text-sm">Fortschritt visuell = Motivation steigt</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-calm-lilac-400 to-calm-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xl">📔</span>
                      </div>
                      <div>
                        <p className="font-soft font-medium text-slate-800">Integriertes Journal</p>
                        <p className="text-slate-600 font-soft text-sm">Jede Session dokumentieren, jede Erkenntnis festhalten</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-calm-yellow-400 to-calm-peach-400 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xl">🔔</span>
                      </div>
                      <div>
                        <p className="font-soft font-medium text-slate-800">Automatische Erinnerungen</p>
                        <p className="text-slate-600 font-soft text-sm">Kein "daran denken müssen" – die App denkt für dich</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual Element - Right */}
                <div className="relative">
                  <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                    {/* Emotional Visual Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-calm-lilac-400 via-calm-yellow-300 to-calm-peach-300">
                      {/* Abstract shapes */}
                      <div className="absolute top-20 right-20 w-36 h-36 bg-white/20 rounded-full blur-2xl"></div>
                      <div className="absolute bottom-20 left-20 w-44 h-44 bg-calm-turquoise-400/30 rounded-full blur-2xl"></div>
                      <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-white/15 rounded-full blur-xl"></div>
                      
                      {/* Growth/Progress elements */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center space-y-4">
                          <div className="text-7xl mb-4">📈</div>
                          <div className="flex items-end justify-center space-x-2 h-20">
                            <div className="w-8 bg-white/50 rounded-t-lg" style={{ height: '40%' }}></div>
                            <div className="w-8 bg-white/60 rounded-t-lg" style={{ height: '60%' }}></div>
                            <div className="w-8 bg-white/70 rounded-t-lg" style={{ height: '80%' }}></div>
                            <div className="w-8 bg-white/80 rounded-t-lg" style={{ height: '100%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-calm-lilac-500 to-calm-yellow-500 rounded-2xl flex items-center justify-center shadow-xl border-4 border-white">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Community */}
            <div className="relative">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Visual Element - Left */}
                <div className="relative order-2 lg:order-1">
                  <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                    {/* Emotional Visual Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-calm-peach-400 via-calm-yellow-300 to-calm-turquoise-300">
                      {/* Abstract shapes */}
                      <div className="absolute top-10 left-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
                      <div className="absolute bottom-10 right-10 w-36 h-36 bg-calm-lilac-400/30 rounded-full blur-2xl"></div>
                      <div className="absolute top-1/2 right-1/4 w-28 h-28 bg-white/15 rounded-full blur-xl"></div>
                      
                      {/* Community/Connection elements */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center space-y-4">
                          <div className="text-7xl mb-4">🤝</div>
                          <div className="flex items-center justify-center space-x-3">
                            <div className="w-12 h-12 bg-white/40 rounded-full"></div>
                            <div className="w-16 h-16 bg-white/50 rounded-full"></div>
                            <div className="w-12 h-12 bg-white/40 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-calm-peach-500 to-calm-yellow-500 rounded-2xl flex items-center justify-center shadow-xl border-4 border-white">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                </div>

                {/* Content - Right */}
                <div className="order-1 lg:order-2 space-y-6">
                  <div className="inline-block">
                    <span className="px-4 py-2 bg-calm-peach-100 text-calm-peach-700 rounded-full text-sm font-soft font-medium">
                      Dein Netzwerk
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-soft font-light text-slate-800 leading-tight">
                    Community für Performer
                  </h3>
                  <p className="text-lg text-slate-600 font-soft leading-relaxed">
                    Lerne High Performer kennen aus allen bedeutenden Bereichen der Gesellschaft. Baue Partnerschaften für dein Business und erreicht eure Ziele gemeinsam. Eine Community, die wächst, lernt und gemeinsam erfolgreich wird.
                  </p>
                  <div className="pt-4">
                    <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-calm-peach-50 to-calm-yellow-50 rounded-2xl border border-calm-peach-200/50">
                      <span className="text-2xl">🚀</span>
                      <span className="font-soft font-medium text-slate-700">
                        Gemeinsam höher hinaus
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Top Reviews Section */}
      <TopReviews />

      {/* Final CTA Section */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-soft font-light text-slate-800">
              Bereit für mehr Flow?
              <span className="block bg-gradient-to-r from-calm-turquoise-400 to-calm-lilac-400 bg-clip-text text-transparent font-medium">
                in 30 Tagen zuverlässig
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-soft font-light leading-relaxed">
              Mit personalisiertem Microdosing, messbarem Fortschritt & voller Erfolgsgarantie
            </p>
          </div>
          
          <div className="pt-8">
            <Link to="/signup">
              <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-calm-turquoise-400 to-calm-lilac-400 hover:from-calm-turquoise-500 hover:to-calm-lilac-500 text-white rounded-2xl px-10 py-5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <span className="text-white text-lg">🚀</span>
                </div>
                <span className="font-soft font-semibold text-lg">
                  Jetzt starten
                </span>
                <ArrowRight className="h-5 w-5" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Minimalist Footer */}
      <footer className="px-6 py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-sm">
              <span className="text-lg">🧠</span>
            </div>
            <span className="text-lg font-soft font-medium text-slate-700">
              Microdos.in
            </span>
          </div>
          <p className="text-slate-500 font-soft text-sm">
            Wissenschaftlich fundierte Mikrodosierungs-Berechnungen
          </p>
          <div className="flex items-center justify-center space-x-6 text-xs text-slate-400 font-soft">
            <span>© 2024 Microdos.in</span>
            <span>•</span>
            <span>Datenschutz</span>
            <span>•</span>
            <span>Impressum</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
