import TableData from '@/components/TableData';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CSVLink } from 'react-csv';

const HEADERS = [
  { label: 'ID', key: 'id' },
  { label: 'Name', key: 'name' },
  { label: 'Email', key: 'email' },
  { label: 'Username', key: 'username' },
];

const CSV_FILE_NAME = 'data-user.csv';

const ExportExcel = () => {
  const [user, setUser] = useState([]);

  const fetchUser = async () => {
    try {
      const response = await axios(
        'https://jsonplaceholder.typicode.com/users'
      );
      const data = response.data;

      setUser(data);
      console.log(data);
      setUser;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex container mx-auto flex-col min-h-screen overflow-y-auto">
      <div>ExportExcel</div>
      <div className="mb-4 flex flex-row gap-4">
        <button
          className="bg-blue-400 rounded-sm px-4 py-2 text-sm font-mono font-medium text-white"
          onClick={fetchUser}
        >
          get user data
        </button>
        <CSVLink
          className="bg-green-400 rounded-sm px-4 py-2 text-sm font-mono font-medium text-white"
          data={user}
          headers={HEADERS}
          filename={CSV_FILE_NAME}
        >
          Export to Excell
        </CSVLink>
      </div>
      <table>
        <thead>
          <tr>
            <TableData>No</TableData>
            <TableData>Name</TableData>
            <TableData>Username</TableData>
            <TableData>Email</TableData>
          </tr>
        </thead>
        <tbody>
          {user?.map((user) => {
            const { id, name, username, email } = user;

            return (
              <tr key={id}>
                <TableData>{id}</TableData>
                <TableData>{name}</TableData>
                <TableData>{username}</TableData>
                <TableData>{email}</TableData>
              </tr>
            );
          })}
          <tr>
            <TableData>1</TableData>
            <TableData>Regyta Harpan</TableData>
            <TableData>Cyzerop</TableData>
            <TableData>regytaharpan20102001@gmail.com</TableData>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExportExcel;
