import React from 'react'

const Resume = () => {
    return (
        <div id='Resume'>
        <div className="container mx-auto px-5 md:px-10 lg:px-20 mt-20 mb-10 flex-row">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

{/* Left Side: Software Skills, Languages, Personal Skills */}
<div className="md:col-span-1">
  {/* Software Skills */}
  <div>
    <h2 className="font-bold text-xl mb-4">SOFTWARE SKILLS</h2>
    {/* SkillBar components */}
  </div>

  {/* Languages */}
  <div>
    <h2 className="font-bold text-xl mb-4">LANGUAGES</h2>
    {/* ... list of languages ... */}
  </div>

  {/* Personal Skills */}
  <div>
    <h2 className="font-bold text-xl mb-4">PERSONAL SKILLS</h2>
    {/* ... list of personal skills ... */}
  </div>
</div>

{/* Middle Side: Experience and Education */}
<div className="md:col-span-1">
  {/* Experience */}
  <div>
    <h2 className="font-bold text-xl mb-4">EXPERIENCE</h2>
    {/* ... list of experiences ... */}
  </div>

  {/* Education */}
  <div>
    <h2 className="font-bold text-xl mb-4">EDUCATION</h2>
    {/* ... education details ... */}
  </div>
</div>

{/* Right Side: What Can I Do?, Design Skills, Hobbies & Interests */}
<div className="md:col-span-1">
  {/* What Can I Do? */}
  <div>
    <h2 className="font-bold text-xl mb-4">WHAT CAN I DO?</h2>
    {/* ... list of capabilities ... */}
  </div>

  {/* Design Skills */}
  <div>
    <h2 className="font-bold text-xl mb-4">DESIGN SKILLS</h2>
    {/* ... list of design skills ... */}
  </div>

  {/* Hobbies & Interests */}
  <div>
    <h2 className="font-bold text-xl mb-4">HOBBIES & INTERESTS</h2>
    {/* ... list of hobbies ... */}
  </div>
</div>

</div>
        </div>
        </div>
      );
}

export default Resume