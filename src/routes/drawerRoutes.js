import { DRAWER_ROUTES } from '../navigations/Constants';
import BottomTabNavigation from '../navigations/BottomTabNavigation';
import ProfileScreen from '../screens/profile/profileScreen';
import SettingsScreen from '../screens/settings/settingsScreen';
import CustomIcon from '../components/customComponents/CustomIcon';
import AppStackNavigation from '../navigations/HomeNavigation';


export default drawerRoutes = [
    {
        name: DRAWER_ROUTES.BOTTOM_TAB_ROUTES,
        component: BottomTabNavigation,
        options : {
            drawerLabel : "Home",
            drawerIcon : ({}) =><CustomIcon  iconName="home" />,
        }
    },
    {
        name: DRAWER_ROUTES.PROFILE,
        component: ProfileScreen,
         options : {
            drawerLabel : "Profile",
            drawerIcon : ({}) =><CustomIcon  iconName="person" />
        }
    },
    {
        name: DRAWER_ROUTES.SETTINGS,
        component: SettingsScreen,
        options : {
            drawerLabel : "Settings",
            drawerIcon : ({}) =><CustomIcon  iconName="settings" />
        }
    },
    {
        name: DRAWER_ROUTES.LOGOUT,
        component: SettingsScreen,
        options : {
            drawerLabel : "Logout",
            drawerIcon : ({}) =><CustomIcon  iconName="logout" />
        }
    },

];