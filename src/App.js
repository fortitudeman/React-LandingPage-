import React, { Component } from 'react';
import Header from './layout/Header';
import Img from './components/Img';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Content from './layout/Content';
import Footer from './layout/Footer';
import Navigation from './components/Navigation';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Header>
					<Grid>
						<Row middle="xs" center="xs" start="lg">
							<Col xs={12} lg={8}>
								<Img sizeX="102px" />
							</Col>
							<Col xs={12} lg={4}>
								<Navigation />
							</Col>
						</Row>
					</Grid>
				</Header>
				<Content />
				<Footer />
			</React.Fragment>
		);
	}
}

export default App;
