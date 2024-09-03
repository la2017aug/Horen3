const content = `
Hello!

The program is published on GitHub.
But it is impossible to guarantee that everything will work here.
GitHub imposes restrictions - which may cause malfunctions.

In general, the program is intended for local launch 
and can work without Internet access.
How to do it:
Go to GitHub at
https://github.com/la2017aug/Horen3.git
Click the button - Code (it's Green)
Select - Download ZIP
Unzip the Zip-file into a folder.
In this folder, run the file - index.html

Full audio catalog - archived in files audio*.zip
They need to be unpacked into the program folder.

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


`;

window.onload = function() {
    document.querySelector('.scroll-text').textContent = content;
};
