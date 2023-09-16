import 'app/styles.css';
import VisitorCounter from '../components/VisitorCounter.js';
import Footer from '../components/Footer.js';

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="wrapper">
        <div className="sidebar-wrapper">
            <div className="profile-container">
                <h1 className="name">Your Name</h1>
                <h3 className="tagline">Your Title</h3>
            </div>
            
            {/* <!--//profile-container--> */}

            <div className="contact-container container-block">
              <h2 className="container-block-title">Contact</h2>
                <ul className="list-unstyled contact-list">
                    <li className="email"><i className="fa fa-envelope"></i><a href="###">email address</a></li>
                    <li className="phone"><i className="fa fa-phone"></i><a href="###">phone number</a></li>
                    <li className="linkedin"><i className="fa fa-linkedin"></i><a href="###" target="_blank">linkedin/...</a></li>
                    <li className="medium"><i className="fa fa-medium"></i><a href="###" target="_blank">medium/...</a></li>
                    <li className="github"><i className="fa fa-github"></i><a href="###" target="_blank">github/...</a></li>
                    <li className="twitter"><i className="fa fa-twitter"></i><a href="###" target="_blank">@...</a></li>
                </ul>
            </div>
            
            {/* <!--//contact-container--> */}
            <div className="education-container container-block">
                <h2 className="container-block-title">Education</h2>
                <div className="item">
                    <h4 className="degree">Degree</h4>
                    <h5 className="meta">School</h5>
                    <div className="time">Years in school</div>
                </div> {/*<!--//item--> */}
            </div> {/*<!--//education-container-->*/}

        </div>
        
        {/* <!--//sidebar-wrapper--> */}

        <div className="main-wrapper">
            <section className="section summary-section">
                <h2 className="section-title">
                  {/* <i className="fa fa-user"></i> */}
                  Career Profile</h2>
                <hr />
                <div className="summary">
                    <p>Add text that summarizes your work experience</p>
                </div> {/*<!--//summary-->*/}
            </section> {/*<!--//section-->*/}

            <section className="section experiences-section">
                <h2 className="section-title">
                  {/* <i className="fa fa-bar-chart"></i> */}
                  Data Engineering & Data Science Experience</h2>
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
                  Internships</h2>
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
    // </main>
  )
}