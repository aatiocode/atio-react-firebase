import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';
import {db} from '../config/dbFirebase';

const InsertData = () => {
  let [name, setName] = useState('');

  let addItem = item => {
    db.ref('/profile').push({
      name: item,
    });
  };

  let handleSubmit = () => {
    addItem(name);
    Alert.alert(name);
  };

  return (
    <View>
      <Text>Insert Name</Text>
      <TextInput
        placeholder="Masukkan Nama"
        onChangeText={value => setName(value)}
      />
      <Button title={'Masukkan data'} onPress={handleSubmit} />
    </View>
  );
};

export default InsertData;
