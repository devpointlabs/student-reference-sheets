import React from 'react';
import { Header, Grid, Accordion, Icon, Image } from 'semantic-ui-react';
import { BoldColor } from '../../styledComponents/styles';
import Logo from '../../images/dpl-logo.png';

const GitRefs = () => (
  <>
  <Image src={Logo} centered />
    <Header as='h1' textAlign='center'><BoldColor>Git References</BoldColor></Header>
    <Grid columns={2} stackable>
      <Grid.Column>
        <Accordion styled>
          <Accordion.Title
            active={true}
            index={0}
          >
            Branching
            <Icon name='dropdown' />
          </Accordion.Title>
          <Accordion.Content active={true}>
            <p>
              When you want to work in a pocket dimension.
            </p>
            <code>$ git branch</code>
            <p>
              Lists all the local branches and current. working branch
            </p>
            <code>$ git checkout branch_name</code>
            <p>
              Switch between branches.
            </p>
            <code>$ git checkout -b branch_name</code>
            <p>
              Create and switch into a new branch.
            </p>
            <code>$ git branch -d branch_name</code>
            <p>
              Delete the branch and everything in it.
            </p>
          </Accordion.Content>
        </Accordion>
        <br />
        <Accordion styled>
          <Accordion.Title
            active={true}
            index={0}
          >
            Vim
            <Icon name='dropdown' />
          </Accordion.Title>
          <Accordion.Content active={true}>
            <code>$ git commit</code>
            <p>
              Use vim for a commit message.
            </p>
            <code>$ git commit --amend</code>
            <p>
              Updates the latest commit message with vim.
            </p>
            <p>
              Vim has 3 modes: <i>Command, Insert, Visual</i>.
              <br />
              Entering into vim you will be in <i>Command</i> mode. 
              <br />
              To be able to type you would need to go to <i>Insert</i> mode.
            </p>
            <code>Type: I</code>
            <p>
              Bottom of the terminal should say:
              <br />
              -- Insert --
              <br />
              Then update or add the commit message.
            </p>
            <code>Type: ESC</code>
            <p>
              This gets you out of Insert mode and into command mode.
            </p>
            <code>Type: :wq      shift + ; + w + q</code>
            <p>
              Saves and quits. 
            </p>
          </Accordion.Content>
        </Accordion>
      </Grid.Column>
      <Grid.Column>
      <Accordion styled>
          <Accordion.Title
            active={true}
            index={0}
          >
            Info Commands
            <Icon name='dropdown' />
          </Accordion.Title>
          <Accordion.Content active={true}>
            <code>$ git status</code>
            <p>
              List progress of file changes.
            </p>
            <code>$ git log</code>
            <p>
              Show commit history.
            </p>
            <code>$ git log --oneline</code>
            <p>
              Condensed commit history.
            </p>
            <code>$ git diff</code>
            <p>
              Show file difference that are not yet staged.
            </p>
            <code>$ git diff --staged</code>
            <p>
              Show file differences that are staged.
            </p>
          </Accordion.Content>
        </Accordion>
        <br />
        <Accordion styled>
          <Accordion.Title
            active={true}
            index={0}
          >
            Stashing 
            <Icon name='dropdown' />
          </Accordion.Title>
          <Accordion.Content active={true}>
            <p>
              Set aside code versions.
            </p>
            <code>$ git stash</code>
            <p>
              Put all untracked code in a pocket. dimension.
            </p>
            <code>$ git stash list</code>
            <p>
              Show stashed items.
            </p>
            <code>$ git stash pop</code>
            <p>
              Restore most recent stashed item.
            </p>
            <code>$ git stash drop </code>
            <p>
              Deletes most recent stashed item.
            </p>
          </Accordion.Content>
        </Accordion>
        <br />
        <Accordion styled>
          <Accordion.Title
            active={true}
            index={0}
          >
            Alternatives 
            <Icon name='dropdown' />
          </Accordion.Title>
          <Accordion.Content active={true}>
            <p>
              Instead of fetching and rebasing you would do pull and merge, which is another way to get your code up to date and combine versions.
            </p>
            <code>$ git pull origin master</code>
            <p>
              Incorporates changes from Github.
            </p>
            <code>$ git merge branch_name</code>
            <p>
              Combines branch version to the current working branch. 
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

export default GitRefs;