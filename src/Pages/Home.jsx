import React from 'react'
import trustedImage from '../assets/images/trusted-01.png';
import featureImg from '../assets/images/feature-01.png';

function Home() {
    return (
    <div>
   {/* <!-- Header --> */}
    <header className="bg-dark">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="index.html"><h2>Host <em>Cloud</em></h2></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="index.html">Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="services.html">Our Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="functional-buttons">
            <ul>
              <li><a href="#">Log in</a></li>
              <li><a href="#">Sign Up</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    {/* <!-- Page Content --> */}
    {/* <!-- Banner Starts Here --> */}
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="header-text caption">
              <h2>Search your domain</h2>
              <div id="search-section">
              	<form id="suggestion_form" name="gs" method="get" action="#">
                <div className="searchText">
                  
                  <input type="text" name="q" className="searchText" placeholder="Enter your domain here..." autocomplete="on"/>
                  <ul>
                    <li><label><input type="checkbox" name="ext_com" value="1"/><span>.com <em>($10/yr)</em></span></label></li>
                    <li><label><input type="checkbox" name="ext_net" value="1"/><span>.net <em>($12/yr)</em></span></label></li>
                    <li><label><input type="checkbox" name="ext_org" value="1"/><span>.org <em>($8/yr)</em></span></label></li>
                    <li><label><input type="checkbox" name="ext_in" value="1"/><span>.in <em>($6/yr)</em></span></label></li>
                  </ul>
                </div>
                    <input type="submit" name="results" className="main-button" value="Search Now"/>
                 </form>
               <div className="advSearch_chkbox">
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Banner Ends Here --> */}


    {/* <!-- Services Starts Here --> */}
    <div className="services-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <span>Hosting Services</span>
              <h2>Services we provide</h2>
              <p>Host Cloud is a professional Bootstrap 4 template by TemplateMo for your hosting company websites. There are 4 HTML pages included in this template. You can feel free to customize anything. Please share this template to your friends. Thank you.</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="service-item">
              <i className="fa fa-database"></i>
              <h4>10x Light Cloud</h4>
              <p>Aenean sit amet leo vitae tellus vehicula tincidunt vel sed lorem. Nullam tincidunt commodo magna, id aliquam sapien sollicitudin id.</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="service-item">
              <i className="fa fa-database"></i>
              <h4>Managed VPS Cloud</h4>
              <p>You are not allowed to re-distribute this template as a downloadable ZIP file on any template collection website. Please <a rel="nofollow" href="https://templatemo.com/contact" target="_parent">contact us</a> if you want to.</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="service-item">
              <i className="fa fa-database"></i>
              <h4>Fully Dedicated</h4>
              <p>Aenean sit amet leo vitae tellus vehicula tincidunt vel sed lorem. Nullam tincidunt commodo magna, id aliquam sapien sollicitudin id.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Services Ends Here --> */}


     {/* Pricing Starts Here  */}
    <div className="pricing-section">
      <div className="background-image-pricing">
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="section-heading">
              <h2>Cloud Hosting Plans</h2>
              <p>Lorem ipsum dolor amet taxidermy sriracha cardigan salvia actually vice migas enamel pin sustainable carry scenester lomo hot chicken farm table actually kinfolk.</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="pricing-item">
              <h4>Basic Cloud 5x</h4>
              <div className="price">
                <h6>$15.50</h6>
                <span>monthly</span>
              </div>
              <p>Etiam sit amet placerat lacus, sed placerat mauris. Vestibulum malesuada vehicula sapien non tempus.</p>
              <div className="dev"></div>
              <ul>
                <li><i className="fa fa-check"></i>500 GB Storage Space</li>
                <li><i className="fa fa-check"></i>3 TB Data Transfer</li>
                <li><i className="fa fa-check"></i>Basic Managed Panel</li>
                <li><i className="fa fa-check"></i>24/7 Fast Support</li>
                <li><i className="fa fa-check"></i>100 Premium Themes</li>
                <li><i className="fa fa-check"></i>Cancel or Upgrade Anytime</li>
              </ul>
              <a href="#" className="main-button">Start Plan</a>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="pricing-item">
              <h4>Cloud VPS 10x</h4>
              <div className="price price-gradient">
                <h6>$30.00</h6>
                <span>monthly</span>
              </div>
              <p>Etiam sit amet placerat lacus, sed placerat mauris. Vestibulum malesuada vehicula sapien non tempus.</p>
              <div className="dev"></div>
              <ul>
                <li><i className="fa fa-check"></i>1 TB Cloud Space</li>
                <li><i className="fa fa-check"></i>8 TB Data Transfer</li>
                <li><i className="fa fa-check"></i>Fully Managed Panel</li>
                <li><i className="fa fa-check"></i>15-minute Quick Support</li>
                <li><i className="fa fa-check"></i>Unlimted Web Addons</li>
                <li><i className="fa fa-check"></i>Cancel or Upgrade Anytime</li>
              </ul>
              <a href="#" className="gradient-button">Select Plan</a>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="pricing-item">
              <h4>Advanced Cloud</h4>
              <div className="price">
                <h6>$72.25</h6>
                <span>monthly</span>
              </div>
              <p>Etiam sit amet placerat lacus, sed placerat mauris. Vestibulum malesuada vehicula sapien non tempus.</p>
              <div className="dev"></div>
              <ul>
                <li><i className="fa fa-check"></i>4 TB Cloud Space</li>
                <li><i className="fa fa-check"></i>20 TB Data Transfer</li>
                <li><i className="fa fa-check"></i>Fully Managed Panel</li>
                <li><i className="fa fa-check"></i>15-minute Quick Support</li>
                <li><i className="fa fa-check"></i>Top Notch Web Apps</li>
                <li><i className="fa fa-check"></i>Advanced Scalable</li>
              </ul>
              <a href="#" className="main-button">Take it now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Pricing Ends Here  */}


  {/* Features Starts Here  */}
    <div className="features-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <span>Best Quality for you</span>
              <h2>Cloud Features</h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className="feature-item">
              <div className="icon">
                <img src={featureImg} alt=""/>
              </div>
              <h4>Load Balanced</h4>
              <p>Nulla nisl ex, vehicula in urna nec, commodo consectetur augue. Vivamus nec metus mauris. Praesent lacinia tempus urna.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="feature-item">
              <div className="icon">
              <img src={featureImg} alt=""/>
              </div>
              <h4>99.9% Uptime Guaranteed</h4>
              <p>Lorem ipsum dolor ame taxidermy sriracha cardigan salvia actually vice migas en pin sustainable carry scenester.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="feature-item">
              <div className="icon">
              <img src={featureImg} alt=""/>
              </div>
              <h4>Top Reliability</h4>
              <p>Lorem ipsum dolor ame taxidermy sriracha cardigan salvia actually vice migas en pin sustainable carry scenester.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="feature-item">
              <div className="icon">
              <img src={featureImg} alt=""/>
              </div>
              <h4>High Security</h4>
              <p>Lorem ipsum dolor ame taxidermy sriracha cardigan salvia actually vice migas en pin sustainable carry scenester.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="feature-item">
              <div className="icon">
              <img src={featureImg} alt=""/>
              </div>
              <h4>Quality Hardwares</h4>
              <p>Lorem ipsum dolor ame taxidermy sriracha cardigan salvia actually vice migas en pin sustainable carry scenester.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="feature-item">
              <div className="icon">
              <img src={featureImg} alt=""/>
              </div>
              <h4>Network Solutions</h4>
              <p>Lorem ipsum dolor ame taxidermy sriracha cardigan salvia actually vice migas en pin sustainable carry scenester.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Features Ends Here  */}


     


    {/* Footer Starts Here */}
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="footer-item">
              <div className="footer-heading">
                <h2>About Us</h2>
              </div>
              <p>Host Cloud is provided by TemplateMo for free of charge. Anyone can download and use this CSS Bootstrap template for commercial purposes.</p>
            </div>
          </div>
          
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="footer-item">
              <div className="footer-heading">
                <h2>Hosting Plans</h2>
              </div>
              <ul className="footer-list">
                <li><a href="#">Basic Cloud 5X</a></li>
                <li><a href="#">Cloud VPS 10X</a></li>
                <li><a href="#">Advanced Cloud</a></li>
                <li><a href="#">Custom Designs</a></li>
                <li><a href="#">Special Solutions</a></li>
              </ul>
            </div>
          </div>
          
          
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="footer-item">
              <div className="footer-heading">
                <h2>Useful Links</h2>
              </div>
              <ul className="footer-list">
                <li><a href="#">Cloud Hosting Platform</a></li>
                <li><a href="#">Light Speed Zone</a></li>
                <li><a href="#">Content Delivery Network</a></li>
                <li><a href="#">Customer Support</a></li>
                <li><a href="#">Latest News</a></li>
              </ul>
            </div>
          </div>
          
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="footer-item">
              <div className="footer-heading">
                <h2>More Information</h2>
              </div>
              <ul className="footer-list">
                <li>Phone: <a href="#">010-020-0560</a></li>
                <li>Email: <a href="#">mail@company.com</a></li>
                <li>Support: <a href="#">support@company.com</a></li>
                <li>Website: <a href="#">www.company.com</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-12">
            <div className="sub-footer">
              <p>Copyright &copy; 2020 Cloud Hosting Company
				- Designed by <a rel="nofollow" href="https://templatemo.com">TemplateMo</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    {/* Footer Ends Here */}

    </div>
    )
}

export default Home