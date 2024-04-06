const cron = async()=>{

try{
    res.status(200).json({msg:"Hello"})
}catch(error){

    res.status(500).json({msg:"cron error"})
}
}

module.exports={cron}

