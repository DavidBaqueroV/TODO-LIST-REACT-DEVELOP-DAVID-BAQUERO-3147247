import LearningCard from "../components/LearningCard";

export default function Home() {
  const temas = [
    { title: "React Básico", description: "Aprende a crear componentes y manejar estados." },
    { title: "Diseño Responsivo", description: "Usa CSS moderno para crear sitios adaptables." },
    { title: "Despliegue Web", description: "Publica tus proyectos con GitHub Pages y Netlify." },
  ];

  return (
    <main className="home">
      <h2>Explora tus aprendizajes</h2>
      <div className="card-container">
        {temas.map((tema, index) => (
          <LearningCard key={index} title={tema.title} description={tema.description} />
        ))}
      </div>
    </main>
  );
}
