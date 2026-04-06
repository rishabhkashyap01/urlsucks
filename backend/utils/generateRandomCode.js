

export const generateRandomCode = () => {
    const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let short_code = "";
    for(let i=0;i<6;i++){
        short_code += char.charAt(Math.floor(Math.random() * char.length));
    }
    return short_code;
};
