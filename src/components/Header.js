import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ name, onAdd, isAdding }) => {
    return (
        <header className="header">
            {/* <h1 style={ headingStyle }>Task Tracker</h1> */}
            {/* <h1 style={{ color: 'red', backgroundColor: 'aqua' }}>Task Tracker</h1> */}
            <h1>{name}'s Task Tracker</h1>
            <Button color={isAdding ? 'black' : 'green'} text={isAdding ? 'Close' : 'Add'} onClick={onAdd} />
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
