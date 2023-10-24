"use client"
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })
import Navbar from "@/components/navbar/Navbar"
import Footer from '@/components/footer/Footer';

import { Component } from 'react'



export default function RootLayout({ children }) {
  return (
    <html lang="en">      
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
