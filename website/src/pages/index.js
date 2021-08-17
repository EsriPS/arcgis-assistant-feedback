import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Inspect',
    imageUrl: 'img/green-inspect.svg',
    description: (
      <>
        View the underlying JSON and resources for any item in ArcGIS Online or
        Enterprise.
      </>
    ),
  },
  {
    title: 'Modify',
    imageUrl: 'img/green-modify.svg',
    description: (
      <>Modify the JSON and resources that define your ArcGIS items.</>
    ),
  },
  {
    title: 'Copy',
    imageUrl: 'img/green-copy.svg',
    description: <>Copy items to your account and other accounts.</>,
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature, 'text--center')}>
      <h3>{title} </h3>
      {imgUrl && (
        <div>
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}

      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title="Home" description="A Swiss Army Knife for ArcGIS">
      <div className="alert alert--danger text--center" role="alert">
        {/* TODO: Fix this close button */}
        {/* <button aria-label="Close" className="close" type="button">
          <span aria-hidden="true">×</span>
        </button> */}
        &#128009; <strong>Here Be Dragons!</strong> &#128009; <br></br>
        ArcGIS Assistant allows users to make potentially destructive
        modifications to their content. <br></br>
        Please reference <a href="docs/warnings">the warnings page</a> for more
        details.
      </div>
      <header className={clsx('hero hero--dark hero1-bg', styles.heroBanner)}>
        <div className="full-width flex-row">
          <div className="width-35">
            <img
              className="width-75"
              alt="Swiss Army knife with magnifying glass, pencil and wrench attachments"
              src="img/white-all.svg"
            />
          </div>
          <div className="flex-col-left width-65 pad-5 flex-col">
            <h1 className="hero__title slim">{siteConfig.title}</h1>
            <p>
              <span className="hero__subtitle ital">{siteConfig.tagline}</span>
            </p>

            <div className={styles.buttons}>
              <Link
                className={clsx(
                  'button button--secondary button--lg',
                  styles.getStarted
                )}
                to={useBaseUrl('docs/')}
              >
                Read the Guides
              </Link>
            </div>
            <div className={styles.buttons}>
              <a
                style={{ marginTop: '1.5rem' }}
                className={clsx(
                  'button button--outline button--secondary button--link button--lg',
                  styles.getStarted
                )}
                href="https://assistant.esri-ps.com"
              >
                Go to ArcGIS Assistant
              </a>
            </div>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <div className="hero hero--dark">
          <div className="flex-row full-width">
            <div className="flex-col-left width-65 pad-5">
              <h2 className="slim">About Assistant</h2>
              <p>
                <strong>ArcGIS Assistant</strong> is a community-driven app
                developed by a team from{' '}
                <a
                  className="white-links"
                  href="https://www.esri.com/en-us/arcgis/services/overview"
                  target="_blank"
                >
                  Esri Professional Services
                </a>
                . This app streamlines certain administrative tasks for ArcGIS
                power users who have an advanced understanding of the
                <a
                  className="white-links"
                  href="https://doc.arcgis.com/en/arcgis-online/reference/geo-info.htm"
                  target="_blank"
                >
                  {' '}
                  ArcGIS geoinformation model,
                </a>{' '}
                and want to perform advanced tasks outside the scope of existing
                ArcGIS apps.{' '}
              </p>
              <p>
                {' '}
                ArcGIS Assistant is the successor to{' '}
                <a
                  className="white-links"
                  href="https://ago-assistant.esri.com/"
                  target="_blank"
                >
                  AGO-Assistant.
                </a>{' '}
                Read more about the new Assistant, as well as future intentions
                for the project, in the{' '}
                <a className="white-links" href="docs/">
                  Guides
                </a>
                .
              </p>
            </div>
            <div className="width-35 flex-centered flex-row">
              <img
                alt="Swiss Army knife with ArcGIS product logos arranged around it"
                src="img/ago-apps.svg"
                className="width-75"
              />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
