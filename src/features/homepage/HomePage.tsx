import React from 'react';
import styles from './HomePage.module.css';

export default function HomePage(): JSX.Element {
  return (
    <div className={styles.bigBox}>
      <h3>Online functional Github guide</h3>
      <div>
        This website was created as part of the front-end development training course,
        Cohort-24 group of the AIT-TR IT school, student <b>Oleksii Nesterov</b>.
        The <b>purpose of the project:</b> to provide recruiters and future
        colleagues with a convenient guide to the git-hub jobs of the applicant,
        as well as to demonstrate their skills in front-end development
        using the site as an example.
      </div>
      <div>
        When creating the site, the following were used: <strong>CSS, HTML, TypeScript</strong>.
        The <b>React</b> library, such package
        as the <b>Redux toolkits</b> and <b>React-router-dom</b> packages was applied.
        Github API was used as a back-end.
      </div>
    </div>
  );
}
