import { connect } from 'react-redux';
import App from 'src/components/App';

import { setProgressionsBar, setWindowOffset } from 'src/actions';

const mapStateToProps = (state) => ({
  skillOffset: state.skillOffset,
});

const mapDispatchToProps = (dispatch) => ({
  setProgressionsBar: () => {
    dispatch(setProgressionsBar());
  },
  setWindowOffset: (offset) => {
    dispatch(setWindowOffset(offset));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
