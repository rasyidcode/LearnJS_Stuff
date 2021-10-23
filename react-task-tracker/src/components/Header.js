import PropTypes from "prop-types"
import { useLocation } from "react-router"
import Button from "./Button"

const Header = ({ title, onAdd, showAdd }) => {  
    const location = useLocation()

    return (
        <header className="header">
            {/* <h1 style={{ color: 'red', backgroundColor: 'black' }}>{title}</h1> */}
            {/* <h1 style={headingStyle}>{title}</h1> */}
            <h1>{title}</h1>
            {location.pathname === '/' && <Button 
                color={showAdd ? 'red' : 'green'} 
                text={showAdd ? 'Close' : 'Add'} 
                onClick={onAdd} />}
            {/* <Button color="red" text="Hello 2"/>
            <Button color="blue" text="Hello 3"/> */}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header
