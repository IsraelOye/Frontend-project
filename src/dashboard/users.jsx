const Handler = () => {
  const users = [
    { id: 1, name: "Israel Oyedele", email: "IsraelOyedele@gmail.com", role: "Admin" },
    { id: 2, name: "David beckam", email: "Davidbeckam@gmail.com", role: "Editor" },
    { id: 3, name: "Olabode John", email: "OlabodeJohn@gmail.com", role: "User" },
  ];
  return (
    <div className="py-6 px-10">
      <h2 className="text-2xl font-bold mb-4">Users</h2>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded">
          <thead>
            <tr className="bg-gray-100 text-left text-sm">
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Role</th>
              {/* <th className="py-3 px-4">Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t text-sm">
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.role}</td>
                {/* <td className="py-2 px-4 space-x-2">
                  <button className="text-blue-600 hover:underline">
                    Edit
                  </button>
                  <button className="text-red-600 hover:underline">
                    Delete
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Handler;
