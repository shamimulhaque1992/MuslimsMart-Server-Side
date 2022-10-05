import jwt from 'jsonwebtoken'
export const tokenGenerator = (email)=> {
    // console.log('token email',email)
    const token = jwt.sign({email:email},process.env.ACCESS_TOKEN, {expiresIn: '1h'});
    console.log(token)
    return token;
}