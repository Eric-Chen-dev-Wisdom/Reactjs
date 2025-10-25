export default function Card({ name, title, bio }: { name: string; title: string; bio: string }) {
    return (
      <div className="card">
        <h2>{name}</h2>
        <p className="card-title">{title}</p>
        <p className="card-bio">{bio}</p>
      </div>
    );
  }