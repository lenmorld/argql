import React from 'react';
import Link from 'next/link';

const Home = props => (
    <div>
        <p>Hey!</p>
        {/* <a href="/sell">Sell</a> */}

        <Link href="/sell">
            <a>Sell!</a>
        </Link>
    </div>
)

export default Home;