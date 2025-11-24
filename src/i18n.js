import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            Logo: 'Verdinexus',
            home: 'Home',
            service: 'Services',
            About: 'About',
            Contact: 'Contact',
            fQ: 'F&Q',
            Language: 'English',
            heading: 'Welcome to Your ESG Command Center',
            heading_paragraph: 'Track, Improve, and Report Your Sustainability Journey',
            Blog: 'Blog',
            boxhead: 'Our member is elected Young Energy Ambassador for 2025',
            boxparagraph: 'The member of our Assembly, Nađa Dizdarević, was elected Young Energy Ambassador for 2025. Among more than',
            text_head: 'Who We Are ?',
            text_paragraph: "  VerdiNexus was founded with a clear mission: to help small and medium-sized enterprises (SMEs) across Europe embrace sustainability without being overwhelmed by complexity or costs. We recognized that most ESG consulting firms cater to large corporations — leaving local businesses behind Our platform bridges that gap.",
            next_heading: 'Our Vision:',
            next_paragraph:'VerdiNexus empowers small and medium-sized enterprises across Europe to navigate evolving ESG sustainability standards with agility and affordability. We provide actionable tools, expert guidance, and comprehensive services that make sustainable practices measurable, achievable, and aligned with regulatory compliance.',
            next_heading1:'Why We Exist:',
            next_heading2: ' The EU’s evolving regulatory landscape including the CSRD and Taxonomy Regulation now requires even smaller firms to report on ESG metrics. But hiring consultants, training staff, or manually interpreting frameworks can be expensive and confusing. We solve this by offering ready-to-use tools, templates, reports, and smart checkups that help your business align with European sustainability goals.'

        },

    },
    // {*// { backup ke liye
    //             para1: "No meetings or long contracts — all services are delivered digitally",
    //             para2: "Expert-grade outputs without hiring consultants",
    //             para3: "Built for European SMEs that want to grow sustainably",
    //             para4: "Pay-per-service or subscribe monthly"
    //         }*//}
    // {
    //             para1: "ESG Snapshot Reports",
    //             para2: "Carbon Footprint Calculators",
    //             para3: "Green Claims Verification",
    //             para4: "Regulation Trackers & Templates"
    //         },
    hi: {
        translation: {
            Logo: 'वर्डीनेक्सस',
            home: 'होम',
            service: 'सर्विसेज',
            About: 'अबाउट',
            Contact: 'कांटेक्ट',
            fQ: 'फ&क्यू ',
            Language: 'हिंदी',
            heading: 'वेलकम तू योर ESG कमांड सेण्टर ',
            heading_paragraph: 'ट्रैक इम्प्रूव एंड रिपोर्ट योर सस्टेनेबिलिटी  जर्नी ',
            Blog: 'Blog',
            boxhead: 'आवर  मेंबर इस ेलेक्टेड यंग एनर्जी एम्बेसडर फॉर 2025 ',
            boxparagraph: 'थे मेंबर ऑफ़ आवर असेंबली नाडा डिज़दारेविक वास्  ेलेक्टेड यंग एनर्जी एम्बेसडर फॉर 2025. अमंग मोरे थान',
            text_head: 'हु वी आर ?'
        },
    },
}

i18n.use(LanguageDetector);
i18n.use(initReactI18next)
i18n.init({
    resources,
    fallbacklng: 'en',
    interpolation: {
        escapeValue: false,
    },
})


export default i18n;