import PropTypes from 'prop-types';


function UserGreeting(props){   
    const welcomeMess = <h2 className='welcome-message'>Welcome {props.userName}</h2>;
    const loginPromt = <h2 className='login-prompt'>Please log in first</h2>;

    if(props.isLoggedIn){
        return welcomeMess;
    }else{
        return loginPromt;
    }
}

UserGreeting.propTypes= {
    isLoggedIn: PropTypes.bool.isRequired,
    userName: PropTypes.string
}

UserGreeting.defaultProps={
    isLoggedIn: false,
    userName: "Guest"
}

export default UserGreeting;