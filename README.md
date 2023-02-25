# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview


### Screenshot


![FireShot Capture 014 - Frontend Mentor - Interactive rating component - ](https://user-images.githubusercontent.com/124421807/221323087-e4f4942c-f8d9-4a6f-9f2a-126d93a624b6.png)

![FireShot Capture 015 - Frontend Mentor - Interactive rating component - ](https://user-images.githubusercontent.com/124421807/221323100-c52167b6-f71a-4a72-b1cf-ecbb11b86cc1.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript
- localStorage


```css
.number{
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
    align-items: center;
    gap: 1rem;
}
.num-btn{
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: hsl(213, 19%, 18%);
    border-radius: 50%;
    cursor: pointer;
    color: hsl(217, 12%, 63%);
}
.num-btn:hover{
    background: hsl(25, 97%, 53%);
}
.num-btn:hover + .num-btn{
    background:hsl(217, 12%, 63%);
    color: hsl(0, 0%, 100%);
}
```

### Continued development

- Javasript
- forEach looping

### Useful resources

- localStorage

## Author
- Frontend Mentor - [@nfor2000](https://www.frontendmentor.io/profile/nfor2000)
- Twitter - [@PreslyNfor](https://www.twitter.com/PreslyNfor)


