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

  return (
    <>
    <Image src={Logo} centered />
      <Header as='h1' textAlign='center'><BoldColor>Ruby on Rails References</BoldColor></Header>
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
                After you generate a model, and check to make sure everything is correct in the migration files are correct then run:
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
                Now the next step is to generate the controllers, the traffic directors of the app.
              </p>
              <code>$ bundle exec rails g controller controller_names index show new edit --skip-routes</code>
              <p>
                This creates the controllers and the view pages for the index show, edit and new actions. This also skips the pre-generated routes and we will make our own routes.
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
              <p>
                Then in the migration file in the change method there would be
              </p>
              <code>
                add_reference :childs, :parent, foreign_key: true
              </code>
            </Accordion.Content>
          </Accordion>
        </Grid.Column>
        <Grid.Column>
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
                end
              </code>
              <p>
                This action creates and sets a instance variable and grabs all the records of a Table.
              </p>
              <code>
                def show
                  <br />  
                  &nbsp;@model_name = Model_name.find(params[:id])
                  <br />
                end
              </code>
              <p>
                Shows a single record with a given parameter of id. The id is which record you want to return.
              </p>
              <code>
                def new 
                <br />  
                &nbsp;@model_name = Model_name.new
                <br />
                end
              </code>
              <p>
                The new action displates the new record form and creates a record only in memory.
              </p>
              <code>
                def edit
                  <br />  
                  &nbsp;
                  @model_name = Model_name.find(params[:id])
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
                    render :new
                  <br />  
                  end
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
                    render :edit
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
              active={embeddControl}
              onClick={() => setembeddControlOpen(!embeddControl)}
            >
              Child Controller
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={embeddControl}>
              <p>
                If there is a parent to cild relationship then the child controller will follow a similiar but different pattern.
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
              <code>
                $ bundle
              </code>
              <p>
                Next you would need to install devise to activate all the features.
              </p>
              <code>
                $ bundle exec rail g devise:install
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