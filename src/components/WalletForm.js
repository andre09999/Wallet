import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrance, fetchCURrance3 } from '../redux/actions/index';
import Table from './Table';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'alimentação',
    };
    this.onForma = this.onForma.bind(this);
    this.Onsubmit = this.Onsubmit.bind(this);
  }

  componentDidMount() {
    const { fetchCurrance1 } = this.props;
    fetchCurrance1();
  }

  onForma(event) {
    const { name, value: valor } = event.target;
    this.setState({
      [name]: valor,
    });
  }

  Onsubmit(e) {
    e.preventDefault();
    const { fetchCURrancE2 } = this.props;
    fetchCURrancE2(this.state);
    this.setState((prev) => ({
      id: prev.id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'alimentação',
    }));
  }

  render() {
    const { currenty } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <div>
        <div className="walletContainer">
          <h3> WalletForm</h3>
          <form className="walletIn">
            Valor:
            <input
              type="number"
              data-testid="value-input"
              onChange={ this.onForma }
              name="value"
              value={ value }
            />
            <select
              data-testid="currency-input"
              onChange={ this.onForma }
              name="currency"
              value={ currency }
            >
              {!currenty ? <option>erro</option>
                : currenty.map((element, key) => (
                  <option key={ key }>{ element }</option>
                ))}
            </select>
            Descrição:
            <input
              type="text"
              data-testid="description-input"
              onChange={ this.onForma }
              name="description"
              value={ description }
            />
            <select
              data-testid="method-input"
              onChange={ this.onForma }
              name="method"
              value={ method }
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
            <select
              data-testid="tag-input"
              onChange={ this.onForma }
              name="tag"
              value={ tag }
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
            <button type="button" onClick={ this.Onsubmit }>Adicionar despesa</button>
          </form>
        </div>
        <Table />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tudo: state.wallet.loading,
  expenses: state.wallet.expenses,
  currenty: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrance1: () => dispatch(fetchCurrance()),
  fetchCURrancE2: (state) => dispatch(fetchCURrance3(state)),
});

WalletForm.propTypes = {
  fetchCurrance1: PropTypes.func.isRequired,
  fetchCURrancE2: PropTypes.func.isRequired,
  currenty: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
