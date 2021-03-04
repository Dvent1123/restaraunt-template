import Amplify, { API } from "aws-amplify";
import aws_exports from "../aws-exports";
Amplify.configure(aws_exports);
const apiName = 'restarauntapi'
const path = '/'
//just for redeploy

export const getReviews = async () => {
    let res = await API.get(apiName, path)

    return res.data || []
}