import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async (dispatch) =>  {
        const response = await jsonPlaceholder.get('/posts');

        // creating dispatch action manually
        dispatch({type: 'FETCH_POSTS',payload: response})
    };
