import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';

import styled from 'styled-components';

const MyButton = styled.button`
    background: red;
    font-size: 100px;

    font-weight: ${props => (props.bold ? '700' : '400')};

    color: ${props => (props.color === 'white' ? 'white' : 'black')};

    span {
        font-size:  100px;
    }

    .smiley {
        font-size:  100px;
    }
`;

const BigSmile = styled.span`
    font-size: 100px;
`;

class Page extends Component {
    render() {
        return (
            <div>
                <Meta />
                <Header/>
                {/* <p>Hey I'm the page component</p> */}

                {/* BEM */}
                {/* <button className="button button__large button___large--red"></button> */}


                {/* 1. have a seprate component */}
                <MyButton>
                    Click Me!
                    <BigSmile>😊</BigSmile>
                </MyButton>

                {/* 2. nest the span selector inside MyButton */}
                <MyButton>
                    Click Me!
                    <span>😊</span>
                </MyButton>

                {/* 3. classname */}
                <MyButton>
                    Click Me!
                    <span className="smiley">😊</span>
                </MyButton>

                {/* 4. props to function */}
                <MyButton bold>
                    Click Me!
                    <span className="smiley">😊</span>
                </MyButton>

                {/* 5.pass arg to prop function */}
                <MyButton color="white">
                    Click Me!
                    <span className="smiley">😊</span>
                </MyButton>

                {this.props.children}
            </div>
        );
    }
}

export default Page;