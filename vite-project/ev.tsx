import React from 'react';

type evProps = {
	children?: React.ReactNode;
};

const ev: React.FC<evProps> = () => {
	return (
		<div>
			{children}
		</div>
	);
};

export default ev;
