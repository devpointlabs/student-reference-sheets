import React, { useState } from 'react';
import { Header, Grid, Accordion, Icon, Image } from 'semantic-ui-react';
import { BoldColor } from '../../styledComponents/styles';
import Logo from '../../images/dpl-logo.png';

const Rails = () => {
  const [initialPro, setInitialProOpen] = useState(true);
  const [branchingOpen, setbranchingOpen] = useState(true);
  const [vimOpen, setVimOpen] = useState(true);
  const [infoOpen, setInfoOpen] = useState(true);
  const [stashingOpen, setStashingOpen] = useState(true);
  const [altOpen, setAltOpen] = useState(true);

  return (
    <>
    <Image src={Logo} centered />
      <Header as='h1' textAlign='center'><BoldColor>Ruby on Rails References</BoldColor></Header>
      <Grid columns={2} stackable>
        <Grid.Column>
          <Accordion styled>
            <Accordion.Title
              active={initialPro}
              onClick={() => setInitialProOpen(!initialPro)}
            >
              Initial Project 
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={initialPro}>
              <p>
                Housekeeping items to start a Ruby on Rails Project
              </p>
              <code>$ rails new project_name -d postgresql --skip-turbolinks</code>
              <p>
                Creates initial rails project with the postgresql database tool attached and do not install turbolinks.
              </p>
              <p>
                Next step is to add all of the needed Gems in your GEMFILE then run a: 
              </p>
              <code>$ bundle</code>
              <p>
                Short for bundle install and install all the gems in the project, be sure to check the gem documentation to see if there is any other configuration
              </p>
              <br />
              <code>$ bundle exec rake db:create</code>
              <p>
                This creates both the development and testing database. You can use rake or rails.
              </p>
              <br />
              <p>
                Then follow the git flow for the initial push but you don't need the git init part since rails does that for you.
              </p>
              <br />
              <p>
                The final house keeping is to plan out how the tables look like with what it hhas and types of associations it has. But way is to draw it out and plan it with your group.
              </p>
            </Accordion.Content>
          </Accordion>
          <br />
          <Accordion styled>
            <Accordion.Title
              active={branchingOpen}
              onClick={() => setbranchingOpen(!branchingOpen)}
            >
              Branching
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={branchingOpen}>
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
              active={vimOpen}
              onClick={() => setVimOpen(!vimOpen)}
            >
              Vim
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={vimOpen}>
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
              active={infoOpen}
              onClick={() => setInfoOpen(!infoOpen)}
            >
              Info Commands
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={infoOpen}>
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
              active={stashingOpen}
              onClick={() => setStashingOpen(!stashingOpen)}
            >
              Stashing 
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={stashingOpen}>
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
               active={altOpen}
               onClick={() => setAltOpen(!altOpen)}
            >
              Alternatives 
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={altOpen}>
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
}

export default Rails;