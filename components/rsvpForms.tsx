"use client";

import React, { useState } from 'react';

const RSVPForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    guests: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = "https://api.airtable.com/v0/appOZdmBqv6CidXn2/wedding";
    const headers = {
      "Authorization": `Bearer ${process.env.AIRTABLE_API_KEY}`,
      "Content-Type": "application/json"
    };
    const data = {
      "records": [{
        "fields": {
          "Name": formData.name,
          "Guests": formData.guests,
          "Phone": formData.phone,
          "Message": formData.message
        }
      }]
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
      });
      if (response.ok) {
        alert('Muchas gracias por confirmar tu asistencia!');
        setFormData({
          name: '',
          guests: '',
          phone: '',
          message: '',
        });
      } else {
        alert('No se pudo confirmar tu asistencia. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      alert('No se pudo confirmar tu asistencia. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <section className="relative z-10 w-full max-w-xl py-5 px-5 xl:px-0 flex flex-col items-center justify-center bg-fondo2 border border-gray-300 rounded-lg mx-4 my-8">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-5">
        <h4 className="font-parisienne text-3xl mb-3 text-title text-center">Confirma tu asistencia</h4>
        <p className="font-poiretOne text-sm mb-5 text-texto text-center">*No Niños.</p>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nombre completo"
            className="w-full p-3 border border-gray-300 rounded-lg font-poiretOne"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Teléfono"
            className="w-full p-3 border border-gray-300 rounded-lg font-poiretOne"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            placeholder="Invitados confirmados"
            className="w-full p-3 border border-gray-300 rounded-lg font-poiretOne"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Si tienes alguna duda respecto al evento, escribela aqui y nos comunicaremos contigo..."
            className="w-full p-3 border border-gray-300 rounded-lg font-poiretOne"
            rows={4}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="w-full p-3 bg-border text-white rounded-lg font-poiretOne">
            CONFIRMAR
          </button>
        </div>
      </form>
    </section>
  );
};

export default RSVPForm;