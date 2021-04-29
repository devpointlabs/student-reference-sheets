import React, { useState } from 'react';
import { Header, Grid, Accordion, Icon, Image, Checkbox } from 'semantic-ui-react';
import { BoldColor } from '../../styledComponents/styles';
import Logo from '../../images/dpl-logo.png';

/* eslint no-use-before-define: 0 */
const Prod = () => {
  const [preProdOpen, setPreProdOpen] = useState(true);
  const [netlifyWebOpen, setNetlifyWebOpen] = useState(true);
  const [herokuOpen, setHerokuOpen] = useState(true);
  const [herokuRoROpen, setHerokuRoROpen] = useState(true);
  const [herokuInfoOpen, setHerokuInfoOpen] = useState(true);

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
              <p>
                (Domain / SSL) You can grab a Domain name and SSL in any major sites, but if you want to connect them to your app on the production server, I would check the tool that you are using and read the documentation of implementation to set one up. Each tool will have different steps and where you got the item will also have different steps too so be sure to read through some docs and maybe some tutorials. Some tools like Netify and Heroku have services offered in their tool and would implement them by follow their steps.
              </p>
            </Accordion.Content>
          </Accordion>
          <br />
          <Accordion styled>
            <Accordion.Title
              active={netlifyWebOpen}
              onClick={() => setNetlifyWebOpen(!netlifyWebOpen)}
            >
              Netlify Web App
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={netlifyWebOpen}>
              <p>
                These steps below is for how to have a production app using the Netlify Web App.
              </p>
              <p>
                This site is good for static applications for just HTML sites and ReactJS sites. The home page is found on index.html so be sure you have one.
              </p>
              <p>
                For ReactJS applications, to prevent a redirect error, we will create redirect rules, more about it here: <a href='https://docs.netlify.com/routing/redirects/' target='_blank' rel="noopener noreferrer">docs.netlify.com/routing/redirects/</a>
              </p>
              <p>
                In the public folder create a _redirect file with this content below:
              </p>
              <code>&#47;&#42; &nbsp;&nbsp;&nbsp;    /index.html   200</code>
              <br />
              <br />
              <p>
                Login in to your account in the Netlify website, <a href='https://app.netlify.com' target='_blank' rel="noopener noreferrer">app.netlify.com</a>
              </p>
              <p>
                After navigating to the Team overview or Sites tab, click on the teal button of New site from Git.
              </p>
              <b>Step 1. Pick A Git Provider</b>
              <p>
                Click on the git provider your project is on, and you might have to authorized the access or it will auto authorize for you.
              </p>
              <b>Step 2. Pick A Repository</b>
              <p>
                Use the search to find the repository you want in production.
              </p>
              <p>
                Go with the default setting unless stated otherwised and press deploy site.
              </p>
              <p>
                After your site is deployed, you can change the site and domain setting as desired. 
              </p>
              <p>
                If there are any error, see if you can debug and resolve them in development, and to check production errors, go to the deploy tab and click on the failed build for more insight.
              </p>
              <p>
                If you want to update your content, update the master branch on the GitHub repo and it will auto deploy.
              </p>
            </Accordion.Content>
          </Accordion>
          <br />
          <Accordion styled>
            <Accordion.Title
              active={herokuOpen}
              onClick={() => setHerokuOpen(!herokuOpen)}
            >
              Heroku (Ruby on Rails)
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={herokuOpen}>
              <p>
                These steps below is for how to have a production app using Heroku.
              </p>
              <p>
                This site is good for functional applications with a database for Rails and React on Rails sites. The steps below is for a Ruby on Rails app.         
              </p>
              <p>
                Make sure you are logged in <a href='https://heroku.com' target='_blank' rel="noopener noreferrer">heroku.com</a> and have the Heroku toolbelt cli to run Heroku command in the terminal. If you don't have it, download it here: <a href='https://devcenter.heroku.com/articles/heroku-cli#download-and-install' target='_blank' rel="noopener noreferrer">heroku cli download</a>
              </p>
              <p>
                Once you are login into Heroku.com, on the dashboard on the top right hand corner there is a new button, click on that button and then click create a new app. The app name has to be unique throughout the whole world domains, so to make it unique I would recommend putting your last name or team name and then the name of the project. Then press create app. You will be then taken to the app dashboard, go to the Depoly tab and if your scroll down to the "Deploy using Heroku Git" section, copy the line of "heroku git:remote -a your-app-name".
              </p>
              <p>
                The next step is to login in the terminal with this following step:
              </p>
              <code>$ heroku login</code>
              <br />
              <p>
                Follow the steps and it should log you in to your heroku account after you press any key to login.
              </p>
              <p>
                Then paste what you copy next
              </p>
              <br />
              <code>$ heroku git:remote -a your-app-name</code>
              <p>
                This will create and connect your project to the heroku remote so you have push and pull access to this connection.
              </p>
              <p>
                We will then create a Procfile in the root directory 
              </p>
              <code>$ touch Procfile</code>
              <br />
              <br />
              <p>
                The content of that file will be as follows:
              </p>
              <code>web&#58; bundle exec puma -t 5&#58;5 -p &#36;&#123;PORT&#58;-3000&#125; -e &#36;&#123;RACK_ENV&#58;-development&#125;</code>
              <p>
                Here we tell Heroku to use the Puma server instead of Webrick. 
              </p>
              <p>
                The upcoming steps is to add and commit the changes with git and then push that version up into the master branch.
              </p>
              <p>
                Once the GitHub master is up to date and have the above steps added then we would run this code:
              </p>
              <code>$ git push heroku master</code>
              <p>
                This will take a while and will push all the application into heroku. If there are any depoly errors they would show up here in the terminal. 
              </p>
              <p>
                The last step is once everything is up on heroku, we will then run this command:
              </p>
              <code>$ heroku run rails db:migrate</code>
              <p>
                Heroku doesn't run migrations so you would have to run it for them.
              </p>
              <p> 
                If there are updates or any changes to the project you would add it onto the GitHub master branch and then you would push to heroku again.
              </p>
              <p>
                * since we are in a production enviroment we shouldn't have test data in the site and we should not manipulate directly into the production database. If there needs to be a change in the the production database, you can create a migration and then run the migration into Heroku.
              </p>
            </Accordion.Content>
          </Accordion>
          <br />
        </Grid.Column>
        <Grid.Column>
          <Accordion styled>
            <Accordion.Title
              active={herokuRoROpen}
              onClick={() => setHerokuRoROpen(!herokuRoROpen)}
            >
              Heroku (React on Rails)
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={herokuRoROpen}>
              <p>
                These steps below is for how to have a production app using Heroku.
              </p>
              <p>
                This site is good for functional applications with a database for Rails and React on Rails sites. The steps below is for a React on Rails app.         
              </p>
              <p>
                Make sure you are logged in <a href='https://heroku.com' target='_blank' rel="noopener noreferrer">heroku.com</a> and have the Heroku toolbelt cli to run Heroku command in the terminal. If you don't have it, download it here: <a href='https://devcenter.heroku.com/articles/heroku-cli#download-and-install' target='_blank' rel="noopener noreferrer">heroku cli download</a>
              </p>
              <p>
                Once you are login into Heroku.com, on the dashboard on the top right hand corner there is a new button, click on that button and then click create a new app. The app name has to be unique throughout the whole world domains, so to make it unique I would recommend putting your last name or team name and then the name of the project. Then press create app. You will be then taken to the app dashboard, go to the Depoly tab and if your scroll down to the "Deploy using Heroku Git" section, copy the line of "heroku git:remote -a your-app-name".
              </p>
              <p>
                The next step is to login in the terminal with this following step:
              </p>
              <code>$ heroku login</code>
              <br />
              <p>
                Follow the steps and it should log you in to your heroku account after you press any key to login.
              </p>
              <p>
                Then paste what you copy next
              </p>
              <code>$ heroku git:remote -a your-app-name</code>
              <br />
              <p>
                This will create and connect your project to the heroku remote so you have push and pull access to this connection.
              </p>
              <p>
                If you haven't already, let's create a static controller.
              </p>
              <code>$ bundle exec rails g controller static index --skip-routes</code>
              <p>
                The content of the static controller goes as follows:
              </p>
              <code>
                require &#39;rails/application_controller&#39;
                <br />
                class StaticController &#60; Rails&#58;&#58;ApplicationController
                <br />
                &nbsp; &nbsp;layout false
                <br /><br />
                &nbsp; &nbsp;def index
                <br />
                &nbsp; &nbsp; &nbsp;render file&#58; Rails&#46;root&#46;join&#40;&#39;public&#39;&#44; &#39;index.html&#39;&#41;
                <br />
                &nbsp; &nbsp;end
                <br />
                end
              </code>
              <p>
              Our index action is telling the application to very specifically render our index.html file inside our public folder that is from the ReactJS side.
              Since we are using an api only Rails application we need to tell Rails how to read a file.
              </p>
              <p>
                Next we need to add this into our <code>config/routes.rb</code>.
              </p>
              <code>
                &#46;
                <br />
                &#46;
                <br />
                &#46;
                <br />
                get '*other', to: 'static#index'
              </code>
              <p>
                Be sure to have this at the very last line in the file or else it would not work. Any route that doesn't match the routes above this line will go to our static controller's index action and will point to the right frontend.
              </p>
              <p>
                From the root directory of your project, run this command:
              </p>
              <code>
              $ npm init -y
              </code>
              <p>
                This will create a package.json in the route directory and will saw yes to all the options. We are essentially using this package.json file to trick Heroku on saying that our front end is on the React side.
              </p>
              <p>
                replace the scripts section with the scripts below:
              </p>
              <code>
              &#34;scripts&#34;&#58; &#123;
              <br />
              &nbsp;&nbsp;&#34;build&#34;&#58; &#34;cd client && npm install --only=dev && npm install && npm run build && cd ..&#34;,
              <br />
              &nbsp;&nbsp;&#34;deploy&#34;&#58; &#34;cp -a client/build/. public/&#34;,
              <br />
              &nbsp;&nbsp;&#34;heroku-postbuild&#34;&#58; &#34;npm run build && npm run deploy && echo 'Client Built'&#34;
              <br />
              &#125;&#44;
              </code>
              <p>
                We will then create a Procfile in the root directory 
              </p>
              <code>$ touch Procfile</code>
              <br />
              <br />
              <p>
                The content of that file will be as follows:
              </p>
              <code>web: bundle exec puma -t 5:5 -p &#36;&#123;PORT:-3000&#125; -e &#36;&#123;RACK_ENV:-development&#125;</code>
              <p>
                Here we tell Heroku to use the Puma server instead of Webrick. 
              </p>
              <p>
                If we push up into Heroku now, it would get confused and might think it is just a Rails App or a Node JS App. So let's run the following in the root directory:
              </p>
              <code>
              $ heroku buildpacks:clear
              </code>
              <br />
              <code>
              $ heroku buildpacks:set heroku/nodejs
              </code>
              <br />
              <code>
              $ heroku buildpacks:add heroku/ruby --index 2
              </code>
              <p>
                This tells Heroku that this is a React on Rails application and would need to run both of the servers to run the application.
              </p>
              <p>
                The upcoming steps is to add and commit the changes with git and then push that version up into the master branch.
              </p>
              <p>
                Once the GitHub master is up to date and have the above steps added then we would run this code:
              </p>
              <code>$ git push heroku master</code>
              <p>
                This will take a while and will push all the application into heroku. If there are any depoly errors they would show up here in the terminal. 
              </p>
              <p>
                The last step is once everything is up on heroku, we will then run this command:
              </p>
              <code>$ heroku run rails db:migrate</code>
              <p>
                Heroku doesn't run migrations so you would have to run it for them.
              </p>
              <p> 
                If there are updates or any changes to the project you would add it onto the GitHub master branch and then you would push to heroku again.
              </p>
              <p>
                * since we are in a production enviroment we shouldn't have test data in the site and we should not manipulate directly into the production database. If there needs to be a change in the the production database, you can create a migration and then run the migration into Heroku.
              </p>
            </Accordion.Content>
          </Accordion>
          <br />
          <Accordion styled>
            <Accordion.Title
              active={herokuInfoOpen}
              onClick={() => setHerokuInfoOpen(!herokuInfoOpen)}
            >
              Heroku Info and Commands
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={herokuInfoOpen}>
              <h5>
                Pricing
              </h5>
              <p>
                Heroku pricing is free for a dev app but the app will go to sleep after a period of non-use.  This means the app will take roughly 15 seconds to start back up.  You can upgrade to a hobby app for $7/mo and up from there.  The instance of postgres that comes with the hobby app is free for 10k rows of data and then it will need to be cleared or upgraded or it will shut down.
              </p>
              <h5>
                Useful Commands
              </h5>
              <p>
                A full list of all the Heroku Commands and what they do with options are found here <a href='https://devcenter.heroku.com/articles/heroku-cli-commands' target='_blank' rel="noopener noreferrer">heroku-cli-commands</a>. The ones below are some good to know commands to help you in the production process.
              </p>
              <code>
              $ heroku open
              </code>
              <p>
                This will open up your application in your default browser.
              </p>
              <code>
              $ heroku run rails c
              </code>
              <p>
                Becareful with this command because you should not change anything in here. This will take you in a irb session of your production server.
              </p>
              <code>
              $ heroku logs
              </code>
              <p>
                Lists out all the logging information of deployments. This is one of the ways to debug in the failed depolyment.
              </p>
              <h5>
                Useful Heroku Settings
              </h5>
              <p>
                (GitHub Hook) On the application dashboard, if you go to the "depoly" tab, in the "Deployment method" section, you can "connect to GitHub" to create a hook for when the GitHub master branch is updated then it will auto deploy. Be sure to initially depoly it first before you run this setting. Also if there are any errors in the master branch, that will add the errors to the production site too.
              </p>
              <p>
                (API Keys) If you have API keys in your app, those should and would be hidden so heroku would not know about them and the API tool would not work or the app it self would not work. To add or edit API Keys, in the application dashboard, go to the "setting" tab and in the "Config Vars" section, pressed the "Reveal Config Vars". Then add the key and the value of your API keys one by one by pressing the "add" button. The format of the keys and values should match exactly how you have it in the .env file. 
              </p>
            </Accordion.Content>
          </Accordion>
          <br />
        </Grid.Column>
      </Grid>
    </>
  )
}

export default Prod;
