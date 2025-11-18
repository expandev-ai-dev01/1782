/**
 * @page HomePage
 * @summary Home page displaying welcome message
 * @domain core
 * @type page-component
 * @category public
 */
export const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h2 className="mb-4 text-3xl font-bold text-gray-900">Bem-vindo ao Catálogo de Carros</h2>
      <p className="text-lg text-gray-600">Explore nossa coleção de veículos disponíveis</p>
    </div>
  );
};

export default HomePage;
