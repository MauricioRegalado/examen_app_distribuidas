"use client";
import React from "react";
import { useState } from "react";
import axios from "axios";

function PropiedadesForm() {
  const [propiedades, setPropiedad] = useState({
    nombre: "",
    direccion: "",
    caracteristicas: "",
    estado: "Libre",
    precioalquiler: "",
  });

  const handleChange = (e) => {
    //console.log(e.target.value, e.target.name);
    setPropiedad({
      ...propiedades,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/propiedades", propiedades);
    if (res.status == 200) {
      location.href = "/propiedades";
    } else {
      alert("Error en el registro");
    }
  };

  return (
    <div className="m-8">
      <h2 className="text-2xl font-extrabold text-gray-400 hover:text-gray-800">
        Registro de Propiedad
      </h2>
      <form
        onSubmit={handleSubmit}
        className="px-8 pt-6 pb-8 mb-4 rounded-md shadow-md bg-gray-50"
      >
        <label
          className="block mb-2 text-sm font-medium text-gray-900"
          htmlFor="name"
        >
          Nombre
        </label>
        <input
          type="text"
          name="nombre"
          onChange={handleChange}
          className="bg-green-100 border border-green-300
             text-gray-900 text-xs rounded-lg block w-full p-2.5"
          placeholder="Ingrese su nombre"
        />

        <label
          className="block mb-2 text-sm font-medium text-gray-900"
          htmlFor="name"
        >
          Direccion
        </label>
        <input
          type="text"
          name="direccion"
          onChange={handleChange}
          className="bg-green-100 border border-green-300
             text-gray-900 text-xs rounded-lg block w-full p-2.5"
          placeholder="Ingrese su direccion"
        />

        <label
          className="block mb-2 text-sm font-medium text-gray-900"
          htmlFor="name"
        >
          Caracteristicas
        </label>
        <input
          type="text"
          name="caracteristicas"
          onChange={handleChange}
          className="bg-green-100 border border-green-300
             text-gray-900 text-xs rounded-lg block w-full p-2.5"
          placeholder="Ingrese sus caracteristicas"
        />
        <label
          className="block mb-2 text-sm font-medium text-gray-900"
          htmlFor="name"
        >
          Precio de alquiler
        </label>
        <input
          type="number"
          name="precioalquiler"
          onChange={handleChange}
          className="bg-green-100 border border-green-300
             text-gray-900 text-xs rounded-lg block w-full p-2.5"
          placeholder="Ingrese su precio"
        />
        <label
          className="block mb-2 text-sm font-medium text-gray-900"
          htmlFor="name"
        >
          Estado
        </label>
        <select
          name="estado"
          onChange={handleChange}
          className="bg-green-100 border border-green-300
            text-gray-900 text-xs rounded-lg block w-full p-2.5"
        >
          <option value="Libre">Libre</option>
          <option value="Ocupada">Ocupada</option>
          <option value="Mantenimiento">Mantenimiento</option>
        </select>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-sm text-white 
          font-bold py-2 px-4 rounded mt-5"
        >
          Guardar
        </button>
      </form>
    </div>
  );
}

export default PropiedadesForm;
