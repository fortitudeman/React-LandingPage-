import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LazyLoad from 'react-lazyload';
import Img from '../components/Img';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Section from '../components/Section';
import Paragraph from '../components/Paragraph';
import Divider from '../components/Divider';
import AudioPlayer from "react-h5-audio-player";
import Locations from "../components/Locations";
import data from "../data/en_US.json";
import Pic from '../images/popularity.jpg';
import List from "../components/List/List";
import ListItem from "../components/List/ListItem";
import Background from '../images/strangerthings3.png';
import Divider2 from '../components/Dividertwo';
import Snippets from '../components/Snippets';
import layer from '../images/background.jpg';
import ReactPlayer from 'react-player';
import Video from '../components/Video';



const Player = () => (
	<React.Fragment>
		<Img sizeX="100%" max="400px" rounded="50%" />
		<AudioPlayer
			style={{ display: "none" }}
			autoPlay
			loop
			preload='auto'
			src='mp3/strangerthings.mp3'
			onPlay={e => console.log("onPlay")}
		// other props here
		/>
	</React.Fragment>
);

const Overview = () => (
	<div>
		<Section backgroundColor="black" style={{
			backgroundAttachment: 'fixed',
			backgroundPosition: 'center', backgroundSize: '45%', backgroundRepeat: 'no-repeat', backgroundImage: `url(${Background})`
		}} >
			<Grid>
				<Row center="xs">
					<Col xs={12}>
						<h2>Award Winning Television Show</h2>
					</Col>
				</Row>
				<Row center="xs">
					<Col xs={4} md={2}>

						<Divider2 />
					</Col>
				</Row>
			</Grid>
		</Section>
		<Grid>
			<LazyLoad height={200} offset={-250}>
				<Row center="xs">
					<Col xs={12} lg={6}>
						<Paragraph>TV Network: Netflix <br /><br />Genre: Science Fiction & Fantasy <br /><br />
							Executive Producers: Matt Duffer, Ross Duffer, Shawn Levy, Dan Cohen, Karl Gajdusek</Paragraph>
						<Paragraph>Maturity Rating: TV-14<br /><br />
							Parents strongly cautioned. May not be suitable for ages 14 and under.</Paragraph>
						<Paragraph>“Stranger Things” is set in 1983, in a Spielbergian small town called Hawkins, Indiana. It follows a group of ordinary people who discover that a gateway to another dimension has opened in the woods, and that a terrifying creature has crawled through it and abducted a little boy</Paragraph>
					</Col>
					<Col xs={12} lg={6}>

						<Img src={Pic} sizeX="100%" sizeY="350px" max="600px" />
					</Col>
				</Row>
			</LazyLoad>
			{/* <Row justifyContent='center' xs={12}>

				<br />
				<br />
				<Paragraph>TV Network: Netflix <br /><br />Genre: Science Fiction & Fantasy <br /><br />
					Executive Producers: Matt Duffer, Ross Duffer, Shawn Levy, Dan Cohen, Karl Gajdusek</Paragraph>
				<Paragraph>Maturity Rating: TV-14<br /><br />
					Parents strongly cautioned. May not be suitable for ages 14 and under.</Paragraph>
				<Paragraph>“Stranger Things” is set in 1983, in a Spielbergian small town called Hawkins, Indiana. It follows a group of ordinary people who discover that a gateway to another dimension has opened in the woods, and that a terrifying creature has crawled through it and abducted a little boy</Paragraph>

			</Row>
			<Row center="xs">

				<Img src={Pic} sizeX="100%" sizeY="350px" max="600px" />

			</Row> */}


			<Row center="xs">
				<Col xs={2} md={1}>
					<Divider />
				</Col>
			</Row>

			<Row center="xs" style={{ backgroundColor: "black" }}>


				<Col xs={6}>
					{/* <Img src={Pic} style={{ float: 'left' }} sizeX="80%" /> */}
					<Paragraph style={{ color: 'white', textAlign: 'center' }}>Snippets:</Paragraph>
					<Snippets />
				</Col>
				<Col xs={6}>
					<Img src={layer} sizeX="100%" sizeY="100%" max="600px" />
				</Col>
			</Row>

			{/* <Row style={{ backgroundSize: 'cover', backgroundImage: `url(${layer})` }} center="xs">
				<Col xs={12}>
					<Snippets />
				</Col>
				<Col xs={12} lg={6}>


				</Col>
				<Col xs={12} lg={6}>
					<Paragraph style={{ display: "none" }}> </Paragraph>
					<Player style={{ display: "none" }} />
				</Col>
			</Row> */}

			<Row center="xs">
				<Col xs={2} md={1}>
					<Divider />
				</Col>
			</Row>
			<Row center="xs">


				<Col xs={4}>

					<Paragraph >{data.quote.heading}</Paragraph>
					<Paragraph >{data.quote.description}</Paragraph>
					<Paragraph >{data.quote.text}</Paragraph>
					<Paragraph >{data.quote.author}</Paragraph>
					<Locations />

				</Col>

			</Row>
		</Grid >
	</div >
);

export default Overview;
