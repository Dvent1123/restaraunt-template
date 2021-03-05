import { API } from "aws-amplify";
const apiName = 'restarauntapi'

//just for redeploy

export const getReviews = async () => {
    let res = await API.get(apiName, '/')

    return res.data || []
}
 