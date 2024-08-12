# This is important part of the dev env .
- `npx react-native init Project_name`This is the command which is use to make the project repo and use to download the template from the repo. Then run android command is use to run the 
- `npx react-native run-android` This is the running command for the development into the emullator.
- One of the ways data is created and managed  in a react or react-native component  is the state .
- Extends means 
- Components are the simple function of the js /ts .It let you split the UI  into the independent,reusable peices and think each piece as a isolation .
- Component structure is the plain js objects .
- State is the fancy name of the variable .
- State can be updated using the statesfunction .
- State is collection of the values that components manages . It is private and fully controlled by the componets .
- The other way that data is beinge controlled and managed is the Props .
- Props stands for the properties .
- The other way through which the data can be handled is the pros .
- The main difference between  state and props is that state are  muatable but props are immuatabe.
- State is initialized when a component is created either with the constructor or with the a property initializer .  
- Eslint is a tool that is used for reporting and identifying the pattern in the ECMASCRIPT .
- APP.js is the 
- Local storage usases .
# Task one
- Login and signup for the react native .
- `rnfes` will import the basic template into the screen . This come with the help of the extensions .
- `View` is the components that serves as the container for the components and the UI elements . It is use to build the layout of the application . Layout is the way to arranged and displayed on the screen . Layout managemnet use to specifying the positon,size,and distribution of the components to create a visually  and functional user interface .
-  React-native uses the flexbox for the layout . It provides the flexible way to arrange components the within the container . Flexb0x is the layout system designed method .
- Dimensions stands for the width and height of the components .
- flexDirection it defines the primary axis (row or column)
  - row means horizontal
  - column means vertical layout 

- Stylesheet is the  builtin API for defining styles .It is similiar to style sheet in css for the web dev. It encapsulates the data within the components.
- Text is the react components for displaying the text .
```JavaScript
const Login = () => {   // We have defined the Login component here .
  return (
    <View>
      <Text>Log</Text>
    </View>
  )
}

export default Login // Here we have exported the login components as the default module form this area
     <Text style = {styles.head}>HI</Text>    // This helps to bring the text over the screen image .
 head: {     // This is props  which have the  name of the head .
      fontSize: 30,
      color: 'red'
    }
```
# Core components of the react-Native
- Components are the basic function of the js. Components can referes to other components in their output .

- These are the native components which are compatible in both the ios and android .
- <View> A container that supports layout with the flexbox style some touch handling and accessibility .
- <Text>  Display styles ans nest strings of text  ans even handle the touch events .
- <Image> Display the different types of image 
- <ScroolView> A generic  scrolling container that can contain multiple componets ans views /
- <TextInputs> Allow users to enter text .

# Props 
Props stand for the properties .
- It is use to pass the data from the one component to another mostly from the parent compnent to a child component enabling the child to access and use that data within its owmn rendring .
- One single comp

# Multiple screens 
- To handle navigation between screen in the the react-native we use the navigation library .
- Redux is the state management tool for the maintainability of the app state .


# zero
- Buttons are the touchable elements used to interacts with the screen and to perform the operations .
- Button can be small or large or small .
- Button can be in solid (entirely filled with the color), outline (side filled), or clear (it central text ONLY )
- This is the first step to create the button in the react native script .
```Javascript
import React  from "react";
import { View , StyleSheet, Text, Button } from "react-native";
const MyButton = () => {           // This is the  functional components that work is to return the jsx to define what should be on the screen .
  const PressMe = () => {    // This is helper function 
    alert("Button hogya");
  };
  return (
    <View style = {style.tutu}> 
    <Text>Press the button </Text>
    <Button
    
    title="Press me "
    onPress={PressMe}    // This is call back function that will be executed when the buttin is pressed , in this case it is set to the pressme function .
    /> 
    </View>
  );
    };


    const style = StyleSheet.create ({
        tutu: {
            flex: 1,
            justifyContent: 'center',
            alignItems:'center'
        }
    })
export default MyButton;
```
- Creating simple button without the any decoration 
```Javascript
import React from "react";
import { Button } from "react-native";
const mybutton = ()=>{
  const press = ()=>{
   alert('hogya')
  };
  return (
    <Button
    title='Click on me'
    onPress={press}
    />
  );
};
export default mybutton ;
```