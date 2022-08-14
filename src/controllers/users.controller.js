const { default: axios } = require('axios');


module.exports = async (req, res)=> {
    
    try {
        const { since } = req.query;

        let url = 'https://api.github.com/users'
        
        if(since){
            url = url+'?since='+since
        }
        
        await axios.get(url)
            .then((response)=>{
                var listUsers = response.data;
              
                let nextPage = listUsers[listUsers.length-1]
                nextPage= nextPage.id

                let out = {
                    nextPage : nextPage,
                    users : response.data
                }

                return res.send(out);
            }).catch((error)=>{
                console.log(error);
            })

    } catch (error) {
        return res.status(500).json(error);
    }
}