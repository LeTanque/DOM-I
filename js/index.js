const siteContent = { // Object literal. This is literally an object literal.
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};



//////////////////////////////////////////////////////////////////////////////////////
// BTW MAP CAN DO ANYTHING IN THE WORLD - DOESN'T MEAN YOU SHOULD //
// To be honest, using map is pretty unnecessary with the nav, or elsewhere for that matter. 
// I first wrote this using forEach, which as it turns out would have worked fine.
// Originally, I thought I was going to need to modify or append to 
// each value in the array-like object. Then I read the docs on setAttribute.
// I realized that we are working with siteContent, which is, more or less, a bunch of strings. 
// Meaning, in this context, all I needed was some bracket notation and I could append to the
// output href link. I was funamentally misunderstanding what setAttribute was doing.
// I also learned that bracket notation within another is okay.
// All this to add .html to each link, lol!  Good practice though, this experience cleared up a 
// lot of my syntax hangups, I believe.
const navLinks = document.querySelectorAll('nav a');  // Select all the 'a' within 'nav'
const navMadeArr = Array.from(navLinks); // Had problems using map on an array-like thing. This allows me to use map.
const navArr = navMadeArr.map((element, index) => { // map creates a new array called navArr
  element.textContent = siteContent['nav'][`nav-item-${index+1}`];
  element.setAttribute('href', `${siteContent['nav'][`nav-item-${index+1}`]}.html` );
  return element; // Technically, this works for our purposes without the return. But it just seems like the right thing to do.
});


// Append a child to the nav
const newNode = document.createElement('a'); 
newNode.appendChild(document.createTextNode('Github'));
newNode.setAttribute('href', 'https://github.com/greatidea');
const navAddNode = document.querySelector('nav').appendChild(newNode); 


// Prepend a child to the nav
const newNode2 = document.createElement('a');
newNode2.setAttribute('href', 'index.html');
newNode2.appendChild(document.createTextNode('Home'));
const navAddNode2 = document.querySelector('nav').prepend(newNode2); 


const navColorArr = Array.from(document.getElementsByTagName('a'));
navColorArr.forEach(element => {
  element.style.color = '#295205';
});


// // Background color just to see if I know how that works
const html = document.getElementsByTagName('html');
html[0].style.height = '150%';
const body = document.getElementsByTagName('body');
body[0].style = `background-image: linear-gradient(167deg, rgba(207, 217, 226, 0.16) 35%, rgba(42, 76, 83, 0.94));`;


// // Things were going fine, but then I had a great idea.. no pun intended!
const logo = document.querySelector('header #logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);


// // This is section class='cta'
// // Traversing over an object literal and html structure. 
const cta = document.querySelector('.cta'); // This gives us the entire section
const ctaAsArr = Array.from(cta.children);  // Make an array from the children nodeList method
ctaAsArr.forEach(element => { // This loop iterates through ctaAsArr to render the correct data from siteContent. Starts at section class cta
  if (element.localName === 'div') { // next is level is div class cta-text and the img.
    for (let i=0; i<element.children.length; i++) { // this loop determines which of the two grandchildren nodes it is, and acts accordingly.
      if (element.children[i].localName === 'h1') { // keep digging!
        element.children[i].textContent = siteContent['cta']['h1'];
      } else if (element.children[i].localName === 'button') { 
        element.children[i].setAttribute('value', siteContent['cta']['button']);
        element.children[i].textContent = siteContent['cta']['button'];
      } else {
        console.log('Oh no! Something went wrong! Grand child');
      }
    }
  } else if (element.localName === 'img') { // this level is the sibling to div
    element.src = siteContent['cta']['img-src'];
  } else {
    console.log('Oh no! Something went wrong! Child');
  }
});


// // This is section class='main-content'
// // There is a way, I believe, to make this much more elegant. Instead, I'm left with
// // if logic that probably would have been more efficient outside of the forEach loop.
// // Anyways, I've spent too much time on it so I just finished it out 'more simply'.
const mainContent = Array.from(document.querySelector('.main-content').children);
// const mainAsArr = Array.from(mainContent.children);
mainContent.forEach(element => {
  if (element.className === 'top-content') { 
    element.children[0].children[0].textContent = siteContent['main-content']['features-h4'];
    element.children[0].children[1].textContent = siteContent['main-content']['features-content'];
    element.children[1].children[0].textContent = siteContent['main-content']['about-h4'];
    element.children[1].children[1].textContent = siteContent['main-content']['about-content'];
  } else if (element.localName === 'img') { 
    element.src = siteContent['main-content']['middle-img-src'];
  } else if (element.className === 'bottom-content') { 
    element.children[0].children[0].textContent = siteContent['main-content']['services-h4'];
    element.children[0].children[1].textContent = siteContent['main-content']['services-content'];
    element.children[1].children[0].textContent = siteContent['main-content']['product-h4'];
    element.children[1].children[1].textContent = siteContent['main-content']['product-content'];  
    element.children[2].children[0].textContent = siteContent['main-content']['vision-h4'];
    element.children[2].children[1].textContent = siteContent['main-content']['vision-content'];  
  }
});


// // Section contact
// // No more loops. But I did find turning the query into an array handy. 
const contact = document.querySelector('.contact');
const contactAsArr = Array.from(contact.children);
contactAsArr[0].textContent = siteContent['contact']['contact-h4'];
contactAsArr[1].textContent = siteContent['contact']['address'];
contactAsArr[2].textContent = siteContent['contact']['phone'];
contactAsArr[3].textContent = siteContent['contact']['email'];


// // Footer
const footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];


//////////////////////////////////////////////////////////////////////////////////////
// // Work in progress // // Syntax snippets // //
// BTW, you can't make an array out of getElementsByClassName, for some reason.
// const contact = document.getElementsByClassName('contact');
// const contactAsArr = Array.from(contact.children);
// console.log(contact.children)


// Alternate way to add text to a node?
// let newContent = document.createTextNode("Hi there and greetings!"); 
// newDiv.appendChild(newContent);  // add the text node to the newly created div


// const logo = document.getElementById('logo-img');
// logo.setAttribute('src', siteContent['nav']['img-src']);
// console.log(logo);


// let anchors = document.getElementsByTagName('a');


// const blog = document.createElement('a');
// blog.textContent = 'Blog';


// const navBlog = document.querySelector('nav');
// navBlog.appendChild = blog.textContent;
// console.log(navBlog);


// let middleImage = document.querySelector('.middle-img')
// middleImage.src = (siteContent['main-content']['middle-img-src'])


// // forEach example I wrote
// const nav = document.querySelectorAll('nav a');
// nav.forEach((array, index) => {
//   array.textContent = siteContent['nav'][`nav-item-${index}`];
//   array.setAttribute('href', siteContent['nav'][`nav-item-${index}`]);
// });


// // MDN example of childNodes that doesn't make sense
// var parent = document.getElementById('parent');
// var child_nodes = parent.childNodes;
// console.log(child_nodes.length); // let's assume "2"
// parent.appendChild(document.createElement('div'));
// console.log(child_nodes.length); // outputs "3"


// // Nested in cta
// const ctaImg = document.querySelector('.cta #cta-img');
// ctaImg.src = siteContent['cta']['img-src'];

// let ctaKids = cta.children;
// cta.forEach((array) => {
//   array.textContent = siteContent['cta']['h1'];

// });
// cta.children.textContent = siteContent['cta']['h1'];


/////////////////////////\/D\/O\/M\///////////////////////////////
/* Notes:

When you use querySelectorAll, you get a NodeList, which is an array-like-object. 

This is what you use to create an array from an HTMLCollection or NodeList
Array.from(arrayLikeObject)

document.querySelector is a method that operates on the attached DOM object. 
It takes one argument, the DOM element it is selecting.

‘.setAttribute()’ is a method that takes two arguments: 
the attribute to set, and the value to set to that attribute.


End Notes */
/////////////////////////\/D\/O\/M\/////////////////////////////////