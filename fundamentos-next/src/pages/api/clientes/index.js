export default function handler(req, res){
    /* res.status(222).send() */
    if( req.method === 'GET'){
        handleGET(req,res);
    } else {
        res.status(405).send()
    }

}

function handleGET(req, res){
    res.status(200).json({
        id: 1,
        nome: 'Eduardo'
    })
}