import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const DashboardCheck = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });
  console.log(users)
  return (
    <div>
      {users.map(user => <div>
        {user.role ==="admin" && <Link to = "/classes">Admin</Link>}
        {user.role ==="instructor" && <Link to = "/approvedclasses">Instructor</Link>}
      </div> )}
    </div>
  );
};

export default DashboardCheck;