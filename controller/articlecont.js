const articledata = require('../mockdata/data')

const incrementlike = async (req, res)=>{
const {id} = req.params;
 const article = articledata.find(article => article.id === Number(id));
if (article) {
    article.likes += 1; 
    return res.json(article)
} else {
    return  res.status(404).json({
        "msg" : "Article not found"
    }); 

}
}

module.exports = incrementlike