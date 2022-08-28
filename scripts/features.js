import {navbar,dropDown,scroll} from '../components/navbar.js'

import navTop from '../components/navTop.js'

import footer from '../components/footer.js'

let navContainer = document.getElementById('navContainer')

navContainer.innerHTML=navbar();

let navTopC = document.getElementById('navTop')

navTopC.innerHTML=navTop();

dropDown();
let footerParent = document.getElementById('footerParent')
 
footerParent.innerHTML=footer();

// scroll();

// Detailed features section

let detailedFeaturesData = [
    {icon: "https://assets.website-files.com/60819f9be381394642b5659e/609b193c4102b13e73c49b87_leadiq-features-capture.svg",
    iconBgColor: "#dcf8ee",
    feature: "One Click Capture",
    description: "LeadIQ grants real-time prospect data verification and enrichment. Records are automatically updated, corrected, and placed in cadences with just one click."},

    {icon: "https://assets.website-files.com/60819f9be381394642b5659e/609b193c88272f287bd18fec_leadiq-features-aalytics.svg",
    iconBgColor: "#fff3d6",
    feature: "Analytics Dashboard",
    description: "Having a bird's eye view of your sales team's performance allows you to see who, where, and what they are targeting, granting you valuable insights to the sales process."},

    {icon: "https://assets.website-files.com/60819f9be381394642b5659e/609b193c4be82c0b58c4005d_leadiq-features-notifications.svg",
    iconBgColor: "#dcf8ee",
    feature: "Job Change Notifications",
    description: "People that have bought from you in the past are more likely to buy from you again. Stay alert to new promotions, and company changes for your most valuable points-of-contacts."},

    {icon: "https://assets.website-files.com/60819f9be381394642b5659e/609b193c4104685c8ee3ab0b_leadiq-features-privacy.svg",
    iconBgColor: "#fff3d6",
    feature: "Privacy",
    description: "As a leader in proactive consumer privacy, LeadIQ helps individuals manage their online identities, while maintaining SOC2 certification and industry security best practices."},

    {icon: "https://assets.website-files.com/60819f9be381394642b5659e/609b193cd5bb71fb32922744_leadiq-features-verification.svg",
    iconBgColor: "#dcf8ee",
    feature: "Data Verification",
    description: "LeadIQ uses a proprietary algorithm to verify email formatting and tests deliverability. Real-time feedback from users ensures data accuracy."},

    {icon: "https://assets.website-files.com/60819f9be381394642b5659e/609b193c8cb0d40f738e5c98_leadiq-features-enrichment.svg",
    iconBgColor: "#fff3d6",
    feature: "Enrichment",
    description: "Old data and new data alike can be messy and incomplete. LeadIQ's real-time enrichment ensures leads, contacts, and accounts are always organized and up to date."},

    {icon: "https://assets.website-files.com/60819f9be381394642b5659e/609b193c2aacc33d59ba2a26_leadiq-features-detection.svg",
    iconBgColor: "#dcf8ee",
    feature: "Duplicate Detection",
    description: "LeadIQ automatically detects and prevents duplicate entries being entered in your integrations, allowing for a seamless workflow."},

    {icon: "https://assets.website-files.com/60819f9be381394642b5659e/609b193c428f098e725483a3_leadiq-features-numbers.svg",
    iconBgColor: "#fff3d6",
    feature: "Office & Mobile Numbers",
    description: "With millions of office and mobile phones at your sales rep's fingertips, LeadIQ gives them time back in their day by automatically locating the correct contact information."},

    {icon: "https://assets.website-files.com/60819f9be381394642b5659e/609b193c16f2a57efeb73076_leadiq-features-emails.svg",
    iconBgColor: "#dcf8ee",
    feature: "Work Emails",
    description: "Utilizing a combination of existing databases and real-time email pattern algorithms, LeadIQ guarantees your sales reps connect to the right person at the right email address. "},

    {icon: "https://assets.website-files.com/60819f9be381394642b5659e/609b193c8bfadd5acb6f6a02_leadiq-features-management.svg",
    iconBgColor: "#fff3d6",
    feature: "Self-Service Management",
    description: "Administrators can use the LeadIQ web app to easily add additional seats, credits, or upgrade their team plan."},

    {icon: "https://assets.website-files.com/60819f9be381394642b5659e/609b193c6d637712d680d0aa_leadiq-features-search.svg",
    iconBgColor: "#dcf8ee",
    feature: "Advanced Database Search",
    description: "Browse our local database of verified leads that have been captured by our other users. Use filters to optimize or narrow down your search."},

    {icon: "https://assets.website-files.com/60819f9be381394642b5659e/609b193cb46bf9f5032ff749_leadiq-features-mapping.svg",
    iconBgColor: "#fff3d6",
    feature: "Custom Field Mapping",
    description: "Map LeadIQ datapoints to standard or custom fields within Salesloft, Outreach and Salesforce. Set default values and even enable field level controls."},

    {icon: "https://assets.website-files.com/60819f9be381394642b5659e/609b20ae2ea76126d5b03479_leadiq-features-sign.webp",
    iconBgColor: "#dcf8ee",
    feature: "Single Sign On (SSO)",
    description: "Provide next level security through centralized access. Save ops teams times when activating or deactivating users."},

    {icon: "https://assets.website-files.com/60819f9be381394642b5659e/611a974d53d6cd98841cf574_territory-management-05-05-05-05.svg",
    iconBgColor: "#fff3d6",
    feature: "Territory Management",
    description: "Align LeadIQ with your internal team assignments. Manage what countries reps can capture data from to avoid overlap and wasted time while ensuring regulatory compliance."},
    
    {icon: "https://assets.website-files.com/60819f9be381394642b5659e/609b1f00eb62061365271b18_leadiq-features-governance.svg",
    iconBgColor: "#dcf8ee",
    feature: "Governance",
    description: "Manage how your team uses LeadIQ. Ensure they follow your company's rules of engagement and regulatory requirements. Control the quality of captured emails, what data types can be captured, and more."},

]

let appendDetailedFeature = (data) => {
    let container = document.getElementById("detailed-feature")
    let cardsWrapper = document.createElement("div");
    data.forEach(({icon, iconBgColor, feature, description}) => {
        
        let cardHolder = document.createElement("div");
        let iconHolder = document.createElement("div");
        let iconImg = document.createElement("img");
        iconImg.src = icon;
        iconHolder.style.backgroundColor=iconBgColor;
        iconHolder.append(iconImg);

        let featureName = document.createElement("h3");
        featureName.innerText = feature;

        let featureDesc = document.createElement("p");
        featureDesc.setAttribute("class", "card-description")
        featureDesc.style.fontSize="17px"
        featureDesc.innerText = description;

        cardHolder.append(iconHolder, featureName, featureDesc);

        cardsWrapper.append(cardHolder)

        container.append(cardsWrapper);


    })
}
appendDetailedFeature(detailedFeaturesData);


// ============== FEATURES SECTION ===============



let count = 0;
function showPara(hiddenP, img, number){
    count++
    if(count%2!=0){
        hiddenP.style.display="block"
        hiddenP.style.transition="0.5"
    } else {
        hiddenP.style.display="none"
        hiddenP.style.transition="0.5"
    }
   console.log("sdg")

   img.innerHTML = number;

}
let featuredImage = document.getElementById("feat-image");
let showPara1 = document.getElementById("showPara1");
let hiddenP1 = document.getElementById("hidden-para1")
console.log()
showPara1.addEventListener("click", ()=>{
    let img1 = `<img src="https://assets.website-files.com/60819f9be381394642b5659e/609b0f20703803f48eb70170_leadiq-tabs-prospecting.webp" alt="Image">`;
    showPara(hiddenP1,featuredImage,img1);
});

let showPara2 = document.getElementById("showPara2");
let hiddenP2 = document.getElementById("hidden-para2")
console.log()
showPara2.addEventListener("click", ()=>{
    let img2 = `<img src="https://assets.website-files.com/60819f9be381394642b5659e/609b0ee0d7fed4bd1d9c2514_leadiq-tabs-analytics.svg" alt="Image">`
    showPara(hiddenP2, featuredImage,img2);
});

let showPara3 = document.getElementById("showPara3");
let hiddenP3 = document.getElementById("hidden-para3")
console.log()
showPara3.addEventListener("click", ()=>{
    let img3 = `<img src="https://assets.website-files.com/60819f9be381394642b5659e/61681cd239434d5940998d51_Governance.webp" alt="Image">`
    showPara(hiddenP3, featuredImage,img3);
});

let showPara4 = document.getElementById("showPara4");
let hiddenP4 = document.getElementById("hidden-para4")
console.log()
showPara4.addEventListener("click", ()=>{
    let img4 = `<img src="https://assets.website-files.com/60819f9be381394642b5659e/61681ecf66af3cd63eff920c_Prospector%20%2B%20Integrations.webp" alt="Image">`
    showPara(hiddenP4, featuredImage, img4);
});




// ============== WALKME IMAGE SECTION ===============


let walkmeImage = document.getElementById("walkme-img");
let walkmeContainer = document.getElementById("walkme-container");



let hoverEffect = (event) => {
    walkmeImage.style.width="530px";
    walkmeImage.style.transition="0.5s";
    // walkmeImage.style.overflow="hidden"
}

let removeEffect = (event) => {
    walkmeImage.style.width="500px";
    walkmeImage.style.transition="0.5s";

}

walkmeContainer.addEventListener("mouseover", hoverEffect);
walkmeContainer.addEventListener("mouseout", removeEffect);
