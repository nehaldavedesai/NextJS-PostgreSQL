import { useState } from 'react';

export default function AddNewUserForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    try {
      const response = await fetch('/api/users/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ setEmail, setPassword }),
      });
      if (response.ok) {
        console.log('User account created')
      } else {
        console.error('Failed to add task');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex flex-row justify-center px-10 py-10">
      <div className="w-full max-w-3xl">
        <h1 className="font-bold text-2xl mb-4 text-center">Add New User</h1>
        <div className="flex flex-col justify-center">
        <AddNewUser onTaskAdded={handleUserAdded} />
          <form onSubmit={handleSubmit} className="flex flex-wrap justify-center gap-4">
            <div>
              <input
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input input-bordered input-accent flex-grow"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="input input-bordered input-accent flex-grow"
              />
            </div>
            <div>
              <button type="submit" className="btn btn-primary">
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}