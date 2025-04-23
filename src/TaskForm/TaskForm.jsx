import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [formData, setFormData] = useState({ id: '', name: '', email: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/users', formData);
      console.log('✅ Utilisateur ajouté :', res.data);
    } catch (err) {
      console.error('❌ Erreur lors de l’ajout :', err);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Ajouter un utilisateur</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="id"
          placeholder="ID"
          onChange={handleChange}
          value={formData.id}
          style={styles.input}
        />
        <input
          type="text"
          name="name"
          placeholder="Nom"
          onChange={handleChange}
          value={formData.name}
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Ajouter</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    fontSize: '16px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

export default UserForm;
