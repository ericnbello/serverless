import Footer from '../components/Footer.js';
import '../styles/styles.css';
import userData from '@/constants/data.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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
                    <li className="email flex justify-center md:justify-start"><FontAwesomeIcon icon={faEnvelope} className='h-4 pr-2'/><a href={`mailto:${userData.email}`}>{userData.email}</a></li>
                    {/* <li className='flex' className="phone flex justify-center md:justify-start"><FontAwesomeIcon icon="fa fa-phone" /><a href="###">phone number</a></li> */}
                    <li className="linkedin flex justify-center md:justify-start"><FontAwesomeIcon icon={faLinkedin} className='h-4 pr-2' /><a rel="noopener" href={`https://linkedin.com/in/${userData.socialHandles.linkedin}`} target="_blank">{`linkedin/in/${userData.socialHandles.linkedin}`}</a></li>
                    {/* <li className='flex' className="medium flex justify-center md:justify-start"><FontAwesomeIcon icon="fa fa-medium" /><a href="###" target="_blank">medium/...</a></li> */}
                    <li className="github flex justify-center md:justify-start"><FontAwesomeIcon icon={faGithub} className='h-4 pr-2' /><a rel="noopener" href={`https://github.com/${userData.socialHandles.github}`} target="_blank">{`github/${userData.socialHandles.github}`}</a></li>
                    <li className="twitter flex justify-center md:justify-start"><FontAwesomeIcon icon={faXTwitter} className='h-4 pr-2' /><a rel="noopener" href={`https://x.com/${userData.socialHandles.twitter}`} target="_blank">{`@${userData.socialHandles.twitter}`}</a></li>
                </ul>
            </div>
            
            {/* <!--//contact-container--> */}
            <div className="education-container container-block">
                <h2 className="container-block-title flex justify-center md:justify-start">Education</h2>
                <div className="item">
                    <h4 className="flex justify-center md:justify-start">Bachelor of Science - Computer Engineering</h4>
                    <h5 className="meta flex justify-center md:justify-start pt-2">Florida International University</h5>
                    {/* <div className="time flex justify-center md:justify-start">Years in school</div> */}
                </div> {/*<!--//item--> */}
            </div> {/*<!--//education-container-->*/}

            {/* Certifications container */}
            <div className='certifications-container container-block'>
              <h2 className="container-block-title flex justify-center md:justify-start">Certifications</h2>
              <div className='grid grid-cols-4 md:grid-cols-2'>
                {userData.certifications.map((cert, idx) => {
                  return (
                    <div key={idx} className='flex justify-center p-2'>
                      <a href={cert.link}><img className="rounded-full max-h-24" src={cert.imgUrl} alt={`${cert.name} certification badge`}/></a>
                    </div>
                  )
                })}
              </div>
            </div>
            {/* end of certifications container */}
        </div>
        
        {/* <!--//sidebar-wrapper--> */}

        <div className="main-wrapper">
            <section className="section summary-section">
                <h2 className="section-title">
                  {/* <FontAwesomeIcon icon="fa fa-user" /> */}
                  Summary</h2>
                <hr />
                <div className="summary">
                    <p>{userData.summary}</p>
                </div> {/*<!--//summary-->*/}
            </section> {/*<!--//section-->*/}

            <section className="section summary-section">
                <h2 className="section-title">
                  {/* <FontAwesomeIcon icon="fa fa-user" /> */}
                  Skills</h2>
                <hr />
                <div className="summary">
                    <p className='font-bold'>Platforms: 
                      <span className='font-medium'> Amazon Web Services (AWS), Google Cloud Platform (GCP), Azure, VMWare</span>
                    </p>
                </div> {/*<!--//summary-->*/}
                <div className="summary">
                    <p className='font-bold'>Tools & Software: 
                      <span className='font-medium'> Terraform, Docker, Jenkins, Active Directory, Office 365, Outlook, Cisco AnyConnect, Duo, Slack</span>
                    </p>
                </div>
                <div className="summary">
                    <p className='font-bold'>Networking: 
                      <span className='font-medium'> LAN, Mesh Wi-Fi Network Systems, DHCP, VPN, DNS, Wireshark</span>
                    </p>
                </div>
                <div className="summary">
                    <p className='font-bold'>Programming & Languages: 
                      <span className='font-medium'> JavaScript, HTML5, CSS3, Python</span>
                    </p>
                </div>
                <div className="summary">
                    <p className='font-bold'>Certifications: 
                      <span className='font-medium'> AWS Certified Cloud Practitioner CCP, CompTIA Network+, Security+, CySA+</span>
                    </p>
                </div>
            </section> {/*<!--//section-->*/}

            <section className="section ">
                <h2 className="section-title">
                  {/* <FontAwesomeIcon icon="fa fa-bar-chart" /> */}
                  Cloud Projects</h2>
                  {/* PROJECTS SECTION */}
                <hr />
                {/* --- PROJECT 1 ----*/}
                <div className="company">
                  <div className="company-header">Serverless Website
                  </div>
                </div>
                <div className="item">
                      <div className="meta">
                        <div className="upper-row flex justify-between">
                            <h3 className="job-title">Built a serverless site using AWS services for scalable deployment.</h3>
                            <div className="time"><a href="https://ericnbello.github.io/serverless">Live Demo</a></div>
                        </div> {/*<!--//upper-row-->*/}
                    </div> {/*<!--//meta-->*/}
                    <div className="details">
                      <ul className="fa-ul">
                        <li className='flex'><FontAwesomeIcon className="h-4 pr-2" icon={faAngleRight} />Developed a responsive serverless portfolio website and published on a custom domain via CloudFront with S3 origin</li>
                        <li className='flex'><FontAwesomeIcon className="h-4 pr-2"  icon={faAngleRight} />Integrated page view counter using Lambda function (Python), DynamoDB atomic counter, API Gateway</li>
                        <li className='flex'><FontAwesomeIcon className="h-4 pr-2" icon={faAngleRight} />Generated AWS infrastructure using CloudFormation, Serverless Application Model (SAM), and GitHub Actions</li>
                        {/* <li className='flex'><FontAwesomeIcon className="h-4 pr-2" icon={faAngleRight} />Uses API Gateway to trigger the function and displays the counter using JavaScript</li> */}
                        {/* <li className='flex'><FontAwesomeIcon className="h-4 pr-2" icon={faAngleRight} />Automated infrastructure using CloudFormation and AWS Serverless Application Model (SAM)</li> */}
                        {/* <li className='flex'><FontAwesomeIcon className="h-4 pr-2" icon={faAngleRight} />​Deployed with GitHub Actions for CI/CD pipeline</li> */}
                      </ul>
                    </div>
                </div>
                {/* --END OF PROJECT 1--*/}


                {/* --- PROJECT 2 ----*/}
                <div className="company">
                  <div className="company-header">Cloud EC2 Server Website
                  </div>
                </div>
                <div className="item">
                      <div className="meta">
                        <div className="upper-row flex justify-between">
                            <h3 className="job-title">Deployed a Django app on AWS with automated Terraform workflows.</h3>
                            <div className="time"><a href="https://ericnbello.github.io/docker-ec2">Live Demo</a></div>
                        </div> {/*<!--//upper-row-->*/}
                    </div> {/*<!--//meta-->*/}
                    <div className="details">
                      <ul className="fa-ul">
                        <li className='flex'><FontAwesomeIcon className="h-4 pr-2" icon={faAngleRight} />Built a Python Django web app using multiple APIs, containerized with Docker and hosted on AWS EC2 instance</li>
                        <li className='flex'><FontAwesomeIcon className="h-4 pr-2" icon={faAngleRight} />Automated deployment of AWS resources with Terraform and GitHub Actions using OpenID Connect for credentials</li>
                        <li className='flex'><FontAwesomeIcon className="h-4 pr-2" icon={faAngleRight} />Secured Terraform state file in versioned S3 backend with DynamoDB table state lock to manage in CI/CD pipeline</li>
                        {/* <li className='flex'><FontAwesomeIcon className="h-4 pr-2" icon={faAngleRight} />Configured Window Server 2016 domain settings, server name, TCP/IP settings, and remote desktop</li> */}
                        {/* <li className='flex'><FontAwesomeIcon className="h-4 pr-2" icon={faAngleRight} />Created and linked Group Policy Objects (GPO) in Active Directory</li> */}
                        {/* <li className='flex'><FontAwesomeIcon className="h-4 pr-2" icon={faAngleRight} />Setup Azure AD Connect for hybrid Azure AD join and seamless SSO using password hash sync</li> */}
                      </ul>
                    </div>
                </div>
                {/* --END OF PROJECT 2--*/}


                {/* --- PROJECT 3 ----*/}
                <div className="company">
                  <div className="company-header">Active Directory Home Lab
                  </div>
                </div>
                <div className="item">
                      <div className="meta">
                        <div className="upper-row flex justify-between">
                            <h3 className="job-title">Set up AD lab with hybrid Azure integration for seamless SSO.</h3>
                            <div className="time"><a href="https://ericnbello.github.io/azure-vmware">Live Demo</a></div>
                        </div> {/*<!--//upper-row-->*/}
                    </div> {/*<!--//meta-->*/}
                    <div className="details">
                      <ul className="fa-ul">
                        <li className='flex'><FontAwesomeIcon className="h-4 pr-2" icon={faAngleRight} />Deployed VMWare virtual lab with Server 2019 domain controllers and Windows 10 clients on Active Directory (AD)</li>
                        <li className='flex'><FontAwesomeIcon className="h-4 pr-2" icon={faAngleRight} />Configured TCP/IP settings, remote desktop, and Group Policy Objects (GPOs) for user account management</li>
                        <li className='flex'><FontAwesomeIcon className="h-4 pr-2" icon={faAngleRight} />Integrated Azure AD Connect for hybrid Azure AD join and seamless single sign-on (SSO) with password hash sync</li>
                        {/* <li className='flex'><FontAwesomeIcon className="h-4 pr-2" icon={faAngleRight} />Configured Window Server 2016 domain settings, server name, TCP/IP settings, and remote desktop</li> */}
                        {/* <li className='flex'><FontAwesomeIcon className="h-4 pr-2" icon={faAngleRight} />Created and linked Group Policy Objects (GPO) in Active Directory</li> */}
                        {/* <li className='flex'><FontAwesomeIcon className="h-4 pr-2" icon={faAngleRight} />Setup Azure AD Connect for hybrid Azure AD join and seamless SSO using password hash sync</li> */}
                      </ul>
                    </div>
                </div>
                {/* --END OF PROJECT 3--*/}

              


                {/*<div className="company"><a className="company-header" href="###" target="_blank">Previous Company Name,</a> City, State</div>
                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Previous Job Title</h3>
                            <div className="time">August 2017 - March 2018</div>
                        </div>
                    </div>
                    <div className="details">
                      <ul className="fa-ul">
                        <li className='flex'><FontAwesomeIcon className="h-4 pr-2" icon={faAngleRight} />Job responsibility one.</li>
                        <li className='flex'><FontAwesomeIcon className="h-4 pr-2" icon={faAngleRight} />Job responsibility two.</li>                
                      </ul>
                    </div>
                    <br />
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Previous Job Title</h3>
                            <div className="time">October 2015 - August 2017</div>
                        </div>
                    </div>
                    <div className="details">
                      <ul className="fa-ul">
                        <li className='flex'><FontAwesomeIcon className="h-4 pr-2" icon={faAngleRight} />Job responsibility one.</li>
                        <li className='flex'><FontAwesomeIcon className="h-4 pr-2" icon={faAngleRight} />Job responsibility two.</li>                </ul>
                    </div>
                </div> */}
            </section>

            <section className="section experience-section">
                <h2 className="section-title">
                  {/* <FontAwesomeIcon icon="fa fa-black-tie" /> */}
                  Experience</h2>
                <hr />
                <div className="company">
                  <div className="company-header">Web Developer
                  </div>
                </div>
                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Independent/Freelance, Miami, FL</h3>
                            <div className="time">Jan 2022 - Present</div>
                        </div>{/*<!--//upper-row-->*/}
                    </div>{/*<!--//meta-->*/}
                    <div className="details">
                      <ul className="fa-ul">
                        <li className='flex'><FontAwesomeIcon className="h-4 pr-2" icon={faAngleRight} />Composed responsive websites and evaluated improvement strategies by researching new technologies</li>
                        <li className='flex'><FontAwesomeIcon className="h-4 pr-2" icon={faAngleRight} />Facilitated positive client relations through professional interaction, issue resolution, and iteration delivery</li>
                        <li className='flex'><FontAwesomeIcon className="h-4 pr-2" icon={faAngleRight} />Employed multiple cloud-based applications to troubleshoot technical problems and communicate with clients</li>
                        <li className='flex'><FontAwesomeIcon className="h-4 pr-2" icon={faAngleRight} />Continuously improved project delivery process which expedited customer orders and ensured swift delivery</li>
                      </ul>
                    </div>{/*<!--//details-->*/}
                </div>{/*<!--//item-->*/}
                <div className="company">
                  <div className="company-header">Owner</div>
                </div>
                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Solstice Naturals, Miami, FL</h3>
                            <div className="time">Dec 2016 - Mar 2022</div>
                        </div>{/*<!--//upper-row-->*/}
                    </div>{/*<!--//meta-->*/}
                    <div className="details">
                      <ul className="fa-ul">
                        <li className='flex'><FontAwesomeIcon className="h-4 pr-2" icon={faAngleRight} />Founded online business, overseeing daily operations in technology, product development, and manufacturing</li>
                        <li className='flex'><FontAwesomeIcon className="h-4 pr-2" icon={faAngleRight} />Transitioned to management role directing day-to-day operations with extensive knowledge of products</li>
                        <li className='flex'><FontAwesomeIcon className="h-4 pr-2" icon={faAngleRight} />Installed and configured hardware devices and software to meet business requirements</li>
                        <li className='flex'><FontAwesomeIcon className="h-4 pr-2" icon={faAngleRight} />Regularly administered software updates, resolved hardware and network issues on various operating systems</li>
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

