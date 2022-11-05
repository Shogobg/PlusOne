# PlusOne assignment

## User Story

As a user, I want to be able to know which words are not English in my text so I can improve my English.

## Details

- A word will be considered as non-English word if it does not exist in this list: https://raw.githubusercontent.com/jeremy-rifkin/Wordlist/master/master.txt

## Constraints

- The English word check logic needs to happen on the backend side.
- The frontend needs to be written in ReactJS.
- The backend can be written in Ruby or Javascript or Typescript. The web framework can be chosen freely.
- Any additional libraries are also allowed.
- Git needs to be used as a version control system.
- It needs to be done by November 6th. The repository can be shared on Github/Gitlab (publicly or privately with username dyoxyne).

## Evaluation criteria

- Correctness: Does it work as expected?
- Code quality: Is it readable and well structured?

## Bonus

- The solution is deployed on a cloud platform (AWS, GCP, Heroku…).

## How to work with this code

### Starting the UI

1. `cd word-checker/src`
1. `export REACT_APP_API_URL=<API_URL>`
1. `npm start`

### Starting the API

1. `cd word-checker-api/src`
1. `npm run build`
1. Download the dictionary.txt file into the `runtime/` folder
1. `npm start-dev`

### Azure deployment and architecture

URL: https://salmon-ocean-0f3041f00.2.azurestaticapps.net

This solutions uses a staic single-page web application that calls an Azure hosted Node.js API written in TypeScript.
The deployment is automated, using GitHub workflows.
During deployment, there are several things that happen:

- API
  1. Download source code
  1. Build application
  1. Download dictionary
  1. Create a package with the built code and the dictionary
  1. Push thе artifact to Azure
  1. Start the API
- UI
  1. Download the source code
  1. Set an environmental variable containing the API URL
  1. Build the UI
  1. Create a package with the built static website's resources
  1. Upload to an Azure static web page service
