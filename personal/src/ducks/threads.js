import axios from 'axios';


const initialState = {
    threads: {}
}

const GET_THREADS = 'GET_THREADS'

export function getThreads(){

    let threads = axios.get('/forum/threads').then( res => {
        return res.data;
    })

    return {
        type: GET_THREADS,
        payload: threads
    }
}


export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_THREADS + '_FULFILLED':
            return Object.assign({}, state, {threads: action.payload})
        
            default:
        return state;
    }
}