import React from 'react';
import ThreeHome from './layouts/pages'
import {BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate} from 'react-router-dom'
import {getMenuRoutes} from './routes'

function App() {

  const routes = React.useMemo(() => {
    const menus = getMenuRoutes().map((r) => (<Route key={r.key || r.route} path={r.route} element={r.component} />))

    return menus;
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        {routes}
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>

);
}

export default App;
