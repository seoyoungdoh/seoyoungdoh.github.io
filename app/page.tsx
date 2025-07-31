"use client"

import Image from "next/image"
import { MapPin, GraduationCap } from "lucide-react"

export default function AcademicWebpage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-light text-gray-900">Seoyoung Doh</h1>
          <div className="flex items-center space-x-6 mt-4">
            <a
              href="https://scholar.google.com/citations?user=Q8DEmDIAAAAJ&hl=en&oi=sra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-700 text-base font-medium transition-colors"
            >
              Scholar
            </a>
            <a
              href="mailto:0303dsy@snu.ac.kr"
              className="text-gray-900 hover:text-gray-700 text-base font-medium transition-colors"
            >
              Email
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-700 text-base font-medium transition-colors">
              CV
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Introduction Section */}
        <section className="grid md:grid-cols-3 gap-0 mb-16">
          <div className="md:col-span-1">
            <div className="relative">
              <Image
                src="/images/profile.jpg"
                alt="Seoyoung Doh"
                width={300}
                height={350}
								style={{
									margin: 0,
									width: '90%'
								}}
                className="rounded-lg shadow-sm object-cover mx-auto"
              />
            </div>
          </div>

          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-4">About</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  I am an undergraduate student at the College of Liberal Studies,{" "}
                  <a
                    href="https://snu.ac.kr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Seoul National University
                  </a>
                  . I work with{" "}
                  <a
                    href="https://hcil.snu.ac.kr/people/jinwook-seo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Dr. Jinwook Seo
                  </a>
                  , exploring the intersection of human-computer interaction and data visualization. I am particularly interested in investigating bias in perceiving and interpreting data visualizations.
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <GraduationCap className="w-4 h-4" />
                  <span>College of Liberal Studies, Seoul National University</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>Seoul, South Korea</span>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Publications */}
        <section>
          <h2 className="text-2xl font-light text-gray-900 mb-6">Publications</h2>
          <div className="space-y-8">
            <div className="group grid md:grid-cols-3 gap-0 p-0 rounded-lg transition-all duration-300 pub">
                {/* <Image
                  src="/images/paper-teaser.png"
                  alt="Understanding Bias in Perceiving Dimensionality Reduction Projections - Research Teaser"
                  width={600}
                  height={180}
                  className="shadow-sm object-contain h-full transition-transform duration-[5000ms] ease-in-out group-hover:translate-x-4"
                  style={{ width: 'auto', minWidth: '100%' }}
                /> */}
								<div 
									className={"pubImage"} 
									style={{
										"backgroundImage": "url('/images/paper-teaser.png')",
									}}
								/>
              <div className="md:col-span-2 flex flex-col justify-center">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    Understanding Bias in Perceiving Dimensionality Reduction Projections
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    <strong>Seoyoung Doh</strong>, Hyeon Jeon, Sungbok Shin, Ghulam Jilani Quadri, Nam Wook Kim, and
                    Jinwook Seo.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs group-hover:bg-blue-100 transition-colors">
                      arXiv preprint
                    </span>
                    <span>arXiv:2507.20805</span>
                    <span>(2025)</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open("https://arxiv.org/abs/2507.20805", "_blank")
                      }}
                      className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors"
                    >
                      arXiv
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open("/papers/doh25arxiv.pdf", "_blank")
                      }}
                      className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-600 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
                    >
                      <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      PDF
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center justify-center">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Seoyoung Doh. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
