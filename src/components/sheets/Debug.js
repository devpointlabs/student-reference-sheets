import React from 'react';
import { Header, Image, List } from 'semantic-ui-react';
import Logo from '../../images/dpl-logo.png'
const Debug = () => (
  <>
    <Image src={Logo} />
    <Header>D.E.B.U.G</Header>
    <Header>Double-check</Header>
    <Header>Errors</Header>
    <Header>Breaks</Header>
    <Header>Utilize</Header>
    <Header>Google</Header>
    <List bulleted>
      <List.Item>
        Double check for spelling, syntax, missing syntax, in the right file and causes for undefineds etc.
      </List.Item>
      <List.Item>
        Look at the error, see where the error is, what is the cause of the error. 
      </List.Item>
      <List.Item>
        Take a small break, have time to clear your mind and revisit your code with a new view.
      </List.Item>
      <List.Item>
        Utilize your neighbor, lecture notes, slack, console, devtools, prys and debuggers. 
      </List.Item>
      <List.Item>
        Google the error or what you want to do, or how to do it.
        <List.List>
          <List.Item>Steps to google</List.Item>
            <List.List>
              <List.Item>Name of the language</List.Item>
              <List.Item>Explain a one liner search</List.Item>
            </List.List>
        </List.List>
      </List.Item>
    </List>
  </>
)

export default Debug;