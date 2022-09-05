import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { remov } from '../redux/actions/index';

class Table extends Component {
  constructor() {
    super();
    this.remove = this.remove.bind(this);
  }

  remove(event) {
    event.preventDefault();
    const { removerItem } = this.props;
    const { name } = event.target;
    removerItem(Number(name));
  }

  render() {
    const { expenses } = this.props;
    return (
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expenses.length === 0 ? <p> </p>
              : expenses.map((element) => (
                <tr key={ element.id }>
                  <td>{ element.description }</td>
                  <td>{element.tag }</td>
                  <td>{ element.method }</td>
                  <td>{ Number(element.value).toFixed(2)}</td>
                  <td>{ element.exchangeRates[element.currency].name }</td>
                  <td>
                    {Number(element
                      .exchangeRates[element.currency]
                      .ask).toFixed(2)}

                  </td>
                  <td>
                    {Number(element.exchangeRates[element.currency].ask
                  * element.value).toFixed(2)}

                  </td>
                  <td>Real</td>
                  <div>
                    <td>
                      <button
                        data-testid="delete-btn"
                        type="button"
                        name={ element.id }
                        onClick={ this.remove }
                      >
                        Excluir
                      </button>
                    </td>
                  </div>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removerItem: (id) => dispatch(remov(id)),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  removerItem: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
