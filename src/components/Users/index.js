import React from 'react';
import PropTypes from 'prop-types';

import Loader from '../Loader';

class Users extends React.Component {
  componentWillMount() {
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
        <table border={1} cellPadding={10}>
          <thead>
            <tr>
              <th>ID</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {
              !!payload.length &&
              payload.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.gender}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

Users.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
};

export default Users;
