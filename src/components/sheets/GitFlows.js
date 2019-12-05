import React, { useState } from 'react';
import { Header, Grid, Accordion, Icon, Image } from 'semantic-ui-react';
import { BoldColor } from '../../styledComponents/styles';
import Logo from '../../images/dpl-logo.png';

const GitFlows = () => {
  const [initialPushOpen, setInitialPushOpen] = useState(true);
  const [continueOpen, setContinueOpen] = useState(true);
  const [collabFlowStartOpen, setCollabFlowStartOpen] = useState(true);
  const [collabFlowOpen, setCollabFlowOpen] = useState(true);
  

  return (
    <>
    <Image src={Logo} centered />
      <Header as='h1' textAlign='center'><BoldColor>Git Flows</BoldColor></Header>
      <br />
      <Grid columns={2} stackable>
        <Grid.Column>
          <Accordion styled>
            <Accordion.Title
              active={initialPushOpen}
              onClick={() => setInitialPushOpen(!initialPushOpen)}
            >
              Initial Push
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={initialPushOpen}>
              <p>
                Step to push your repository to Github for the first time.
              </p>
              <code>$ git init</code>
              <p>
                Initializes a repository in the working directory. Do not create repos in other repos or in system directories. 
              </p>
              <code>$ git add .</code>
              <p>
                Track all new changes.
              </p>
              <code>$ git commit -m “What you did”</code>
              <p>
                Labels and records the new version of code of what you did.
                <br />
                *Login into Github and create a new repository. Copy the SSH URL
              </p>
              <code>$ git remote add origin *paste the ssh link</code>
              <p>
                Connects the local repository to the one created on Github.
              </p>
              <code>$ git push origin master</code>
              <p>
                Uploads local machine repository’s commits into Github.
              </p>
            </Accordion.Content>
          </Accordion>
          <br />
          <Accordion styled>
            <Accordion.Title
              active={continueOpen}
              onClick={() => setContinueOpen(!continueOpen)}
            >
              Continue Changes 
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={continueOpen}>
              <p>
                Flow to update Github with new changes. 
                <br />
                * Be sure to save all the files and test that the code works. Don’t push broken code.
              </p>
              <code>$ git add .</code>
              <br />
              <br />
              <code>$ git commit -m “What you did”</code>
              <br />
              <br />
              <code>$ git push origin master</code>
              <br />
              <br />
              <p>
                or
              </p>
              <code>$ git push origin branch_name</code>
            </Accordion.Content>
          </Accordion>
        </Grid.Column>
        <Grid.Column>
          <Accordion styled>
            <Accordion.Title
              active={collabFlowStartOpen}
              onClick={() => setCollabFlowStartOpen(!collabFlowStartOpen)}
            >
              Collab Flow Start
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={collabFlowStartOpen}>
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
          <br />
          <Accordion styled>
            <Accordion.Title
              active={collabFlowOpen}
              onClick={() => setCollabFlowOpen(!collabFlowOpen)}
            >
              Collab Flow
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={collabFlowOpen}>
              <p>
                Collaborative work efforts to have the most updated code. 
                <br />
                One at a time, each teammate does the following:
                <br /> 
                * Be sure to save all the files and test that the code works. Don’t push broken code.
              </p>
              <code>$ git add .</code>
              <br />
              <br />
              <code>$ git commit -m “What you did”</code>
              <p></p>
              <p>
                The next step is to get your code up to date with github. 
              </p>
              <code>$ git fetch origin master</code>
              <p>
                Grabs the code on Github and brings it to the local machine. 
              </p>
              <code>$ git rebase origin/master</code>
              <p>
                Combines the local version and the Github version. 
              </p>
              <p>
                If there are conflicts, resolve each and every listed conflicts by communication with team members. Go by file to file.
              </p>
              <p>
                After all conflicts are resolved.
              </p>
              <code>$ git add .</code>
              <p></p>
              <code>$ git rebase --continue</code>
              <p>
                Do not commit. 
                <br />
                Go to next step
              </p>
              <p>
                If no conflicts 
              </p>
              <code>
                $ git push origin branch_name
              </code>
              <p></p>
              <p>
                Then on github make a pull request and have someone else review it.
              </p>
              <p>
                Then merge it onto the master if and when it is a clean merge. 
              </p>
              <p>
                Repeat for every member. 
              </p>
              <p>
                Then do one last code up to date steps to get the most up to date code. 
              </p>
            </Accordion.Content>
          </Accordion>
        </Grid.Column>
      </Grid>
      <br />
      <br />
      <br />
    </>
  )
}

export default GitFlows;