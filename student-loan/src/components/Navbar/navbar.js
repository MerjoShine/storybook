import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import './navbar.css'
import SideNavbar from '../Sidebar/sidebar'
import Tab from '../Tab/tab'


const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24,
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        backgroundColor: '#0A3D62',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
        
    },
    title: {
        flexGrow: 1,
        display:'flex',

    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
    },
    link: {
        display:'flex',
        position: "relative"
    }
}));

export default function Dashboard() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [selectedIndex, setselectedIndex] = React.useState(0);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const index=(value)=>{
        setselectedIndex(value)
    }
    
    return (
        
        
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <nav style={{backgroundColor:'#0A3D62'}} className="navbar navbar-left navbar-expand-sm sticky-top">
          <h2 className="head" >Prudential</h2>
          <a className="nav-link " style={{textDecoration:'none',color:"white"}}  href="#participant">Participant</a>
        </nav>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
                >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <SideNavbar index={index}/>
                </List>
            </Drawer>
            {selectedIndex===0?
            <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Tab></Tab>
            
            </Container>
        </main>:selectedIndex===1?
            <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <div className="card">
                    <h1 className="card-title ml-5 mt-2">Accounts</h1>
                    <div className="card-body" style={{paddingLeft:'25%',paddingRight:'25%'}}>
                        <img src="./assets/accounts2.png" alt="Accounts" className="img-fluid img-thumbnail"/>
                    </div>
                </div>
            
            </Container>
        </main>:selectedIndex===2?
            <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
            <div className="card">
                    <h1 className="card-title ml-5 mt-2">Profile</h1>
                    <div className="card-body" style={{paddingLeft:'25%',paddingRight:'25%'}}>
                        <img src="./assets/profile.png" alt="Profile" className="img-fluid img-thumbnail"/>
                    </div>
                </div>
            
            </Container>
        </main>:selectedIndex===3?
            <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
            <div className="card">
                    <h1 className="card-title ml-5 mt-2">Activity</h1>
                    <div className="card-body" style={{paddingLeft:'25%',paddingRight:'25%'}}>
                        <img src="./assets/activity.png" alt="Activity" className="img-fluid img-thumbnail"/>
                    </div>
                </div>
            
            </Container>
        </main>:selectedIndex===4?
            <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
            <div className="card">
                    <h1 className="card-title ml-5 mt-2">Support</h1>
                    <div className="card-body" style={{paddingLeft:'25%',paddingRight:'25%'}}>
                        <img src="./assets/support.png" alt="Support" className="img-fluid img-thumbnail"/>
                    </div>
                </div>
            
            </Container>
        </main>:selectedIndex===5?
            <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
            <div className="card">
                    <h1 className="card-title ml-5 mt-2">Add Cash</h1>
                    <div className="card-body" style={{paddingLeft:'25%',paddingRight:'25%'}}>
                        <img src="./assets/addCash.jpg" alt="addCash" className="img-fluid img-thumbnail"/>
                    </div>
                </div>
            
            </Container>
        </main>:selectedIndex===6?
            <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
            <div className="card">
                    <h1 className="card-title ml-5 mt-2">Get Cash</h1>
                    <div className="card-body" style={{paddingLeft:'35%',paddingRight:'25%'}}>
                        <img src="./assets/getCash.png" alt="getCash" className="img-thumbnail" style={{height:'1%',width:'80%'}}/>
                    </div>
                </div>
            
            </Container>
        </main>:null
        }
        </div> 
    );
}