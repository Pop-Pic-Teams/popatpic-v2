import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';

// Route guards
import { RoleGuard } from './routes/RoleGuard';

// Guest views
import { LandingPage } from './guest/LandingPage';
import { SelectFrame } from './guest/SelectFrame';
import { BrowseFramesPage } from './guest/BrowseFramesPage';
import { BoothPage } from './guest/Booth';
import { AddFiltersPage } from './guest/AddFiltersPage';
import { ResultPage } from './guest/Result';

// Creator views
import { CreatorLogin } from './creator/CreatorLogin';
import { CreatorDashboard } from './creator/CreatorDashboard';

// Admin views
import { AdminDashboard } from './admin/AdminDashboard';

function AppLayout() {
  const location = useLocation();

  // Show public navbar on Guest landing, frame gallery, and session setup
  const showMainNavbar =
    location.pathname === '/' ||
    location.pathname === '/frames' ||
    location.pathname === '/browse-frames' ||
    location.pathname === '/session' ||
    location.pathname === '/select-frame';

  return (
    <div className="min-h-screen bg-[#FDFFEB] text-[#4B2E1F] font-sans antialiased">
      {showMainNavbar && <Navbar />}

      <Routes>
        {/* Guest Routes */}
        <Route path="/" element={<LandingPage />} />
        {/* Pinterest-Style Frame Gallery */}
        <Route path="/frames" element={<BrowseFramesPage />} />
        <Route path="/browse-frames" element={<BrowseFramesPage />} />
        {/* Photo Session Step 1: Choose Frame (with reference mockup UI) */}
        <Route path="/session" element={<SelectFrame />} />
        <Route path="/select-frame" element={<SelectFrame />} />
        {/* Photo Session Step 2: Take Photos */}
        <Route path="/booth" element={<BoothPage />} />
        {/* Photo Session Step 3: Add Filters */}
        <Route path="/filters" element={<AddFiltersPage />} />
        <Route path="/add-filters" element={<AddFiltersPage />} />
        {/* Photo Session Step 4: Download & Share */}
        <Route path="/result" element={<ResultPage />} />

        {/* Creator Authentication */}
        <Route path="/login" element={<CreatorLogin />} />

        {/* Creator Studio Route (Role protected with dedicated sidebar) */}
        <Route
          path="/creator-dashboard"
          element={
            <RoleGuard allowedRoles={['Creator']}>
              <CreatorDashboard />
            </RoleGuard>
          }
        />

        {/* Admin Console Route (Role protected with dedicated sidebar) */}
        <Route
          path="/admin-dashboard"
          element={
            <RoleGuard allowedRoles={['Admin']}>
              <AdminDashboard />
            </RoleGuard>
          }
        />

        {/* Fallback to Guest Landing Page */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AppLayout />
      </Router>
    </AuthProvider>
  );
}
