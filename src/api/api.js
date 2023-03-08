import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
    headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000'
    }
})

export const charactersAPI = {
    getCharacters() {
        return instance.get('/character')
    }
}