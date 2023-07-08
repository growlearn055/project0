import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import sgMail from '@sendgrid/mail'

const app = express();


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// Configure Nodemailer transporter
// const transporter = nodemailer.createTransport({
//   service: 'Gmail', // e.g., 'Gmail', 'Outlook'
//   auth: {
//     user: 'growlearn055@gmail.com',
//     pass: 'Grow@learn_98',
//   },
// });

// Middleware to parse JSON-encoded bodies
app.use(bodyParser.json());

// Define a route to handle sending emails
app.post('/sendEmail', (req, res) => {
  const { email, message } = req.body;

  // const mailOptions = {
  //   from: email,
  //   to: ,
  //   subject: 'Inquiry for Quotation ',
  //   text: `Email: ${email}\n\nMessage: ${message}`,
  // };

  // transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     console.error(error);
  //     res.status(500).send('Error sending email');
  //   } else {
  //     console.log('Email sent: ' + info.response);
  //     res.status(200).send('Email sent successfully');
  //   }
  // });

  const msg = {
    to: 'growlearn055@gmail.com', // Change to your recipient
    from: email, // Change to your verified sender
    subject: 'Inquiry for Quotation',
    text: `Email: ${email}\n\nMessage: ${message}`,
    html: `<strong> ${message} </strong> `,
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
    

});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});



  


