import React, { useState } from 'react';
import { Text, View, StyleSheet, Button ,FlatList} from 'react-native';


export default function HomeScreen() {

  const [initialElements, changeEl]  = useState([
    { id : "0", text : "Object 1"},
    { id : "1", text : "Object 2"},
    { id : "4", text : "Object 4"},

  ]);

  const [exampleState, setExampleState] = useState(initialElements);
  const [idx, incr] = useState(2);

  const addElement = () => {
    var newArray = [...initialElements , {id : idx, text: "Object " + (idx+1) }];
    incr(idx + 1);
    console.log(initialElements.length);
    setExampleState(newArray);
    changeEl(newArray);
  }

  return (
    <View style={styles.container}>
        <FlatList
            keyExtractor = {item => item.id}  
            data={exampleState}
            renderItem = {item => (<Text>{item.item.text}</Text>)} />
        <Button
          title="Add element"
          onPress={addElement} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:60,
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    borderWidth: 1
  },
});