# Code Quiz Project

This application is a timed quiz about random subjects, using JavaScript to dynamically add, modify, and hide HTML elements and CSS styling. 

When the user goes to the site, he/she/they will be able to click on the `start quiz` button, where a user will be able to click on the answer for each question. The score will be calculated at the end of the quiz.

On the home page, the user will also be able to access his/her/their past scores, using the `view high scores` button. 

During the quiz, this button will be disabled, so that the user is able to fully concentrate on the quiz. 

## Quiz Elements

As mentioned above, the user will have to click the best answer for each question to move on to the next question with its corresponding answer choices. There are 4 choices per question. 

The questions and corresponding answers are rotated using a for-loop. 

## Quiz Finished

When the user finishes answering all the questions, or when the timer goes down to `0`, the quiz will end and an input form will display.  The user will type his/her/their initials and press the `'submit` button. Should the user fail to insert the initials, an `alert` will display, prompting the user to type in the initials before advancing further. 

## Score Board

After, the user is taken to another page where he/she/they are able to view the scores he/she/they earned in the quiz. In that page, the user is able to either click the `start over` button to take the quiz, or the `clear leaderboard` button to clear all the scores saved. 