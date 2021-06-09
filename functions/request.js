const nodemailer = require("nodemailer");

exports.handler = async function (event, context) {
  const {email, phone, info} = JSON.parse(event.body);
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });
  try {
    await transporter.sendMail({
      from: '"Fred Foo 👻" <work@prizmarine.agency>',
      to: "work@prizmarine.agency",
      subject: "Новый Запрос",
      html: `<h1>${email}</h1><h2>${phone}</h2><p>${info}</p>`, // html body
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ result: true }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ result: false }),
    };
  }
};
