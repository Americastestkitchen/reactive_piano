# Piano Template Rendering Library
This is a POC for using React to componentize our Piano Templates.


To run:
- clone and `npm i`


The workflow process would be something like this:

The developer is working on a template: For instant feedback, they can use HMR and components
to get instant feedback by running `npm run start` and working on the components like any other React app.

When the template looks the way we need, the developer can run `npm run build`, which will build
out the transpiled JavaScript code. Because we need a server to use React if the developer runs `node server/index.js`
they will start up a server. This section is a little hacky, but that can be ironed out later. When the developer visits [port:808](localhost:8080), They will trigger a file read out of the targeted React component into the outPutFile in the templates directory.

The developer will have to change which component they want to be built out manually. It currently doesn't support writing
multiple files, but this is just a POC.


Benefits:
1. Developers can save the templates in source control.
2. The templates are the property of ATK. If the Piano Servers crashed or the company went under, we would still
have complete control and access to our templates.
3. Piano has terrible DX. There is no linting or any other IDE benefits at all. This way, we can use VSCode to create
templates.
4. We can have these components as MiseUI components if we want, and we could share them through other pages.
5. They are React components. Suppose we woke up out of our slumber one day, realized our past sins, and decided
to forgo Piano because they offer us nothing but pain. In that case, we could rapidly transition to rendering marketing
hats/paywalls/misc landing pages/ ribbons out of espresso. The transgressions will be forgiven, and we can start the healing process.

Cons:
1. We must copy/paste HTML + CSS into their terrible IDE.
2. CSS is half/con because you can reference and import assets from elsewhere, so maybe we could point it to a
CDN with the assets on it.


Todo:
- Create an executable that will run the server
- Figure out a way to use React without using express? I am unsure if that is possible for the `renderToString` method
on the React-DOM-Server package.
- Make ease-of-life improvements to the server.js file; currently, we have to tell it what component to render
and where manually. That could be helped with maybe command line functionality.
