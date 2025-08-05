import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PortfolioMetro from "./pages/dark/portfolio-metro";
import BlogClassic from "./pages/dark/blog";
import BlogDetails from "./pages/dark/blogdetails";
import BlogList from "./pages/dark/blog-list";
import BlogList2 from "./pages/dark/blog-list2";
import HomeAsymmetricPortfolio from "./pages/dark/home-asymmetric-portfolio";
import HomeCreativeAgency from "./pages/dark/home-creative-agency";
import HomeCreativePortfolio from "./pages/dark/home-creative-portfolio";
import HomeDigitalAgency from "./pages/dark/home-digital-agency";
import HomeFreelancer from "./pages/dark/home-freelancer";
import HomeMain from "./pages/dark/home-main";
import HomeMinimalPortfolio from "./pages/dark/home-minimal-portfolio";
import HomeModernAgency from "./pages/dark/home-modern-agency";
import HomePersonalVcard from "./pages/dark/home-personal-vcard";
import HomeStartupOnePage from "./pages/dark/home-startup-onepage";
import PageAbout from "./pages/dark/page-about";
import PageAbout2 from "./pages/dark/page-about2";
// import PageAbout3 from "./pages/dark/page-about3";
import PageContact from "./pages/dark/page-contact";
import PageContact2 from "./pages/dark/page-contact2";
import PageContact3 from "./pages/dark/contactus";
import PageError404 from "./pages/dark/page-error404";
// import PageFAQS from "./pages/dark/page-FAQS";
import PageServices from "./pages/dark/page-services";
import PageServicesDetails from "./pages/dark/page-services-details";
import PageServices2 from "./pages/dark/page-services2";
import PageTeam from "./pages/dark/page-team";
import PageTeamSingle from "./pages/dark/page-team-single";
import PortfolioCaptionCursor from "./pages/dark/portfolio-caption-cursor";
import PortfolioGallery from "./pages/dark/portfolio-gallery";
import PortfolioMasonry from "./pages/dark/portfolio-masonry";
import PortfolioOutline from "./pages/dark/portfolio-outline";
import PortfolioParallax from "./pages/dark/portfolio-parallax";
import PortfolioSticky from "./pages/dark/portfolio-sticky";
import Project1 from "./pages/dark/project1";
import Project2 from "./pages/dark/project2";
import Project3 from "./pages/dark/project3";
import Project4 from "./pages/dark/project4";
import Project5 from "./pages/dark/project5";
import Project6 from "./pages/dark/project6";
import ShowcaseCarousel from "./pages/dark/showcase-carousel";
import ShowcaseFullScreen from "./pages/dark/showcase-fullscreen";
import ShowcaseHalfSlider from "./pages/dark/showcase-half-slider";
import ShowcaseInteractiveCenter from "./pages/dark/showcase-interactive-center";
import ShowcaseInteractiveFull from "./pages/dark/showcase-interactive-full";
import ShowcaseInteractiveVertical from "./pages/dark/showcase-interactive-vertical";
import Home from "./pages";
// import Vision from './components/dark/Vision/Vision';
import Environment from "./components/dark/home-main/Environment";
import Mission from './pages/dark/mission';
import RealEstateAgentCRM from './pages/dark/RealEstateAgentCRM';
import Vission from './pages/dark/vission';
import Terms from './pages/dark/terms';
import Privacy from './pages/dark/privacy';
import Refund from './pages/dark/refund ';
import Affiliate from './pages/dark/Affiliate';
import AffiliateWork from './components/dark/home-main/AffiliateWork';
import Benifit from './components/dark/home-main/Benifit';
import Brands from './components/dark/modern-agency/Brands';
import PackagesInclude from './components/dark/home-main/PackagesInclude';
import Pricing from './components/dark/home-main/Pricing';
import RealTestimonials from './components/dark/home-main/RealTestimonials';
import Booksdemo from './pages/dark/Booksdemo';
import Bookcontact from './components/dark/home-main/Bookcontact';
import Responsibility from './components/dark/home-main/Responsibility';
import Network from './components/dark/home-main/Network';
import AffiliateProgram from './components/dark/home-main/AffiliateProgram';
import Solutions from "./pages/dark/Solutions";
import Checkout from './components/dark/home-main/Checkout';
import Checkoutt from './pages/dark/Checkoutt';
import Requestquote from "./pages/dark/Requestquote";
import Requestcallback from "./pages/dark/requestcallback";
import Signnin from "./components/dark/home-main/Signnin";
// import Singnup from "./components/dark/home-main/signup";
import CRMNavbar from "./components/dark/creative-agency/CRMNavbar";
import Automotive from "./pages/dark/Automotive";
import Broadcast from "./pages/dark/Broadcast";
import Lifesci from "./pages/dark/Lifesci";
// import RealEstate from "./pages/dark/RealEstate";
import Servicesfinancial from "./pages/dark/Servicesfinancial";
import Retail from "./pages/dark/Retail";
import RealEstatee from "./pages/dark/RealEstatee";
import Insurance from "./pages/dark/Insurance";
import Hospitality from "./pages/dark/Hospitality";
import Education from "./pages/dark/Education";
import Servicess from "./pages/dark/Servicess";
import Startup from "./pages/dark/Startup";
import ATS from "./pages/dark/ATS";
import Realestatecrm from "./pages/dark/Realestatecrm";
// import Pricinggg from "./pages/dark/Pricinggg";
import Telecallercrm from "./pages/dark/telecallercrm";
import ATSpage from "./components/dark/home-main/ATSpage";
import ATSbenifits from "./components/dark/home-main/ATSbenifits";
import ATSoffer from "./components/dark/home-main/ATSoffer";
// import Sales from "./pages/dark/Sales";
import Realsales1 from "./components/dark/home-main/Realsales1";
// import B2B from "./pages/dark/B2B";
// import OfficeERP from "./pages/dark/OfficeERP";
// import Servicecrm from "./pages/dark/Servicecrm";
import PayrollSystem from "./pages/dark/payrollSystem";
// import PageAbout3 from "./pages/dark/Enterprise";
import Enterprise from "./pages/dark/Enterprise";
// import FAQS from "./pages/dark/faq";
import FAQSpage from "./pages/dark/faq";
import B2b from "./pages/dark/b2bcrm";
import Salescrm from "./pages/dark/salescrm";
// import Servicecrm1 from "./pages/dark/Servicecrm";
import Servicecrmpage from "./pages/dark/Servicecrm";
import Enterprises from "./Enterprise";
import Intro from "./Intro";
import BlogClass from "./blog";
import BlogDetail from "./blogdetails";
import Contactus from "./contactus";
import Missions from "./mission";
// import Vissions from "./vission";
import FAQSpages from "./faq";
import RealEstateAgentCRMs from "./RealEstateAgentCRM";
import B2bcrm from "./b2bcrm";
// import OfficeERPs from "./OfficeERP";
import Realestatecrms from "./Realestatecrm";
import Telecallercrms from "./telecallercrm";
import Salescrms from "./salescrm";
import ATSCRM from "./ATS";
import Servicecrmpages from "./Servicecrm";
import PayrollSystems from "./payrollSystem";
// import Pricings from "./Pricinggg";
import Automotivescrm from "./Automotive";
import Lifesciences from "./Lifesci";
import Servicesfinancials from "./Servicesfinancial";
import RealEstates from "./RealEstatee";
import Retails from "./Retail";
import Insurancess from "./Insurance";
import Hospitalitys from "./Hospitality";
import Educationcrm from "./Education";
import Servicesscrm from "./Servicess";
import Startups from "./Startup";
import Broadcasts from "./Broadcast";
import Affiliates from "./Affiliate";
import Affiliatetesti from "./Affiliatetesti";
import Termsandservice from "./terms";
import Privacypolicy from "./privacy";
import Refundpolicy from "./refund ";
// import Signuppage from "./signup";
import Solution from "./Solutions";    
// import Booksdemoes from "./Booksdemo";
import Requestquotes from "./Requestquote";
import Requestcallbackes from "./requestcallback";
import Signuppage from "./Singnup";
import Pricingss from "./pricing";
import Bookdemo from "./Bookdemo";
import Vision from "./vision";
// import Officeerpss from "./OfficeERP";
// import Officeerpss from "./Officeerp";
import OfficeErpss1 from "./OfficeErp";
import ProductNavbar from "./ProductNavbar";
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/Enterprise" element={<Enterprises />} />
      <Route path="/Intro" element={<Intro />} />
      <Route path="/blog" element={<BlogClass />} />
      <Route path="/blogdetails" element={<BlogDetail />} />
      <Route path="/contactus" element={<Contactus />} />
      <Route path="/mission" element={<Missions />} />
      <Route path="/vision" element={<Vision />} />
      <Route path="/faq" element={<FAQSpages />} />
      <Route path="/RealEstateAgentCRM" element={<RealEstateAgentCRMs />} />
      <Route path="/b2bcrm" element={<B2bcrm />} />
      {/* <Route path="/Officeerp" element={<Officeerp />} /> */}
      {/* <Route path="/Officeerp" element={<Officeerpss />} /> */}
      {/* <Route path="/Officeerp" element={<Officeerpss />} /> */}
      <Route path="/OfficeErp" element={<OfficeErpss1 />} />

      <Route path="/Realestatecrm" element={<Realestatecrms />} />
      <Route path="/telecallercrm" element={<Telecallercrms />} />
      <Route path="/salescrm" element={<Salescrms />} />
      <Route path="/ATS" element={<ATSCRM />} />
      <Route path="/Servicecrm" element={<Servicecrmpages />} />
      <Route path="/ProductNavbar" element={<ProductNavbar />} />
      <Route path="/payrollSystem" element={<PayrollSystems />} />
      {/* <Route path="/Pricinggg" element={<Pricings />} /> */}
      <Route path="/Automotive" element={<Automotivescrm />} />
      <Route path="/Lifesci" element={<Lifesciences />} />
      <Route path="/Servicesfinancial" element={<Servicesfinancials />} />
      <Route path="/RealEstatee" element={<RealEstates />} />
      <Route path="/Retail" element={<Retails />} />
      <Route path="/Insurance" element={<Insurancess />} />
      <Route path="/Hospitality" element={<Hospitalitys />} />
      <Route path="/Education" element={<Educationcrm />} />
      <Route path="/Servicess" element={<Servicesscrm />} />
      <Route path="/Startup" element={<Startups />} />
      <Route path="/Broadcast" element={<Broadcasts />} />
      <Route path="/Affiliate" element={<Affiliates />} />
      <Route path="/Affiliatetesti" element={<Affiliatetesti />} />
      <Route path="/terms" element={<Termsandservice />} />
      <Route path="/privacy" element={<Privacypolicy />} />
      <Route path="/refund" element={<Refundpolicy />} />
      <Route path="/signup" element={<Signuppage />} />
      <Route path="/Solutions" element={<Solution />} />
      {/* <Route path="/Booksdemo" element={<Booksdemoes />} /> */}
      <Route path="/bookdemo" element={<Bookdemo/>} />
      <Route path="/Requestquote" element={<Requestquotes />} />
      <Route path="/requestcallback" element={<Requestcallbackes />} />
      <Route path="/pricing" element={<Pricingss />} />
              {/* <Route path="/" element={<Home />} /> */}
        <Route path="/dark/blog" element={<BlogClassic />} />
        <Route path="/dark/blogdetails" element={<BlogDetails />} />
        <Route path="/dark/blog-list" element={<BlogList />} />
        <Route path="/dark/blog-list2" element={<BlogList2 />} />
        <Route
          path="/dark/home-asymmetric-portfolio"
          element={<HomeAsymmetricPortfolio />}
        />
        <Route
          path="/dark/home-creative-agency"
          element={<HomeCreativeAgency />}
        />
        <Route
          path="/dark/home-creative-portfolio"
          element={<HomeCreativePortfolio />}
        />
        <Route
          path="/dark/home-digital-agency"
          element={<HomeDigitalAgency />}
        />
        <Route path="/dark/home-freelancer" element={<HomeFreelancer />} />
        <Route path="/" element={<HomeMain />} />
        <Route
          path="/dark/home-minimal-portfolio"
          element={<HomeMinimalPortfolio />}
        />
        <Route path="/dark/home-modern-agency" element={<HomeModernAgency />} />
        <Route
          path="/dark/home-personal-vcard"
          element={<HomePersonalVcard />}
        />
        <Route
          path="/dark/home-startup-onepage"
          element={<HomeStartupOnePage />}
        />
                <Route path="/dark/page-about" element={<PageAbout />} />
        <Route path="/dark/page-about2" element={<PageAbout2 />} />
        <Route path="/dark/Enterprise" element={<Enterprise />} />
        {/* <Route path="/dark/page-about3" element={<PageAbout3 />} /> */}
        <Route path="/dark/page-contact" element={<PageContact />} />
        <Route path="/dark/page-contact2" element={<PageContact2 />} />
        <Route path="/dark/contactus" element={<PageContact3 />} />
        <Route path="/dark/page-error404" element={<PageError404 />} />
        <Route path="/dark/faq" element={<FAQSpage />} />
        <Route path="/dark/page-services" element={<PageServices />} />
        <Route
          path="/dark/page-services-details"
          element={<PageServicesDetails />}
        />
        <Route path="/dark/page-services2" element={<PageServices2 />} />
        <Route path="/dark/page-team" element={<PageTeam />} />
        <Route path="/dark/page-team-single" element={<PageTeamSingle />} />
        <Route
          path="/dark/portfolio-caption-cursor"
          element={<PortfolioCaptionCursor />}
        />
        <Route path="/dark/portfolio-gallery" element={<PortfolioGallery />} />
        <Route path="/dark/portfolio-masonry" element={<PortfolioMasonry />} />
        <Route path="/dark/portfolio-metro" element={<PortfolioMetro />} />
        <Route path="/dark/portfolio-outline" element={<PortfolioOutline />} />
        <Route
          path="/dark/portfolio-parallax"
          element={<PortfolioParallax />}
        />
        <Route path="/dark/portfolio-sticky" element={<PortfolioSticky />} />
        <Route path="/dark/project1" element={<Project1 />} />
        <Route path="/dark/project2" element={<Project2 />} />
        <Route path="/dark/project3" element={<Project3 />} />
        <Route path="/dark/project4" element={<Project4 />} />
        <Route path="/dark/project5" element={<Project5 />} />
        <Route path="/dark/project6" element={<Project6 />} />
        <Route path="/dark/showcase-carousel" element={<ShowcaseCarousel />} />
        <Route
          path="/dark/showcase-fullscreen"
          element={<ShowcaseFullScreen />}
        />
        <Route
          path="/dark/showcase-half-slider"
          element={<ShowcaseHalfSlider />}
        />
        <Route
          path="/dark/showcase-interactive-center"
          element={<ShowcaseInteractiveCenter />}
        />
        <Route
          path="/dark/showcase-interactive-full"
          element={<ShowcaseInteractiveFull />}
        />
        <Route
          path="/dark/showcase-interactive-vertical"
          element={<ShowcaseInteractiveVertical />}
        />
        <Route path="/dark/Mission" element={<Mission />} />
        <Route path="/dark/Vission" element={<Vission />} />
        <Route path="/dark/terms" element={<Terms />} />
        <Route path="/dark/privacy" element={<Privacy />} />
        <Route path="/dark/refund" element={<Refund />} />
        <Route path="/dark/Realestatecrm" element={<Realestatecrm/>} />
        <Route path="/dark/Servicecrm" element={<Servicecrmpage />} />
        <Route path="/dark/PayrollSystem" element={<PayrollSystem/>} />
        <Route
          path="/dark/RealEstateAgentCRM"
          element={<RealEstateAgentCRM />}
        />
        <Route
          path="/dark/Broadcast"
          element={<Broadcast />}
        />
         <Route
          path="/dark/Lifesci"
          element={<Lifesci />}
        />
          <Route
          path="/dark/Servicesfinancial"
          element={<Servicesfinancial/>}
        />
         <Route
          path="/dark/Retail"
          element={<Retail/>}
        />
        {/* <Route
          path="/dark/Affiliate"
          element={<Affiliate/>}
        /> */}
         <Route
          path="/dark/AffiliateWork"
          element={<AffiliateWork/>}
        />
          <Route
          path="/dark/Benifit"
          element={<Benifit/>}
        />
          <Route
          path="/dark/Brands"
          element={<Brands/>}
        />
         <Route
          path="/dark/PackagesInclude"
          element={<PackagesInclude/>}
        />
         <Route
          path="/dark/Pricing"
          element={<Pricing/>}
        />
        <Route 
        path='/home-main/Bookcontact'
        element={<Bookcontact/>}
        />
   <Route
    path='/dark/Booksdemo'
    element={<Booksdemo />}
   />
   <Route
     path='/dark/Checkout'
     element={<Checkoutt/>}
   />
   <Route 
   path='/home-main/Checkout'
   element={<Checkout />}
   />
         <Route 
   path='/dark/Requestcallback'
   element={<Requestcallback/>}
   />
     <Route path='/dark/Signnin.jsx' 
     element={<Signnin />}
     />
    {/* <Route path="/dark/signup.jsx" 
    element={<Singnup/>}
    /> */}
     <Route path="/dark/CRMNavbar.jsx" 
    element={<CRMNavbar />}
    />
        {/* <Route
          path='/src/components/dark/Vision'
          element = {<Vision/>}
          > 
        </Route> */}
        <Route path='/src/components/dark/home-main/RealTestimonials'
        element={<RealTestimonials/>}></Route>
        <Route path='/src/components/dark/home-main/Environment' element={<Environment />}></Route>         
        <Route path="/dark/Responsibility" element={<Responsibility />} />
        <Route path="/dark/Network" element={<Network />} />
        <Route path="/dark/AffiliateProgram" element={<AffiliateProgram />} />
        <Route path="/dark/Solutions" element={<Solutions/>} />
        <Route path="/dark/Requestquote" element={<Requestquote/>} />
        <Route path="/dark/Automotive" element={<Automotive/>}/>
       <Route path="/dark/RealEstatee" element={<RealEstatee />}/>
       <Route path="dark/Insurance" element={<Insurance />}/>
       <Route path="/dark/Hospitality" element={<Hospitality />}/>
       <Route path="/dark/Education" element={<Education />}/>
       <Route path="/dark/Servicess" element={<Servicess />}/>
       <Route
          path="/dark/Startup"
          element={<Startup />}
        />
         <Route
          path="/dark/ATS"
          element={<ATS />}
        />
        <Route
          path="/dark/ATSpage"
          element={<ATSpage />}
        />
        <Route
          path="/dark/ATSbenifits"
          element={<ATSbenifits />}
        />
         <Route
          path="/dark/ATSoffer"
          element={<ATSoffer />}
        />
      {/* <Route path="/dark/Pricinggg" element={<Pricinggg />}/> */}
       <Route path="/dark/telecallercrm" element={<Telecallercrm />}/> 
       {/* <Route path="/dark/OfficeERP" element={<OfficeERP />}/> */}
       <Route path="/dark/b2bcrm" element={<B2b/>} />
       <Route path="/dark/Realsales1" element={<Realsales1/>} />
       <Route path="/dark/salescrm" element={<Salescrm />} />
      </Routes>
    </Router>

  );
}

export default App;
