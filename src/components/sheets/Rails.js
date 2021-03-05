import React, { useState } from 'react';
import { Header, Grid, Accordion, Icon, Image } from 'semantic-ui-react';
import { BoldColor } from '../../styledComponents/styles';
import Logo from '../../images/dpl-logo.png';

const Rails = () => {
  const [initialPro, setInitialProOpen] = useState(true);
  const [railsModel, setRailsModelOpen] = useState(true);
  const [railsController, setRailsControllerOpen] = useState(true);
  const [railsRoutes, setRailsRoutesOpen] = useState(true);
  const [migrations, setMigrationsOpen] = useState(true);
  const [cactions, setCactionsOpen] = useState(true);
  const [embeddControl, setembeddControlOpen] = useState(true);
  const [auth, setAuthOpen] = useState(true);
  const [appControl, setAppControlOpen] = useState(true);
  const [railsCollab, setRailsCollabOpen] = useState(true);
  const [dbCom, setDbComOpen] = useState(true);

  return (
    <>
    <Image src={Logo} centered />
      <Header as='h1' textAlign='center'><BoldColor>Ruby on Rails References</BoldColor></Header>
      <Header as='h5' textAlign='center'><BoldColor>(With a Hint of React)</BoldColor></Header>
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
                Housekeeping items to start a Ruby on Rails Project
              </p>
              <code>$ rails new project_name -d postgresql --webpack=react <br /> --skip-turbolinks</code>
              <p>
                Creates initial rails project with the postgresql database tool attached and do not install turbolinks. This also sets up our project to be able to run React.
              </p>
              <p>
                Next step is to add all of the needed Gems and the react rails gem in your GEMFILE 
              </p>
              <code>gem 'react-rails'</code>
              <p>
                then run a:
              </p>
              <code>$ bundle</code>
              <p>
                Short for bundle install and install all the gems in the project, be sure to check the gem documentation to see if there is any other configuration
              </p>
              <p>
                One of the things we do need to configure is the react gem, so it will configure and add files for react to run properly
              </p>
              <code>$ bundle exec rails g react:install</code>
              <br />
              <br />
              <br />
              <code>$ bundle exec rake db:create</code>
              <p>
                This creates both the development and testing database. You can use rake or rails.
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
              active={railsCollab}
              onClick={() => setRailsCollabOpen(!railsCollab)}
            >
              Rails Collab 
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={railsCollab}>
              <p>
                If you are working with others with a rails project, all team members should have the same ruby version. But if you all have different version follow the steps below after one team member does the initial rails project.
              </p>
              <p>
                The team member who created the project would do the following:
              </p>
              <code>$ rm -rf Gemfile.lock</code>
              <p>
                This will remove the Gemfile lock file that rails used to figure out what gems and version the project already used.
              </p>
              <p>
                In the .ruby-version file, delete the ruby version there.
              </p>
              <p>
                In the Gemfile file, around line 3, delete the ruby version there.
              </p>
              <p>
                Lastly we are going to put the Gemfile.lock in the .gitignore so git does not conflict in it.
              </p>
              <p>
                Now this team member will push this up into github for the other members to pull or clone.
              </p>
              <p>Then everyone will run the following:</p>
              <code>$ bundle</code>
              <p>
                This will rebundle and install all the gems using the ruby version each member has. 
              </p>
              <code>$ yarn</code>
              <p>
                This will install all javascript packages.
              </p>
              <p>
                Lastly, run the database commands as needed.
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
              <code>$ bundle exec rake db:create</code>
              <p>
                This creates two databases, one for the test and the other for the development enviroment.
              </p>
              <code>$ bundle exec rake db:migrate</code>
              <p>
                This will go into db/migration and run any migrations that haven't been applied yet and apply them to the databases and then create a schema file.
              </p>
              <code>$ bundle exec rake db:seed</code>
              <p>
               Rails will go into the db/seeds.rb file and run and apply the code in the database.
              </p>
              <code>$ bundle exec rake db:drop</code>
              <p>
               Be sure that no servers are running when running this command. This will drop and delete all databases and the content and this is permanent.
              </p>
              <code>$ bundle exec rake db:rollback</code>
              <p>
               Be sure that no servers are running when running this command. This will undo the last migration and go the migration before that or the initial app state.
              </p>
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
              <code>$ bundle exec rake db:drop db:create db:migrate db:seed</code>
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
                Now the next step is to generate the controllers, the traffic directors of the app.
              </p>
              <code>$ bundle exec rails g controller controller_names index show new edit --skip-template-engine --skip-routes</code>
              <p>
                This creates the controllers and the view pages for the index show, edit and new actions. This also skips the pre-generated routes, and skips the rails views and we will make our own routes and our own components instead.
              </p>
              <p>
                *Models are singular and Controllers are plural.
              </p>
              <p>
                If you mess up on the controller, you can delete it with the following command and retry the above command.  
              </p>
              <code>$ bundle exec rails d controller controller_names</code>
              <p>
                This deletes the controller and the associated views.
              </p>
            </Accordion.Content>
          </Accordion>
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
                Inside of the <code>config</code> folder you will find <code>routes.rb</code>. This houses all the routes leading to the controller action. Common items you will see here are:
              </p>
              <code>root 'controller#action'</code>
              <p>
                This defines the root page or landing page of when you first land on the website.
              </p>
              <code>resources :controller_names</code>
              <p>
                This generates all the routes for the actions index, show, new, edit, create, update and destroy.
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
               active={cactions}
               onClick={() => setCactionsOpen(!cactions)}
            >
              Controller Actions 
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={cactions}>
              <p>
                Now it is time to fill out the actions. Actions are what you can do and where you can go in the app.
              </p>
              <p>
                READ / GET
              </p>
              <code>
                def index
                  <br />  
                  &nbsp;@model_names = Model_name.all
                  <br />
                  &nbsp;render component: 'ModelNames', props:&#123; model_names: @model_names &#125;
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
                  &nbsp;@model_name = Model_name.find(params[:id])
                  <br />
                  &nbsp;render component: 'ModelName', props: &#123; model_name: @model_name &#125;
                  <br />
                end
              </code>
              <p>
                Shows a single record with a given parameter of id. The id is which record you want to return.
              </p>
              <br />
              <code>
                def new 
                <br />  
                &nbsp;@model_name = Model_name.new
                <br />
                &nbsp;render component: 'ModelNameNew', props: &#123; model_name: @model_name &#125;
                <br />
                end
              </code>
              <p>
                The new action displates the new record form and creates a record only in memory.
              </p>
              <br />
              <code>
                def edit
                  <br />  
                  &nbsp;
                  @model_name = Model_name.find(params[:id])
                  <br />
                  &nbsp;render component: 'ModelNameEdit', props: &#123; model_name: @model_name &#125;
                  <br />
                end
              </code>
              <p>
                The edit action displats the edit record form. Needs an id to know which record to update
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
                    do something or do somewhere
                  <br />  
                  &nbsp;
                  else
                  <br />  
                  &nbsp;
                  &nbsp;
                  render component: 'ModelNameNew', props: &#123; model_name: @model_name &#125;
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
                    do something
                  <br />  
                  &nbsp;
                  else
                  <br />  
                  &nbsp;
                  &nbsp;
                  render component: 'ModelNameEdit', props:	&#123; model_name: @model_name &#125;
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
                  send somewhere
                  <br />  
                  &nbsp;
                  or 
                  <br />  
                  &nbsp;
                  Model_name.find(params[:id]).destroy
                  <br />  
                  &nbsp;
                  send somewhere
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
                Permitted parameter to be passed into the model.
              </p>
            </Accordion.Content>
          </Accordion>
          <br />
          <Accordion styled>
            <Accordion.Title
              active={appControl}
              onClick={() => setAppControlOpen(!appControl)}
            >
              Application Controller
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={appControl}>
              <p>
                If we see the error of ActionController::InvalidAuthenticityToken when you submit a form, we either need to pass the csrf_token basically everywhere or we can have our rails app ignore it. 
              </p>
              <p>
                Let's do that in our app/controllers/application_controller.rb
              </p>
              <code>
                class ApplicationController &#60; ActionController&#x0003A;&#x0003A;Base
                <br />&nbsp; protect_from_forgery with: :null_session
                <br />end
              </code>
              <br />
              <br />
              <p>
                This solve that error and allows you to submit forms.
              </p>
            </Accordion.Content>
          </Accordion>
          <br />
          <Accordion styled>
            <Accordion.Title
              active={embeddControl}
              onClick={() => setembeddControlOpen(!embeddControl)}
            >
              Child Controller
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={embeddControl}>
              <p>
                If there is a parent to child relationship then the child controller will follow a similiar but different pattern.
              </p>
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
              <br />
              <p>
                * The index method in a child controller does not have the .all at the end.
              </p>
              <br />
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
              <p>
                You also would need to pass the parent in all of the render component as well such as:
              </p>
              <code>
                render component: 'ModelNames', props: &#123; model_names: @model_names, parent: @parent &#125;
              </code>
            </Accordion.Content>
          </Accordion>
          <br />
          <Accordion styled>
            <Accordion.Title
              active={auth}
              onClick={() => setAuthOpen(!auth)}
            >
              Authentication  
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={auth}>
              <p>
                To have authentication and a user base as well as everything that come with the devise gem. You first have to add and bundle the gem.
              </p>
              <code>
                gem 'devise'
              </code>
              <br />
              <br />
              <code>
                $ bundle
              </code>
              <br />
              <br />
              <p>
                Next you would need to install devise to activate all the features.
              </p>
              <code>
                $ bundle exec rails g devise:install
              </code>
              <p>
                Next is to generate a model with devise.
              </p>
              <code>
                $ bundle exec rails g devise User
              </code>
              <p>
                This will attach devise and all of the features to the given model. 
              </p>
              <br />
              <p>
                If you have user authentication then the direct child of the authenticated table will change the pattern of the controller.
              </p>
              <code>@parent.children(s)</code>
              <p>
                Everything that would be the parent to child syntax would change to:
              </p>
              <code>
                current_user.children(s)
              </code>
              <p>
                The current logged in users, child plural elements. current_user is already defined by devise.
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