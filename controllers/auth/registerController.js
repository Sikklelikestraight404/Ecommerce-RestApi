import Joi from 'joi'
const registerController = {
    register(req, res, next) {

//validation 
const registerSchema =Joi.object({
    name:Joi.string().min().max().required(),
    email:Joi.email().string().required(),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),

    repeat_password: Joi.ref('password'),
});


const {error} = Joi.validate(req.body);

if(error){
    
}








        res.json({ msg: "hello sj from express" });
    }
}
export default registerController;