import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function CommentAction({route}) {
  const {id, title} = route.params;
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then(resp => {
        console.log('hELLOOOW RESPONSE', resp);
        setdata(resp.data);
      })
      .catch(err => {
        console.log('err', err);
      });
  }, []);
  const renderItem = ({item}) => {
    // console.log('item here', item);
    return (
      <View style={styles.renderItemCon}>
        <Text>{item.id}</Text>
        <Text>{item.name}</Text>
      </View>
    );
  };
  return (
    <View>
      <FlatList style={styles.container} data={data} renderItem={renderItem} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    //borderWidth: 1,
    backgroundColor: '#82A284',

    borderRadius: 8,
    marginHorizontal: 5,
    paddingHorizontal: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  renderItemCon: {

   borderWidth:1,
   marginVertical:5,
   borderRadius:7,
   padding:7


  },
});
