const skillsContainer = document.getElementById("skills-section");
const projectsSection = document.getElementById("projects-section");

function showProjects() {
  // hide skills and show projects
  skillsContainer.classList.remove("active");
  skillsContainer.classList.add("inactive");
  projectsSection.classList.add("active");
  projectsSection.classList.remove("inactive");
}

function showSkills() {
  // hide projects and show skills
  projectsSection.classList.remove("active");
  projectsSection.classList.add("inactive");
  skillsContainer.classList.remove("inactive");
  skillsContainer.classList.add("active");
}