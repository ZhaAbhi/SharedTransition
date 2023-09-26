import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, FlatList, Image, Pressable} from 'react-native';
import axios from 'axios';
import {UNSPLASH_ACCESS_KEY, UNSPLASH_SECRET} from '../../config/unsplash';
import {posix} from 'path';
import {fetchPhotos} from '../../apiService/FetchPhotos';

const HomeScreen = () => {
  const [photos, setPhotos] = useState();

  const getPhotos = useCallback(async () => {
    try {
      const data = await fetchPhotos();
      setPhotos(data);
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    getPhotos();
  }, []);
  return (
    <View style={{padding: 10}}>
      {photos && (
        <FlatList
          data={photos}
          keyExtractor={item => item.alt_description}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <Pressable>
              <Image
                source={{uri: item.links.download}}
                style={{
                  height: 200,
                  width: '100%',
                  //aspectRatio: 16 / 4,
                  marginVertical: 5,
                  borderRadius: 10,
                }}
              />
            </Pressable>
          )}
        />
      )}
    </View>
  );
};

export default HomeScreen;
