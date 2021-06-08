import React, {useEffect, useState} from 'react';
import {ScrollView, View, Image, Text, StyleSheet, Button, TextInput} from 'react-native';

interface Props {
  feeds: Array<{id: number, description: String, price: String, authorId: Number}>,
  fetchFeeds: any,
  addFeed: (id: Number, description: String, price: String, authorId: Number) => {}
}

const FeedList : React.FC<Props> = ({ feeds, fetchFeeds, addFeed }) => {
  
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [authorId, setAuthorId] = useState(1);

  useEffect(() => {
    fetchFeeds();
  }, []);

  const sendFeed = () => {
    addFeed(feeds[feeds.length - 1].id + 1, description, price, authorId);
  }


  return (
    <View style={{ marginTop: 24 }}>
      <View style={styles.input}>
        <Text style={{ paddingLeft: 8 }}>Description</Text>
        <TextInput style={styles.textInput} defaultValue={description} onChangeText={setDescription} />
      </View>
      <View style={styles.input}>
        <Text style={{ paddingLeft: 8 }}>Price</Text>
        <TextInput style={styles.textInput} defaultValue={price} onChangeText={setPrice} />
      </View>
      <Button title="Send Feed" onPress={() => sendFeed()} />
      <ScrollView style={{ paddingTop: 8 }}>
        {feeds.map((feed, index) => (
          <View key={index} style={styles.feed}>
            <Text>{feed.description}</Text>
            <Text style={styles.price}>{feed.price}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default FeedList;

const styles = StyleSheet.create({
  feed: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 24,
    marginHorizontal: 24,
    borderRadius: 8,
    shadowColor: '#292929',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    backgroundColor: '#FFFFFF'
  },
  price: {
    paddingTop: 8,
    fontWeight: 'bold'
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginTop: 8
  },
  input: {
    marginHorizontal: 24,
    marginBottom: 10
  }
})