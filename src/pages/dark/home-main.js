import { Helmet } from 'react-helmet';
import Lines from '../../components/dark/common/Lines';
import ProgressScroll from '../../components/dark/common/ProgressScroll';
import Cursor from '../../components/dark/common/cusor';
import LoadingScreen from '../../components/dark/common/loader';
import Blog from '../../components/dark/home-main/Blog';
import Clients from '../../components/dark/home-main/Clients';
import Footer from '../../components/dark/home-main/Footer';
import Header from '../../components/dark/home-main/Header';
import Intro from '../../components/dark/home-main/Intro';
import Marquee from '../../components/dark/home-main/Marquee';
import Navbar from '../../components/dark/home-main/Navbar';
import Portfolio from '../../components/dark/home-main/Portfolio';
import Services from '../../components/dark/home-main/Services';
import Services2 from '../../components/dark/home-main/Services2';
import Team from '../../components/dark/home-main/Team';
import Testimonials from '../../components/dark/home-main/Testimonials';
import Environment from '../../components/dark/home-main/Environment';
import Responsibility from '../../components/dark/home-main/Responsibility';
import Network from '../../components/dark/home-main/Network';
import Start_exploring from '../../components/dark/common/Start_exploring';
import Whatsapp from '../../components/dark/common/Whatsapp';
import Benifit from '../../components/dark/home-main/Benifit';
import RealCRM2 from '../../components/dark/home-main/RealCRM2';
import RealCRM3 from '../../components/dark/home-main/RealCRM3';
import Homeenterprice from '../../components/dark/home-main/Homeenterprice';
import Homeprinciples from '../../components/dark/home-main/Homeprinciples';
import CRMdesign from '../../components/dark/home-main/CRMdesign';
// import CRMdesign from '../../components/dark/home-main/CRMdesign';



export default function HomeMain() {
  return (
    <>
      <Helmet>
        <title>Puresaas</title>
        <link rel="icon" href="/dark/imgs/favicon.ico" />  
        <link
          rel="stylesheet"
          type="text/css"
          href="/dark/assets/css/plugins.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/dark/assets/css/style.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/dark/assets/css/satoshi.css"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght..200;300;400;500;600;700&display=swap"
        />
        <script src="/dark/assets/js/scripts.js"></script>
        <script src="/dark/assets/js/smoother-script.js"></script>
      </Helmet>
      <body>
        <LoadingScreen />
        <Cursor />
        <ProgressScroll />
        <Start_exploring />
      <Whatsapp/>
        <Lines />     
        <Navbar />
        










        <div id="smooth-wrapper">
          <div id="smooth-content">
            
            <main className="main-bg o-hidden">

              <Header />
              {/* <Intro /> */}
              {/* <Services /> */}
              <Homeenterprice />
              {/* <CRMdesign /> */}
              <CRMdesign />
              <Services2 />
    sasaaSasASas vv cbcbcv  bcvbcv ccv bcv b
              <Homeprinciples />
              <Environment /> 
              <Responsibility/>
              <RealCRM3 />
              <Network/>
              {/* <Marquee /> */}
              {/* <Portfolio /> */}
              <Testimonials />
              {/* <Team /> */}
              <Blog />
              {/* <Clients /> */}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}
