import axios from 'axios';
import React, {useEffect} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AddDetails from './action';

const Adddetails = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AddDetails());
  }, []);

  const deleteOnPress = (item, data) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${item.id}`)
      .then(response => {
        const index = data.findIndex(ele => ele === item);
        data[index] = response.data;
        dispatch({type: 'ADD_DATA', payload: data});
      });
  };

  const _renderItem = ({item}) => {
    // console.log('item', item);
    return (
      item.id && (
        <View style={styles.MainCon}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Comments', {id: item.id, title: item.title})
            }>
            <View style={styles.InnContner}>
              <Text style={styles.idstyl}> {item.id}</Text>
              <TouchableOpacity
                onPress={() => {
                  deleteOnPress(item, data);
                }}
                style={styles.deleteStyl}>
                <Image
                  style={styles.ImgDeletestyl}
                  source={require('../../assets/images/bin.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('UpdateDetlais')}
                style={styles.deleteStyl2}>
                <Image
                  style={styles.ImgDeletestyl}
                  source={require('../../assets/images/pencil.png')}
                />
              </TouchableOpacity>

              <View>
                <Text style={styles.titleStyl}>{item.title}</Text>

                <Text style={styles.BodyStyl}>{item.body}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      )
    );
  };
  const seprator = () => {
    return <View style={styles.seprator}></View>;
  };
  const {data} = useSelector(store => store.listReducer);
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={_renderItem}
        ItemSeparatorComponent={seprator}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
      />

      <TouchableOpacity
        style={styles.ImgStyl}
        onPress={() => navigation.navigate('UpdateDetlais')}>
        <Image
          style={styles.image}
          source={require('/Users/appinventiv/Desktop/react-native/ReduxCrudApp/src/assets/images/add.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Adddetails;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  MainCon: {
    margin: 10,
  },
  InnContner: {
    backgroundColor: '#82A284',
    flexDirection: 'row',
    borderRadius: 8,
    shadowColor: '',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },

  seprator: {
    backgroundColor: '#C8C8C8',
  },
  idstyl: {
    fontWeight: 'bold',
    fontSize: 17,
    marginLeft: 10,
    marginTop: 10,
  },
  image: {
    height: 40,
    width: 40,
    position: 'absolute',
  },
  ImgStyl: {
    position: 'absolute',
    bottom: 70,
    right: 60,
  },
  deleteStyl: {
    position: 'absolute',
    right: 10,
    top: 8,
  },
  titleStyl: {
    paddingLeft: 30,
    width: 300,
    fontWeight: 'bold',
  },
  BodyStyl: {
    paddingLeft: 30,
    width: 300,
  },
  ImgDeletestyl: {
    height: 20,
    width: 20,
  },
  deleteStyl2: {
    position: 'absolute',
    right: 10,
    top: 48,
  },
});
