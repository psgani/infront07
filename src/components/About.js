import React, { useContext, useEffect } from "react";
import notecontext from "../context/notes/notecontext";
function About() {
  return (
    <>
      <div className="container about">
        <h3>
        <h1><b>"Quicknote"</b></h1><i> is a versatile web application that simplifies note-taking.
        With a clean, user-friendly interface, it allows you to jot down
        thoughts, ideas, and to-do lists effortlessly. Accessible from any
        device with an internet connection, Quicknote ensures your notes are
        always at your fingertips, making organization a breeze.</i>
        </h3>
        
      </div>
      <div className="container about3">
      <h1>Make Notes Easier</h1>
      </div>
    
    </>
  );
}

export default About;
