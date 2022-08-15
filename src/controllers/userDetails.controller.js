const { default: axios } = require('axios');


module.exports = async (req, res)=> {
    
    try {
        const { username } = req.params;

        let url = 'https://api.github.com/users/' + username
        
       
        await axios.get(url)
            .then((response)=>{        

                let out = { userDetails : response.data }

                return res.status(200).json(out);
            })
            .catch((error)=>{
                if(error.code === 'ERR_BAD_REQUEST'){
                    return res.status(404).json({message:'User not found'});
                }
                return res.status(500).json(error);
            })
        

    } catch (error) {
        return res.status(500).json(error);
    }
}