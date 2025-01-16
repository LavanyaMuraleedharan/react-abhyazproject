import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./accordian.css"; // Assuming the styling from the previous code is in accordian.css

function UncontrolledExample() {
  return (
    <div className="tab-section">
      <h2 className="tab-title">Explore More Content</h2>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3 custom-tabs"
      >
        <Tab eventKey="home" title="Home" className="custom-tab">
          <div className="tab-content">
            <h4>Welcome to the Home Tab!</h4>
            <p>
              This section contains important information related to the home
              tab. It can include anything you'd like to display to the users,
              such as announcements, news, or other interactive content.
            </p>
          </div>
        </Tab>
        <Tab eventKey="profile" title="Profile" className="custom-tab">
          <div className="tab-content">
            <h4>Your Profile Details</h4>
            <p>
              In this section, users can view and edit their profile details.
              The content displayed here can be dynamic, including profile
              pictures, bio, and personal information.
            </p>
          </div>
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled className="custom-tab">
          <div className="tab-content">
            <h4>Contact Us</h4>
            <p>
              The Contact tab is currently disabled. You can use this section to
              display contact information or a contact form when enabled.
            </p>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default UncontrolledExample;
