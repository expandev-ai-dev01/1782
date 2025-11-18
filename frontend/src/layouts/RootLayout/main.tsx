import { Outlet } from 'react-router-dom';

/**
 * @component RootLayout
 * @summary Root layout component that wraps all pages
 * @domain core
 * @type layout-component
 * @category layout
 */
export const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Catálogo de Carros</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <footer className="border-t bg-white py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2024 Catálogo de Carros. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};
