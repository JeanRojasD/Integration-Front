import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.discogs.com/artists/251593',
});