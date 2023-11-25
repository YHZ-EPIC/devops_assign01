// Sample projects data
const projectsData = [
  { technology: "Java", name: "Flappy Bird Clone" },
  { technology: "Flask", name: "Blogging Platform" },
  { technology: "Python", name: "Data Analysis Tool" },
  { technology: "ASP.NET", name: "Bug Tracking System" },
  { technology: "C#", name: "Tic Tac Toe Console Game" },
  { technology: "Angular", name: "Task Management App" },
  { technology: "React", name: "Dynamic Portfolio Website" },
  { technology: "MongoDB", name: "Recipe Sharing Platform" },
  { technology: "Express.js", name: "URL Shortener Service" },
  { technology: "Vue.js", name: "Real-time Chat Application" },
  { technology: "Ruby on Rails", name: "Social Media Platform" },
  {
    technology: "Spring Boot",
    name: "Inventory Management System",
  },
  { technology: "SQL Server", name: "Employee Management System" },
  { technology: "Node.js", name: "Learning Management System (LMS)" },
];

// Sample education data
const educationData = [
  {
    level: "High School Diploma",
    school: "City High School",
    location: "City, State",
    yearOfCompletion: 2016,
  },
  {
    level: "Bachelor of Science in Computer Science (BS CS)",
    university: "XYZ University",
    location: "City, State",
    enrollmentYear: 2016,
    expectedGraduationYear: 2020,
    relevantCourses: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "Database Systems",
      "Operating Systems",
      "Computer Networks",
    ],
  },
  {
    experienceType: "Internship",
    position: "Software Development Intern",
    company: "Tech Innovators",
    location: "City, State",
    duration: "Summer 2018",
    responsibilities: [
      "Developed and maintained web applications using Java and Spring framework.",
      "Collaborated with the team to design and implement new features.",
    ],
  },
  {
    experienceType: "Co-op Program",
    position: "Software Engineering Co-op",
    company: "Innovate Tech Solutions",
    location: "City, State",
    duration: "Fall 2018 - Spring 2019",
    responsibilities: [
      "Worked on full-stack development projects using JavaScript, React, and Node.js.",
      "Participated in code reviews and collaborated with cross-functional teams.",
    ],
  },
  {
    experienceType: "Study Abroad Program",
    university: "International Tech Institute",
    location: "Country",
    duration: "Fall 2019 - Spring 2020",
    focusArea: "Artificial Intelligence and Machine Learning",
    courses: ["Advanced Data Mining", "Natural Language Processing"],
  },
  {
    projectType: "Capstone Project",
    title: "Smart Home Automation App",
    description:
      "Developed a mobile application that allows users to control home devices remotely. Implemented features for energy monitoring and security.",
  },
  {
    experienceType: "Research Assistant",
    project: "Human Activity Recognition",
    duration: "Summer 2020",
    description:
      "Contributed to a research project focused on developing computer vision algorithms for human activity recognition. Published findings in a peer-reviewed conference.",
  },
  {
    level: "Master of Science in Computer Science (MS CS)",
    university: "XYZ University (Continuation from BS CS)",
    location: "City, State",
    enrollmentYear: 2020,
    expectedCompletionYear: 2022,
    thesisTopic: "Exploring Deep Learning Techniques for Image Segmentation",
  },
  // Add more education items as needed
];

const certificationsData = [
  {
    name: "CompTIA A+",
    issuer: "CompTIA",
    description:
      "Foundational certification covering IT operational roles and technical support.",
  },
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    description:
      "Entry-level certification for understanding cloud concepts and Microsoft Azure services.",
  },
  {
    name: "Cisco Certified Network Associate (CCNA)",
    issuer: "Cisco",
    description:
      "Demonstrates proficiency in networking concepts and Cisco technologies.",
  },
  {
    name: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    description:
      "Focuses on ethical hacking and penetration testing skills to identify and fix security vulnerabilities.",
  },
  {
    name: "Oracle Certified Java Programmer (OCPJP)",
    issuer: "Oracle",
    description:
      "Validates skills in Java programming, a widely used language in software development.",
  },
  {
    name: "Certified ScrumMaster (CSM)",
    issuer: "Scrum Alliance",
    description:
      "Introduces Agile and Scrum methodologies, essential for project management and software development.",
  },
  {
    name: "Red Hat Certified Engineer (RHCE)",
    issuer: "Red Hat",
    description:
      "Validates Linux system administration skills, commonly used in server environments.",
  },
  {
    name: "Google Associate Cloud Engineer",
    issuer: "Google Cloud",
    description:
      "Demonstrates proficiency in Google Cloud Platform services and infrastructure.",
  },
  {
    name: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services (AWS)",
    description:
      "Validates knowledge of designing distributed systems on the AWS platform.",
  },
  {
    name: "Project Management Professional (PMP)",
    issuer: "Project Management Institute (PMI)",
    description:
      "Widely recognized certification for project management skills, applicable to various IT projects.",
  },
  // Add more certification items as needed
];

// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Populate education list
document.addEventListener("DOMContentLoaded", () => {
  // Populate education list
  const educationList = document.querySelector("#education ul");
  educationData.forEach((eduItem) => {
    const listItem = document.createElement("li");

    const educationTitle = document.createElement("h3");
    educationTitle.textContent =
      eduItem.level || eduItem.experienceType || eduItem.projectType;

    const educationDetails = document.createElement("p");
    if (eduItem.university) {
      educationDetails.innerHTML = `<strong>University:</strong> ${eduItem.university}<br>`;
    }
    if (eduItem.school) {
      educationDetails.innerHTML += `<strong>School:</strong> ${eduItem.school}<br>`;
    }
    if (eduItem.location) {
      educationDetails.innerHTML += `<strong>Location:</strong> ${eduItem.location}<br>`;
    }
    if (eduItem.yearOfCompletion) {
      educationDetails.innerHTML += `<strong>Year of Completion:</strong> ${eduItem.yearOfCompletion}<br>`;
    }
    if (eduItem.enrollmentYear && eduItem.expectedGraduationYear) {
      educationDetails.innerHTML += `<strong>Enrollment Year:</strong> ${eduItem.enrollmentYear}<br>`;
      educationDetails.innerHTML += `<strong>Expected Graduation Year:</strong> ${eduItem.expectedGraduationYear}<br>`;
    }
    if (eduItem.duration) {
      educationDetails.innerHTML += `<strong>Duration:</strong> ${eduItem.duration}<br>`;
    }
    if (eduItem.focusArea) {
      educationDetails.innerHTML += `<strong>Focus Area:</strong> ${eduItem.focusArea}<br>`;
    }
    if (eduItem.relevantCourses) {
      educationDetails.innerHTML += `<strong>Relevant Courses:</strong> ${eduItem.relevantCourses.join(
        ", "
      )}<br>`;
    }
    if (eduItem.responsibilities) {
      educationDetails.innerHTML += `<strong>Responsibilities:</strong><br>`;
      educationDetails.innerHTML += `<ul>${eduItem.responsibilities
        .map((responsibility) => `<li>${responsibility}</li>`)
        .join("")}</ul>`;
    }
    if (eduItem.courses) {
      educationDetails.innerHTML += `<strong>Courses:</strong> ${eduItem.courses.join(
        ", "
      )}<br>`;
    }
    if (eduItem.title) {
      educationDetails.innerHTML += `<strong>Title:</strong> ${eduItem.title}<br>`;
    }
    if (eduItem.description) {
      educationDetails.innerHTML += `<strong>Description:</strong> ${eduItem.description}<br>`;
    }
    if (eduItem.project) {
      educationDetails.innerHTML += `<strong>Project:</strong> ${eduItem.project}<br>`;
    }
    if (eduItem.experienceType) {
      educationDetails.innerHTML += `<strong>Experience Type:</strong> ${eduItem.experienceType}<br>`;
    }
    if (eduItem.position) {
      educationDetails.innerHTML += `<strong>Position:</strong> ${eduItem.position}<br>`;
    }
    if (eduItem.company) {
      educationDetails.innerHTML += `<strong>Company:</strong> ${eduItem.company}<br>`;
    }
    if (eduItem.projectType) {
      educationDetails.innerHTML += `<strong>Project Type:</strong> ${eduItem.projectType}<br>`;
    }
    if (eduItem.thesisTopic) {
      educationDetails.innerHTML += `<strong>Thesis Topic:</strong> ${eduItem.thesisTopic}<br>`;
    }
    if (eduItem.expectedCompletionYear) {
      educationDetails.innerHTML += `<strong>Expected Completion Year:</strong> ${eduItem.expectedCompletionYear}<br>`;
    }

    listItem.appendChild(educationTitle);
    listItem.appendChild(educationDetails);

    educationList.appendChild(listItem);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Populate certifications list
  const certificationsList = document.querySelector("#certifications ul");
  certificationsData.forEach((certification) => {
    const listItem = document.createElement("li");

    const certificationTitle = document.createElement("h3");
    certificationTitle.textContent = certification.name;

    const certificationDetails = document.createElement("p");
    certificationDetails.innerHTML = `<strong>Issuer:</strong> ${certification.issuer}<br><strong>Description:</strong> ${certification.description}`;

    listItem.appendChild(certificationTitle);
    listItem.appendChild(certificationDetails);

    certificationsList.appendChild(listItem);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Populate projects list
  const projectList = document.getElementById("projectList");
  projectsData.forEach((project) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${project.name} - ${project.technology}`;
    projectList.appendChild(listItem);
  });
});

// Updated function to filter projects based on the beginning of technology names
function filterProjects() {
  const filterText = document.getElementById("techFilter").value.toLowerCase();
  const projectList = document.getElementById("projectList");
  const projects = projectList.getElementsByTagName("li");

  for (const project of projects) {
    const projectText = project.textContent.toLowerCase();
    const technologyText = projectText.split("-")[1].trim(); // Extract technology from text
    if (filterText === "" || technologyText.startsWith(filterText)) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  }
}
