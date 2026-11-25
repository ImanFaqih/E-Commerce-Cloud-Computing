import { MemoryRouter } from 'react-router-dom';
import AdminApp from '../admin/App.jsx';
import { StoreProvider } from '../admin/store.jsx';
import '../admin/styles.css';

export default function AdminPanel({ onBackToStore, onLogout, currentUser }) {
  return (
    <div className="w-full min-h-screen bg-[#F8FAFC]">
      <MemoryRouter>
        <StoreProvider>
          <AdminApp
            onBackToStore={onBackToStore}
            onLogout={onLogout}
            currentUser={currentUser}
          />
        </StoreProvider>
      </MemoryRouter>
    </div>
  );
}
