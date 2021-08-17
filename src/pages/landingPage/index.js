import React from 'react';

import styles from './style.module.css';

// Components //
import { About, Review, Footer, GDPRNotice } from '../../components';
import { SocketTesting } from '../../pages';

import { SignUpLogin } from '../../layout';

const LandingPage = () => {
	return (
		<>
			<SocketTesting />
			<SignUpLogin />
			<About />
			<section className={styles.reviewContainer}>
				<Review />
				<Review />
				<Review />
			</section>
			<Footer />
			<GDPRNotice />
		</>
	);
};

export default LandingPage;
