const basicUsername = 'admin'
const basicPassword = 'admin'
const mainUrl = 'https://the-internet.herokuapp.com/'
module.exports = { 
// Add/Remove Elements
    addRemoveUrl: mainUrl + 'add_remove_elements/',
    addButton: '//*[@id="content"]/div/button',
    deleteButton: '//*[@id="elements"]/button',
// Basic Auth (user and pass: admin)
    basicAuthUrl: mainUrl + 'basic_auth/',
    basicUsername: 'admin',
    basicPassword: 'admin',
    basicAuthTitle: '//*[@id="content"]/div/p',
    basiAuthTitleData: 'Congratulations! You must have the proper credentials.',
// Broken Images
    brokenImageUrl: mainUrl + 'broken_images',
    brokenImage1Url: mainUrl + 'asdf.jpg',
    brokenImage2Url: mainUrl + 'hjkl.jpg',
    brokenImage3Url: mainUrl + 'img/avatar-blank.jpg',
    brokenImage1: '/html/body/h1',
    brokenImage2: '/html/body/h1',
    brokenImage3: '/html/body/img',
// Challenging DOM
    challengingDomUrl: mainUrl + 'challenging_dom',
    challengingDomButton1: '//*[@id="content"]/div/div/div/div[1]',
    challengingDomButton2: "//*[contains(text(),'foo') or contains(text(),'bar') or contains(text(),'baz') or contains(text(),'qux')]",
    challengingDomButton3: "//*[contains(text(),'foo') or contains(text(),'bar') or contains(text(),'baz') or contains(text(),'qux')]",
// Checkboxes
    checkboxesUrl: mainUrl + 'checkboxes',
    checkbox1: '//*[@id="checkboxes"]/input[1]',
    checkbox2: '//*[@id="checkboxes"]/input[2]',
// Context Menu
// Digest Authentication (user and pass: admin)
// Disappearing Elements
// Drag and Drop
// Dropdown
// Dynamic Content
// Dynamic Controls
// Dynamic Loading
// Entry Ad
// Exit Intent
// File Download
// File Upload
// Floating Menu
// Forgot Password
// Form Authentication
// Frames
// Geolocation
// Horizontal Slider
// Hovers
// Infinite Scroll
// Inputs
// JQuery UI Menus
// JavaScript Alerts
// JavaScript onload event error
// Key Presses
// Large & Deep DOM
// Multiple Windows
// Nested Frames
// Notification Messages
// Redirect Link
// Secure File Download
// Shadow DOM
// Shifting Content
// Slow Resources
// Sortable Data Tables
// Status Codes
// Typos
// WYSIWYG Editor
};