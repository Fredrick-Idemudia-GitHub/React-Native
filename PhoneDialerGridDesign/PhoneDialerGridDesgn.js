import React from "react";
import { StyleSheet,Text,View,useWindowDimensions } from "react-native";
import { AntDesign,Feather,EvilIcons,Ionicons,Entypo } from '@expo/vector-icons';
// React Native Expo Icon Website https://icons.expo.fyi/



export default function PhoneDialerGridDesgn(){
    const {height, width} = useWindowDimensions();
    const top = (80/100)*{height};
    const left = (50/100)*{width}
    return(
        <View style={styles.container}>
            <View style={styles.navBar}>
                <View style={styles.searchBar}>
                    <View style={styles.magnifyLenseIcon}>
                        <Text><EvilIcons name="search" size={30} color="grey" /></Text>
                    </View>
                    <View style={styles.SearchBarIcon}>
                        <Text style={styles.searchBarText}>Enter a name or Phone number</Text>
                    </View>
                    <View style={styles.micIcon}>
                        <Text><Feather name="mic" size={30} color="grey" /></Text>
                    </View>
                    <View style={styles.moreIcon }>
                        <Text><Feather name="more-vertical" size={30} color="grey" /></Text>
                    </View>
                </View>
                <View style={styles.navButton}>
                    <View style={styles.starIcon}>
                        <Text><Feather name="clock" size={30} color="white" /></Text>
                    </View>
                    <View style={styles.ClockIcon}>
                        <Text><AntDesign name="staro" size={30} color="white" /></Text>
                    </View>
                    <View style={styles.groupIcon}>
                        <Text><AntDesign name="addusergroup" size={30} color="white" /></Text>
                    </View>
                </View>
            </View>
                <View style={styles.row1}>
                    <View style={styles.row1column1}>
                        <View style={styles.row1more1}>
                            <Text><Feather name="more-vertical" size={30} color="white" /></Text>
                        </View>
                        <View style={styles.row1contact1}>
                            <Text><Ionicons name="person-outline" size={40} color="white" /></Text>
                        </View>
                    </View>
                    <View style={styles.row1column2}>
                        <View style={styles.row1more2}>
                            <Text><Feather name="more-vertical" size={30} color="white" /></Text>
                        </View>
                        <View style={styles.row1contact2}>
                            <Text><Ionicons name="person-outline" size={40} color="white" /></Text>
                        </View>
                    </View>
                </View>
                <View style={styles.row2}>
                    <View style={styles.row2column1}>
                        <View style={styles.row2more1}>
                            <Text><Feather name="more-vertical" size={30} color="white" /></Text>
                        </View>
                        <View style={styles.row2contact1}>
                            <Text><Ionicons name="person-outline" size={40} color="white" /></Text>
                        </View>
                    </View>
                    <View style={styles.row2column2}> 
                        <View style={styles.row2more2}>
                            <Text><Feather name="more-vertical" size={30} color="white" /></Text>
                        </View>
                        <View style={styles.row2contact2}>
                            <Text><Ionicons name="person-outline" size={40} color="white" /></Text>
                        </View>
                    </View>
                </View>
                <View style={styles.row3}>
                    <View style={styles.row3column1}>
                        <View style={styles.row3more1}>
                            <Text><Feather name="more-vertical" size={30} color="white" /></Text>
                        </View>
                        <View style={styles.row3contact1}>
                            <Text><Ionicons name="person-outline" size={40} color="white" /></Text>
                        </View>
                    </View>
                    <View style={styles.row3column2}>
                        <View style={styles.row3more2}>
                            <Text><Feather name="more-vertical" size={30} color="white" /></Text>
                        </View>
                        <View style={styles.row3contact2}>
                            <Text><Ionicons name="person-outline" size={40} color="white" /></Text>
                        </View>
                    </View>
                </View>
                <View style={styles.row4}>
                    <View style={styles.row4column1}>
                        <View style={styles.row4more1}>
                            <Text><Feather name="more-vertical" size={30} color="white" /></Text>
                        </View>
                        <View style={styles.row4contact1}>
                            <Text><Ionicons name="person-outline" size={40} color="white" /></Text>
                        </View>
                    </View>
                    <View style={styles.row4column2}>
                        <View style={styles.row4more2}>
                            <Text><Feather name="more-vertical" size={30} color="white" /></Text>
                            <Text style={styles.copyRightText}>Phone Contact Grid Designed with React Native</Text>
                        </View>
                        <View style={styles.row4contact2}>
                            <Text><Ionicons name="person-outline" size={40} color="white" /></Text>
                            <Text style={styles.copyRightText}>Copy Right - Fredrick Idemudia</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.keyPad}>
                    <Text><Entypo name="dial-pad" size={20} color="white" /></Text>
                </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#05B2E5'
    },
    navBar: {
        flex: 0.2,
        backgroundColor: "#05B2E5",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        
    },
    searchBar: {
        flex:0.5,
        backgroundColor:"white",
        width: "98%",
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
        flexDirection: "row"
    },
    magnifyLenseIcon: {
        flex: 0.1,
        backgroundColor:"white",
        justifyContent: "center",
        alignItems: "center"
    },
    SearchBarIcon: {
        flex: 0.7,
        backgroundColor:"white",
        justifyContent: "center",
        alignItems: "center"
    },
    searchBarText: {
        fontSize:15,
        color:"#A7A8A9",
    },
    micIcon: {
        flex: 0.1,
        backgroundColor:"white",
        justifyContent: "center",
        alignItems: "center"
    },
    moreIcon: {
        flex: 0.1,
        backgroundColor:"white",
        justifyContent: "center",
        alignItems: "center"
    },
    navButton: {
        flex:0.5,
        backgroundColor:"#05B2E5",
        width: "100%",
        flexDirection: "row",
        
    },
    starIcon: {
        flex:0.33,
        backgroundColor:"#05B2E5",
        justifyContent: "center",
        alignItems: "center"
    },
    ClockIcon: {
        flex:0.34,
        backgroundColor:"#05B2E5",
        justifyContent: "center",
        alignItems: "center"
    },
    groupIcon: {
        flex:0.33,
        backgroundColor:"#05B2E5",
        justifyContent: "center",
        alignItems: "center"
    },
    row1: {
        flex: 0.2,
        backgroundColor:"violet",
        width: "100%",
        flexDirection:"row"
    },
    row1column1: {
        flex: 0.5,
        backgroundColor:"pink",
        borderWidth: 0.5,
        borderColor: "white"
    },
    row1more1: {
        flex: 0.4,
        backgroundColor:"#8222EE",
        width: "100%",
        justifyContent: "center",
        alignItems: "flex-end",
        paddingRight: 8
    },
    row1contact1: {
        flex: 0.6,
        backgroundColor:"#8222EE",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    row1column2: {
        flex: 0.5,
        backgroundColor:"blue",
        borderWidth: 0.5,
        borderColor: "white"
    },
    row1more2: {
        flex: 0.4,
        backgroundColor:"#3241C1",
        justifyContent: "center",
        alignItems: "flex-end",
        paddingRight: 8
    },
    row1contact2: {
        flex: 0.6,
        backgroundColor:"#3241C1",
        justifyContent: "center",
        alignItems: "center"
    },
    row2: {
        flex: 0.2,
        backgroundColor:"yellow",
        width: "100%",
        flexDirection: "row"
    },
    row2column1: {
        flex: 0.5,
        backgroundColor:"grey",
        borderWidth: 0.5,
        borderColor: "white"
    },
    row2more1: {
        flex: 0.4,
        backgroundColor:"#F65A06",
        justifyContent: "center",
        alignItems: "flex-end",
        paddingRight: 8
    },
    row2contact1: {
        flex: 0.6,
        backgroundColor:"#F65A06",
        justifyContent: "center",
        alignItems: "center"
    },
    row2column2: {
        flex: 0.5,
        backgroundColor:"black",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 0.5,
        borderColor: "white"
    },
    row2more2: {
        flex: 0.4,
        backgroundColor:"#8222EE",
        justifyContent: "center",
        alignItems: "flex-end",
        paddingRight: 8,
        width: "100%"
    },
    row2contact2: {
        flex: 0.6,
        backgroundColor:"#8222EE",
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    },
    row3: {
        flex: 0.2,
        backgroundColor:"green",
        width: "100%",
        flexDirection: "row"
    },
    row3column1: {
        flex: 0.5,
        backgroundColor:"red",
        borderWidth: 0.5,
        borderColor: "white"
    },
    row3more1: {
        flex: 0.4,
        backgroundColor:"#2B9B04",
        justifyContent: "center",
        alignItems: "flex-end",
        paddingRight: 8
    },
    row3contact1: {
        flex: 0.6,
        backgroundColor:"#2B9B04",
        justifyContent: "center",
        alignItems: "center"
    },
    row3column2: {
        flex: 0.5,
        backgroundColor:"pink",
        borderWidth: 0.5,
        borderColor: "white"
    },
    row3more2: {
        flex: 0.4,
        backgroundColor:"#04B087",
        justifyContent: "center",
        alignItems: "flex-end",
        paddingRight: 8
    },
    row3contact2: {
        flex: 0.6,
        backgroundColor:"#04B087",
        justifyContent: "center",
        alignItems: "center"
    },
        // here
    row4: {
        flex: 0.2,
        backgroundColor:"grey",
        width: "100%",
        flexDirection: "row"
    },
    row4column1: {
        flex: 0.5,
        backgroundColor:"blue",
        borderWidth: 0.5,
        borderColor: "white"
    },
    row4more1: {
        flex: 0.4,
        backgroundColor:"#A9CB3D",
        justifyContent: "center",
        alignItems: "flex-end",
        paddingRight: 8
    },
    row4contact1: {
        flex: 0.6,
        backgroundColor:"#A9CB3D",
        justifyContent: "center",
        alignItems: "center",

    },
    row4column2: {
        flex: 0.5,
        backgroundColor:"#A9CB3D",
        borderWidth: 0.5,
        borderColor: "white"
    },
    row4more2: {
        flex: 0.4,
        backgroundColor:"grey",
        justifyContent: "center",
        alignItems: "flex-end",
        paddingRight: 8
    },
    row4contact2: {
        flex: 0.6,
        backgroundColor:"grey",
        justifyContent: "center",
        alignItems: "center"
    },
    keyPad: {
        width: 50,
        height: 50,
        backgroundColor: "#05B2E5",
        position: "absolute",
        top: 550,
        left: 656,
        // zIndex: 1,
        borderRadius:"50%",
        justifyContent:"center",
        alignItems:"center"
    },
    copyRightText: {
        color: "#F3F4F7",
    }

})