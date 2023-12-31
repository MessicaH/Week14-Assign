# Movie React-ion App (_in progress_)

## Project Description
- This app is designed to allow for users to search for movies and rate them on a 1-5 star rating scale.

## Share a live URL
- Whenever possible, remember to include a link to the live demo site in the README file.
- Proving a live demo allows users to test your site/app’s functionality.
- Be sure to include any relevant login credentials or demo accounts.
### For example:
Styling created using ChatGPT Assistant [Chat transcript](https://chat.openai.com/share/97a74e17-d44b-4b61-8d39-6d1005d0e82c)

## List the technologies used
- Include a list of the programming languages, frameworks, libraries, and any other tools used in the development process.
- This section can help readers understand the technical details of your project.

## Highlight your favorite features
- Choose at least two (but not more than five) features of the app that you are most proud of and explain why.
- Include the challenges faced in implementing these features and the solutions you came up with to overcome them. 
- You can demonstrate strong problem-solving skills by providing detailed insight into your development process.

## Add some code snippets or screenshots
- Use a section for code snippets to highlight your best code.
- Include code that demonstrates coding best practices and your technical expertise.
- Use Markdown code snippets instead of screenshots to make it easy for other developers to understand and replicate the code.
![A silver laptop with Visual Studio Code open on screen](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60)

## Include installation & usage instructions
- Provide clear instructions on how to install the project on the user's system, including any dependencies or prerequisites that need to be installed.
- Offer clear instructions on how to use the project (e.g. any relevant command-line options and any configuration files or settings).

## Offer a contributing section
- Use this section to share guidelines for other developers who want to contribute to the project.
- Share how to submit bug reports, feature requests, and pull requests.

## Add a license section 
- Include any relevant terms and conditions, as well as any disclaimers or warranties.

## Include your contact info
- Even though this should be on your main GitHub profile page, you can add your email address, blog URL, or links to your social media profiles here as well.

For other template ideas, check out: [https://github.com/Louis3797/awesome-readme-template/tree/main](https://github.com/Louis3797/awesome-readme-template/tree/main)



# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
In the project directory, you can run:

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**
- If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
- Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.
- You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More
- You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
- To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting
This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size
This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App
This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration
This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment
This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify
This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### Nothing to see here Section
- API for Movie Database
Key: 630634b54a927260806f04aebc00ede7
- Read Access Token: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzA2MzRiNTRhOTI3MjYwODA2ZjA0YWViYzAwZWRlNyIsInN1YiI6IjY1MDlmODQ0OTY2MWZjMDFlNzZjNzAzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MrIs8zE0xRmoq7a6C_Rknm9X4iHDj4CtAeNfguxJ00U

Must use TMDB logo for use of data and styling guidelines:
- Primary Color (Dark blue)
- Hex: #0d253f
- RGB: 13, 37, 63

Secondary Color (Light blue)
- Hex: #01b4e4
- RGB: 1, 180, 228

Tertiary Color (Light green)
- Hex: #90cea1
- RGB: 144, 206, 161

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzA2MzRiNTRhOTI3MjYwODA2ZjA0YWViYzAwZWRlNyIsInN1YiI6IjY1MDlmODQ0OTY2MWZjMDFlNzZjNzAzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MrIs8zE0xRmoq7a6C_Rknm9X4iHDj4CtAeNfguxJ00U'
  }
};

fetch('https://api.themoviedb.org/3/configuration', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

W e e k 1 4 - A s s i g n 
 
 
