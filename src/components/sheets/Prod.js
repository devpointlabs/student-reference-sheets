import React, { useState } from 'react';
import { Header, Grid, Accordion, Icon, Image, Checkbox } from 'semantic-ui-react';
import { BoldColor } from '../../styledComponents/styles';
import Logo from '../../images/dpl-logo.png';

const Prod = () => {
  const [preProdOpen, setPreProdOpen] = useState(true);
  const [netlifyWebOpen, setNetlifyWebOpen] = useState(true);
  const [netlifyCLIOpen, setNetlifyCLIOpen] = useState(true);
  const [herokuOpen, setHerokuOpen] = useState(true);

  return (
    <>
      <Image src={Logo} centered />
      <Header as='h1' textAlign='center'><BoldColor>Production Steps</BoldColor></Header>
      <br />
      <Grid columns={2} stackable>
        <Grid.Column>
          <Accordion styled>
            <Accordion.Title
              active={preProdOpen}
              onClick={() => setPreProdOpen(!preProdOpen)}
            >
              <Icon color='green' name='checkmark' /> Pre Production Pre Checks
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={preProdOpen}>
              <p>
                Before you have your project live, there are some prechecks beforehand to ensure that you have the best of your app in production.
              </p>
              <Checkbox label='The project has no errors' />
              <br />
              <br />
              <Checkbox label='The project is the most up to date' />
              <br />
              <br />
              <Checkbox label='The up to date version is on GitHub' />
              <br />
              <br />
              <Checkbox label='Optimized for production, (ex. change title, favicon, improve performance, meta data, etc.)' />
              <br />
              <br />
              <Checkbox label='Decide whether this project is a Static site (No DB) or Dynamic Site (Has DB)' />
              <br />
              <br />
              <p>
                After all the checklist items are done from above, you are now ready to push to production. If you have a Static site, you would use Netlify, if you have a Dynamic site, you will use Heroku. 
              </p>
              <p>
                There are other tools to push up to production, and they all have similar and different steps for each of them. All other tools are beyond the scope of this course and is recommended to read documentation and tutorials for the tools.
              </p>
            </Accordion.Content>
          </Accordion>
          <br />
          <Accordion styled>
            <Accordion.Title
              active={netlifyWebOpen}
              onClick={() => setNetlifyWebOpen(!netlifyWebOpen)}
            >
              Netlify Web App
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={netlifyWebOpen}>
              <p>
                These steps below is for how to have a production app using the Netlify Web App.
              </p>
              <p>
                This site is good for static applications for just HTML sites and ReactJS sites. The home page is found on index.html so be sure you have one.
              </p>
              <p>
                For ReactJS applications, to prevent a redirect error, we will create redirect rules, more about it here: <a href='https://docs.netlify.com/routing/redirects/' target='_blank' rel="noopener noreferrer">docs.netlify.com/routing/redirects/</a>
              </p>
              <p>
                In the public folder create a _redirect file with this content below:
              </p>
              <code>&#47;&#42; &nbsp;&nbsp;&nbsp;    /index.html   200</code>
              <br />
              <br />
              <p>
                Login in to your account in the Netlify website, <a href='https://app.netlify.com' target='_blank' rel="noopener noreferrer">app.netlify.com</a>
              </p>
              <p>
                After navigating to the Team overview or Sites tab, click on the teal button of New site from Git.
              </p>
              <b>Step 1. Pick A Git Provider</b>
              <p>
                Click on the git provider your project is on, and you might have to authorized the access or it will auto authorize for you.
              </p>
              <b>Step 2. Pick A Repository</b>
              <p>
                Use the search to find the repository you want in production.
              </p>
              <p>
                Go with the default setting unless stated otherwised and press deploy site.
              </p>
              <p>
                After your site is deployed, you can change the site and domain setting as desired. 
              </p>
              <p>
                If there are any error, see if you can debug and resolve them in development, and to check production errors, go to the deploy tab and click on the failed build for more insight.
              </p>
              <p>
                If you want to update your content, update the master branch on the GitHub repo and it will auto deploy.
              </p>
            </Accordion.Content>
          </Accordion>
          <br />
          <Accordion styled>
            <Accordion.Title
              active={netlifyCLIOpen}
              onClick={() => setNetlifyCLIOpen(!netlifyCLIOpen)}
            >
              Netlify CLI
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={netlifyCLIOpen}>
              <p>
                These steps below is for how to have a production app using the Netlify CLI in your terminal.
              </p>
              <p>
                This site is good for static applications for just HTML sites and ReactJS sites. The home page is found on index.html so be sure you have one.
              </p>
              <p>
                For ReactJS applications, to prevent a redirect error, we will create redirect rules, more about it here: <a href='https://docs.netlify.com/routing/redirects/' target='_blank' rel="noopener noreferrer">docs.netlify.com/routing/redirects/</a>
              </p>
              <p>
                In the public folder create a _redirect file with this content below:
              </p>
              <code>/*    /index.html   200</code>
              <br />
              <br />
              <p>
                Login in to your account in the Netlify website, <a href='https://app.netlify.com' target='_blank' rel="noopener noreferrer">app.netlify.com</a>
              </p>
              <p>
                After navigating to the Team overview or Sites tab, click on the teal button of New site from Git.
              </p>
              <b>Step 1. Pick A Git Provider</b>
              <p>
                Click on the git provider your project is on, and you might have to authorized the access or it will auto authorize for you.
              </p>
              <b>Step 2. Pick A Repository</b>
              <p>
                Use the search to find the repository you want in production.
              </p>
              <p>
                Go with the default setting unless stated otherwised and press deploy site.
              </p>
              <p>
                After your site is deployed, you can change the site and domain setting as desired. 
              </p>
              <p>
                If there are any error, see if you can debug and resolve them in development, and to check production errors, go to the deploy tab and click on the failed build for more insight.
              </p>
              <p>
                If you want to update your content, update the master branch on the GitHub repo and it will auto deploy.
              </p>
            </Accordion.Content>
          </Accordion>
        </Grid.Column>
        <Grid.Column>
          <Accordion styled>
            <Accordion.Title
              active={herokuOpen}
              onClick={() => setHerokuOpen(!herokuOpen)}
            >
              Heroku
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={herokuOpen}>
              <p>
                One team member creates the initial project, push it up to Github with Initial Push Steps. Got into the Github repository settings and add all contributors. 
              </p>
              <p>
                Contributors will accept the invite via email or Github. Then go into the Github repo and click on the Clone or Download button to copy the SSH URL.
              </p>
              <code>$ git clone *paste SSH URL</code>
              <p>
                Downloads the latest version from Github to local machine. 
              </p>
            </Accordion.Content>
          </Accordion>
        </Grid.Column>
      </Grid>
    </>
  )
}

export default Prod;