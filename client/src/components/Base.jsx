import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Auth from '../modules/Auth';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const styles = {
  content: {
    display: 'flex',
    justifyContent : 'center',
}
};


const Base = ({ children }) => (
  <div>

      <AppBar
        title="Code is fun"
        iconElementLeft={<IconButton disabled/>}
        iconElementRight={Auth.isUserAuthenticated() ?
            <IconMenu
                iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}>

                    <MenuItem primaryText={<Link to="/blog">Page d'Accueil</Link>} />
                    <MenuItem primaryText={<Link to="/contact">Contact</Link>} />
                    <MenuItem primaryText={<Link to="/about">About</Link>} />
                    <MenuItem primaryText={<Link to="/">Dashboard</Link>} />
                    <MenuItem primaryText={<Link to="/logout">Log out</Link>} />
            </IconMenu>
            :
            <IconMenu
                iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}>

                    <MenuItem primaryText={<Link to="/blog">Page d'Accueil</Link>} />
                    <MenuItem primaryText={<Link to="/login">Log in</Link>} />
                    <MenuItem primaryText={<Link to="/signup">Sign up</Link>} />
                    <MenuItem primaryText={<Link to="/contact">Contact</Link>} />
                    <MenuItem primaryText={<Link to="/about">About</Link>} />
            </IconMenu>

        }
      />
      <div style={styles.content}>{children}</div>

    </div>

);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;
