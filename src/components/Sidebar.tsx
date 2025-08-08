import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import { useState } from 'react';
import '../styles/Sidebar.scss';


interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const Sidebar = ({ collapsed, onToggle }: SidebarProps) => {
  const [isLightMode, setIsLightMode] = useState(false);
  const toggleTheme = () => {
    setIsLightMode(prev => {
      const next = !prev;
      document.body.classList.toggle('light-mode', next);
      return next;
    });
  };

  return (
    <aside className={collapsed ? 'sidebar collapsed' : 'sidebar'}>
      <button className="toggle-btn" onClick={onToggle}>
        {collapsed ? '»' : '«'}
      </button>

      <div className="sidebar-header">
        <img src={logo} alt="Logo" className="sidebar-logo" />
        {!collapsed && <h1 className="sidebar-title">Cell Tower Dashboard</h1>}
      </div>

      {!collapsed && (
        <nav className="sidebar-nav">
          <ul>
            <li>
              <NavLink
                to="/dashboard"
                end
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </nav>
      )}

      {!collapsed && (
        <div className="theme-switcher">
          <button className="theme-toggle-btn" onClick={toggleTheme}>
            {isLightMode ? '🌞' : '🌙'}
          </button>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
