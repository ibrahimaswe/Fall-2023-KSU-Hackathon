import React from 'react';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to Assurant Campus Connect</h1>
        <p>This is a platform that connects students, professors/staff, and new graduates in the context of insurance, fostering a sense of community and providing valuable resources.</p>
        <div>
          <h2><a href="inEd.jsx">Insurance Education</a></h2>
          <p>Learn about different types of insurance, their importance, and how they work.</p>
        </div>
        <div>
          <h2><a href="forum.jsx">Forum</a></h2>
          <p>Ask questions and share your experiences related to insurance.</p>
        </div>
        <div>
          <h2><a href="insurancePlans.jsx">Insurance Plans for Students & New Grads</a></h2>
          <p>Find information about special insurance plans tailored for students and new graduates.</p>
        </div>
        <div>
          <h2><a href="jobBoard.jsx">Job Board</a></h2>
          <p>Check out job postings from Assurant.</p>
        </div>
        <div>
          <h2><a href="events.jsx">Events</a></h2>
          <p>Stay updated with upcoming events such as webinars, workshops, or career fairs related to insurance.</p>
        </div>
      </div>
    );
  }
}

export default HomePage;