const basicUsername = 'admin'
const basicPassword = 'admin'
const mainUrl = 'https://the-internet.herokuapp.com/'
module.exports = { 
// Add/Remove Elements
    addRemoveUrl: mainUrl + 'add_remove_elements/',
    addButton: '//*[@id="content"]/div/button',
    deleteButton: '//*[@id="elements"]/button',
// Basic Auth (user and pass: admin)
    basicAuthUrl: mainUrl + 'basic_auth',
    basicUsername: 'admin',
    basicPassword: 'admin',
    basicAuthTitle: '//*[@id="content"]/div/p',
    basicAuthTitleData: 'Congratulations! You must have the proper credentials.',
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
    contextMenuUrl: mainUrl + 'context_menu',
    contextMenu: '//*[@id="hot-spot"]',
    alertMessage: 'You selected a context menu',
// Digest Authentication (user and pass: admin)
    digestAuthUrl: mainUrl + 'digest_auth',
    digestUsername: 'admin',
    digestPassword: 'admin',
    digestAuthTitle: '//*[@id="content"]/div/p',
    digestAuthTitleData: 'Congratulations! You must have the proper credentials.',
// Dropdown
    dropdownUrl: mainUrl + 'dropdown',
    dropdown: '//*[@id="dropdown"]',
    dropdownDisabled: '//*[@id="dropdown"]/option[1]',
    dropdownDisabledOptionTitle: 'Please select an option',
    dropdownFirstOption: '//*[@id="dropdown"]/option[2]',
    dropdownFirstOptionTitle: 'Option 1',
    dropdownSecondOption: '//*[@id="dropdown"]/option[3]',
    dropdownSecondOptionTitle: 'Option 2',
    dropdownFirstOptionValue: '1',
    dropdownSecondOptionValue: '2',
// Dynamic Content
    dynamicContentUrl: mainUrl + 'dynamic_content?with_content=static',
    dynamicContentFirstDiv: '//*[@id="content"]/div[1]/div[2]',
    dynamicContentSecondDiv: '//*[@id="content"]/div[2]/div[2]',
    dynamicContentThirdDiv: '//*[@id="content"]/div[3]/div[2]',
    dynamicContentRefreshLink: '//*[@id="content"]/div/p[2]/a',
// Dynamic Controls
    dynamicControlsUrl: mainUrl + 'dynamic_controls',
    dynamicControlsRemoveAddButton: '//*[@id="checkbox-example"]/button',
    dynamicControlsCheckBox: '//*[@id="checkbox"]/input',
    dynamicControlsDiv: '//*[@id="message"]',
    dynamicControlsCheckBoxDivAfterCheck: '//*[@id="checkbox-example"]/div[2]',
    dynamicControlsCheckBoxAfterAdd: '//*[@id="checkbox"]',
    dynamicControlsTitleAfterRemove: `It's gone!`,
    dynamicControlsTitleAfterAdd: `It's back!`,
    dynamicControlsTitleAfterAddAndCheck: `A checkbox`,
    dynamicControlsEnableButton: '//*[@id="input-example"]/button',
    dynamicControlInput: '//*[@id="input-example"]/input',
// Dynamic Loading
    dynamicLoadingFirstLink: mainUrl + 'dynamic_loading/1',
    dynamicLoadingSecondLink: mainUrl + 'dynamic_loading/2',
    dynamicLoadingStartButton: '//*[@id="start"]/button',
    dynamicLoadingDiv: '//*[@id="finish"]/h4',
    dynamicLoadingDivTitle: 'Hello World!',
// Entry Ad
    entryAddUrl: mainUrl + 'entry_ad',
    entryAddModalWindow: '//*[@id="modal"]',
    entryAddTitleP: '//*[@id="modal"]/div[2]/div[2]/p',
    entryAddTitle: `It's commonly used to encourage a user to take an action (e.g., give their e-mail address to sign up for something or disable their ad blocker).`,
    entryAddCloseButton: '//*[@id="modal"]/div[2]/div[3]/p',
// Exit Intent
    exitAddUrl: mainUrl + 'exit_intent',
    exitAddModalWindow: '//*[@id="ouibounce-modal"]',
    exitAddTitleP: '//*[@id="ouibounce-modal"]/div[2]/div[2]/p',
    exitAddTitle: `It's commonly used to encourage a user to take an action (e.g., give their e-mail address to sign up for something).`,
    exitAddCloseButton: '//*[@id="ouibounce-modal"]/div[2]/div[3]/p',
// Floating Menu
    floatingMenuUrl: mainUrl + 'floating_menu',
    floatingMenuHome: '//*[@id="menu"]/ul/li[1]/a',
    floatingMenuNews: '//*[@id="menu"]/ul/li[2]/a',
    floatingMenuContact: '//*[@id="menu"]/ul/li[3]/a',
    floatingMenuAbout: '//*[@id="menu"]/ul/li[4]/a',
// Form Authentication
    formUrl: mainUrl + 'login',
    formLogin: '//*[@id="username"]',
    formPassword: '//*[@id="password"]',
    formLoginData: 'tomsmith',
    formPasswordData: 'SuperSecretPassword!',
    formLoginButton: '//*[@id="login"]/button',
    formDiv: '//*[@id="content"]/div/h2',
    formDivData: 'Secure Area',
    formLogoutButton: '//*[@id="content"]/div/a',
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
    statusCodeUrl: mainUrl + 'status_codes',
    statusCode200: '//*[@id="content"]/div/ul/li[1]/a',
    statusCode301: '//*[@id="content"]/div/ul/li[2]/a',
    statusCode404: '//*[@id="content"]/div/ul/li[3]/a',
    statusCode500: '//*[@id="content"]/div/ul/li[4]/a',
    statusCodeBackLink: '//*[@id="content"]/div/p/a',
// Typos
    typosUrl: mainUrl + 'typos',
    typosDiv: '//*[@id="content"]/div/p[2]',
    typosDivTitle: `Sometimes you'll see a typo, other times you won,t.`,
    typosDivTitleRandom: `Sometimes you'll see a typo, other times you won't.`
// WYSIWYG Editor
};