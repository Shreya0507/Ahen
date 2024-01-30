import React from "react";
import PropTypes from "prop-types";
import "../Services/SchoolDetails.css";

const SchoolDetails = ({ school, onClose }) => {
  return (
    <div className="school-details-modal">
      <div className="school-details-container">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <h1 className="school-heading">{school.name}</h1>

        {/* Section 1: Cost Structure */}
        <div className="details-section">
          <h2>1. Cost Structure:</h2>
          <ul>
            <li>Transparent pricing for individual lessons and packages.</li>
            <li>
              Inclusive of any additional fees, such as exam or certification
              fees.
            </li>
          </ul>
        </div>

        {/* Section 2: Instructor Credentials */}
        <div className="details-section">
          <h2>2. Instructor Credentials:</h2>
          <ul>
            <li>Certified instructors with a track record of success.</li>
            <li>Background checks and qualifications prominently displayed.</li>
          </ul>
        </div>

        {/* Section 3: Lesson Flexibility */}
        <div className="details-section">
          <h2>3. Lesson Flexibility:</h2>
          <ul>
            <li>Flexible scheduling, including weekends and evenings.</li>
            <li>Options for intensive courses or gradual learning.</li>
          </ul>
        </div>

        {/* Section 4: Vehicle Fleet Details */}
        <div className="details-section">
          <h2>4. Vehicle Fleet Details:</h2>
          <ul>
            <li>Regular maintenance schedules for each training vehicle.</li>
            <li>Dual-control cars for added safety during lessons.</li>
          </ul>
        </div>

        {/* Section 5: Curriculum and Progress Tracking */}
        <div className="details-section">
          <h2>5. Curriculum and Progress Tracking:</h2>
          <ul>
            <li>Detailed curriculum highlighting key learning objectives.</li>
            <li>Regular progress assessments and feedback for students.</li>
          </ul>
        </div>

        {/* Section 6: Location Convenience */}
        <div className="details-section">
          <h2>6. Location Convenience:</h2>
          <ul>
            <li>
              Multiple locations or strategically placed for accessibility.
            </li>
            <li>Adequate parking facilities for both lessons and exams.</li>
          </ul>
        </div>

        {/* Add more sections for each point in the detailed information */}
      </div>
    </div>
  );
};

SchoolDetails.propTypes = {
  school: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SchoolDetails;
