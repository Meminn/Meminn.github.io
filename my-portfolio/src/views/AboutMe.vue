<template>
  <div class="about">
    <h1>About Me</h1>
    <p>{{ aboutMe }}</p>
    
    <h2>Objective</h2>
    <p>{{ objective }}</p>
    
    <h2>Technical Skills</h2>
    <ul>
      <li v-for="skill in technicalSkills" :key="skill"><strong>{{ skill.category }}:</strong> {{ skill.skills }}</li>
    </ul>
    
    <h2>Languages</h2>
    <ul>
      <li><strong>English:</strong> Professional</li>
      <li><strong>Turkish:</strong> Native</li>
      <li><strong>German:</strong> Beginner</li>
    </ul>

    <h2>Contact</h2>
    <ul>
      <li><strong>Phone:</strong> (+90) 505 720 81 34</li>
      <li><strong>Email:</strong> <a href="mailto:meminbayrak55@gmail.com">meminbayrak55@gmail.com</a></li>
      <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/mehmet-eminbayrak" target="_blank">linkedin.com/in/mehmet-eminbayrak</a></li>
      <li><strong>GitHub:</strong> <a href="https://github.com/Meminn" target="_blank">github.com/Meminn</a></li>
    </ul>
    
    <h2>Professional Experience</h2>
    <ul>
      <li><strong>Network Specialist Intern - Gelecek Varlık Yönetimi A.Ş.  </strong> <br> <i>   July - September 2022</i>
        <ul>
          <li> • &nbsp; Designed and simulated the network topology using Packet Tracer.</li>
          <li> • &nbsp; Participated in cybersecurity analysis processes.</li>
        </ul>
      </li>
      <li><strong>Commercial Team Member- SUCyber (Cybersecurity Community)</strong>  <br> <i>2021 – 2022</i>
        <ul>
          <li> • &nbsp; Created advertisements for events organized by the Sabanci University Cybersecurity Community.</li>
        </ul>
      </li>
      <li><strong>Volunteer - Sabanci University Civil Involvement Projects </strong><br> <i>January - June 2020</i>
        <ul>
          <li> • &nbsp; Engaged with elderly residents in a nursing home, fostering community involvement.</li>
        </ul>
      </li>
    </ul>
    
    <h2>Education</h2>
    <ul>
      <li><strong>Sabanci University, Istanbul</strong>    
      <br> B.Sc. in Computer Science and Engineering (100% Scholarship)
        <ul>
          <li><i>September 2019 – June 2024</i></li>
          <li><strong>Minors:</strong> Business Analytics, Mind & Behavior</li>
          <li><strong>GPA:</strong> 3.07 / 4.00</li>
        </ul>
      </li>
      <li><strong>Aziz Atik Science High School, Samsun</strong>
        <ul>
          <i>September 2015 - June 2019</i>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  data() {
    return {
      aboutMe: '',
      objective: '',
      technicalSkills: []
    };
  },
  created() {
    const backend = {
      aboutMe: "Hi, I'm Mehmet Emin Bayrak, a recent Computer Science graduate with a strong foundation in backend development. I am proficient in building scalable, secure, and efficient systems using Java Spring Boot and SQL databases. I am seeking to contribute my backend expertise to develop reliable applications.",
      objective: "To leverage my technical skills and experience in backend development to contribute to the success of a dynamic team and develop reliable applications.",
      technicalSkills: [
        { category: 'Backend Development', skills: 'Java Spring Boot, Node.js' },
        { category: 'Databases', skills: 'PostgreSQL, MySQL, SQLite' },
        { category: 'APIs', skills: 'RESTful APIs, Postman' },
        { category: 'Cloud Technologies', skills: 'AWS' },
        { category: 'Version Control', skills: 'Git, Bitbucket' },
        { category: 'Programming Languages', skills: 'Java, Python, C++' },
      ]
    };

    const dataScientist = {
      aboutMe: "Hi, I'm Mehmet Emin Bayrak, a recent Computer Science graduate with a strong foundation in data science. I am proficient in building predictive models and analyzing data using Python and R. I am seeking to contribute my data science expertise to develop data-driven solutions.",
      objective: "To leverage my technical skills and experience in data science to contribute to the success of a dynamic team and develop data-driven solutions.",
      technicalSkills: [
        { category: 'Data Science', skills: 'Python, R, SQL' },
        { category: 'Machine Learning', skills: 'Scikit-learn, TensorFlow, Keras, PyTorch' },
        { category: 'Data Visualization', skills: 'Matplotlib, Seaborn, Tableau, PowerBI' },
        { category: 'Big Data Technologies', skills: 'Apache Spark' },
        { category: 'Version Control', skills: 'Git, Bitbucket' },
        { category: 'Programming Languages', skills: 'Python, R, SQL' },
      ]
    };

    const frontend = {
      aboutMe: "Hi, I'm Mehmet Emin Bayrak, a recent Computer Science graduate with a strong foundation in frontend development. I am proficient in building responsive and interactive user interfaces using React and Vue.js. I am seeking to contribute my frontend expertise to create engaging user experiences.",
      objective: "To leverage my technical skills and experience in frontend development to contribute to the success of a dynamic team and create engaging user experiences.",
      technicalSkills: [
      { category: 'Frontend Development', skills: 'React, Vue.js' },
      { category: 'UI/UX Design', skills: 'Figma' },
      { category: 'Web Technologies', skills: 'HTML, CSS, JavaScript' },
      { category: 'Version Control', skills: 'Git, Bitbucket' },
      { category: 'Programming Languages', skills: 'JavaScript, TypeScript' },
      ]
    };

    const fullstack = {
      aboutMe: "Hi, I'm Mehmet Emin Bayrak, a recent Computer Science graduate with a strong foundation in fullstack development. I am proficient in building end-to-end applications using MERN stack. I am seeking to contribute my fullstack expertise to develop comprehensive solutions.",
      objective: "To leverage my technical skills and experience in fullstack development to contribute to the success of a dynamic team and develop comprehensive solutions.",
      technicalSkills: [
      { category: 'Fullstack Development', skills: 'MERN Stack (MongoDB, Express.js, React, Node.js)' },
      { category: 'Web Technologies', skills: 'HTML, CSS, JavaScript' },
      { category: 'APIs', skills: 'RESTful APIs, Postman' },
      { category: 'Version Control', skills: 'Git, Bitbucket' },
      { category: 'Programming Languages', skills: 'JavaScript, TypeScript' },
      ]
    };

    const dataEngineer = {
      aboutMe: "Hi, I'm Mehmet Emin Bayrak, a recent Computer Science graduate with a strong foundation in data engineering. I am proficient in building and maintaining data pipelines using Python and SQL. I am seeking to contribute my data engineering expertise to develop robust data solutions.",
      objective: "To leverage my technical skills and experience in data engineering to contribute to the success of a dynamic team and develop robust data solutions.",
      technicalSkills: [
      { category: 'Data Engineering', skills: 'Python, MySQL, PostGreSQL, SQLite, ETL' },
      { category: 'Big Data Technologies', skills: 'Apache Spark' },
      { category: 'Data Warehousing', skills: 'Redshift, BigQuery' },
      { category: 'Version Control', skills: 'Git, Bitbucket' },
      ]
    };

    const androidDeveloper = {
      aboutMe: "Hi, I'm Mehmet Emin Bayrak, a recent Computer Science graduate with a strong foundation in Android development. I am proficient in building mobile applications using Kotlin and Java. I am seeking to contribute my Android development expertise to create innovative mobile solutions.",
      objective: "To leverage my technical skills and experience in Android development to contribute to the success of a dynamic team and create innovative mobile solutions.",
      technicalSkills: [
        { category: 'Mobile Development', skills: 'Kotlin, Java' },
        { category: 'Android Frameworks', skills: 'Android SDK, Jetpack Compose' },
        { category: 'Version Control', skills: 'Git, Bitbucket' },
        { category: 'Programming Languages', skills: 'Kotlin, Java' },
      ]
    };

    const path = this.$route.path;
    if (path.includes('/b')) {
      this.aboutMe = backend.aboutMe;
      this.objective = backend.objective;
      this.technicalSkills = backend.technicalSkills;
    } else if (path.includes('/ds')) {
      this.aboutMe = dataScientist.aboutMe;
      this.objective = dataScientist.objective;
      this.technicalSkills = dataScientist.technicalSkills;
    } else if (path.includes('/fe')) {
      this.aboutMe = frontend.aboutMe;
      this.objective = frontend.objective;
      this.technicalSkills = frontend.technicalSkills;
    } else if (path.includes('/fs')) {
      this.aboutMe = fullstack.aboutMe;
      this.objective = fullstack.objective;
      this.technicalSkills = fullstack.technicalSkills;
    } else if (path.includes('/de')) {
      this.aboutMe = dataEngineer.aboutMe;
      this.objective = dataEngineer.objective;
      this.technicalSkills = dataEngineer.technicalSkills;
    } else if (path.includes('/a')) {
      this.aboutMe = androidDeveloper.aboutMe;
      this.objective = androidDeveloper.objective;
      this.technicalSkills = androidDeveloper.technicalSkills;
    } else if (path.includes('/')) {
      this.aboutMe = dataScientist.aboutMe;
      this.objective = dataScientist.objective;
      this.technicalSkills = dataScientist.technicalSkills;
    }
  }
};
</script>

<style scoped>
/* .about {
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 70%;
  margin: 0 auto;
} */

h1 {
  color:var(--vt-c-text-dark-1);
  margin-bottom: 20px;
  font-size: 2em;
} 
 h2 {
  color: var(--vt-c-text-dark-1);
  font-size: 1.5em;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
} 

/* strong {
  font-weight: bold;
} */

/* ul {
  list-style-type: none;
  padding: 0;
  margin-bottom: 10px;
} */

/* li {
  margin-bottom: 10px;
} */

/* a {
  text-decoration: none;
} */

/* a:hover {
  text-decoration: underline;
} */
</style>