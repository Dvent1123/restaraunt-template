import axios from 'axios'
const apiName = 'restarauntapi'
//just for redeploy

export const getReviews = async () => {
    let res = await axios.get(apiName, '/')

    return res || []
}
 