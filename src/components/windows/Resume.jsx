import React from 'react';
import MacWindows from './MacWindows';
import resumePdf from './Resume.pdf?url';

const Resume = () => {
  return (
    <MacWindows>
      <div className="resume-window" style={{ width: '100%', height: '80vh' }}>
        <embed
          src={resumePdf}
          type="application/pdf" 
          width="100%" 
          height="100%" 
        />
      </div>
    </MacWindows>
  );
};

export default Resume;
