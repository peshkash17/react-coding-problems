'use client'
import { useEffect, useState } from 'react'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    })

    useEffect(()=>{
        const savedData = localStorage.getItem('contactFormData')
        if(savedData){
            setFormData(JSON.parse(savedData))
        }
    }, [])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        localStorage.setItem('contactFormData', JSON.stringify(formData))
        console.log('Form submitted', formData)
    }
    return (
        <div className='h-full w-full flex  flex-col justify-center items-center border'>
            <h1 className='text-2xl'>Simple Contact Form</h1>
            <p>With persistence when the page is refreshed</p>
            <form onSubmit={handleSubmit} className='flex flex-col gap-2 border p-5 rounded-2xl'>
                <label htmlFor="name" aria-required={true}>Name</label>
                <input type='text' id='name' value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className='border' />
                <label htmlFor="email" aria-required={true} >Email</label>
                <input type='text' id='email' value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className='border' />
                <label htmlFor="phone" aria-required={true} >Phone</label>
                <input type='tel' id='phone' value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required className='border' />

                <button className='border bg-red-800 text-white' type='submit'>Submit</button>

            </form>

        </div>
    )
}