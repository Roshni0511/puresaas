import React from 'react'
import RealCRM from '../../../data/B2berp.json'
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import Check from '@mui/icons-material/Check';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Margin } from '@mui/icons-material';
import { Helmet } from 'react-helmet';

export default function B2b1() {
    return (
        <>
         <Helmet>
                    <title>Puresaas</title>
                    <link rel="icon" href="/dark/imgs/favicon.ico" />
                    <link rel="shortcut icon" href="/dark/imgs/favicon.ico" />
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
           <section className="services section-padding" style={{paddingBottom:'100px'}}>
          <div className="container">
            <div className="sec-head mb-50">
                <h6 style={{color:'#8c8c8c' , marginBottom:'10px', justifyContent:'center' , display:'flex', }}>B2B Textile ERP</h6>
              <h6 className="sub-title mb-25 fontmanage" style={{justifyContent:'center' , display:'flex', fontSize:"35px"}}>WHY B2B Textile ERP</h6>
              {/* <div className="bord pt-25 bord-thin-top d-flex align-items-center">
                <h2 className="fw-600">
                  What We Have <span className="fw-200">to Offer</span>
                </h2>
                <div className="ml-auto">
                  <a href="/dark/page-services" className="go-more">
                    <span className="text">View all services</span>
                    <span className="icon ti-arrow-top-right"></span>
                  </a>
                </div>
              </div> */}
            </div>
            <div className="row">
              {RealCRM.slice(0, 3).map((item, i) => (
                <div key={i} className="col-lg-4" style={{marginBottom:'20px'}}>
                  <div className="item-box radius-15 md-mb30">
                    <div className="icon mb-40 opacity-5">
                      <img src={item.img} alt="" />
                    </div>
                    <h5 className="mb-15">{item.title}</h5>
                  
                <p style={{listStyle:'disc', marginBottom:'10px'}}>{item.first}</p>
                    {/* <ul style={{paddingLeft:'0px'}}> */}
                {/* <li style={{listStyle:'disc', marginBottom:'10px'}}>{item.second}</li>
                <li style={{listStyle:'disc', marginBottom:'10px'}}>{item.third}</li>
                <li style={{listStyle:'disc', marginBottom:'10px'}}>{item.four}</li>
                <li style={{listStyle:'disc', marginBottom:'10px'}}>{item.five}</li>
               */}
    
                    {/* </ul> */}
                {/* <div >
                    <button style={{marginTop:'15px', padding:'9px  30px', borderRadius:'1.61765rem', fontWeight:'400', border:'0px'}}>Learn More</button>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
    
            <div style={{paddingTop:'80px'}}>
            <div style={{paddingBottom:'40px'}}>
               <h4 style={{justifyContent:'center', display:'flex', marginBottom:'15px'}} className='newfont'>SELECT BEST PLAN</h4>
               <h3 style={{justifyContent:'center', display:'flex', marginBottom:'15px'}}>Unbeatable prices, simple.</h3>
               <p style={{justifyContent:'center', display:'flex'}}>Your Path To Success Starts Here: Affordable Plans Tailored Just For You. Discover The Perfect Fit And Value With Our Range Of Pricing Options.</p>
            </div>
            <Box className="main-priceshead"
            
    >
      {/* Card 1 */}
      <Card size="lg" variant="outlined" style={{backgroundColor:'#1a1a1a', border:'1px solid rgba(255, 255, 255, 0.12)'
    }}>
       <h6 style={{margin:'0px',fontWeight:'500', color:'#fff'}}>individual</h6>
        <Typography level="h2" style={{Margin:'0px',color:'#fff'}}>₹ 2999</Typography>
        <span style={{color:'#fff' , fontWeight:'700'}}>Per month</span>
        
        <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
          <ListItem sx={{color:'#fff'}}>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Today Work
          </ListItem>
          <ListItem sx={{color:'#fff'}}>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Vexillologist pitchfork
          </ListItem>
          <ListItem sx={{color:'#fff'}}>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Basic report
          </ListItem>
          <ListItem sx={{color:'#fff'}}>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Leads
          </ListItem>
          <ListItem sx={{color:'#fff'}}>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Property Management
          </ListItem>
          <ListItem sx={{color:'#fff'}}>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Notification
          </ListItem>
          <ListItem sx={{color:'#fff'}}>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Partial Property
          </ListItem>
          <ListItem sx={{color:'#fff'}}>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Theme Setting
          </ListItem>
          <ListItem sx={{color:'#fff'}}>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Whatsapp Integration
          </ListItem>
          <ListItem sx={{color:'#fff'}}>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Marketing (Add on)
          </ListItem>
          <ListItem sx={{color:'#fff'}}>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Screenshot & Screen Recording
          </ListItem>
          <ListItem sx={{color:'#fff'}}>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Master setting
          </ListItem>
        </List>
        <Divider inset="none" />
        <CardActions>
          {/* <Typography level="title-lg" sx={{ mr: 'auto' }}>
            3.990€{' '}
            <Typography textColor="text.tertiary" sx={{ fontSize: 'sm' }}>
              / month
            </Typography>
          </Typography> */}
           <a href="/dark/Checkout" style={{width:'100%'}}>
          <Button
            variant="soft"
          style={{backgroundColor:'#fff',color:'#000',marginBottom:'10px',width:'100%'}}
            endDecorator={<KeyboardArrowRight />}
          >
            Buy now
          </Button>
          </a>
         
        </CardActions>
        <span style={{color:'#fff' , fontWeight:'500',paddingBottom:'20px'}}>Contact To sales Person</span>
      </Card>
    
      {/* Card 2 */}
      <Card size="lg" variant="outlined" style={{backgroundColor:'#1a1a1a', border:'1px solid rgba(255, 255, 255, 0.12)'
    }}>
       <h6 style={{margin:'0px',fontWeight:'500', color:'#fff'}}>Enterprise</h6>
        <Typography level="h2" style={{Margin:'0px',color:'#fff'}}>₹ 4999</Typography>
        <span style={{color:'#fff' , fontWeight:'700'}}>Per month</span>
      <div>
    
      <button style={{padding:'5px 10px', borderRadius:'25px'}}>Business + Enterprise</button>
      </div>
        <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
          <ListItem sx={{color:'#fff'}}>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Multi Business
          </ListItem>
          <ListItem sx={{color:'#fff'}}>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Multi report
          </ListItem>
          <ListItem sx={{color:'#fff'}}>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Internal Chat
          </ListItem>
          <ListItem sx={{color:'#fff'}}>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Property Map
          </ListItem>
          <ListItem sx={{color:'#fff'}}>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Account
          </ListItem>
          <ListItem sx={{color:'#fff'}}>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Third Party Integration/leads
          </ListItem>
          <ListItem sx={{color:'#fff'}}>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Marketing
          </ListItem>
          <ListItem sx={{color:'#fff'}}>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Workflow
          </ListItem>
          <ListItem sx={{color:'#fff'}}>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Call Recording
          </ListItem>
          <ListItem sx={{color:'#fff'}}>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Whatsapp Integration
          </ListItem>
          <ListItem sx={{color:'#fff'}}>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Mobile Application
          </ListItem>
         
        </List>
        <Divider inset="none" />
        <CardActions>
          {/* <Typography level="title-lg" sx={{ mr: 'auto' }}>
            3.990€{' '}
            <Typography textColor="text.tertiary" sx={{ fontSize: 'sm' }}>
              / month
            </Typography>
          </Typography> */}
            <a href="/dark/Checkout" style={{width:'100%'}}>
          <Button
            variant="soft"
          style={{backgroundColor:'#fff',color:'#000',marginBottom:'10px',width:'100%'}}
            endDecorator={<KeyboardArrowRight />}
          >
            Buy now
          </Button>
          </a>
         
        </CardActions>
        <span style={{color:'#fff' , fontWeight:'500',paddingBottom:'20px'}}>Contact To sales Person</span>
      </Card>
    
      {/* Card 3 */}
      <Card size="lg" variant="outlined" style={{backgroundColor:'#1a1a1a', border:'1px solid rgba(255, 255, 255, 0.12)'
    }}>
       <h6 style={{margin:'0px',fontWeight:'500', color:'#fff'}}>Business</h6>
        <Typography level="h2" style={{Margin:'0px',color:'#fff'}}>₹ 3999</Typography>
        <span style={{color:'#fff' , fontWeight:'700'}}>Per month</span>
      <div>
    
      <button style={{padding:'5px 10px', borderRadius:'25px'}}>Business + Enterprise</button>
      </div>
        <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
          <ListItem sx={{color:'#fff'}}>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Branch Setting
          </ListItem>
          <ListItem sx={{color:'#fff'}}>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Selected Report
          </ListItem>
          <ListItem sx={{color:'#fff'}}>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Full Property
          </ListItem>
          <ListItem sx={{color:'#fff'}}>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Inventory
          </ListItem>
          <ListItem sx={{color:'#fff'}}>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Call logs
          </ListItem>
          <ListItem sx={{color:'#fff'}}>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            My Task
          </ListItem>
          <ListItem sx={{color:'#fff'}}>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Lead Reminder
          </ListItem>
          <ListItem sx={{color:'#fff'}}>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Property work
          </ListItem>
          <ListItem sx={{color:'#fff'}}>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Whatsapp Integration
          </ListItem>
          <ListItem sx={{color:'#fff'}}>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Property live status
          </ListItem>
          <ListItem sx={{color:'#fff'}}>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Property Web
          </ListItem>
          <ListItem sx={{color:'#fff'}}>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Mobile Application
          </ListItem>
        </List>
        <Divider inset="none" />
        <CardActions>
          {/* <Typography level="title-lg" sx={{ mr: 'auto' }}>
            3.990€{' '}
            <Typography textColor="text.tertiary" sx={{ fontSize: 'sm' }}>
              / month
            </Typography>
          </Typography> */}
           <a href="/dark/Checkout" style={{width:'100%'}}>
          <Button
            variant="soft"
          style={{backgroundColor:'#fff',color:'#000',marginBottom:'10px',width:'100%'}}
            endDecorator={<KeyboardArrowRight />}
          >
            Buy now
          </Button>
          </a>
         
        </CardActions>
        <span style={{color:'#fff' , fontWeight:'500',paddingBottom:'20px'}}>Contact To sales Person</span>
      </Card>
    </Box>
    
            </div>
          </div>
        </section>
        </>
      )
}
