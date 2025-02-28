Feature guide for User Story 3, marking topics as important

In this file, provide a detailed outline of how to use and user test your new feature(s)
Once NodeBB is launched, navigate to the Comments and Feedback section. Go to 
click topic tools first. Here you can see a "Mark Important" indicated with a
star option. This is the first UI change.

Then click on the posts and click mark important. This feature is buggy and may
take a couple tries to show up. You can then click again to unmark it.

Description of what is being tested and why you believe the tests are sufficient for covering the changes that you have made
The topic test originally include creating a topic. So with this created topic
I wrote two tests in the topics.js folder that tests marking and unmarking
a post as important. I believe these tests are sufficient for checking functionality.
I reccomend writing further tests for the controller to test whether there are any
faulty scenarios that trigger a post to be marked as important.


Automated tests can be found in 
/home/nodebb-s25-deepdish-developers/test/topics.js

