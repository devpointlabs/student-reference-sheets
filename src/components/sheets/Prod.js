import React, { useState } from 'react';
import { Header, Grid, Accordion, Icon, Image, Checkbox } from 'semantic-ui-react';
import { BoldColor } from '../../styledComponents/styles';
import Logo from '../../images/dpl-logo.png';

const Prod = () => {
  const [preProdOpen, setPreProdOpen] = useState(true);
  const [netlifyOpen, setNetlifyOpen] = useState(true);
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
              active={netlifyOpen}
              onClick={() => setNetlifyOpen(!netlifyOpen)}
            >
              Netlify
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={netlifyOpen}>
              
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
              
            </Accordion.Content>
          </Accordion>
        </Grid.Column>
      </Grid>
    </>
  )
}

export default Prod;