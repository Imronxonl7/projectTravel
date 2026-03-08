'use client'

import { Reenie_Beanie } from 'next/font/google'
import React, { useState } from 'react'
const reenieBeanie = Reenie_Beanie({
  weight: '400',
  subsets: ['latin'],
})
const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = () => {
    console.log({ name, email, message })
  }

  return (
    <div className=' py-16 px-4 relative z-10'>
      <div className='max-w-xl mx-auto bg-gray-50 rounded-2xl shadow-xl p-8 sm:p-10'>
        
        <div className='text-center mb-8'>
          <p className={`text-[30px] tracking-widest text-emerald-500 uppercase font-semibold mb-2 ${reenieBeanie.className}`}
            >
            Plan your Next Trip
          </p>
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-3'
            style={{ fontFamily: 'Georgia, serif' }}>
            Get in Touch
          </h2>
          <p className='text-gray-500 text-sm leading-relaxed'>
            Write us for personalized travel advice or for information on group travel.
            All travel is insured and safe.
          </p>
        </div>

        <div className='flex  flex-col gap-4'>
          <input
            type='text'
            placeholder='Type your name'
            value={name}
            onChange={e => setName(e.target.value)}
            className='w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition'
          />
          <input
            type='email'
            placeholder='Insert your email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            className='w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition'
          />
          <textarea
            rows={4}
            placeholder='Your message...'
            value={message}
            onChange={e => setMessage(e.target.value)}
            className='w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition resize-none'
          />
          <button
            onClick={handleSubmit}
            className='w-full bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-white font-semibold py-3 rounded-lg transition-all duration-200 text-sm tracking-wide'
          >
            Submit
          </button>
        </div>

      </div>
    </div>
  )
}

export default ContactForm