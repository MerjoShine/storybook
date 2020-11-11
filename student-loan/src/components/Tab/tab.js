import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './tab.css';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

import Student from '../StudentLoan/studentLoan';


function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`scrollable-force-tabpanel-${index}`}
			aria-labelledby={`scrollable-force-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography component='div'>{children}</Typography>
				</Box>
			)}
		</div>
	);
}
function a11yProps(index) {
	return {
		id: `scrollable-force-tab-${index}`,
		'aria-controls': `scrollable-force-tabpanel-${index}`
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		width: '100%',
		backgroundColor: theme.palette.background.paper
	}
}));

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired
};

export default function ScrollableTabsButtonForce() {
	const classes = useStyles();
	const [ value, setValue ] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<AppBar position="static" color="default">
				<Tabs
					value={value}
					onChange={handleChange}
					variant="scrollable"
					scrollButtons="on"
					indicatorColor="primary"
					aria-label="scrollable force tabs example"
				>
					<Tab label="Dashboard" className="a" icon={<DashboardIcon />} {...a11yProps(0)} />
					<Tab label="Your Goals" className="a" icon={<TrackChangesIcon />} {...a11yProps(1)} />
					<Tab label="Student Loan" className="a" icon={<PersonPinIcon />} {...a11yProps(2)} />
					<Tab label="One Time Loan" className="a" icon={<MonetizationOnIcon />} {...a11yProps(3)} />
					<Tab label="OnBoarding" className="a" icon={<InsertDriveFileIcon />} {...a11yProps(4)} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				{/* <Dashboard /> */}
			</TabPanel>
			<TabPanel value={value} index={1}>
				{/* <Goals /> */}
			</TabPanel>
			<TabPanel value={value} index={2}>
				<Student />
				
			</TabPanel>
			<TabPanel value={value} index={3}>
				{/* <OneTimeLoan /> */}
			</TabPanel>
			<TabPanel value={value} index={4}>
				{/* <Onboarding /> */}
			</TabPanel>
		</div>
	);
}
