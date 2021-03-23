import React from 'react';

const FaceRecognitions = ({imageUrl}) => {
	return (
		<div className='center ma'>
			<div className='absolute mt2'>
				<img alt='' src={imageUrl} width='500px' height='auto'/>
			</div>
		</div>
	);
}

export default FaceRecognitions;