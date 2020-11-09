import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';


export default function SideNavbar(props) {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    if (selectedIndex === 0) {
        props.index(0)
    }
    if (selectedIndex === 1) {
        props.index(1)
    } if (selectedIndex === 2) {
        props.index(2)
        // return <Redirect to="/#profile"></Redirect>
    } if (selectedIndex === 3) {
        props.index(3)
        // return <Redirect to="/#activity"></Redirect>
    } if (selectedIndex === 4) {
        props.index(4)
        // return <Redirect to="/#support"></Redirect>
    } if (selectedIndex === 5) {
        props.index(5)
        // return <Redirect to="/#addcash"></Redirect>
    } if (selectedIndex === 6) {
        props.index(6)
        // return <Redirect to="/#getcash"></Redirect>
    }
    return (
        <React.Fragment>
            <div>
                <ListItem button selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}>
                    <ListItemIcon><DashboardIcon /></ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}>
                    <ListItemIcon><AccountBalanceWalletIcon /></ListItemIcon>
                    <ListItemText primary="Accounts" />
                </ListItem>
                <ListItem button selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}>
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItem>
                <ListItem button selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}>
                    <ListItemIcon>
                        <BarChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Activity" />
                </ListItem>
                <ListItem button selected={selectedIndex === 4}
                    onClick={(event) => handleListItemClick(event, 4)}>
                    <ListItemIcon>
                        <LayersIcon />
                    </ListItemIcon>
                    <ListItemText primary="Support" />
                </ListItem>
                <ListItem button selected={selectedIndex === 5}
                    onClick={(event) => handleListItemClick(event, 5)}>
                    <ListItemIcon>
                        <AttachMoneyIcon />
                    </ListItemIcon>
                    <ListItemText primary="Add Cash" />
                </ListItem>
                <ListItem button selected={selectedIndex === 6}
                    onClick={(event) => handleListItemClick(event, 6)}>
                    <ListItemIcon>
                        <MonetizationOnIcon />
                    </ListItemIcon>
                    <ListItemText primary="Get Cash" />
                </ListItem>
            </div>
        </React.Fragment>
    )
}
