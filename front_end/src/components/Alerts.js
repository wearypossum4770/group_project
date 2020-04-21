import React, { Fragment } from 'react'
import { withAlert } from 'react-alert'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class AlertProvider extends React.Component {
    static PropTypes = {
        error: PropTypes.object.isRequired
    }

    componentDidMount(prevProps) {
        const { error, alert } = this.props
        if (error !== prevProps.error) {
            if(error.msg.name ) alert.error (`Name: ${error.msg.name.join()}`)
            if (error.msg.email) alert.error(`Email: ${error.msg.email.join()}`)
            if (error.msg.message) alert.error(`Message: ${error.msg.message.join()}`)
        }
    }

    render() {
        return (
            <Fragment


            />
        )
    }
}
const mapStateToProps = {
    error: state.errors,
    status: state.status
}


export default connect(mapStateToProps)(withAlert(AlertProvider))

/**
 * const AlertProvider = ({alert}) => {
 * const alert = useAlert()
 * return (
 * <div>
 * alert types ['info','success','error']
 * alert transitions ['fade','scale']
 * alert timeout: NUMBER
 * <button onClick={()=> {alert.show("OH LOOK, an alert!")}}
 * </div>
 *
 * )
 * }
 *
 * export default AlertProvider
 *
 */