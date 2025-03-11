import React from 'react';
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'InfraPro - Infrastructure Professional Platform',
  description: 'Connect with top infrastructure professionals or find your next job',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center">
                    <div className="mr-2">
                      <svg width="40" height="30" viewBox="0 0 65 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0,0 L15,25 L30,0 Z" fill="#606060"/>
                        <path d="M35,0 L50,25 L65,0 Z" fill="#ff4444"/>
                      </svg>
                    </div>
                    <div>
                      <span className="text-gray-900 font-bold text-lg">INFRA</span>
                      <span className="text-red-500 font-bold text-lg">PRO</span>
                    </div>
                  </div>
                </div>
                <nav className="ml-6 flex space-x-8">
                  <a href="/" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-indigo-500 text-sm font-medium">Home</a>
                  <a href="/jobs" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">Find Jobs</a>
                  <a href="/employers" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">For Employers</a>
                </nav>
              </div>
              <div className="flex items-center">
                <a href="/login" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">Log in</a>
                <a href="/register" className="ml-4 bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-md text-sm font-medium">Sign up</a>
              </div>
            </div>
          </div>
        </header>
        <main>
          {children}
        </main>
        <footer className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
            <div className="mt-8 md:order-1 md:mt-0">
              <p className="text-center text-xs leading-5 text-gray-500">
                &copy; 2025 InfraPro. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
