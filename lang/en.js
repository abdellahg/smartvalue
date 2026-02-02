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

            v: {
                required: 'This field is required',
                phone_numeric: 'Phone number must be numeric',
                phone_length: 'Phone number must be 10 digits',
                phone_start: 'Phone number must start with 05',
                email: 'Invalid email address'
            },

            services_page: {
                hero_badge: 'Our Professional Services',
                hero_title: 'Integrated Digital Solutions to Empower Your Business',
                hero_desc: 'We dedicate our technical expertise to providing a wide range of services that ensure a smooth and secure digital transformation for your project, focusing on efficiency and innovation.',
                cta_button: 'Explore More',

                s1_title: 'Integrated Digital Platforms',
                s1_desc: 'Designing and developing innovative platforms to enhance effective communication and link different systems inside and outside the organization.',
                s1_p1: 'Digital Customer Experience (DCX) Platforms',
                s1_p2: 'System Integration & API Connectivity',
                s1_p3: 'Digital Collaboration & Teamwork Platforms',
                s1_p4: 'User Journey Analysis & Digital Transformation',

                s2_title: 'Migration to the Cloud',
                s2_desc: 'Innovative migration solutions that help organizations improve operational efficiency, ensure business continuity, and reduce risks.',
                s2_p1: 'Comprehensive Cloud Transformation Strategy',
                s2_p2: 'Secure Data & Systems Migration',
                s2_p3: 'Hybrid/Multi-Cloud Infrastructure Management',
                s2_p4: 'Cloud Cost & Performance Optimization',

                s3_title: 'Service & Data Analysis & Monitoring',
                s3_desc: 'Advanced solutions for data analysis and monitoring to improve performance and support accurate data-driven decisions.',
                s3_p1: 'Big Data Analysis',
                s3_p2: 'Real-time System Performance Monitoring',
                s3_p3: 'Advanced Predictive Reports & Analytics',
                s3_p4: 'Interactive Decision-Making Dashboards',

                s4_title: 'AI and Robotics',
                s4_desc: 'Employing AI and robotics technologies to reduce operational costs, increase productivity, and speed up task completion.',
                s4_p1: 'Developing Scalable Machine Learning models',
                s4_p2: 'Robotic Process Automation (RPA)',
                s4_p3: 'Conversational AI & Support Systems',
                s4_p4: 'AI-driven Predictive Analytics',

                s5_title: 'Internet of Things (IoT) Solutions',
                s5_desc: 'Smart solutions to link assets and data into an integrated network to improve operational efficiency and enhance control and monitoring.',
                s5_p1: 'Connecting smart devices and sensors',
                s5_p2: 'Real-time sensor data analysis',
                s5_p3: 'Industrial and office process automation',
                s5_p4: 'Optimizing resource consumption efficiency',

                s6_title: 'Enterprise Technical Solutions',
                s6_desc: 'Integrated solutions in Information Technology Service Management (ITSM) and Customer Relationship Management (CRM) to improve user experience.',
                s6_p1: 'ITSM implementation for technical services',
                s6_p2: 'Custom CRM solutions for customer relationship',
                s6_p3: 'Enterprise workflow & process automation',
                s6_p4: 'Digital enhancement of employee/customer experience'
            },

            about: {
                slogan: 'About Smart Values',
                title: 'About The Company',
                desc: 'Smart Values is a leading Saudi company in IT and digital transformation, founded in 2017 to support the Kingdom\'s digital transformation journey. Since its inception, the company has contributed to developing innovative technical solutions and supporting major digital projects.',
                quote: 'Our ambition is the sky limit, and everything is possible with the will and creativity of Saudis',
                quote_author: 'HRH Prince Mohammed bin Salman bin Abdulaziz',
                vision_title: 'Our Vision',
                vision_desc: 'To be the trusted technical partner and create a tangible impact through innovative solutions, relationships based on effective communication, and a passion that drives quality in various sectors.',
                mission_title: 'Our Mission',
                mission_desc: 'Providing practical and innovative solutions executed professionally, by understanding the real need, clear communication, and focusing on achieving a sustainable impact that supports business development and digital transformation.',
                believe_title: 'What We Believe In'
            },

            values: {
                sub_title: 'Our Values',
                title: 'The Principles That Guide Us',
                item_1_title: 'Innovation',
                item_1_desc: 'We always strive to adopt the latest technologies and provide creative solutions.',
                item_2_title: 'Professionalism',
                item_2_desc: 'We are committed to the highest standards of quality and professionalism in executing our projects.',
                item_3_title: 'Transparency',
                item_3_desc: 'We believe in clarity and honesty in all our dealings with our clients.',
                item_4_title: 'Continuous Development',
                item_4_desc: 'We are keen to keep up with everything new in the world of technology.'
            },

            timeline: {
                sub_title: 'Our Journey',
                title: 'A History of Achievements',
                item_1_year: '2017',
                item_1_title: 'Establishment',
                item_1_desc: 'Launch of Smart Values in Riyadh.',
                item_2_year: '2019',
                item_2_title: 'Expansion',
                item_2_desc: 'Expanding the scope of services to include cybersecurity solutions.',
                item_3_year: '2021',
                item_3_title: 'Partnerships',
                item_3_desc: 'Strategic partnerships with major global technology companies.',
                item_4_year: '2023',
                item_4_title: 'Leadership',
                item_4_desc: 'Receiving recognition awards in the field of digital transformation.'
            },

            contact_page: {
                hero_title: 'Contact Us to Turn Your Vision into a Digital Reality',
                hero_subtitle: 'We are here to help you innovate and grow through advanced technical solutions and a specialized team.',
                hero_desc: 'We are here to help you innovate and grow through advanced technical solutions and a specialized team.',
                form_title: 'Send Us a Message',
                form_desc: 'Fill out the form below and our team will get back to you as soon as possible.',
                label_name: 'Full Name',
                holder_name: 'Enter your full name',
                label_phone: 'Mobile Number',
                label_email: 'Email Address',
                holder_email: 'mail@example.com',
                label_service: 'Service Type',
                label_msg: 'Your Message',
                holder_msg: 'How can we help you?',
                btn_submit: 'Send Message',
                info_title: 'Contact Information',
                info_desc: 'Contact us directly through the following channels or visit our office.',
                info_call: 'Call Us',
                info_email: 'Email Address',
                info_addr: 'Address',
                info_social: 'Follow Us',
                why_title: 'Why Contact Us?',
                why_1: 'Free Technical Consultations',
                why_2: 'Custom Solutions for Your Business',
                why_3: 'Premium 24/7 Technical Support',
                why_4: 'Speedy Execution and Response'
            },

            privacy: {
                title: 'Privacy Policy',
                last_updated: 'Last Updated: 2026',
                intro: 'Smart Values ​​Company (“we,” or “our Service”) operates the website https://smart-values.sa. This page explains our policies regarding the collection, use, and disclosure of personal data when you use our Service, and the choices available to you regarding this data. As we use your data to improve our Service, you consent to the collection and use of information in accordance with this policy.',
                s1_title: '1. Collection and Use of Information',
                s1_desc: 'We collect your data for various purposes, including improving our Service.',
                s2_title: '2. Types of Data Collected',
                s2_p1_title: 'a. Personal Data:',
                s2_p1_desc: 'We ask you to provide us with certain personal information that can be used to contact or identify you (“Personal Data”) while you are using our Service.',
                s2_p2_title: 'b. Usage Data:',
                s2_p2_desc: 'We may also collect information about how you access and use the Service (“Usage Data”). Usage data may include information such as your device’s Internet Protocol (IP) address, browser type, browser version, the pages you visited on our service, the date and time of your visit, the time spent on those pages, unique device identifiers, and other personal data.',
                s3_title: '3. Use of Data',
                s3_intro: 'https://smart-values.sa uses the type of data collected for various purposes:',
                s3_list: [
                    'To provide and maintain the service.',
                    'To notify you of changes to our service.',
                    'To allow you to participate in interactive features of our service when you choose to do so.',
                    'To provide customer care and support.',
                    'To provide analytics or valuable information so that we can improve the service.',
                    'To monitor service usage.',
                    'To detect, prevent, and address technical issues.'
                ],
                s4_title: '4. Disclosure of Data',
                s4_intro: 'Legal Requirements: https://smart-values.sa may disclose your personal data in the reasonable belief that such action is necessary to:',
                s4_list: [
                    'Comply with a legal obligation.',
                    'Protecting and defending the rights or property of Smart Values ​​Company.',
                    'Preventing or investigating the commission of a potential crime related to the Service.',
                    'Protecting the safety of users of the Service or the public.',
                    'Protection against legal liability.'
                ],
                s5_title: '5. Data Security',
                s5_desc: 'The security of your data is important to us, but remember that no method of transmitting data over the Internet or storing it electronically can be guaranteed to be 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee absolute security.',
                s6_title: '6. Links to Other Sites',
                s6_desc: 'Our Service may contain links to other sites not operated by Smart Values ​​Company. Please note that if you click on a link to a third party, you will be directed to that party. We also recommend reviewing the privacy policies of each site you visit.',
                s7_title: '7. Changes to the Privacy Policy',
                s7_desc: 'We may update this Privacy Policy.',
                s8_title: '8. Contact Us',
                s8_desc: 'If you would like more detailed information about our policies or have any questions, please do not hesitate to contact us.'
            },

            terms: {
                title: 'Terms and Conditions',
                intro: 'Please review the following Terms and Conditions carefully before using our website. Your use of this website signifies your full acceptance of these Terms and Conditions. If you do not agree to any of these terms, please do not use the website.',
                s1_title: '1. Use and Access',
                s1_list: [
                    'You must be of legal age to use this website.',
                    'We reserve the right to suspend or terminate access to the website without prior notice for any violation of these Terms.'
                ],
                s2_title: '2. Intellectual Property',
                s2_list: [
                    'All content on this website, including text, images, graphics, and trademarks, is the intellectual property of Smart Values Company or its licensee and may not be copied or distributed without prior permission.'
                ],
                s3_title: '3. Personal Data',
                s3_list: [
                    'Personal data is collected in accordance with our Privacy Policy. Please read the Privacy Policy for more information about how personal data is collected and used.'
                ],
                s4_title: '4. Warranty and Disclaimer',
                s4_list: [
                    'This website is provided on an "as is" basis without any express or implied warranties.',
                    'We are not liable for any losses or damages resulting from the use of, or inability to use, the Site.'
                ],
                s5_title: '5. Links to Third-Party Websites',
                s5_list: [
                    'The Site may contain links to third-party websites, and we are not responsible for the content of these websites.'
                ],
                s6_title: '6. Changes to Terms and Conditions',
                s6_list: [
                    'We reserve the right to change or modify these Terms and Conditions at any time, and any changes will be posted on this page.'
                ],
                s7_title: '7. Contact',
                s7_list: [
                    'To contact us or with any questions regarding the Terms and Conditions, please use the email address listed on the Contact Us page.'
                ]
            },

            home: {
                title: 'Home',
                hero_title: 'Professional Tech Solutions with Global Standards',
                hero_desc: 'We merge creativity with technology to deliver innovative digital solutions that help your company grow and excel in the digital age.',

                values_subtitle: 'About Us',
                values_title: 'Our Values',
                values_desc: 'We are committed to professionalism and innovation in everything we provide, striving to achieve the highest levels of satisfaction for our clients through customized technical solutions that drive their business forward.',

                services_subtitle: 'What We Offer',
                services_title: 'Our Services',
                s1_title: 'Integrated Digital Platforms',
                s1_desc: 'Designing and developing innovative platforms to enhance effective communication and link different systems inside and outside the organization.',
                s2_title: 'Migration to the Cloud',
                s2_desc: 'Innovative migration solutions that help organizations improve operational efficiency, ensure business continuity, and reduce risks.',
                s3_title: 'Service & Data Analysis & Monitoring',
                s3_desc: 'Advanced solutions for data analysis and monitoring to improve performance and support accurate data-driven decisions.',
                s4_title: 'AI and Robotics',
                s4_desc: 'Employing AI and robotics technologies to reduce operational costs, increase productivity, and speed up task completion.',
                s5_title: 'Internet of Things (IoT) Solutions',
                s5_desc: 'Smart solutions to link assets and data into an integrated network to improve operational efficiency and enhance control and monitoring.',
                s6_title: 'Enterprise Technical Solutions',
                s6_desc: 'Integrated solutions in Information Technology Service Management (ITSM) and Customer Relationship Management (CRM) to improve user experience.',

                process_subtitle: 'Work Journey',
                process_title: 'How We Work',
                step_1: 'Assessment & Consultation',
                step_1_desc: 'We start with a deep understanding of your needs and business goals.',
                step_2: 'Planning & Strategy',
                step_2_desc: 'Mapping out the most effective technical roadmap.',
                step_3: 'Implementation',
                step_3_desc: 'Building solutions with the latest technologies and highest standards.',
                step_4: 'Testing',
                step_4_desc: 'Ensuring quality and perfect performance for every part.',
                step_5: 'Launch & Delivery',
                step_5_desc: 'Full support during the launch phase and beyond.',

                why_subtitle: 'Why Us?',
                why_title: 'Why Smart Values?',
                feature_1: 'Distinguished Team',
                feature_1_desc: 'A selection of tech experts and creators committed to success.',
                feature_2: 'Strategic Partnerships',
                feature_2_desc: 'Success partners for the best companies and entities in the Kingdom.',
                feature_3: 'We Work to Achieve',
                feature_3_desc: 'Focusing on tangible results and achieving our clients\' goals.',

                clients_title: 'Our Clients',
                partners_title: 'Our Partners',

                contact_subtitle: 'Contact Us',
                contact_title: 'Let\'s Start Building Your Digital Success Story',
                contact_desc_footer: 'Our team is ready to help with any inquiry or service request.',
                send_msg: 'Send Message',

                stats_title: 'Our Achievements in Numbers',
                stats_subtitle: 'We don\'t just talk about quality, we prove it through our tangible results in the Saudi market.',
                stat_1_val: '+500',
                stat_1_label: 'Projects Delivered',
                stat_2_val: '+10',
                stat_2_label: 'Years of Experience',
                stat_3_val: '+50',
                stat_3_label: 'Experts & Consultants',
                stat_4_val: '100%',
                stat_4_label: 'Client Satisfaction',

                tech_stack_title: 'We Use World-Class Technologies',
                trust_badge_title: 'Trusted By',
                trust_badge_desc: '+100 Brands',

                clients_heading: 'Building Success Together',
                contact_heading_1: 'Let\'s Build Your',
                contact_heading_2: 'Digital Future'
            },

            nav: {
                link_1: 'Home',
                link_2: 'About Us',
                link_3: 'Our Services',
                link_4: 'Our Clients',
                link_5: 'Our Partners',
                link_6: 'Blog',
                link_7: 'Contact Us',
                link_8: 'Services',
                call_to_action: 'Request a Service'
            },

            footer: {
                copyrights: 'Smart Values Information Technology - All rights reserved',
                terms: 'Terms & Conditions',
                privacy: 'Privacy Policy',
                phone: '920000000',
                email: 'info@smart-value.sa',
                address: 'Riyadh, Saudi Arabia'
            }

        })
    })
}