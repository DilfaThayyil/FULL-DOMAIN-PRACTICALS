import React , {Component} from 'react'

class ErrorBoundary extends Component{
    constructor(props){
        super(props)
        this.state = {hasError:false,errorMessage:''}
    }
    static getDerivedStateFromError(error){
        return {hasError:true,errorMessage:error.message}
    }
    componentDidCatch(error,errorInfo){
        console.error('error caught up by errorboundary',error,errorInfo)
    }
    render(){
        if(this.state.hasError){
            return (
                <div>
                    <h1>Oops! something went wrong</h1>
                    <p>{this.state.errorMessage}</p>
                </div>
            )
        }
        return this.props.children
    }
}
export default ErrorBoundary