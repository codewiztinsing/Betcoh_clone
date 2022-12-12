import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root:{
      margin:10

    },

    title:{
      fontSize:22,
      fontWeight:"bold",
      fontFamily:"sans serif",
      color:"black"
        
    },
    card:{
        borderWidth: 1,
        width: 314,
        borderColor: "rgba(155,155,155,1)",
        borderBottomLeftRadius: 10,
        backgroundColor: "rgba(214,210,210,1)",
        marginTop: 10,
        marginLeft: 4
      },
      description:{
        fontSize:18,
        color:"#696969",
        lineHeight:20,
        marginVertical:20
      },
      price:{
        fontSize:22,
        fontWeight:"bold",
        fontFamily:"sans serif",
        color:"black"

      }
})


export default styles;

