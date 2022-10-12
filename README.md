> **Warning**
> ## Work in progress. Articles section does not work and the contact form needs more testing but the rest is ok 

# Photographer portfolio

i'm learning react framework with a personnal photographer portfolio

## Required

### Email list with mailChimp

<p>
<ul>
<li>

Create a [mailChimp](https://mailchimp.com/fr/) account and click on this [link](https://dev.to/gedalyakrycer/create-an-email-list-with-react-mailchimp-965) for follow the tutorial until step 2 
</li>
<li>
Create file .env with REACT_APP_MAILCHIMP_U and REACT_APP_MAILCHIMP_ID

```
REACT_APP_MAILCHIMP_U = sequence of numbers
REACT_APP_MAILCHIMP_ID = sequence of numbers
```
</li>
</ul>
</p>

### Contact form

<p>
In the .env file, add REACT_APP_MY_EMAIL with your email

```
REACT_APP_MY_EMAIL = your email
```
</p>

### Images
I don't push images in git, so you'll have to go to src -> config -> projectsData.js and customize the "picture" field and the "projectImages" array in each object present before build with '/assets/imgTemplate/1000x750.png' or '/assets/imgTemplate/370x490.png' 


### HomePage

<p align="center">
<img src="https://github.com/NicolasDewae/react_portfolio/blob/master/portfolio/public/assets/imgReadme/Home.PNG" width="400" height=auto />
</p>

### Work

<p align="center">
<img src="https://github.com/NicolasDewae/react_portfolio/blob/master/portfolio/public/assets/imgReadme/Work.PNG" width="400" height=auto />
</p>

### Carousel

<p align="center">
<img src="https://github.com/NicolasDewae/react_portfolio/blob/master/portfolio/public/assets/imgReadme/Carousel.PNG" width="400" height=auto />
</p>

### Contact

<p align="center">
<img src="https://github.com/NicolasDewae/react_portfolio/blob/master/portfolio/public/assets/imgReadme/form.PNG" width="400" height=auto />
</p>
