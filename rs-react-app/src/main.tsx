import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import ErrorBoundary from './component/ErrorBoundary';
import ErrorButton from './component/ErrorButton.tsx';

// Находим корневой элемент
const container = document.getElementById('root');

// Проверяем, что корневой элемент существует
if (container) {
  // Создаем корневой элемент с помощью createRoot
  const root = createRoot(container);

  // Рендерим приложение
  root.render(
    <ErrorBoundary>
      <div className="App">
        <App />
        <ErrorButton />
      </div>
    </ErrorBoundary>
  );
} else {
  console.error('Root element not found!');
}
