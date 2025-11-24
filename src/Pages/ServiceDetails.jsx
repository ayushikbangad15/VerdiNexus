import React from 'react'
import { useParams } from 'react-router-dom';

  const Serviceitems = [
        {
            name: 'ESG Snapshot Report',
            description: 'A fast, 5-day assessment of your company’s environmental, social, and governance readiness. This includes gap identification and high-level action points to align with CSRD.',
            key: {
                list1: 'Delivery: PDF report via email (up to 15 pages)',
                list2: 'Price: €149',
                list3: 'Best for: First-time ESG reporters'
            },
            btn: 'Get Snapshot'
        },
        {
            name: 'Carbon Footprint Estimator',
            description: 'Estimate your Scope 1 & 2 emissions (and optionally Scope 3) based on basic company input. Perfect for internal audits, client transparency, or investor decks.',
            key: {
                list1: 'Delivery: Spreadsheet + visual summary (PDF)',
                list2: 'Includes: CO₂e metric tons for each scope, key reduction tips',
                list3: "Price: Scope 1 & 2: €129",
                list4:  "Scope 1–3: €199"
            },
            btn: 'Estimate My Carbon Footprint'
        },
         {
            name: 'Sustainability Policy Gap Detector',
            description: 'Check your company’s existing documents (HR, procurement, etc.) for alignment with EU Green Policies and social expectations. You’ll get a customized checklist of whats missing.',
            key: {
                list1: 'Delivery: PDF checklist + recommendations',
                list2: 'Includes: CO₂e metric tons for each scope, key reduction tips',
                list3: "Price: €159"},
            btn: 'Audit My Policies'
        },
         {
            name: 'EU ESG Reporting Format Converter (XBRL Ready)',
            description: 'Send us your raw sustainability data — we’ll convert it into EU CSRD-compliant digital format (XBRL-compatible). No manual formatting required.',
            key: {
                list1: 'Delivery: Structured digital file + printable version',
                list2: 'Includes: CO₂e metric tons for each scope, key reduction tips',
                list3: "Price: €399"},
            btn: 'Convert My Data'
        },
         {
            name: 'EEU Green Claim Verifier',
            description: 'Planning to make an eco-friendly product claim? This tool checks whether your claim complies with EU’s Green Claims Directive and backs it with scientific evidence or sourcing validation.',
            key: {
                list1: 'Delivery: Claim review + proof request + compliance verdict',
                list2: "Price: €59"},
            btn: 'Verify My Claim'
        },
         {
            name: 'Sustainability Content Rewriter',
            description: 'Send us your policy, website, or presentation content (up to 500 words), and we’ll rewrite it to be ESG-focused, professional, and aligned with EU tone and keywords.',
            key: {
                list1: 'Delivery: Word doc + clean PDF',
                list2: 'Price: €69',},
            btn: 'Rewrite My Content'
        },
         {
            name: 'EU ESG Trends Monthly Brief (Subscription)',
            description: 'Get the latest EU ESG regulation updates, sector-specific alerts, and sustainability insights each month directly in your inbox.',
            key: {
                list1: 'Delivery: Email newsletter',
                list2: 'Price: General: €19/month',
                list3: "Industry-specific: €39/month"},
            btn: 'Subscribe Now'
        },
         {
            name: 'Employee ESG Awareness Quiz + Certificate Tool',
            description: 'Give your team an online quiz to test their ESG knowledge. Upon passing, they receive a customized VerdiNexus ESG certificate.',
            key: {
                list1: 'Delivery: Web link + downloadable certificate',
                list2: 'Price:<50 employees: €99',
                list3: "50–200 employees: €179",
            list4:" Unlimited: €299"},
            btn: 'Launch Quiz for Team'
        },
          {
            name: 'Green HR Policy Pack',
            description: 'Get ready-to-use HR policies that support sustainability goals — including remote work, inclusive hiring, and ethical labor statements.',
            key: {
                list1: 'Delivery: Word + PDF editable templates',
                list2: 'Price: €89',
                list3: "50–200 employees: €179",},
            btn: 'Download Now'
        },
          {
            name: 'Eco-Conscious Procurement Guide',
            description: 'This toolkit helps you redesign your procurement process to prioritize local, ethical, and low-carbon suppliers.',
            key: {
                list1: 'Delivery: Toolkit PDF + Editable Checklist',
                list2: 'Price: €79',},
            btn: 'Start Greener Buying'
        },
          {
            name: 'EU Regulation Tracker Tool',
            description: 'Track relevant ESG regulations for your industry and location. Updated quarterly to stay current with EU rules.',
            key: {
                list1: 'Delivery: Interactive spreadsheet + PDF overview',
                list2: 'Price:Free version (basic)',
                list3: "€29 Premium",},
            btn: 'Download Regulation Tracker'
        },
          {
            name: "Visual ESG Impact Report Template",
            description: 'Make your ESG report visually stunning with a plug-and-play template for PowerPoint or Canva, already aligned to CSRD design principles.',
            key: {
                list1: 'Delivery: PPTX + Canva link',
                list2: 'Price: €109',},
            btn: "Get the Template"
        },
    
    ]

  
const ServiceDetails = () => {
       {/* particular Service Details are shown there dynamically */}
    const tool = [
        { name: 'Green Ctaim Verifier', status: 'Start Now', },
        { name: 'ESG Snapshot Generator', status: 'Start Now', },
        { name: 'Carbon Footprint Estimator', status: 'Start Now' },
        { name: 'ESG Policy & Code Generator', status: 'Start Now' },
        { name: 'Sustainable Procurement Audit', status: 'Start Now' },
        { name: 'Sustainability Content Rewriter', status: 'Start Now' },
        { name: 'ESG Reporting Format Converter', status: 'Start Now' },
        { name: 'Sustainability Content Rewriter', status: 'Coming Soon' },
        { name: 'Employee ESG Awareness Quiz', status: 'Start Now', },
    ];


        const {serviceId} = useParams();
        const items = Serviceitems[serviceId]
    if(!items){
        return <div className="p-6">Service not found.</div>;
    }else{
    return (
        <>
            <div className='bg-green-950 h-[40vh] flex justify-center items-end text-3xl text-white pb-4'><h1>Services</h1></div>
            <div className='w-[100%] min-h-screen flex justify-between items-start my-8'>
                <div className="leftDetails w-[100%] border-2 px-20 space-y-10 rounded-2xl min-h-screen ">
                    
                        <h1 className='text-4xl text-center mt-8'>{items.name}</h1>
                    <img className='md:w-[450px] mx-auto' src="https://xenergy.hr/uploads/2025/05/nada-dizdarevic.jpg" alt="" />
                    <div>
                            <p className='md:text-2xl text-sm'>{items.description}</p>
                
                        <ul className='list-disc my-5  md:text-xl '>
                                <li>{items.key.list1}</li>
                                <li>{items.key.list2}</li>
                                <li>{items.key.list3}</li>
                                <li>{items.key.list4}</li>


                        </ul>
                        <button className='px-4 py-3 bg-green-400 rounded-bl-xl  rounded-tr-xl my-6'>{items.btn}</button>
                    </div>
                </div>
                <div className="right hidden md:block w-[30%] border-2 rounded-2xl min-h-screen bg-green-200">
                    <h1 className='py-8 ml-4 text-2xl'>Related</h1>
                    <ul className='px-4  space-y-5'>
                        {tool.map((items) => (
                            <li>{items.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
}
export default ServiceDetails