import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ name }) => {
    const alertEvent = () => {
        alert('Hello')
    }

    return (
        <header className="header">
            {/* <h1 style={ headingStyle }>Task Tracker</h1> */}
            {/* <h1 style={{ color: 'red', backgroundColor: 'aqua' }}>Task Tracker</h1> */}
            <h1>{name}'s Task Tracker</h1>
            <Button color="green" text="Add" onClick={alertEvent} />
        </header>
    )
}

Header.defaultProps = {
    name: 'Jack'
}

Header.propTypes = {
    name: PropTypes.string.isRequired
}

// Another way of styling
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header
