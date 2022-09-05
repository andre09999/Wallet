import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import newAction from '../redux/actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      senha: '',
      button: true,
      email: '',
      validation: false,
    };
    this.ontext = this.ontext.bind(this);
    this.redirecionar = this.redirecionar.bind(this);
    this.validatioEmail = this.validatioEmail.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { senha, email } = this.state;
    if (prevState.senha !== senha) {
      this.validatioEmail();
    }
    if (prevState.email !== email) {
      this.validatioEmail();
    }
  }

  ontext(value) {
    this.setState({
      [value.target.name]: value.target.value,
    });
    this.validatioEmail();
  }

  validatioEmail() {
    const numer = 6;
    const { email } = this.state;
    const valid = /\S+@\S+\.\S+/;
    this.setState({
      validation: valid.test(email),
    });
    const { senha, validation } = this.state;
    if (senha.length >= numer && validation === true) {
      this.setState({
        button: false,
      });
    }
    if (senha.length < numer || validation === false) {
      this.setState({
        button: true,
      });
    }
  }

  redirecionar() {
    const { history, user } = this.props;
    user(this.state);
    history.push('/carteira');
  }

  render() {
    const { button, senha, email } = this.state;

    return (
      <div className="container-login">
        <div className="login">
          <h1>Wallet</h1>
          <input
            type="text"
            placeholder="Email"
            data-testid="email-input"
            name="email"
            value={ email }
            onChange={ this.ontext }
          />
          <input
            type="text"
            placeholder="Senha"
            data-testid="password-input"
            onChange={ this.ontext }
            value={ senha }
            name="senha"
          />
          <button
            type="button"
            disabled={ button }
            onClick={ this.redirecionar }
            name="entrar"
          >
            Entrar
          </button>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  user: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  user: (state) => dispatch(newAction(state)),
});

export default connect(null, mapDispatchToProps)(Login);
