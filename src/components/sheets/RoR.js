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
  const [reactWoHooks, setReactWoHooksOpen] = useState(false);
  const [hooks, setHooksOpen] = useState(true);
  const [rorServer, setRorServerOpen] = useState(true);
  const [railsModel, setRailsModelOpen] = useState(true);
  const [migrations, setMigrationsOpen] = useState(true);
  const [dbCom, setDbComOpen] = useState(true);

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
              <code>$ bundle exec rails db:create</code>
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
            </Accordion.Content>
          </Accordion>
          <br />
          <Accordion styled>
            <Accordion.Title
              active={railsModel}
              onClick={() => setRailsModelOpen(!railsModel)}
            >
              Rails Model 
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={railsModel}>
              <p>
                After your done planning, now its time to build the instructions for the tables.
              </p>
              <code>$ bundle exec rails g model model_name attr:datatype attr:datatype</code>
              <p>
                This generates the model and the migration file. Be sure the Model name is SINGULAR. 
              </p>
              <p>
                * Models are singular and Controllers are plural.
              </p>
              <code>$ bundle exec rails g model model_name attr:datatype parent:belongs_to</code>
              <p>
                If the table has a belongs to association then you would state that here so the foreign key is made.
              </p>
              <p>
                After you generate a model, and check to make sure everything is correct in the migration files are correct.
              </p>
              <p>
                If you mess up on the model, you can delete it with the following command and retry the above command.  
              </p>
              <code>$ bundle exec rails d model model_name</code>
              <p>
                This deletes the model and the associated migration.
              </p>
              <br />
              <p>
                When everything is correct run a:
              </p>
              <code>
                $ bundle exec rake db:migrate
              </code>
              <p>
                This apply the instructions of the migration file into the database.
              </p>
            </Accordion.Content>
          </Accordion>
          <br />
          <Accordion styled>
            <Accordion.Title
              active={migrations}
              onClick={() => setMigrationsOpen(!migrations)}
            >
              Migrations 
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={migrations}>
              <p>
                Sometime you want to make changes into the table of the database. Creating a migrations is the best bet.
              </p>
              <code>$ bundle exec rails g migration look_up_what_goes_here</code>
              <p>
                This will generate a migration file to apply changes.
              </p>
              <p>
                Be sure to look up how to create the migration and what to put in the chhange method in the file. Not all migrations are the same.
              </p>
              <p>
                It is best practice to always run migrations rather than deleting and starting over.
              </p>
              <p>
                For example to add a reference to a child component, you would do:
              </p>
              <code>
                $ bundle exec rails g migration AddParentToChilds parent:references
              </code>
              <br />
              <br />
              <p>
                Then in the migration file in the change method there would be
              </p>
              <code>
                add_reference :childs, :parent, foreign_key: true
              </code>
            </Accordion.Content>
          </Accordion>
          <br />
          <Accordion styled>
            <Accordion.Title
              active={dbCom}
              onClick={() => setDbComOpen(!dbCom)}
            >
              Database Commands 
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={dbCom}>
              <p>
                Any of the database command below can be used with rails or rack. These command also has to rely on postgresql to be running.
              </p>
              <code>$ bundle exec rails db:create</code>
              <p>
                This creates two databases, one for the test and the other for the development enviroment.
              </p>
              <br />
              <code>$ bundle exec rails db:migrate</code>
              <p>
                This will go into db/migration and run any migrations that haven't been applied yet and apply them to the databases and then create a schema file.
              </p>
              <br />
              <code>$ bundle exec rails db:seed</code>
              <p>
               Rails will go into the db/seeds.rb file and run and apply the code in the database.
              </p>
              <br />
              <code>$ bundle exec rails db:drop</code>
              <p>
               Be sure that no servers are running when running this command. This will drop and delete all databases and the content and this is permanent.
              </p>
              <br />
              <code>$ bundle exec rails db:rollback</code>
              <p>
               Be sure that no servers are running when running this command. This will undo the last migration and go the migration before that or the initial app state.
              </p>
              <br />
              <code>$ bundle exec rails c</code>
              <p>
                Rails console command that take you to a irb session within your database and able to run rails and active record lines of code.
              </p>
              <p>
                There are a lot more database commands but the ones above is the most common.
              </p>
              <p>
                You can also chain the database commands in one line instead of multiple lines, such as:
              </p>
              <code>$ bundle exec rails db:drop db:create db:migrate db:seed</code>
              <br />
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
                  @model_name = Model_name.find(params[:id])
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
              <br />
              <p>
                If there is a parent to child relationship then the child controller will follow a similiar but different pattern.
              </p>
              <p>
                To define what at parent is, you would need to do a before action and define the method in the private section.
              </p>
              <code>
                before_action :set_parent 
              </code>
              <p>
                .
                <br />
                .
                <br />
                .
              </p>
              <code>
                private 
                  <br />  
                  &nbsp;
                  def set_parent
                    <br />  
                    &nbsp;
                    &nbsp;
                    @parent = Model_name_of_parent.find(params[:parent_id])
                    <br />  
                    &nbsp;
                  end
              </code>
              <br />
              <br />
              <code>Model_name.all</code>
              <p>
                Anything with the capital letter Model_name will change to:
              </p>
              <code>
                @parent.children(s)
              </code>
              <p>
                The parents instance variable and calling its child plural.
              </p>
              <p>
                * The index method in a child controller does not have the .all at the end.
              </p>              
              <br />
              <br />
            </Accordion.Content>
          </Accordion>
          <br />

        </Grid.Column>
        <Grid.Column>
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
                You can include or exclude certain actions like this:
              </p>
              <code>resources :controller_names, only: [:index, :new, :create]</code>
              <p>
                or
              </p>
              <code>resources :controller_names, except: [:show, :edit, :update]</code>
              <br />
              <br />
              <br />
              <p>
                If you are showing a parent to child view you may need to do embedded routes.
              </p>
              <code>
                resources :parents do 
                <br />  
                &nbsp; resources :child
                <br /> 
                end
              </code>
              <p>
                * Don't go more than two levels deep because it will get messy, do another set of embedded routes when needed.
              </p>
              <p>
                Often times you would want to make your own custom routes which follows this pattern:
              </p>
              <code>HTTPVERB '/something', to: 'controllers#action', as: 'anotherThing'</code>
              <p>
                You would specify what HTTP verb action you want to preform, what the url to get to the route, where the route goes to and how to reference to path in ruby.
              </p>
            </Accordion.Content>
          </Accordion>
          <br />
          <Accordion styled>
            <Accordion.Title
              active={reactInit}
              onClick={() => setReactOpen(!reactInit)}
            >
              React JS Creation 
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
                $ npx create-react-app client
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
          <br />
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
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; setModelNames&#40;&#91;...modelName, res.data&#93;&#41;
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
                &nbsp; &nbsp; &nbsp; &nbsp; let newUpdatedModelNames &#61; modelNames.map&#40; m &#61;&#62; &#123;
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
                &nbsp; &nbsp; &nbsp; &nbsp; setModelNames&#40;newUpdatedModelNames&#41; 
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
          <br />
          <Accordion styled>
            <Accordion.Title
              active={rorServer}
              onClick={() => setRorServerOpen(!rorServer)}
            >
              React on Rails Servers
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={rorServer}>
              <p>
                When you want to start your server you would need to start two of them, one for your front end and one for your backend. Be sure to connect to a power source since this does drain a lot of power. 
              </p>
              <p>
                In your root project directory in the terminal: 
              </p>
              <code>
                bundle exec rails s -p 3001
              </code>
              <p>
                Note, if your proxy is something else then change it so these two numbers match. 
              </p>
              <p>
                Next in another tab ( command + t ) or a new panel ( command + shift + d ) be sure to be in the client folder.
              </p>
              <code>
                cd client
              </code>
              <br />
              <br />
              <p>
                Then run: 
              </p>
              <code>
                yarn start
              </code>
              <br />
              <br />
              <p>
                Now both servers are running, and but needs to run if we want our app to work.
              </p>
              <p>
                If you want to do any rails commands or backend commands, then it would be the root folder. If you want to do anything with yarn and the front end then it would be in the client folder. Sometimes you would need to restart the server to have changes take effect.
              </p>
              <p>
                When you want to do the git flow, be sure to do it in the root folder so it captures everything in the whole project.
              </p>
              <p>
                To stop the server ( control + c )
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