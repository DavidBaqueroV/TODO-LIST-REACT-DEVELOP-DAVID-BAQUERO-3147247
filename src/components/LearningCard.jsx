export default function LearningCard({ title, description }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Ver más</button>
    </div>
  );
}
