const { default: axios } = require('axios');


module.exports = async (req, res)=> {
    
    try {
        const { username } = req.params;

        let url = 'https://api.github.com/users/' + username + '/repos'
        
        await axios.get(url)
            .then((response)=>{        

                let out = {
                    userDetail : response.data
                }

                return res.send(out);
            }).catch((error)=>{
                console.log(error);
            })
        return res.send('nao encontrado');

    } catch (error) {
        return res.status(500).json(error);
    }
}