import Amplify, { API } from "aws-amplify";
import aws_exports from "../aws-exports";
Amplify.configure(aws_exports);
const apiName = 'restarauntapi'
const path = 'https://k559qk1314.execute-api.us-east-2.amazonaws.com/dev'

export const getReviews = async () => {
    let res = await API.get(apiName, path)

    return res.data || []
}