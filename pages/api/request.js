const nodemailer = require("nodemailer");

export default function handler(req, res) {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true, // use SSL
    auth: {
      user: "work@prizmarine.agency",
      pass: process.env.MAIL_PWD,
    },
  });

  // setup e-mail data with unicode symbols
  const mailOptions = {
    from: '"Me" <work@prizmarine.agency>', // sender address
    to: "work@prizmarine.agency", // list of receivers
    subject: "Новый Запрос ✔", // Subject line
    html: "<b>Hello world 🐴</b>", // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return res.json({ text: error });
    }
    return res.json({ text: info.response });
  });
}
