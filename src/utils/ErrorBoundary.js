import React from "react";

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = { hasError : false };
    }

    componentDidCatch(error, errorInfo){
        this.setState({ hasError : true })
        alert(errorInfo);
        console.log(errorInfo)
    }

    render(){
        if(this.state.hasError){
            return <div className="font-weight-bold mt-5 text-center"><h1 className="pt-5">Something went wrong!</h1></div>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;