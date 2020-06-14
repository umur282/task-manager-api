const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSWORD
  }
});

const sendWelcomeEmail = async (email, name) => {
	const mailOptions = {
		from: 'umur.ozdemir.282@gmail.com',
		to: email,
		subject: 'Thanks for joining in!',
		text: `Welcome to the app, ${name}.` +
					`\nLet me know how you get along with the app.`
	}

	try {
		const info = await transport.sendMail(mailOptions);
	} catch (e) {
		console.log(e);
	}
};

const sendCancelationEmail = async (email, name) => {
	const mailOptions = {
		from: 'umur.ozdemir.282@gmail.com',
		to: email,
		subject: 'Sorry to see you go!',
		text: `Goodbye, ${name}` +
					`\nI hope to see you back sometime soon.`
	}

	try {
		const info = await transport.sendMail(mailOptions);
	} catch (e) {
		console.log(e);
	}
};

module.exports = {
	sendWelcomeEmail,
	sendCancelationEmail
};
