import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
    {
        root : {
            flexDirection:"column",
            width:"100%",
            borderColor:"#285032",
            borderRadius:10,
            marginHorizontal:10,

        },

        info:{
            flexDirection:"row"
        },
    
        rightContainer: {
            flex:3,
            backgroundColor:"#fff",
            marginLeft:4,
    
        },
        title: {
            fontSize:18,
        },
    
        price:{
            fontSize:18,
            fontWeight:"bold"
        },
        oldPrice:{
    
            fontSize:12,
            fontWeight:"normal",
            textDecorationLine:"line-through",
            marginLeft:4
        },
        image : {
            flex:1,
            height:100,
            width:200,
            resizeMode:"cover",
    
        },

    }
)

export default styles;