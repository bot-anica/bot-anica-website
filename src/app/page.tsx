import { type FC } from 'react';

const Home: FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <h1 className="text-2xl">Главная страница</h1>
      <p>Выберите курс для просмотра.</p>
    </div>
  );
};

export default Home;
