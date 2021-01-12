I create the src and build folder is to organized my code
I want to have my ts code in one folder(src) and the compiled code to js in build folder
to make these 2 folder collaborate and work together we need to configure a way to do so
Luckily, Ts has configuration file that we can use to customized how the compiler behaves
run in the terminal in the root directory
tsc --init
you will see a lot if things, try to the "outDir":"" , and make them "outDir": "./build",
rootDir": "" "rootDir": "./src",  
 rootDir is the directory where all of ts code
outDir we get the result of ts and compiled them in the outDir  
now, run tsc and see the magic
if you wanna see the result run node build/index.js , but that would be tedious each time we want to see the result
to make it easier for us we are gonna install to packages nodemon and concurrently
nodemon will re-run node each time we update our code
concurrently helps to run multiple scripts at the same time
