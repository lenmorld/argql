import React, { Component } from 'react';
import Header from './Header';

class Page extends Component {
    render() {
        return (
            <div>
                <Header/>
                {/* <p>Hey I'm the page component</p> */}
                {this.props.children}
            </div>
        );
    }
}

export default Page;