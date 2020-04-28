const nodemailer = require("nodemailer");

const nodeMailer = async () => {
    console.log("nodemailer");
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        service: 'gmail',
        secure: false,
        port: 25,
        auth: {
          user: 'fullstack27@gmail.com', 
          pass: "FullStack@27"
        }
      });
    
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: 'fullstack27@gmail.com', 
        to: "nawal2733@gmail.com", 
        subject: "Hello ✔", 
        text: "Hello world?",
        html: "<b>Test Mail test1 user table export in test user table</b>"
      });
    
      console.log("Message sent: %s", info.messageId);
}

module.exports = nodeMailer;