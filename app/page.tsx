// import VisitorCounter from '../components/VisitorCounter.js';
import VisitorCounter from '@/components/VisitorCounter.js';
import Footer from '../components/Footer.js';
import '../styles/styles.css';

export default function Home() {
  return (
    <main className="">
      <div className="wrapper">
        <div className="sidebar-wrapper">
            <div className="profile-container">
              <h1 className="name">Eric Bello</h1>
              <h3 className="tagline">Cloud Engineer</h3>
            </div>
            
            {/* <!--//profile-container--> */}

            <div className="contact-container container-block ">
              <h2 className="container-block-title flex justify-center md:justify-start">Contact</h2>
                <ul className="list-unstyled contact-list">
                    <li className="email flex justify-center md:justify-start"><i className="fa fa-envelope"></i><a href="mailto:ericnbello@gmail.com">ericnbello@gmail.com</a></li>
                    {/* <li className="phone flex justify-center md:justify-start"><i className="fa fa-phone"></i><a href="###">phone number</a></li> */}
                    <li className="linkedin flex justify-center md:justify-start"><i className="fa fa-linkedin"></i><a rel="noopener" href="https://linkedin.com/in/ericnbello" target="_blank">linkedin/in/ericnbello</a></li>
                    {/* <li className="medium flex justify-center md:justify-start"><i className="fa fa-medium"></i><a href="###" target="_blank">medium/...</a></li> */}
                    <li className="github flex justify-center md:justify-start"><i className="fa fa-github"></i><a rel="noopener" href="https://github.com/ericnbello" target="_blank">github/ericnbello</a></li>
                    <li className="twitter flex justify-center md:justify-start"><i className="fa fa-twitter"></i><a rel="noopener" href="https://twitter.com/ericnbello" target="_blank">@ericnbello</a></li>
                </ul>
            </div>
            
            {/* <!--//contact-container--> */}
            <div className="education-container container-block">
                <h2 className="container-block-title flex justify-center md:justify-start">Education</h2>
                <div className="item">
                    <h4 className="degree flex justify-center md:justify-start">Bachelor of Science in Computer Engineering</h4>
                    <h5 className="meta flex justify-center md:justify-start">Florida International University</h5>
                    {/* <div className="time flex justify-center md:justify-start">Years in school</div> */}
                </div> {/*<!--//item--> */}
            </div> {/*<!--//education-container-->*/}

        </div>
        
        {/* <!--//sidebar-wrapper--> */}

        <div className="main-wrapper">
            <section className="section summary-section">
                <h2 className="section-title">
                  {/* <i className="fa fa-user"></i> */}
                  Summary</h2>
                <hr />
                <div className="summary">
                    <p>Add text that summarizes your work experience</p>
                </div> {/*<!--//summary-->*/}
            </section> {/*<!--//section-->*/}

            <section className="section experiences-section">
                <h2 className="section-title">
                  {/* <i className="fa fa-bar-chart"></i> */}
                  Cloud Projects</h2>
                <div className="company"><a className="company-header" href="###" target="_blank">Current Company Name,</a> City, State</div>
                <div className="item">
                      <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Current Job Title</h3>
                            <div className="time">XXX - Present</div>
                        </div> {/*<!--//upper-row-->*/}
                    </div> {/*<!--//meta-->*/}
                    <div className="details">
                      <ul className="fa-ul">
                        <li><i className="fa-li fa fa-angle-right"></i>Job responsibility one.</li>
                        <li><i className="fa-li fa fa-angle-right"></i>Job responsibility two.</li>
                      </ul>
                    </div> {/*<!--//details-->*/}
                    <br />
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Previous Job Title</h3>
                            <div className="time">May 2019 - November 2020</div>
                        </div> {/*<!--//upper-row--> */}
                    </div> {/*<!--//meta-->*/}
                    <div className="details">
                      <ul className="fa-ul">
                        <li><i className="fa-li fa fa-angle-right"></i>Job responsibility one.</li>
                        <li><i className="fa-li fa fa-angle-right"></i>Job responsibility two.</li>                
                      </ul>
                    </div> {/*<!--//details-->*/}
                    <br />
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Previous Job Title</h3>
                            <div className="time">April 2018 - May 2019</div>
                        </div>{/*<!--//upper-row-->*/}
                    </div> {/*<!--//meta-->*/}
                    <div className="details">
                      <ul className="fa-ul">
                        <li><i className="fa-li fa fa-angle-right"></i>Job responsibility one.</li>
                        <li><i className="fa-li fa fa-angle-right"></i>Job responsibility two.</li>                
                      </ul>
                    </div> {/*<!--//details--> */}
                </div> {/*<!--//item-->*/}
                
                <hr />
                <div className="company"><a className="company-header" href="###" target="_blank">Previous Company Name,</a> City, State</div>
                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Previous Job Title</h3>
                            <div className="time">August 2017 - March 2018</div>
                        </div>{/*<!--//upper-row-->*/}
                    </div>{/*<!--//meta-->*/}
                    <div className="details">
                      <ul className="fa-ul">
                        <li><i className="fa-li fa fa-angle-right"></i>Job responsibility one.</li>
                        <li><i className="fa-li fa fa-angle-right"></i>Job responsibility two.</li>                
                      </ul>
                    </div>{/*<!--//details-->*/}
                    <br />
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Previous Job Title</h3>
                            <div className="time">October 2015 - August 2017</div>
                        </div>{/*<!--//upper-row-->*/}
                    </div>{/*<!--//meta-->*/}
                    <div className="details">
                      <ul className="fa-ul">
                        <li><i className="fa-li fa fa-angle-right"></i>Job responsibility one.</li>
                        <li><i className="fa-li fa fa-angle-right"></i>Job responsibility two.</li>                </ul>
                    </div>{/*<!--//details-->*/}
                </div>{/*<!--//item-->*/}
            </section>{/*<!--//section-->*/}

            <section className="section projects-section">
                <h2 className="section-title">
                  {/* <i className="fa fa-black-tie"></i> */}
                  Experience</h2>
                <hr />
                <div className="company"><a className="company-header" href="###" target="_blank">Previous Company Name,</a> City, State</div>
                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Data Science Intern</h3>
                            <div className="time">May 2012 - August 2012</div>
                        </div>{/*<!--//upper-row-->*/}
                    </div>{/*<!--//meta-->*/}
                    <div className="details">
                      <ul className="fa-ul">
                        <li><i className="fa-li fa fa-angle-right"></i>Job responsibility one.</li>
                        <li><i className="fa-li fa fa-angle-right"></i>Job responsibility two.</li>                     </ul>
                    </div>{/*<!--//details-->*/}
                </div>{/*<!--//item-->*/}
                <hr />
                <div className="company"><a className="company-header" href="###" target="_blank">Company Name,</a> City, State</div>
                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Data Science Intern</h3>
                            <div className="time">June 2011 - January 2012</div>
                        </div>{/*<!--//upper-row-->*/}
                    </div>{/*<!--//meta-->*/}
                    <div className="details">
                      <ul className="fa-ul">
                        <li><i className="fa-li fa fa-angle-right"></i>Job responsibility one.</li>
                        <li><i className="fa-li fa fa-angle-right"></i>Job responsibility two</li>                     
                      </ul>
                    </div>{/*<!--//details-->*/}
                </div>{/*<!--//item-->*/}
            </section>
          </div>
        </div> 
        <Footer />
    </main>
  )
}

