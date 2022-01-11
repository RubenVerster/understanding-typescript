"use strict";
//run the typescript compiler in watch mode so that you don't have to run the compiler manually every time
//to target a file, just add the -w flag after the tsc command in the terminal
//tsc 1-basics.ts -w
//you can also tell typescript to watch multiple TS files during watch
//run 'tsc --init' in the terminal to generate a tsconfig.json file in your project
//inside the tsconfig.json file, there are many settings you can enable in your project in regards to your TS compiler
//running 'tsc' in the project directory will then cause the TS compiler to comile all your .ts files into .js files
//you can also use the 'tsc -w' command to tell TS to listen to any changes made to a .ts file, which then recomiles the .ts files to .js files
//please refer to the tsconfig.json file for better understanding on the next info
//in the tsconfig.json file, you can tell TS to ignore specific files by adding them to the "exclude" array
//you can also exclude multiple files that match a certain naming structure, for example:
//This will ignore all files ending with .dev.ts: "*.dev.ts"
//This will ignore all files ending with .dev.ts in any folder: "**/*.dev.ts"
//a good file to ignore is the node_modules folder (for obvious reasons), but it is automatically excluded
//in the tsconfig.json file, you can tell TS to only compile specific files by adding them to the "include" array
//all files not mentioned in the include array, will not be compiles
//you can also include directories that must be compiled
//important thing to keep in mind!
//when you use "include" and "exclude", the files that will be compiled in "include" will be subtracted with the files in "exclude", so:
//include - exclude = compiles files
//you can also define a "files" array in the tsconfig.json to specify the files that you only want to compile. Using "files" prevents you from including directories though
//the "target" setting allows you to configure the version of JS that TS has to comile to
//the "lib" setting allows you tell which libraries TS should familiarize itself with
//since TS doesn't know about the DOM of a browser, you have to include it in the "lib" array to tell TS that you are going to use code that queries the DOM
//this is a good base to start off of for your lib array:
//  "lib": ["dom", "ES6", "DOM.Iterable", "ScriptHost"],
//if you set your "target" to "es6", the above is automatically included
//if you set "declaration" to "true", TS generates a .d.ts declaration file that is a manifest file describing all your types to people that want to use the library that you write
//if you enable the "sourceMap" option, when you compile, TS will generate .map files that is used as a bridge in your applications to provide the browser with the .ts files that you have as well as the compiled .js files that the browser uses
//this is great for siplifying debugging
//the "outDir" setting allows you to specify which directory TS should compile the JS files to
//the TS compiler also persists the file and directory structure of your .ts files that you compile
//the "rootDir" setting is used to tell TS in which directory it must look for files to compile
//"noEmitOnError" is a setting that will prevent TS from compiling a JS file when there are errors in the TS file that you want to compile
//the "strictNullChecks" setting allows you to avoid pitfalls when some elements may be null
//this button may be null, since TS does not know if the button does exist
var button = document.querySelector('button');
//you can use the bang sign, !, to tell TS that you, as a developer, knows that the button will exist
var button2 = document.querySelector('button');
//a smarter way to help TS is by wrapping the logic related to the button in an if check to see if the button does exist
if (button) {
    button.addEventListener('click', function () {
        console.log('Button clicked!');
    });
}
//TS will then know that the logic related to the button will only run if the button does exist
//it is a better practice to use the bang operator :)
//These links might also be interesting:
//tsconfig Docs: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
//Compiler Config Docs: https://www.typescriptlang.org/docs/handbook/compiler-options.html
//VS Code TS Debugging: https://code.visualstudio.com/docs/typescript/typescript-debugging
