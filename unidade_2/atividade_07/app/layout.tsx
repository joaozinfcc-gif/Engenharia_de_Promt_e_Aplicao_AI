import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Estude Rotina - Planejamento Inteligente',
  description: 'Aplicação para otimizar sua rotina de estudos com IA',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className="bg-gray-50">
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
