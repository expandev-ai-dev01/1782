import { useNavigate } from 'react-router-dom';

/**
 * @page NotFoundPage
 * @summary 404 error page for non-existent routes
 * @domain core
 * @type page-component
 * @category error
 */
export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h1 className="mb-4 text-6xl font-bold text-gray-900">404</h1>
      <h2 className="mb-2 text-2xl font-semibold text-gray-700">Página não encontrada</h2>
      <p className="mb-6 text-gray-600">A página que você está procurando não existe.</p>
      <button
        onClick={() => navigate('/')}
        className="rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
      >
        Voltar para a página inicial
      </button>
    </div>
  );
};

export default NotFoundPage;
