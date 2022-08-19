import React from "react";
import { SafeAreaView,StyleSheet,Dimensions, StatusBar, View,Image,Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const {width,height}=Dimensions.get('window');

const COLORS={primary:'#282534',white:'#fff'}

const slides=[
{
id:'1',
image:require('../images/image1.png'),
title:'Track everything in one go',
subtitle:'You can track everythning in single app,but before that login or signup for further adventures.'
},
{
    id:'2',
    image:require('../images/image2.png'),
    title:'Report disaster',
    subtitle:'Report for disaster with location and time.Team will resuce from crime.'
    },
    {
        id:'3',
        image:require('../images/image3.png'),
        title:'Track sub people',
        subtitle:'Make track of people in your desired location.'
        }
];


const Slide= ({item}) => {

return <View style={styles.onBoardingImage}>

        <Image  source={item.image} style={{ height:'75%' ,width,resizeMode:'contain'}}/>
        <View>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
</View>

};
const OnboradingScreen =({navigaton}) =>{

    return <SafeAreaView style={styles.onBoardingMain}>
        <StatusBar backgroundColor={COLORS.primary}/>
        <FlatList 
        pagingEnabled
        data={slides} contentContainerStyle={{height:height*0.75 }} horizontal
        showsHorizontalScrollIndicator={false} 
        renderItem={({item})  => <Slide item= {item}/>  }
        />
            
    </SafeAreaView> 

    
};

const styles=StyleSheet.create({
onBoardingMain:{
    flex:1,
    backgroundColor:COLORS.primary,
},
onBoardingStatusBar:{
    backgroundColor:COLORS.primary,
},
onBoardingImage:{
alignItems:"center",
},
title:{
    color:COLORS.white,
    fontSize:22,
    fontWeight:'bold',
    marginTop:20,
    textAlign:"center" },
subtitle:{
    color:COLORS.white,
    fontSize:13,
    marginTop:10,
    maxWidth:'70%',
    textAlign:"center",
    lineHeight:23

}
});

export default OnboradingScreen;