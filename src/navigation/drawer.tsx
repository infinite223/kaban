import { createDrawerNavigator } from '@react-navigation/drawer';
import { Frame } from '@ui-kitten/components/devsupport';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      {/* <Drawer.Screen name="Feed" component={FrameComponent4}  */}
       {/* options={{ drawerLabel: 'Updates' }}/> */}
      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
  );
}