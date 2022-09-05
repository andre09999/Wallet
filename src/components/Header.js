import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { user, total } = this.props;
    let soma = 0;
    total.forEach((element) => {
      const { currency } = element;
      soma += Number(element.value) * element.exchangeRates[currency].ask;
    });
    return (
      <header className="cabecalho">
        <h3 data-testid="email-field">
          {' '}
          Email:
          {' '}
          { user}
        </h3>
        <div className="despeas">
          <h3 data-testid="total-field">
            {soma.toFixed(2)}
          </h3>
          <h3 data-testid="header-currency-field">BRL </h3>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.email,
  total: state.wallet.expenses,
});

Header.propTypes = {
  user: PropTypes.string.isRequired,
  total: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Header);
