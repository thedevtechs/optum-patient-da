import logoImage from '../public/images/optum_logo.png';
const designation = 'Optum Care Network of Nevada';
import previewImage from '../public/images/home-doctor.png';

const UNIVERSAL_SMA_DATA = {
    shortTitle: 'Optum - Patient Resource Center',
    longTitle: 'Optum - Patient Resource Center',
    number: '1-844-368-5875',
    numberLink: 'tel:+1-844-368-5875',
    logo: logoImage,
    urgentCare: 'https://www.optumcare.com/content/optumcare3/en/state-networks/locations/nevada/ocnv/locations-nav/provider-lookup/serp.html?isAcceptingNewPatients=false&search=89102&radius=50mi&locationTypes=Urgent%20care&latitude=36.1462673&longitude=-115.1829873&network=OCNV',
    urgentCare2:'/find-care-near-you/urgent-care',
    primaryCare: 'https://www.optumcare.com/content/optumcare3/en/state-networks/locations/nevada/ocnv/locations-nav/provider-lookup.html',
    hospitalPartners: 'https://www.empirephysicians.com/en/locations-nav/hospital-locations.html',
    faqMetaDescription(designation) {
        return `Common questions about ` + designation + `. Health plan and health care services, Choosing your care, Making an appointment, Urgent and emergency care, Billing and Prescription Refill, Covid-19.`;
    },
    faqPreviewImage: previewImage,
    metaDescription: '',

}

export default UNIVERSAL_SMA_DATA;
