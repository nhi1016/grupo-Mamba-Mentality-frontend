import { useState } from "react"
import NavBar from '../Components/NavBar'
import '../Styles/AboutUs.css'

export default function AboutUs() {
    const partners = [
        {
          id: 1,
          name: "Gerardo Castro",
          title: "Integrante 1",
          image: "https://i.insider.com/6345b69bd2050f0011d3d246?width=700&format=jpeg&auto=webp",
          bio:
            "Estudiante de Ingeniería Civil UC, apasionado por los distintos cedimentos y rocas existentes a lo largo de todo el país.",
        },
        {
          id: 2,
          name: "Nicolás Herrera",
          title: "Integrante 2",
          image: "https://www.daily-vr.com/wp-content/uploads/2021/12/Meta-Avatar-Unity-696x392.jpg",
          bio:
            "Estudiante de Ingeniería TI UC, ha sido voluntario de distintos proyectos como 'Trabajos de Invierno', 'Tutores Ingeniería UC' y 'Proyecta UC'.",
        },
      ];
    // const [nombre, setNombre] = useState(null)

    return (
        <>
        <NavBar/>
        <div className="aboutus-container">
        <h2>Socios principales</h2>
        <div className="partners">
            {partners.map((partner) => (
            <div className="partner" key={partner.id}>
                <img src={partner.image} alt={partner.name} />
                <h3>{partner.name}</h3>
                <h4>{partner.title}</h4>
                <p>{partner.bio}</p>
            </div>
            ))}
        </div>
        </div>
        </>
    )
}