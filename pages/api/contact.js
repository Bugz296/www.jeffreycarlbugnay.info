import * as sgMail from '@sendgrid/mail';

const sendEmail = (dynamic_template_data) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  sgMail.send({    
    to: "jcsbugnay@gmail.com",
    from: "jcsbugnay+profile@gmail.com",
    templateId: process.env.SENDGRID_TEMPLATE_ID,
    dynamic_template_data,
  });
}

export default (req, res) => {
  let { name: full_name, email: email_address, subject, message } = JSON.parse(req.body);
  sendEmail({ full_name, email_address, subject, message });
  res.status(200).json({ status: "Ok"});
}