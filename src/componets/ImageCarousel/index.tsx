import { FlatList,
     StyleSheet, 
     Image,
      View ,
    useWindowDimensions} from 'react-native';

import React, { useCallback, useState } from 'react'

const ImageCarousel = ({ images }: { images: [string] }) => {
    const windowWidth = useWindowDimensions().width;
    const [activeIndex,setactiveIndex] = useState(0);
    const onFlatlistUpdate = useCallback(({viewableItems}) => {
        if (viewableItems.length > 0) {
            setactiveIndex(viewableItems[0].index || 0);
        };
      }, []);
    
    return (
        <View>
            <FlatList 
                data={images}
                renderItem={({item})=>(     
                <Image 
                style={[styles.image,{width:windowWidth -20}]} source={item}/>
                
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={windowWidth - 40}
                snapToAlignment={'center'}
                decelerationRate={'fast'}

                viewabilityConfig={{
                    viewAreaCoveragePercentThreshold: 50,
                  }}
                  onViewableItemsChanged={onFlatlistUpdate}
            />

            <View style = {styles.dots}>
                {
                    images.map((image,index)=> (
                        <View 
                        key={index}
                        style = {[styles.dot,{
                            backgroundColor:index === activeIndex ? 'black':'#c9c9c9'
                        }]}/>
                        
                    ))
                }
                
            </View>
        
        </View>
    )
}

export default ImageCarousel

const styles = StyleSheet.create({
    root: {

    },

    image: {
        height: 250,
        resizeMode:"contain",
        margin:10,
    },

    dots:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },

    dot:{
        backgroundColor:"#c9c9c9",
        height:10,
        width:10,
        borderRadius:25,
        borderWidth:1,
        margin:5
    }
})