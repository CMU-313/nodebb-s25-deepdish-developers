# User Guide


## User Story 1
As an instructor, I want to mark questions as "answered" or "unanswered," so that students can quickly identify which questions still need attention.

## User Story 2
As a student, I want to mark threads as a question or discussion so that it is easier to categorize and navigate conversations based on their purpose and context.

1. Log in to NodeBB
2. Navigate to a category by clicking on a topic list
3. Select a topic
4. Click on Topic Tools
5. Click on "Mark as Discussion"

Unit tests are located in test/topics.js 

## User Story 3
-As an instructor (administrator), I want topics to be able to be marked as important, so I can important threads for students to read.
Feature guide for User Story 3, marking topics as important

-Once NodeBB is launched, navigate to the Comments and Feedback section. Go to 
click topic tools first. Here you can see a "Mark Important" indicated with a
star option. This is the first UI change.

-Then click on the posts and click mark important. This feature is buggy and may
take a couple tries to show up. You can then click again to unmark it.

-The topic test originally include creating a topic. So with this created topic
I wrote two tests in the topics.js folder that tests marking and unmarking
a post as important. I believe these tests are sufficient for checking functionality.
I reccomend writing further tests for the controller to test whether there are any
faulty scenarios that trigger a post to be marked as important.

-Automated tests can be found in 
/home/nodebb-s25-deepdish-developers/test/topics.js
