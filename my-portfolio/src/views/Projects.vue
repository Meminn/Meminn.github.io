<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const backendProjects = [
  {
    title: 'Vinylbox (Online Store Webpage)',
    description: [
      'Built a full-stack web app using React, Java Spring Boot, and PostgreSQL.',
      'Followed Agile methodology with task tracking in Jira and version control via Bitbucket.',
      'Utilized Bootstrap library as the frontend framework.'
    ],
    technologies: ['React', 'Java Spring Boot', 'PostgreSQL', 'Bootstrap', 'Jira', 'Bitbucket']
  },
  {
    title: 'MovieDB',
    description: [
      'Built a PHP and MySQL-based movie database web application using XAMPP.'
    ],
    technologies: ['PHP', 'MySQL', 'XAMPP']
  }
];

const frontendProjects = [
  {
    title: 'Portfolio Website',
    description: [
      'Developed a responsive portfolio website using Vue.js and Tailwind CSS.',
      'Implemented routing using Vue Router and state management using Vuex.'
    ],
    technologies: ['Vue.js', 'Tailwind CSS', 'Vue Router', 'Vuex']
  },
  {
    title: 'Vinylbox (Online Store Webpage)',
    description: [
      'Built a full-stack web app using React, Java Spring Boot, and PostgreSQL.',
      'Followed Agile methodology with task tracking in Jira and version control via Bitbucket.',
      'Utilized Bootstrap library as the frontend framework.'
    ],
    technologies: ['React', 'Java Spring Boot', 'PostgreSQL', 'Bootstrap', 'Jira', 'Bitbucket']
  },
  {
    title: 'MovieDB',
    description: [
      'Built a PHP and MySQL-based movie database web application using XAMPP.'
    ],
    technologies: ['PHP', 'MySQL', 'XAMPP']
  }
];

const dataEngineerProjects = [
{
    title: 'Vinylbox (Online Store Webpage)',
    description: [
      'Built a full-stack web app using React, Java Spring Boot, and PostgreSQL.',
      'Followed Agile methodology with task tracking in Jira and version control via Bitbucket.',
      'Utilized Bootstrap library as the frontend framework.'
    ],
    technologies: ['React', 'Java Spring Boot', 'PostgreSQL', 'Bootstrap', 'Jira', 'Bitbucket']
  },
  {
    title: 'MovieDB',
    description: [
      'Built a PHP and MySQL-based movie database web application using XAMPP.'
    ],
    technologies: ['PHP', 'MySQL', 'XAMPP']
  }
];

const fullStackEngineerProjects = [
  {
    title: 'Vinylbox (Online Store Webpage)',
    description: [
      'Built a full-stack web app using React, Java Spring Boot, and PostgreSQL.',
      'Followed Agile methodology with task tracking in Jira and version control via Bitbucket.',
      'Utilized Bootstrap library as the frontend framework.'
    ],
    technologies: ['React', 'Java Spring Boot', 'PostgreSQL', 'Bootstrap', 'Jira', 'Bitbucket']
  },
  {
    title: 'MovieDB',
    description: [
      'Built a PHP and MySQL-based movie database web application using XAMPP.'
    ],
    technologies: ['PHP', 'MySQL', 'XAMPP']
  }
];

const dataScienceProjects = [
  {
    title: 'KoçFinans Predicting Probability of Default for Car Loan Applications',
    description: [
      'Created a probability of default model for predicting car loan application results.',
      'Utilized XGBoost and LightGBM for modeling.',
      'Implemented SHAP, Lime, and Counterfactual explanation methods for model interpretation.'
    ],
    technologies: ['XGBoost', 'LightGBM', 'SHAP', 'Lime', 'Counterfactual']
  },
  {
    title: 'Twitter Bot User & Political Tweet Classification',
    description: [
      'Developed models to classify Twitter bot accounts and political tweets using logistic regression, decision trees, and neural networks.'
    ],
    technologies: ['Logistic Regression', 'Decision Trees', 'Neural Networks']
  },
  {
    title: 'Dogecoin Prediction',
    description: [
      'Analyzed historical Dogecoin data and predicted future closing values using linear regression and neural network regression methods.'
    ],
    technologies: ['Linear Regression', 'Neural Network Regression']
  },
  {
    title: 'THz Communication in Healthcare',
    description: [
      'Conducted research on THz Communication technologies and their applications in healthcare.'
    ],
    technologies: ['THz Communication']
  }
];

const route = useRoute();

const projects = computed(() => {
  if (route.path.includes('/b')) {
    return backendProjects;
  } else if (route.path.includes('/ds')) {
    return dataScienceProjects;
  } else if (route.path.includes('/fe')) {
    return frontendProjects;
  } else if (route.path.includes('/fs')) {
    return fullStackEngineerProjects;
  } else if (route.path.includes('/de')) {
    return dataEngineerProjects;
  }else {
    return [];
  }
});

const resumeLink = computed(() => {
  if (route.path.includes('/b')) {
    return '/assets/Mehmet Emin Bayrak CV Backend Developer.pdf';
  } else if (route.path.includes('/ds')) {
    return '/assets/Mehmet Emin Bayrak CV Data Scientist.pdf';
  } else if (route.path.includes('/fe')) {
    return '/assets/Mehmet Emin Bayrak CV Frontend Developer.pdf';
  } else if (route.path.includes('/fs')) {
    return '/assets/Mehmet Emin Bayrak CV Full-Stack Developer.pdf';
  } else if (route.path.includes('/de')) {
    return '/assets/Mehmet Emin Bayrak CV Data Engineer.pdf';
  } else {
    return '/assets/Mehmet Emin Bayrak CV.pdf';
  }
});
</script>

<template>
  <main>
    <section>
      <h1>My Projects</h1>
      <div>
        <div class="project_title" v-for="project in projects" :key="project.title">
          <h2>{{ project.title }}</h2>
          <ul class="description-list">
            <li class="points" v-for="point in project.description" :key="point">{{ point }}</li>
          </ul>
          <p><strong>Technologies:</strong> {{ project.technologies.join(', ') }}</p>
        </div>
      </div>
    </section>
    <section class="resume">
      <a :href="resumeLink" download class="btn">Download my Resume for more information.</a>
    </section>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70%;
  margin: 0 auto;
} 

h1 {
  margin-bottom: 20px;
  font-size: 2em;
} 

h2 {
  margin: 0 10px 10px 0;
  font-size: 1.5em;
} 

p {
  color: var(--vt-c-text-dark-2);
  margin: 15px 10px 10px 0;
} 
</style>