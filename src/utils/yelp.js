import axios from 'axios'
var CancelToken = axios.CancelToken;
var cancel;

export const getReviews = async () => {
    if(cancel !== undefined){
        cancel()
    }
    let res = await axios.get('/.netlify/functions/server/api/hello', {
        cancelToken: new CancelToken(function executor(c){
            cancel = c;
        }) 
    })
    .then(response => {
        return response
    })

    return res.data || []
}
 