import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';
import {db} from '../config/dbFirebase';

const ViewData = () => {
  let dataFirebase = db.ref('profile');
  const [data, setData] = useState();

  useEffect(() => {
    dataFirebase.on('value', snapshot => {
      let data = snapshot.val();
      let profiles = Object.values(data);
      setData(profiles);
    });
  }),
    [dataFirebase, setData];

  return (
    <View>
      {data != null ? (
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <ListItem title={item.name} />}
        />
      ) : (
        <Text>Loading</Text>
      )}
    </View>
  );
};

export default ViewData;
