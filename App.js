const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import SplashScreen from "./screens/SplashScreen";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Onboarding from "./screens/Onboarding";
import Bookshelf from "./screens/Bookshelf";
import Search from "./screens/Search";
import Notification1 from "./components/Notification1";
import Notification2 from "./components/Notification2";
import Login1 from "./screens/Login1";
import Upload from "./screens/Upload";
import Visibility from "./screens/Visibility";
import Edit from "./components/Edit";
import Onboarding1 from "./screens/Onboarding1";
import Login2 from "./screens/Login2";
import Search1 from "./screens/Search1";
import Search2 from "./screens/Search2";
import Upload1 from "./screens/Upload1";
import Bookshelf1 from "./screens/Bookshelf1";
import Bookshelf2 from "./screens/Bookshelf2";
import Edit1 from "./screens/Edit1";
import Frame from "./components/Frame";
import Frame1 from "./components/Frame1";
import Bookshelf3 from "./screens/Bookshelf3";
import Home1 from "./screens/Home1";
import Notification3 from "./screens/Notification3";
import Notification4 from "./screens/Notification4";
import Message from "./screens/Message";
import MessageInner from "./components/MessageInner";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Bookshelf"
              component={Bookshelf}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notification1"
              component={Notification1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notification2"
              component={Notification2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login1"
              component={Login1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Upload"
              component={Upload}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Visibility"
              component={Visibility}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Edit"
              component={Edit}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding1"
              component={Onboarding1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login2"
              component={Login2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Search1"
              component={Search1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Search2"
              component={Search2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Upload1"
              component={Upload1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Bookshelf1"
              component={Bookshelf1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Bookshelf2"
              component={Bookshelf2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Edit1"
              component={Edit1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame1"
              component={Frame1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Bookshelf3"
              component={Bookshelf3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home1"
              component={Home1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notification3"
              component={Notification3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notification4"
              component={Notification4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Message"
              component={Message}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MessageInner"
              component={MessageInner}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
