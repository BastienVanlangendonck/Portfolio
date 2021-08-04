import { connect } from 'react-redux';
import Header from 'src/components/Header';
import { toggleBurger } from '../../actions';

const mapStateToProps = (state) => ({
  isOpen: state.isOpen,
});

const mapDispatchToProps = (dispatch) => ({
  setIsOpen: () => {
    const action = toggleBurger();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
