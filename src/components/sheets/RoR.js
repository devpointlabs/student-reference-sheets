import React, { useState, useEffect } from 'react';
import { Header, Grid, Accordion, Icon, Image } from 'semantic-ui-react';
import { BoldColor } from '../../styledComponents/styles';
import Logo from '../../images/dpl-logo.png';

const RoR = () => {
  const [initialPro, setInitialProOpen] = useState(true);
  const [railsController, setRailsControllerOpen] = useState(true);
  const [railsRoutes, setRailsRoutesOpen] = useState(true);
  const [collab, setCollabOpen] = useState(true);
  const [cactions, setCactionsOpen] = useState(true);
  const [reactInit, setReactOpen] = useState(true);
  const [reactWoHooks, setReactWoHooksOpen] = useState(true);
  const [hooks, setHooksOpen] = useState(true);

  return (
    <>
    <Image src={Logo} centered />
      <Header as='h1' textAlign='center'><BoldColor>React on Rails References</BoldColor></Header>
      <br />
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
                Housekeeping items to start a Ruby on Rails Project with a api flag
              </p>
              <code>$ rails new project_name -d postgresql --api</code>
              <p>
                Creates initial rails project with the postgresql database tool. This also sets up our rails end to be an api so it won't generate any views and focuses more on the models and controllers.
              </p>
              <p>
                Next step is to add all of the needed Gems in your GEMFILE, and these are gems on the back end, no front end or styles gems since that comes later on the React end. 
              </p>
              <code>gem 'pry'</code>
              <p>
                then run a:
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
              <code>$ bundle exec rails g controller static index --skip-routes</code>
              <p>
                This creates a static controller and we will be using this for production.
              </p>
              <p>
                Then follow the git flow for the initial push but you don't need the git init part since rails does that for you.
              </p>
              <p>
                The final house keeping is to plan out how the tables look like with what it has and types of associations it has. But way is to draw it out and plan it with your group.
              </p>
              <p>
                *Generating models, migrations, db commands are the same in this type of project, check rails references for more info.
              </p>
            </Accordion.Content>
          </Accordion>
          <br />
          <Accordion styled>
            <Accordion.Title
              active={railsController}
              onClick={() => setRailsControllerOpen(!railsController)}
            >
              Rails Controller
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={railsController}>
              <p>
                Now the next step is to generate the controllers, the traffic directors of the app but in the namespace of api
              </p>
              <code>$ bundle exec rails g controller api/controller_names --skip-routes</code>
              <p>
                This creates the controllers and no views pages with in the api folder. This also skips the pre-generated routes because we will make our own routes.
              </p>
              <p>
                *Models are singular and Controllers are plural.
              </p>
              <p>
                If you mess up on the controller, you can delete it with the following command and retry the above command.  
              </p>
              <code>$ bundle exec rails d controller api/controller_names</code>
              <p>
                This deletes the controller and the associated views.
              </p>
            </Accordion.Content>
          </Accordion>
          <br />
          <Accordion styled>
            <Accordion.Title
               active={cactions}
               onClick={() => setCactionsOpen(!cactions)}
            >
              Controller Actions 
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={cactions}>
              <p>
                Now it is time to fill out the actions. Actions are what you can do and where you can go in the app. We need to render json for our React end to understand.
              </p>
              <p>
                READ / GET
              </p>
              <code>
                def index
                  <br />  
                  &nbsp; render json: Model_name.all
                  <br />
                end
              </code>
              <p>
                This action creates and sets a instance variable and grabs all the records of a Table.
              </p>
              <br />
              <code>
                def show
                  <br />  
                  &nbsp; @model_name = Model_name.find(params[:id])
                  <br />
                  &nbsp; render json: @model_name
                  <br />
                end
              </code>
              <p>
                Shows a single record with a given parameter of id. The id is which record you want to return.
              </p>
              <br />
              <p>
                Create / POST 
              </p>
              <code>
                def create 
                  <br />  
                  &nbsp;
                  @model_name = Model_name.new(model_name_params)
                  <br />  
                  &nbsp;
                  if @model_name.save
                  <br />  
                  &nbsp;
                  &nbsp;
                    render json: @model_name
                  <br />  
                  &nbsp;
                  else
                  <br />  
                  &nbsp;
                  &nbsp;
                  render json: &#123; errors&#58; @model_name.errors &#125;, status&#58; &#58;unprocessable_entity 
                  <br />  
                  &nbsp;
                  end
                  <br />
                end
              </code>
              <p>
                Creates a record in the database from parameter passed in the new action.
              </p>
              <br />
              <p>
                Update / PUT / PATCH
              </p>
              <code>
                def update 
                  <br />  
                  &nbsp;
                  @model_name = Model_name.find(params[:id])
                  <br />  
                  &nbsp;
                  if @model_name.update(model_name_params)
                  <br />  
                  &nbsp;
                  &nbsp;
                  render json: @model_name
                  <br />  
                  &nbsp;
                  else
                  <br />  
                  &nbsp;
                  &nbsp;
                  render json: &#123; errors&#58; @model_name.errors &#125;, status&#58; &#58;unprocessable_entity 
                  <br />  
                  &nbsp;
                  end
                  <br />
                end
              </code>
              <p>
                Edit a record with the given id parameter.
              </p>
              <br />
              <p>
                Destroy / DELETE 
              </p>
              <code>
                def destroy
                  <br />  
                  &nbsp;
                  Model_name.find(params[:id]).destroy
                  <br />  
                  &nbsp;
                  @model_name.destroy
                  <br />  
                  &nbsp;
                  render json: &#123; message&#58; 'model_name deleted' &#125;
                  <br />  
                  &nbsp;
                  or 
                  <br />  
                  &nbsp;
                  Model_name.find(params[:id]).destroy
                  <br />  
                  &nbsp;
                  render json: &#123; message&#58; 'model_name deleted' &#125;
                  <br />  
                end
              </code>
              <p>
                Delete the entire record with a given id parameter.
              </p>
              <br />
              <code>
                private 
                  <br />  
                  &nbsp;
                  def model_name_params
                  <br />  
                  &nbsp;
                  &nbsp;
                    params.require(:model_name).permit(:attr, :attr2, :everything the table has)
                  <br />  
                  &nbsp;
                  end
              </code>
              <p>
                Permitted parameter to be passed into the model. This should match what is being passed from the React end.
              </p>
              <p>
                *If there is a parent to child relationship then the child controller will follow a similiar but different pattern, check rails references for more info. 
              </p>
            </Accordion.Content>
          </Accordion>
          <br />
          <Accordion styled>
            <Accordion.Title
              active={railsRoutes}
              onClick={() => setRailsRoutesOpen(!railsRoutes)}
            >
              Rails Routes
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={railsRoutes}>
              <p>
                Inside of the <code>config</code> folder you will find <code>routes.rb</code>. This houses all the routes leading to api controller actions.
              </p>
              <code>root 'controller#action'</code>
              <p>
                This defines the root page but is not needed for this type of project since routing is handled in the frontend so this will not work.
              </p>
              <code>
                namespace :api do
                <br />
                &nbsp; resources :controller_names
                <br />
                end
              </code>
              <p>
                This generates all the routes for the actions index, show, create, update and destroy all in the api name space, and be sure all of your routes are in the api section.
              </p>
              <p>
                All else about the routes are the same, check rails references for more info.
              </p>
            </Accordion.Content>
          </Accordion>
          <br />
          <Accordion styled>
            <Accordion.Title
              active={reactInit}
              onClick={() => setReactOpen(!reactInit)}
            >
              React JS CRUD Actions (With out Hooks) 
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={reactInit}>
              <p>
                After the rails end is done, it's time to do the front of of reactjs, so in the same directory, run this command
              </p>
              <code>
                $ yarn create react-app client
              </code>
              <br />
              <br />
              <p>
                Or you can do 
              </p>
              <code>
                $ create-react-app client
              </code>
              <p>
                This will create a react project in our rails project and call it client, since it will store everything on our client side.
              </p>
              <p>
                After the react side is fully created, in another tab or panel 
              </p>
              <code>
                $ cd client
              </code>
              <br />
              <p>
                Next is to set up the proxy in <i>client/package.json</i> and this is on top of the script tag.
              </p>
              <code>
              ....
              <br />
              "proxy"&#58; "http://localhost:3001",
              <br />
              "scripts"&#58; &#123;
              <br />
              ....
              </code>
              <p>
                This connects our front to our back end and it will listen on the port we specify, make sure it is the port your rails server is running.
              </p>
            </Accordion.Content>
          </Accordion>
          <br />
          <Accordion styled>
            <Accordion.Title
              active={collab}
              onClick={() => setCollabOpen(!collab)}
            >
              React on Rails Collab
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={collab}>
              <p>
                After the two initial React and Rails project are created, and it is up on Github, everyone else on the team would need to clone down the project and cd into the project to run the following commands
              </p>
              <code>$ bundle</code>
              <p>
                This will install all ruby gems that are needed for the project. Might run multiple times during the collab process if there are new gems
              </p>
              <p>
                Then run any database that is needed, check rails references for more info.
              </p>
              <p>
                Next, have one panel or tab in the terminal to be in charge of the client side with command + shift + d or command + t, then:
              </p>
              <code>
                $ cd client
              </code>
              <br />
              <code>
                $ yarn
              </code>
              <p>
                This will grab all the packages that is needed for the client side and would need to run again when there is a change in the package.json
              </p>
            </Accordion.Content>
          </Accordion>
        </Grid.Column>
        <Grid.Column>
          <Accordion styled>
            <Accordion.Title
              active={hooks}
              onClick={() => setHooksOpen(!hooks)}
            >
              React JS CRUD Actions (With Hooks) 
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={hooks}>
              <p>
                The last step would be to make api calls to our back end, the logic should be placed in a higher order component or in a provider to be passed down to components. The process will also change base on if it is a parent or child element for the api call.
              </p>
              <code>
                ....
                <br />
                import &#123; useState, useEffect &#125; from 'react' 
                <br />
                import axios from "axios";
                <br />
                ....
                <br />
                &nbsp; const &#91;modelNames, setModelNames&#93; &#61; useState&#40;&#91;&#93;&#41;	
                <br />
                <br />
                &nbsp; useEffect&#40; &#40;&#41; &#61;&#62; &#123;
                <br />
                &nbsp; &nbsp; &nbsp; axios.get&#40;"/api/controllerNames"&#41;
                <br />
                &nbsp; &nbsp; &nbsp; .then&#40; res &#61;&#62; &#123;
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; setModelNames&#40;res.data&#41;
                <br />
                &nbsp; &nbsp; &nbsp; &#125;&#41;
                <br />
                &nbsp; &nbsp; &nbsp; .catch&#40; err &#61;&#62; console.log&#40;err&#41; &#41;
                <br />
                &nbsp; &#125;, &#91;&#93;&#41;
              </code>
              <p>
                This is one of the ways to grab all the records from the backend and put it in the front end. The url will change depending on controller and action
              </p>
              <br />
              <code>
                &nbsp; const addModel &#61; &#40;modelName&#41; &#61;&#62; &#123;
                <br />
                &nbsp; &nbsp; &nbsp; axios.post&#40;"/api/controllerNames"&#44; &#123; modelName &#125;&#41;
                <br />
                &nbsp; &nbsp; &nbsp; .then&#40; res &#61;&#62; &#123;
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; setModelNames&#40;&#91;...res.data, modelName&#93;&#41;
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &#125;&#41; 
                <br />
                &nbsp; &nbsp; &nbsp; &#125;&#41;
                <br />
                &nbsp; &nbsp; &nbsp; .catch&#40; err &#61;&#62; console.log&#40;err&#41; &#41;
                <br /> 
                &nbsp; &#125;
              </code>
              <p>
                This would add to the backend, passing in the data object and then add the item in the frontend with the rest of the items that was already there.
              </p>
              <p>
                *What you are passing in, within the private params of the controller, should match exactly of how you pass it in on the second line. 
              </p>
              <br />
              <code>
                &nbsp; const updateModel &#61; &#40;id, modelName&#41; &#61;&#62; &#123;
                <br />
                &nbsp; &nbsp; &nbsp; axios.put&#40;&#96;/api/controllerNames/&#36;&#123;id&#125;&#96;&#44; &#123; modelName &#125;&#41;
                <br />
                &nbsp; &nbsp; &nbsp; .then&#40; res &#61;&#62; &#123;
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; let updatedModelNames &#61; modelNames.map&#40; m &#61;&#62; &#123;
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; if &#40;m.id &#61;&#61;&#61; id&#41; &#123;
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return res.data 
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#125;
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return m
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &#125;&#41; 
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; setModelNames&#40;updatedModelNames&#41; 
                <br />
                &nbsp; &nbsp; &nbsp; &#125;&#41;
                <br />
                &nbsp; &nbsp; &nbsp; .catch&#40; err &#61;&#62; console.log&#40;err&#41; &#41;
                <br /> 
                &nbsp; &#125;
              </code>
              <p>
                This would update the item in the backend, then we are looping through the items in the frontend and find the one we are updating and then update the value.
              </p>
              <p>
                *What you are passing in, within the private params of the controller, should match exactly of how you pass it in on the second line. 
              </p>
              <br />
              <code>
                &nbsp; const deleteModel &#61; &#40;id&#41; &#61;&#62; &#123;
                <br />
                &nbsp; &nbsp; &nbsp; axios.delete&#40;&#96;/api/controllerNames/&#36;&#123;id&#125;&#96;&#41;
                <br />
                &nbsp; &nbsp; &nbsp; .then&#40; res &#61;&#62; &#123;
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; setModelNames&#40;modelNames.filter&#40; m &#61;&#62; m.id &#33;&#61;&#61; id&#41;&#41;
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &#125;&#41; 
                <br />
                &nbsp; &nbsp; &nbsp; &#125;&#41;
                <br />
                &nbsp; &nbsp; &nbsp; .catch&#40; err &#61;&#62; console.log&#40;err&#41; &#41;
                <br /> 
                &nbsp; &#125;
              </code>
              <p>
                  This would delete the item in the backend with the given id and then delete the item in the frontend by filtering the item out and keeping the rest in.
              </p>
              <p>
                For any components that have a parent and child relationship the pattern of the axios call is slightly changed to have both the parent and the child. This also assumes that you are passing the parent's id somehow.
              </p>
              <p>
                For example:
              </p>
              <code>
                ...
                <br />
                &nbsp; &nbsp; &nbsp; axios.delete&#40;&#96;/api/parentNames/&#36;&#123;parentId&#125;/childNames/&#123;id&#125;&#96;&#41;
                <br />
                ...
              </code>
              <p>
                For reference, use the api routes to see what the url would be, and the routes should have both the parent and child in the route not just the child. So only use the child routes that have the parent in the routes.
              </p>
              <p>
                You would repeat the pattern for all levels of the object tree and the implementation would change based off of what the designs and the requirements are for the project.
              </p>
            </Accordion.Content>
          </Accordion>
          <br />
          <Accordion styled>
            <Accordion.Title
              active={reactWoHooks}
              onClick={() => setReactWoHooksOpen(!reactWoHooks)}
            >
              React JS CRUD Actions (Without Hooks) 
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={reactWoHooks}>
              <p>
                The next step would be to make api calls to our back end, the logic should be placed in a higher order component or in a provider to be passed down to components. The process will also change base on if it is a parent or child element for the api call.
              </p>
              <code>
                ....
                <br />
                import axios from "axios";
                <br />
                ....
                <br />
                &nbsp; state &#61; &#123; modelName&#58; [] &#125;
                <br />
                <br />
                &nbsp; componentDidMount&#40;&#41; &#123;
                <br />
                &nbsp; &nbsp; &nbsp; axios.get&#40;"/api/controllerNames"&#41;
                <br />
                &nbsp; &nbsp; &nbsp; .then&#40; res &#61;&#62; &#123;
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; this.setState(&#123; modelNames&#58; res.data &#125;&#41;
                <br />
                &nbsp; &nbsp; &nbsp; &#125;&#41;
                <br />
                &nbsp; &nbsp; &nbsp; .catch&#40; err &#61;&#62; console.log&#40;err&#41; &#41;
                <br />
                &nbsp; &#125;
              </code>
              <p>
                This is one of the ways to grab all the records from the backend and put it in the front end. The url will change depending on controller and action
              </p>
              <br />
              <code>
                &nbsp; addModel &#61; &#40;modelName&#41; &#61;&#62; &#123;
                <br />
                &nbsp; &nbsp; &nbsp; axios.post&#40;"/api/controllerNames"&#41;
                <br />
                &nbsp; &nbsp; &nbsp; .then&#40; res &#61;&#62; &#123;
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; const &#123; modelNames &#125;  &#61; this.state
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; this.setState&#40;&#123; 
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; modelNames&#58; &#91;...res.data, modelName&#93; 
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &#125;&#41; 
                <br />
                &nbsp; &nbsp; &nbsp; &#125;&#41;
                <br />
                &nbsp; &nbsp; &nbsp; .catch&#40; err &#61;&#62; console.log&#40;err&#41; &#41;
                <br /> 
                &nbsp; &#125;
              </code>
              <p>
                This would add to the backend, passing in the data object and then add the item in the frontend with the rest of the items that was already there.
              </p>
              <p>
                *What you are passing in, within the private params of the controller, should match exactly of how you pass it in on the second line. 
              </p>
              <br />
              <code>
                &nbsp; updateModel &#61; &#40;modelName&#41; &#61;&#62; &#123;
                <br />
                &nbsp; &nbsp; &nbsp; axios.put&#40;&#96;/api/controllerNames/&#36;&#123;id&#125;&#96;&#41;
                <br />
                &nbsp; &nbsp; &nbsp; .then&#40; res &#61;&#62; &#123;
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; const &#123; modelNames &#125; &#61; this.state.modelNames.map&#40; m &#61;&#62; &#123;
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; if &#40;m.id &#61;&#61;&#61; id&#41; &#123;
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return res.data 
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#125;
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return m
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &#125;&#41; 
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; this.setState&#40;&#123; modelNames &#125;&#41; 
                <br />
                &nbsp; &nbsp; &nbsp; &#125;&#41;
                <br />
                &nbsp; &nbsp; &nbsp; .catch&#40; err &#61;&#62; console.log&#40;err&#41; &#41;
                <br /> 
                &nbsp; &#125;
              </code>
              <p>
                This would update the item in the backend, then we are looping through the items in the frontend and find the one we are updating and then update the value.
              </p>
              <p>
                *What you are passing in, within the private params of the controller, should match exactly of how you pass it in on the second line. 
              </p>
              <br />
              <code>
                &nbsp; deleteModel &#61; &#40;id&#41; &#61;&#62; &#123;
                <br />
                &nbsp; &nbsp; &nbsp; axios.delete&#40;&#96;/api/controllerNames/&#36;&#123;id&#125;&#96;&#41;
                <br />
                &nbsp; &nbsp; &nbsp; .then&#40; res &#61;&#62; &#123;
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; const &#123; modelNames &#125;  &#61; this.state
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; this.setState&#40;&#123; 
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; modelNames&#58; modelNames.filter&#40; m &#61;&#62; m.id &#33;&#61;&#61; id&#41;
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &#125;&#41; 
                <br />
                &nbsp; &nbsp; &nbsp; &#125;&#41;
                <br />
                &nbsp; &nbsp; &nbsp; .catch&#40; err &#61;&#62; console.log&#40;err&#41; &#41;
                <br /> 
                &nbsp; &#125;
              </code>
              <p>
                  This would delete the item in the backend with the given id and then delete the item in the frontend by filtering the item out and keeping the rest in.
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

export default RoR;