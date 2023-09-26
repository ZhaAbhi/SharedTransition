import axios from 'axios';
import {UNSPLASH_ACCESS_KEY} from '../config/unsplash';

export const fetchPhotos = async () => {
    try {
        const response = await axios({
            method: 'get',
            url: 'https://api.unsplash.com/photos?page=1',
            headers: {
              Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
            },
          })
          return response.data
    } catch (error) {
        return error
    }
 

};
