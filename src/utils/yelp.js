import Amplify, { API } from "aws-amplify";
import aws_exports from "../aws-exports";
Amplify.configure(aws_exports);
const apiName = 'restarauntapi'
//just for redeploy

export const getReviews = async () => {
    let res = await API.get(apiName)

    return res.data || []
}