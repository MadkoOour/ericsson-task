import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import '../styles/Sidebar.scss';


interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  mobileOpen: boolean;
  onMobileClose: () => void;
}

const Sidebar = ({ collapsed, onToggle, mobileOpen, onMobileClose }: SidebarProps) => {


  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''} ${mobileOpen ? 'mobile-open' : ''}`}>
      <button className="mobile-close-btn" onClick={onMobileClose}>×</button>
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
                to="/"
                end
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </nav>
      )}

    </aside>
  );
};

export default Sidebar;
