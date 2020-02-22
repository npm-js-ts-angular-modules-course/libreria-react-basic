/** class component */

import React from 'react';

class HelloCC extends React.Component {
    name: string;
    lastname: string;
    constructor(props: any) {
        super(props);
        this.name = (!props.name) ? '-->>': props.name;
        this.lastname = (!props.lastname) ? '....': props.lastname;
    }
    render() {
        return <h1>Hola {this.name} {this.lastname} desde CC</h1>
    }
}

export default HelloCC;