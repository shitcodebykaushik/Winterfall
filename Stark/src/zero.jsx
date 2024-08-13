import React from "react";
import { Button } from "react-native";

const mybutton= ()=>{
  const Press = ()=>{
  alert("Done")

};
return (
  <Button
  title="Press  Me "
  onPress={Press}  
  
  
  />
);
};
export default mybutton;