import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import '../styles/Sidebar.scss';


interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const Sidebar = ({ collapsed, onToggle }: SidebarProps) => {


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

    </aside>
  );
};

export default Sidebar;
