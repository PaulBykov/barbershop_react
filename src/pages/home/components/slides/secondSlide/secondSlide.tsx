import React from 'react';
import styles from './secondSlide.module.css'

const SecondSlide = () => {
    return (
        <section className={styles.section}>
            <h2 className={styles.section_title}>
                About Us
            </h2>

            <span className={styles.section_text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis deserunt dolore explicabo id iure laborum laudantium molestias nemo neque numquam odit, pariatur possimus quasi quis quod sed similique voluptate. Excepturi!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet, consectetur dolore dolorem eaque est et facere iusto laudantium maxime minima nostrum officia quo ratione, sapiente sed tempora unde vitae!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi aspernatur, aut corporis debitis earum enim hic laboriosam molestiae molestias, praesentium provident quia, quos rerum totam vero voluptatem. Explicabo, praesentium?
            </span>
        </section>
    );
};

export default SecondSlide;