import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import getalldetails from './action';

const UpdateDetails = ({navigation}) => {
  const dispatch = useDispatch();
  const {data} = useSelector(store => store.listReducer);
  const [ids, setids] = useState('');
  const [titles, settitles] = useState('');
  return (
    <View style={styles.MainCon}>
      <TextInput
        onChangeText={txt => setids(txt)}
        placeholder="Ids Here."
        style={styles.TxtInptStyl}
      />
      <TextInput
        onChangeText={txt => settitles(txt)}
        placeholder="tittle Here.."
        style={styles.TxtInptStyl}
      />
      <TouchableOpacity
        style={styles.AddBtnStyl}
        onPress={() => {
          dispatch(getalldetails({title: ids, body: titles}),navigation.navigate('AddDetails'));
        }}>
        <Text style={styles.AddTxt}>{'ADD'} </Text>
      </TouchableOpacity>
    </View>
  );
};

export default UpdateDetails;

const styles = StyleSheet.create({
  MainCon: {
    alignItems: 'center',
    marginVertical: 40,
  },
  AddTxt: {
    color: 'white',
  },
  TxtInptStyl: {
    borderWidth: 1,
    width: 240,
    height: 40,
    borderRadius: 5,
    margin: 7,
    paddingLeft: 10,
    borderColor: '#DFDFDE',
  },
  AddBtnStyl: {
    backgroundColor: '#4B7BE5',
    width: 140,
    borderRadius: 5,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});
