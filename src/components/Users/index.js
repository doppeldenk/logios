import React from 'react';
import PropTypes from 'prop-types';

import Loader from '../Loader';

import UsersTable from './UsersTable';

class Users extends React.Component {
  componentDidMount() {
    const { fetchUsers, users: { payload } } = this.props;
    if (!payload.length) fetchUsers();
  }

  render() {
    const {
      users: {
        fetching, error, payload,
      },
    } = this.props;
    return (
      <div>
        <h1>Users</h1>
        { fetching && <Loader /> }
        { error && 'There was an error' }
        <UsersTable users={payload} />
      </div>
    );
  }
}

Users.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
};

export default Users;
