import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Update = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [form, setForm] = useState({ name: '', email: '' });

  // Charger les utilisateurs
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get('http://localhost:3000/users')
      .then(response => setUsers(response.data))
      .catch(err => console.error(err));
  };

  const startEdit = (user) => {
    setEditingUser(user.id);
    setForm({ name: user.name, email: user.email });
  };

  const handleUpdate = () => {
    if (!editingUser) return;

    axios.put(`http://localhost:3000/users/${editingUser}`, {
      name: form.name,
      email: form.email
    })
    .then(() => {
      console.log("✅ Utilisateur mis à jour !");
      setEditingUser(null);
      setForm({ name: '', email: '' });
      fetchUsers();
    })
    .catch(error => {
      console.error("❌ Erreur lors de la mise à jour :", error);
    });
  };

  return (
    <div>
      <h2>Liste des utilisateurs</h2>
      {users.map(user => (
        <div key={user.id}>
          <p>ID: {user.id}</p>
          <p>Nom: {user.name}</p>
          <p>Email: {user.email}</p>
          <button onClick={() => startEdit(user)}>Modifier</button>
        </div>
      ))}

      {editingUser && (
        <div style={{ marginTop: '20px' }}>
          <h3>Modifier l'utilisateur ID {editingUser}</h3>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Nom"
          />
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Email"
          />
          <button onClick={handleUpdate}>Mettre à jour</button>
        </div>
      )}
    </div>
  );
};

export default Update;
