import React from 'react';
import { Header, Image, List } from 'semantic-ui-react';
import Logo from '../../images/dpl-logo.png';
import { SheetContainer, BoldColor } from '../../styledComponents/styles';

const Debug = () => (
  <>
    <Image src={Logo} centered />
    <Header textAlign='center' as='h1'><BoldColor>D.E.B.U.G</BoldColor></Header>
    <SheetContainer>
      <Header><BoldColor>D</BoldColor>ouble-check</Header>
      <Header><BoldColor>E</BoldColor>rrors</Header>
      <Header><BoldColor>B</BoldColor>reaks</Header>
      <Header><BoldColor>U</BoldColor>tilize</Header>
      <Header><BoldColor>G</BoldColor>oogle</Header>
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
    </SheetContainer>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </>
)

export default Debug;