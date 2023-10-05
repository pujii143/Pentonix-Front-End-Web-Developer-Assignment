import React from 'react';
import Navbar from './Navbar';
import DataTable from './DataTable';

function Dashboard() {
  return (
    <div>
      <Navbar />
      <h2>Welcome, [username]</h2>
      <DataTable />
    </div>
  );
}

export default Dashboard;
