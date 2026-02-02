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
                send_msg: 'Send Message'
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