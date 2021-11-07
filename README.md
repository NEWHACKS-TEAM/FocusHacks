# FocusHacks

## Inspiration
Studies show that approximately 80%–95% of university students engage in procrastination to some degree, and about half procrastinate in a consistent and problematic manner[[1]](#citations). 50% of students do not get to make the most out of their day because they get distracted, and FocusHacks is here to change all of that. This web application uses Machine Learning to visually track when the user loses focus, and sends a reminder/motivational quote through email to get back on track, and make the best out of their day. 

## What it does
### 1. Enhances user’s productivity
* FocusHacks helps users reduce distractions and increase productivity. 
* With its machine learning model, FocusHacks could detect when the user is being productive and when he/she is not. 
* If the user gets distracted and is not focusing on his/her work, FocusHacks would send the user an email, reminding and motivating the user to get back to work.

### 2. Protects online privacy
* The technology of FocusHacks could be further applied in virtual classrooms.
* FocusHacks detects when students are trying to take photos of the virtual classroom with his/her cellphone.  
* If the student is violating the privacy policy during remote learning, warning emails would be sent to both the student and the teacher.

## How we built it
* Machine Learning model: Tensorflow 
* Frontend: HTML5, CSS3 and JavaScript
* Backend: Node.js, Express.js
* API service for sending emails: Twilio SendGrid



## Challenges we ran into
* Machine Learning model needing more training data 
* Collaborating with different time zones 
* Wifi cutting out accidentally


## Accomplishments that we're proud of
* Built a Machine Learning model that could classifies user's behaviours, and detects users’ behaviours when they are not focusing on their work or violating the privacy policy
* Capable of sending email reminders to users promptly when the Machine Learning model has detected the users not being focus on their work


## What we learned
* Collaborating with people with different backgrounds, skills and experiences 
* Using Git for collaboration and version control
* Building a Tensorflow model
* Using Twilio's API to send emails to users
* Building a web app with both frontend and backend technology


## What's next for FocusHacks
* Using Auth0 to register and authenticate users to use our service
* Creating a more powerful machine learning model that could identify more classes
* Creating a mobile app where you can see your performance data 
* Using Twilio’s communication API’s to far greater levels for user communication to be even more effective
* Storing our data in database such as PostgreSQL, MongoDB or Firebase


## Citations
[1] Steel, P. (2007). The nature of procrastination: A meta-analytic and theoretical review of quintessential self-regulatory failure. Psychological Bulletin, 133(1), 65–94. [https://doi.org/10.1037/0033-2909.133.1.65](https://doi.org/10.1037/0033-2909.133.1.65)

## Setup for Project Development
1. Install npm modules
```bash
npm i
```

2. Create ```sendgrid.env``` following the template ```sendgrid-template.env```

3. Run ```index.js``` to host the website locally
```bash
node index.js
```

4. Visit ```http://localhost:8080/``` in the browser