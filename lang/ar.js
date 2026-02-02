export default (context) => {
    return new Promise(function (resolve) {
        resolve({
            app: {
                title: `القيم الذكية`,
                description: 'نقدم مجموعة شاملة من الخدمات التقنية الاحترافية التى تساعد الشركات على التطور، التوسع، وتحقيق أهدافها الرقمية بكفاءة عالية.',
                dir: `rtl`,
                ar: `عربي`,
                en: `English`,
            },

            input: {
                gender: `اللقب`,
                mr: `السيد`,
                ms: `السيدة`,
                name: `الاسم`,
                mobile: `رقم الجوال`,
                message: 'الرسالة',
                email: `البريد الإلكتروني`,
                country: `الدولة`,
                city: `المدينة`,
                code: `الكود`,
                desc: `وصف مُختصر`,
                service: `الخدمة المطلوبة`,
                register: `إرسال`,
                done: 'تم التسجيل، سوف يتواصل معك فريقنا قريبًا.',
                register_error: 'حدث خطأ أثناء الإرسال، يرجى المحاولة مرة أخرى.'
            },

            nav: {
                link_1: 'الرئيسية',
                link_2: 'عن الشركة',
                link_3: 'خدماتنا',
                link_4: 'مشاريعنا',
                link_5: 'فروعنا',
                link_6: 'المدونة',
                link_7: 'تواصل معنا',
                link_8: 'خدماتنا',
                call_to_action: 'اطلب خدمة'
            },

        })
    })
}
