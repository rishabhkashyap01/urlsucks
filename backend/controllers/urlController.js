import { url } from '../db/schema.js';
import { generateRandomCode } from '../utils/generateRandomCode.js';


export const generateShortUrl = async (req, res) => {
    try{
    const { original_url } = req.body;
    let isUnique  = false ;
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
        res.json({success: false, message: error.message});
    }

};

export const handleRedirect = async (req, res) => {
    try{
        const { shortUrl } = req.params; // 1. Grab the code from the URL

        // 2. Look for it in your "Urls" collection
        const entry = await url.findOne({ shortUrl });

        // 3. If it exists, send the user away!
        if (entry) {
            return res.redirect(entry.original_url); 
        }
        res.json({sucess: true })
    }
    catch(error){
        console.log("Redirect Error: ", error.message);
        res.json({sucess: false, message: error.message})
    }
}