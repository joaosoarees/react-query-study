import { useQuery } from '@tanstack/react-query';

import { sleep } from './sleep';

interface IUser {
  id: string;
  name: string;
  email: string;
}

export function Users() {
  const { data, isLoading, isFetching, isPending, refetch } = useQuery({
    enabled: false,
    queryKey: ['users'],
    queryFn: async (): Promise<IUser[]> => {
      await sleep();
      const response = await fetch('http://localhost:3000/users');
      return response.json();
    },
  });

  return (
    <div className="p-4">
      <button
        type="button"
        className="bg-white text-black px-4 py-2 rounded-lg"
        onClick={() => refetch()}
      >
        logar
      </button>

      {isLoading && <h1>Carregando...</h1>}
      {!isLoading && isFetching && <small>Fetching...</small>}
      {!isLoading && isPending && <h1>Pending...</h1>}

      {data?.map((user) => (
        <div key={user.id}>
          <strong className="block">{user.name}</strong>
          <small>{user.email}</small>
        </div>
      ))}
    </div>
  );
}
