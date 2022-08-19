import React  from "react";
import { SafeAreaView,Text,StyleSheet } from "react-native";

const HomeScreen=()=>{

    return(
        <SafeAreaView
        style={styles.homeMainContainer}>
      <Text>HomeScreen</Text>
    </SafeAreaView>
    )

}

const styles=StyleSheet.create({

homeMainContainer:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
}


})

export default HomeScreen