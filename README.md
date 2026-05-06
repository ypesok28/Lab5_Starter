# Lab 5 - Starter

Yuval Pesok

- [Expose - Party Horn](https://ypesok28.github.io/Lab5_Starter/expose.html)
- [Explore - Speech Synthesis](https://ypesok28.github.io/Lab5_Starter/explore.html)

## Check Your Understanding

1. No you wouldn't want to write a unit test to test the "message" of a messaging application. A unit test tests individual parts of the code to make sure that each individual part is running smoothly. The "message" feature of an application requires much more than just 1 part, so having a single unit test to try to test the "message" feature does not actually encapsulate the whole feature and can lead to many aspects of it not being actually tested. A "message" feature would require much more than a single unit test, but rather many unit tests that test out each individual part.
2. Yes you would write a unit test to test a max message length feature. This is because the max message length is a small underlying aspect of the message feature, that isolates a very specific input, which is the message, and the output which is whether it accepts it or not (being less than or equal to 80 or greater than 80). That's all there is to it, and it doesn't depend on other features so it would be a good use of a unit test.
