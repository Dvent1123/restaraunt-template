import axios from 'axios'

export const getReviews = async () => {
    let res = await axios.get('http://localhost:5000')

    return res.data || []
}