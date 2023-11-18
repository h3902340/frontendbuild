Download the project and execute `yarn` or `npm i` to download the necessary libraries.

Execute `bash ./gen_proto.sh` to generate the protobufjs file.

Execute `yarn build` or `npm run build` to build the project.

There is a script called baseUrl.ts, change the setting there to connect to local or remote server (production server). Connect to production server if you don't have a server setup on your computer.

This project uses GitHub Action to automatically deploy the changes on master branch to the production website. Before pushing changes to master, please review the changes with scrutiny.

This project uses Google Analytics and Cloudflare CDN. You can check the statistics on both of these services by adding to account sharing list. Please provide your email in the FreeFoodParty discord channel.

Tech stack in used:
1. Angular (TypeScript): Execute `ng g c MyComponent --module app` to create a new component. Execute `ng generate service MyService` to create a new service class.
2. Protobufjs: Used to compress the packet size and minimize the base64 string of share links.
