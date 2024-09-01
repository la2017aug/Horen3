const content = `
Hello!

The program is currently running on gitHub.com
This is a world-famous site - 
meets all modern security requirements.

But gitHub has limitations -
the time of the general(all outdoors) connection to the site.
And you may well encounter a problem.

In general, the program is designed to run locally -
i.e. on the user's device.



Here are instructions on how to run the program locally:

Go to GitHub at
https://github.com/la2017aug/Horen3.git

Click the button - Code (it's Green)
Select - Download ZIP

Unzip the Zip file into a folder.
In this folder, run the file - index.html



You can change the base language to any other yourself.
It is important to keep the file structure - 
commas, quotes, etc.

The program is provided AS IS and is open source.
Errors in the program and data are quite possible.

The author does not approve 
of the use of this program for commercial purposes.

The author does not bear ANY responsibility 
for the consequences of CHANGING the program CODE, 
whether done intentionally, accidentally 
or without the user's knowledge.

For questions, write to me. 
My email is listed in the License.


2024-09-01
another gitHub limitation was discovered -
the number of files in the audio directory is no more than 1000.
Unfortunately, GitHub only allows you to make a demonstration of the program, 
without all the audio files.
Solution - audio.zip



`;

window.onload = function() {
    document.querySelector('.scroll-text').textContent = content;
};
