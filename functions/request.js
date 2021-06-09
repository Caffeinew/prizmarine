const nodemailer = require("nodemailer");

exports.handler = async function (event, context) {
  if (event.httpMethod === "POST") {
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    await transporter.sendMail(
      {
        from: "<work@prizmarine.agency>",
        to: "work@prizmarine.agency",
        subject: "Новая заявка",
        html: event.body,
      },
      (error) => {
        if (error) {
          return {
            statusCode: 500,
            body: JSON.stringify({ result: false }),
          };
        }
        return {
          statusCode: 200,
          body: JSON.stringify({ result: true }),
        };
      }
    );
  }
};
