import PropTypes from 'prop-types';

function Student(props) {
    return (
      <div className='student'>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Student: {props.isStudent ? "Yes" : "No"}</p>
      </div>
    );
}


// PropTypes: a mechanism that ensures that the pass value is of the correct datatype

Student.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isStudent: PropTypes.bool,
};

// Prop default
Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false
}
export default Student