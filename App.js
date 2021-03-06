import React from 'react';
import TestView from './views/TestView';
import Dashboard from './views/Dashboard.js';
import TestComponent from './components/TestComponent';
import TwitterNews from './views/TwitterNews';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Settings from './views/Settings';


import { DrawerNavigator } from 'react-navigation';


const RootNavigator = DrawerNavigator(
    {
        Home:
            {
                screen: Dashboard,
                navigationOptions: {
                    drawerLabel: 'Home',
                    drawerIcon: <Entypo name="home" size={30} color="#fff"></Entypo>
                }
            },
        TwitterNews:
            {
                screen: TwitterNews,
                navigationOptions: {

                    drawerLabel: 'News',
                    drawerIcon: <Entypo name="twitter" size={30} color="#fff"></Entypo>

                }
            },
        Settings:
            {
                screen: Settings,
                navigationOptions: {
                    drawerLabel: 'Settings',
                    drawerIcon: <Ionicons name="ios-settings" size={30} color="#fff"></Ionicons>
                }
            }
    },
    // Drawer Navigator options
    {
        contentOptions: {
            activeTintColor: '#4b79c1',
            inactiveTintColor: '#fff',
            activeBackgroundColor: '#000000',
            itemsContainerStyle: {
                marginVertical: 24
            },
            iconContainerStyle:{
                width:30
            },
            labelStyle:{
                fontSize: 25,
                fontWeight: '100'
            }
        }
    }
);

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            justOpened: true
        }

        this.appDidShow = this.appDidShow.bind(this)
    }

    appDidShow = () => {
        this.setState({
            justOpened: false
        })
    }
   
    render() {
        return <RootNavigator style={{backgroundColor:'#191919'}} screenProps={{justOpened:this.state.justOpened, didShow: this.appDidShow}}/>
    }
}