import React from 'react';

import UpdateItem from '../components/UpdateItem';

const Sell = props => (
	<div>
		<UpdateItem id={props.query.id} />
	</div>
);

// we can do this
// export default withRouter(UpdateItem);
// but, it's exposed from getInitialProps
// so no need
export default Sell;
