import React from 'react';
import { Menu} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <Menu>
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
  </Menu>
);

export default NavBar;