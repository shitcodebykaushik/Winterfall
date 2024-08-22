import React  from "react";
import {Text,View,Button,StyleSheet} from "react-native";
const Goa =()=>{
  const nhi =()=> {
    alert("NHI GYE N");
  };
  return (
    <View style = {styles.tutu}> 
    <Text> Th </Text>
    <Button 
     title = "DBA DE"
     onPress={nhi}
    />
    </View>
  );
};
const styles = StyleSheet.create ({
  tutu: {
      flex: 1,
      justifyContent: 'center',
      alignItems:'center'
  }
});
export default Goa;