import React,{useState} from "react";
import { 
    ScrollView,Text ,StyleSheet,Dimensions, ImageBackground, View,Item,label,TextInput, Button
    ,Icon,ListItem,Body
} from "react-native";
import CheckBox from "@react-native-community/checkbox";






const {width,height}=Dimensions.get('window');
const dims={width:width,height:height}

const LoginScreen=({navigation})=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log("email",email);
    console.log("password",password);
    return (

        // Container start
        <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
        {/* Background Image */}
       <ImageBackground source={require('../images/image1.png')} style={styles.imageStyle}></ImageBackground>
        
        <View style={styles.bottomViewContainer}>

            <View style={styles.bottomView}>
                <Text style={styles.welcome}>Login</Text>

                <View>
                    <TextInput onChangeText={email => setEmail(email)} style={styles.inputbox} placeholder="Enter email address" autoComplete="email"></TextInput>
                </View>
                <View>
                    <TextInput  onChangeText={password => setPassword(password)} style={styles.inputbox} placeholder="Enter password" autoComplete="password"></TextInput>
                </View>
                <View style={styles.buttonLogin} >
                    <Button  color="#7ABD3C"  title="Login"/>
                </View>

                {/* Remember me and forgot password */}
                {/* <View style={styles.remesmberme}>
                    <ListItem>
                    <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
                        <CheckBox>
                            <Body>
                                <Text>
                                    {' '}
                                    Remember Me
                                </Text>
                            </Body>
                        </CheckBox>

                    </ListItem>

                </View> */}
                
                <Text style={styles.noAccount}>
                    Dont have an account? <Text style={styles.signup}>{' '}Sign up</Text>
                </Text>

              
               
                
            </View>
        </View>
        </ScrollView>
    );


};

const styles=StyleSheet.create({

    main:{
        flex:1,
        backgroundColor:'#fff',
        height:500,

    },
    imageStyle:{
        height:height/2.5,
        backgroundColor:'#282534'
    },
    bottomViewContainer:{
        flex:1.5,
        
        bottom:15,
        borderTopStartRadius:40,
        borderTopEndRadius:40,

    },
    bottomView:{
        padding:40,
    },welcome:{
        color:'#CD972A',
        fontSize:25,
        fontWeight:"bold",
        bottom:15,
        textAlign:"center",
    },
    noAccount:{
        color:'##313435',
        fontSize:15,
        marginTop:15,
        textAlign:"center"
    },
    signup:{
        color:'#E36D48',
        fontWeight:"bold",
    },
    inputbox:{
        borderRadius:6,
        borderWidth:0.8,
        paddingLeft:15,
        margin:10,
        borderColor:"#2AAEE4",
    },
    buttonLogin:{
       marginTop:20,
        backgroundColor:"#B1E42A",
    },
});


export default LoginScreen;