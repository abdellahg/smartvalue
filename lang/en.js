export default (context) => {
    return new Promise(function (resolve) {
        resolve({
            app: {
                title: `Smart Values`,
                description: 'Comprehensive suite of technical services designed to enhance digital transformation and improve operational efficiency.',
                dir: `ltr`,
                ar: `Arabic`,
                en: `English`,
            },

            input: {
                gender: `Title`,
                mr: `Mr.`,
                ms: `Ms.`,
                name: `Name`,
                mobile: `Mobile Number`,
                message: 'Message',
                email: `Email`,
                country: `Country`,
                city: `City`,
                code: `Code`,
                desc: `Short Description`,
                service: `Required Service`,
                register: `Send`,
                done: 'Registered successfully, our team will contact you shortly.',
                register_error: 'An error occurred during submission, please try again.'
            },

            nav: {
                link_1: 'Home',
                link_2: 'About Us',
                link_3: 'Our Services',
                link_4: 'Our Projects',
                link_5: 'Branches',
                link_6: 'Blog',
                link_7: 'Contact Us',
                link_8: 'Services',
                call_to_action: 'Request a Service'
            },

        })
    })
}