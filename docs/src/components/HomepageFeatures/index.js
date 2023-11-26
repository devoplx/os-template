import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        fastify essentials includes a suite of Quality of Life (QoL) features to streamline your Fastify development. These features are designed to simplify common tasks, reduce boilerplate code, and enhance overall developer productivity.
      </>
    ),
  },
  {
    title: 'Custom Cool Features',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Experience innovation with custom cool features provided by fastify-essentials. These unique additions go beyond the standard Fastify functionality and offer specialized tools, such as integrated captchas. These features aim to add a touch of creativity and versatility to your applications.
      </>
    ),
  },
  {
    title: 'Seamless Integration',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Integrating fastify-essentials into your Fastify project is seamless and straightforward. The plugin is designed for easy integration, allowing you to enhance your existing Fastify application with minimal effort. This ensures that you can quickly leverage the benefits of the plugin without disrupting your current development workflow.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
