import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <Menu stackable>
    <Link to="/debug">
      <Menu.Item>
        Debug 
      </Menu.Item>
    </Link>
    <Link to="/git-flows">
      <Menu.Item>
        Git Flows
      </Menu.Item>
    </Link>
    <Link to="/git-refs">
      <Menu.Item>
        Git References
      </Menu.Item>
    </Link>
    <Link to="/rails-refs">
      <Menu.Item>
        Rails References
      </Menu.Item>
    </Link>
    <Link to="/prod-steps">
      <Menu.Item>
        Production
      </Menu.Item>
    </Link>
  </Menu>
);

export default NavBar;