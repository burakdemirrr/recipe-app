'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiTwitter, FiInstagram, FiMail } from 'react-icons/fi'

const socialLinks = [
  { href: '#', icon: FiGithub, label: 'GitHub' },
  { href: '#', icon: FiTwitter, label: 'Twitter' },
  { href: '#', icon: FiInstagram, label: 'Instagram' },
  { href: '#', icon: FiMail, label: 'Email' },
]

const footerLinks = [
  {
    title: 'About',
    links: [
      { href: '#', label: 'Our Story' },
      { href: '#', label: 'Team' },
      { href: '#', label: 'Careers' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '#', label: 'Blog' },
      { href: '#', label: 'Newsletter' },
      { href: '#', label: 'Help Center' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '#', label: 'Privacy' },
      { href: '#', label: 'Terms' },
      { href: '#', label: 'Cookie Policy' },
    ],
  },
]

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="bg-white border-t"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Recipe App
              </span>
            </motion.div>
            <p className="text-gray-600 text-sm">
              Discover and share delicious recipes from around the world.
              Cook with confidence and joy.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -3 }}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-gray-900 mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <motion.li
                    key={link.label}
                    whileHover={{ x: 2 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-primary text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t">
          <p className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} Recipe App. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  )
} 