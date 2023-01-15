import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';
import HorizontalItem from './HorizontalItem';

export default ({products,SECTIONS}) => {

  return (
   

    <View style={styles.container}>
        <SectionList 
        contentContainerStyle={{ paddingHorizontal:0 }}
        stickySectionHeadersEnabled={false}
        sections={SECTIONS}
        renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              {section.horizontal ? (
                <FlatList
                  horizontal
                  data={products}
                  renderItem={({ item }) => <HorizontalItem item={item} />}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </>
          )}
        renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return <HorizontalItem item={item} />;
          }}
        
        />
        

     
    </View>

  
    
  );
};

// const SECTIONS = [
//   {
//     title: 'BY SELL TYPE',
//     horizontal: true,
//     data: [
//       {
//         key: '1',
//         text: 'Item text 1',
//         uri: 'https://picsum.photos/id/1/200',
//       },
//       {
//         key: '2',
//         text: 'Item text 2',
//         uri: 'https://picsum.photos/id/10/200',
//       },

//       {
//         key: '3',
//         text: 'Item text 3',
//         uri: 'https://picsum.photos/id/1002/200',
//       },
//       {
//         key: '4',
//         text: 'Item text 4',
//         uri: 'https://picsum.photos/id/1006/200',
//       },
//       {
//         key: '5',
//         text: 'Item text 5',
//         uri: 'https://picsum.photos/id/1008/200',
//       },
//     ],
//   },
//   {
//     title: 'BY LOCATION',
//     horizontal: true,
//     data: [
//       {
//         key: '1',
//         text: 'Item text 1',
//         uri: 'https://picsum.photos/id/1011/200',
//       },
//       {
//         key: '2',
//         text: 'Item text 2',
//         uri: 'https://picsum.photos/id/1012/200',
//       },

//       {
//         key: '3',
//         text: 'Item text 3',
//         uri: 'https://picsum.photos/id/1013/200',
//       },
//       {
//         key: '4',
//         text: 'Item text 4',
//         uri: 'https://picsum.photos/id/1015/200',
//       },
//       {
//         key: '5',
//         text: 'Item text 5',
//         uri: 'https://picsum.photos/id/1016/200',
//       },
//     ],
//   },
//   {
//     title: 'BY LOCATION',
//     horizontal: true,
//     data: [
//       {
//         key: '1',
//         text: 'Item text 1',
//         uri: 'https://picsum.photos/id/1011/200',
//       },
//       {
//         key: '2',
//         text: 'Item text 2',
//         uri: 'https://picsum.photos/id/1012/200',
//       },

//       {
//         key: '3',
//         text: 'Item text 3',
//         uri: 'https://picsum.photos/id/1013/200',
//       },
//       {
//         key: '4',
//         text: 'Item text 4',
//         uri: 'https://picsum.photos/id/1015/200',
//       },
//       {
//         key: '5',
//         text: 'Item text 5',
//         uri: 'https://picsum.photos/id/1016/200',
//       },
//     ],
//   },
// ];

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginLeft: 4
    // height:"100%"
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: 'black',
    marginTop: 8,
    marginBottom: 5,
    marginLeft:5
  },
  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 200,
    height: 200,
  },
  itemText: {
    color: 'rgba(255, 255, 255, 0.5)',
    marginTop: 5,
  },
});
