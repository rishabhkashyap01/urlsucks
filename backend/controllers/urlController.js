import { url } from '../db/schema.js';
import { generateRandomCode } from '../utils/generateRandomCode.js';


export const generateShortUrl = async (req, res) => {
    try{
    const { original_url } = req.body;
    let isUnique  = flase ;
    let new_code;
    while(!isUnique){
        new_code = generateRandomCode();
        const isExisting = await url.findOne({short_code: new_code});

        if( !isExisting){
            isUnique = true;
        }
    }
    await url.create({original_url, short_code: new_code});
    res.json({success: true, short_code: new_code});
    }
    catch(error){
        console.log(error.message);
        res.json({sucees: false, message: error.message});
    }

};