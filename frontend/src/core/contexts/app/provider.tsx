import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/core/lib/queryClient';
import type { ReactNode } from 'react';

/**
 * @component AppProviders
 * @summary Wraps the application with all necessary context providers
 * @domain core
 * @type context-provider
 * @category application
 */
export const AppProviders = ({ children }: { children: ReactNode }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
