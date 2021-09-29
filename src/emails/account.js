const mailgun = require("mailgun-js");
const DOMAIN = 'sandbox2ff2343df00542e886282dc4d3209577.mailgun.org';
const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN });


const sendWelcomeEmail = (email, name) => {
    mg.messages().send({
        from: 'Samuel from Task-manager! <samuel.eskilson@gmail.com>',
        to: email,
        subject: 'Thanks for joining!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    }, (error, body) => {
        if (error) {
            return console.log(error)
        }

        console.log(body)
    })
}

const sendCancellationEmail = (email, name) => {
    mg.messages().send({
        from: 'Samuel from Task-manager! <samuel.eskilson@gmail.com>',
        to: email,
        subject: 'Goodbye!',
        text: `Goodbye ${name}! We are sad to see you leave :( \n\n Would you mind telling us why you decided to leave so we can make our service better for everyone?`
    }, (error, body) => {
        if (error) {
            return console.log(error)
        }

        console.log(body)
    })
}

// mg.messages().send(data, function (error, body) {
// 	console.log(body)
//     console.log(error)
// });

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}