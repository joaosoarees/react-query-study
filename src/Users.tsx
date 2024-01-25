import { useQuery } from '@tanstack/react-query';

import { sleep } from './sleep';

interface IUser {
  id: string;
  name: string;
  email: string;
}

export function Users() {
  const { data, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: async (): Promise<IUser[]> => {
      await sleep();
      const response = await fetch('http://localhost:3000/users');
      return response.json();
    },
  });

  return (
    <div>
      {isLoading && 'Carregando...'}

      {data?.map((user) => (
        <div key={user.id}>
          <strong className="block">{user.name}</strong>
          <small>{user.email}</small>
        </div>
      ))}
    </div>
  );
}
