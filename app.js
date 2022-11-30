const nodemailer=require('nodemailer');

const  transporter=nodemailer.createTransport({
    service:'hotmail',
    auth:{
        user:'nodeproject123@outlook.com',
        pass: //'Password'
    }
});

const options={
    from:'nodeproject123@outlook.com',
    to:'ishaksk199@gmail.com',
    subject:'testing the nodemailer',
    text:'Hello...How are you??'
}

transporter.sendMail(options,(err,info)=>{
    if(err){
        console.log('error occured');
        return;
    }
    console.log(info);
})
