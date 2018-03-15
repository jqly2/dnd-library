import React from "react";

class Table extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
        }

    }

    componentWillReceiveProps(nextProps) {
        this.setState({ data: nextProps.data });
    }

    render() {

        return (

            <div className="App-Table" id="table">
                <p></p>
            </div>
        );
    }
}

export default Table