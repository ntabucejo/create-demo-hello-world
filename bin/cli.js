import { execAsync } from "child_process";

const runCommand = (command) => {
  try {
    execAsync(`${command}`, { stdio: "inherit" });
  } catch (e) {
    return false;
  }
  return true;
};

const repositoryName = process.argv[2];
const gitCheckoutCommand = `git clone --dept 1 https://github.com/ntabucejo/create-demo-hello-world ${repositoryName}`;
const installDepsCommand = `cd ${repositoryName} && npm install`;

console.log(`Cloning the repository with name ${repositoryName}`);

const checkout = runCommand(gitCheckoutCommand);

if (!checkout) process.exit(1);

console.log("Installing dependencies for ${repositoryName}");
const installDeps = runCommand(installDepsCommand);
if (!installDeps) process.exit(1);
console.log("Congratulations! You have successfully installed dependencies");
console.log(`cd ${repositoryName}`);
