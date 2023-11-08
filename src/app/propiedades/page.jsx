"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
async function loadPropiedades() {
  try {
    const response = await axios.get("/api/propiedades");
    return response.data;
  } catch (error) {
    console.error("Error carga propiedades:", error);
    return [];
  }
}

function PropiedadesList() {
  const [propiedades, setPropiedad] = useState([]);

  useEffect(() => {
    const fetchPropiedades = async () => {
      const data = await loadPropiedades();
      setPropiedad(data);
    };
    fetchPropiedades();
  }, []);
  const deletePropiedades = async (PropiedadesId) => {
    try {
      if (confirm("Estas seguro de liminar esta propiedad?")) {
        const res = await axios.delete(`/api/propiedades/${PropiedadesId}`);
        if (res.status === 204) {
          // Update the Propiedadess state after successful deletion
          setPropiedad((prevPropiedadess) =>
            prevPropiedadess.filter(
              (Propiedades) => Propiedades.id !== PropiedadesId
            )
          );
        }
      }
    } catch (error) {
      console.error("Error deleting Propiedades:", error);
    }
  };

  return (
    <>
      <h2 className="text-2xl font-extrabold  m-8">
        Propiedades{" "}
        <Link
          href="/propiedades/new"
          className="bg-blue-500
         hover:bg-blue-700 text-sm text-white font-bold py-2 px-4 
         rounded mt-5"
        >
          Nueva Propiedad
        </Link>
      </h2>
      <div className="shadow-md rounded-md px-8 pt-6 pb-8 mb-4">
        <table className="min-w-full text-left text-sm font-light">
          <thead>
            <tr className="border-b font-medium bg-gray-300">
              <th>ID</th>
              <th>Nombre</th>
              <th>Direccion</th>
              <th>Caracteristicas</th>
              <th>Estado</th>
              <th>Precio Alquiler</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {propiedades.map((propiedad, index) => {
              return (
                <tr key={index} className="border-b hover:bg-gray-100">
                  <td className="whitespace-nowrap px-6 py-4">
                    {propiedad.id}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {propiedad.nombre}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {propiedad.direccion}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {propiedad.caracteristicas}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {propiedad.estado}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {propiedad.precioalquiler}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <button
                      className="text-white bg-red-500 hover:bg-red-700 py-2 px-3 rounded"
                      onClick={() => deletePropiedades(propiedad.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PropiedadesList;
