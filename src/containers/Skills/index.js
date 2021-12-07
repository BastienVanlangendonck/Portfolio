import { connect } from 'react-redux';
import Skills from 'src/components/Skills';

const mapStateToProps = (state) => ({
  skills: state.skills,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Skills);
