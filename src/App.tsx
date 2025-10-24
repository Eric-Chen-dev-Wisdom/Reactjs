import { Navbar } from './components/NavBar';
import { Footer } from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <h1>Hello</h1>
        <UserList/>
      </main>
      <Footer />
    </div>
  );
}
export function UserList() {
  const users = [
    { id: "user-001-employee", name: "Alice", email: "alice@example.com" },
    { id: "user-002-employee", name: "Bob", email: "bob@example.com" },
    { id: "user-003-employee", name: "John", email: "john@example.com" },
  ];
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}