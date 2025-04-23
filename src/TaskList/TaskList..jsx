import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TaskList.css';

const TaskList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get('http://localhost:3000/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error("Erreur lors du chargement des utilisateurs :", error);
      });
  };

  const handleDelete = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?")) {
      axios.delete(`http://localhost:3000/users/${id}`)
        .then(() => {
          setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
        })
        .catch(error => {
          console.error("Erreur lors de la suppression :", error);
        });
    }
  };

  return (
    <div className="task-list-container">
      <h2 className="title">Liste des utilisateurs</h2>
      <div className="users-grid">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Nom:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <button onClick={() => handleDelete(user.id)} className="delete-btn">
              Supprimer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
