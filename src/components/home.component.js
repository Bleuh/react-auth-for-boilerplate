import React, { Component } from 'react';
import moment from 'moment';

import UserService from '../services/user.service';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
      logged: false,
    };
  }

  componentDidMount() {
    UserService.getUserInformation().then(
      (response) => {
        this.setState({
          content: response.data.data,
          logged: true,
        });
      },
      (error) => {
        this.setState({
          content:
            (error.response && error.response.data && error.response.data.message)
            || (error.response && error.response.message)
            || error.toString(),
          logged: false,
        });
      },
    );
  }

  render() {
    const { content, logged } = this.state;
    return (
      <div className="container">
        <header className="jumbotron">
          {logged ? (
            <div>
              <h3>
                { `${content.login} (id: ${content._id})` }
              </h3>
              <p>
                { `Acount create : ${moment(content.dateOfEntry).calendar()}` }
              </p>
            </div>
          ) : (
            <h3>{content}</h3>
          )}
        </header>
      </div>
    );
  }
}
