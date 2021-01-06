import axios from 'axios'

export default axios.create(
    {   
        baseURL: 'https://api.unsplash.com',
        headers:{
            Authorization: 'Client-ID fC90uyk21oSc9T23GwUoF_2_RIYdQmDlvUuSmZ5htRs'
        }
    }
)