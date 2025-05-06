let buttonActive = document.querySelector("#dark1");

buttonActive.addEventListener("click", darkSwitch);

function darkSwitch() {
    document.documentElement.classList.toggle("dark");
}

// Data
const navLinks = [
    { text: "ABOUT ME", target: "#perfil" },
    { text: "SKILLS", target: "#my-skills" },
    { text: "PROJECTS", target: "#my-works" },
];

const headerDetails = {
    name: "Rodrigo Ortiz Martinez",
    title: "Front end Developer and Sistem Eginner",
};

const reviews = [
    {
        title: "Client review From Australia <span class='bg-purple-900 text-[16px]'>5.0</span>",
        text: "Oustanding Web Developer, Exceeded All Expectation. highly Recomended Without hesitation",
    },
];

const expertise = [
    { name: "BACKEND", percentage: 88 },
    { name: "CMS", percentage: 90 },
    { name: "FROTEND", percentage: 93 },
];

const aboutMeDetails = {
    title: "WHO AM I?",
    text: "I am a full-stack website dveloper specialized in reactJs. Plus, I also know some Wordpress front-enf development with Elementos and WooCommerce. Programming is my passion, that´s the reason I am working at the time of my academic career. Additionally, I like top lay PC games and read story-type books in My leisure time which is kinda fun and relaxing",
};

const skills = [
    "./resources/htmlicon.png",
    "./resources/css3icon.png",
    "./resources/logo-javascript-icon-512.png",
    "./resources/react.png",
    "./resources/next.png",
    "./resources/node-js-icon-1817x2048-g8tzf91e.png",
    "./resources/Tailwind_CSS_Logo.svg.png",
    "./resources/MongoDB-Image.png",
];

const additionalSkills = [
    "./resources/axios.png",
    "./resources/reduz_jv.png",
    "./resources/Bootstrap_logo.svg.png",
    "./resources/mui-labs.png",
    "./resources/firestorelogo.png",
    "./resources/pngimg.com - wordpress_PNG41.png",
    "./resources/framer-motion-logo-png_seeklogo-446185.png",
];

const works = [
    {
        title: "Plumbing Company",
        image: "./resources/plumbing.webp",
    },
    {
        title: "Drink",
        image: "resources/drink.jpg",
    },
    {
        title: "Building",
        image: "./resources/robin grassner.jpg",
    },
];

const headerNav = document.getElementById("navbar");
const headerMobileNav = document.getElementById("mobile-navbar");
const headerContent = document.getElementById("header-content");
const headerCards = document.getElementById("header-cards");
const headerImageButton = document.getElementById("header-image-button");
const aboutMe = document.getElementById("about-me");
const mySkills = document.getElementById("my-skills");
const myWorks = document.getElementById("my-works");
const contactForm = document.getElementById("contact-form");

// Functions to create elements
function createNavLinks(links, targetElement) {
    let navHtml = "";
    links.forEach((link) => {
        navHtml += `<p class="px-6" for="<span class="math-inline">\{link\.target\}"\></span>{link.text}</p>`;
    });
    navHtml += `<button class="rounded-full border border-white flex flex-row items-center mt-1 p-1 ">
                    <p class="pr-1">CONTACT</p>
                    <img class="w-9 h-9" src="./resources/up-right.png" alt="icono de contacto">
                </button>`;
    targetElement.innerHTML = navHtml;
}

function createMobileNavLinks(links, targetElement) {
    let navHtml = "<ul>";
    links.forEach((link) => {
        navHtml += `<li><p class="" for="<span class="math-inline">\{link\.target\}"\></span>{link.text}</p></li><hr class="w-[20%]">`;
    });
    navHtml += `<button class="rounded-full border border-white flex flex-row items-center mt-1 p-1 absolute right-1 top-1 ">
                    <p class="pr-2">CONTACT</p>
                    <img class="w-7" src="./resources/up-right.png" alt="flecha">
                </button></ul>`;
    targetElement.innerHTML = navHtml;
}

function createHeaderContent(details, targetElement) {
    const html = `<h1 class=" text-white md:text-[60px] text-[35px]  text-shadow-lg/30 font-bold p-0">I'm<span
                    class="text-[#ebf88f] text-shadow-lg/30 font-bold p-0">${details.name} </span>
            </h1>
            <br>
            <br>
            <br>
            <h1 class="text-white md:text-[60px] text-[30px] text-shadow-lg/30 font-bold p-0 "><span
                    class="border  border-amber-50 rounded-2xl p-1 md:p-0">Front end</span>
                Developer and Sistem Eginner</h1>`;
    targetElement.innerHTML = html;
}

function createHeaderCards(reviews, expertise, targetElement) {
    let cardsHtml = `<div
                class="bg-[#1e2337] h-[100px] w-[200px]  md:h-[150px] md:w-[290px] rounded-lg z-3 absolute left-0 -top-28 md:top-10 pl-5 flex flex-col justify-center shadow-[0_0px_95px_rgba(99,105,123,1)] -rotate-7 dark:bg-[#fff879d7]">
                <h3 class="text-white text-[12px] md:text-[19px]"><span class="math-inline">\{reviews\[0\]\.title\}
</h3\>
<p class\="text\-\[\#63697b\] dark\:text\-black text\-\[10px\] md\:text\-\[15px\]"\></span>{reviews[0].text}
                </p>
            </div>
            <div
                class="bg-[#1e2337] h-[100px] w-[200px] md:h-[150px] md:w-[290px] rounded-lg z-4 absolute right-0 -top-60 md:top-10 shadow-[0_0px_95px_rgba(99,105,123,1)] leading-2 md:leading-3 p-3 rotate-7 dark:bg-[#fff879d7]">
                <h3 class="text-white text-[10px] md:text-[18px]">MY EXPERTISE</h3>
                <br>`;

    expertise.forEach((skill, index) => {
        cardsHtml += `<div class="flex flex-row justify-between relative">
                        <p class="text-[#63697b] dark:text-black text-[10px] md:text-[15px]"><span class="math-inline">\{skill\.name\}</p\>
<div class\="bg\-white  h\-0\.5 md\:h\-1 my\-auto w\-\[100%\]"\></div\>
<div
class\="bg\-purple\-700 h\-3 w\-3 md\:h\-4 md\:w\-4 border border\-amber\-50 rounded\-full absolute left\-2/3 "\>
</div\>
<span class\="border border\-amber\-50 rounded text\-amber\-50 text\-\[12px\] p\-0\.5 md\:p\-0"\></span>{skill.percentage}%</span>
                    </div>
                    <br>`;
    });

    cardsHtml += `</div>`;
    targetElement.innerHTML = cardsHtml;
}

function createHeaderImageAndButton(targetElement) {
    const html = `<img class="lg:w-190 w-65 mx-auto z-0 drop-shadow-[0_-100px_125px_rgba(235,248,143,1)]"
                src="./resources/principal.png" alt="">
            <button
                class="bg-[#ebf88f] border-b-black border-2 p-2 rounded-full w-40 font-semibold absolute bottom-1 mb-5 ">
                MY PROJECTS
            </button>`;
    targetElement.innerHTML = html;
}

function createAboutMe(details, targetElement) {
    const html = `<span class="flex flex-col">
                <h2 class="text-[#ebf88f] text-shadow-lg/30 font-bold p-0  lg:text-[60px] text-[40px] z-1" id="perfil">
                    <span class="math-inline">\{details\.title\}
</h2\>
</span\>
<br\>
<p class\="text\-white  dark\:text\-shadow\-yellow\-200 lg\:text\-\[20px\] text\-\[15px\] "\></span>{details.text}
            </p>
            <br>
            <button class="bg-[#ebf88f] border-b-black border-2 lg:p-2 rounded-full w-50 p-1 lg:w-80 font-semibold ">
                SHOW MY PROJECTS
            </button>
            <img class="absolute md:w-[180px] w-[70px] left-12 bottom-3 md:top-1/2 rounded-3xl rotate-15 shadow-[40px_20px_110px_rgba(99,105,123,1)] z-0"
                src="./resources/3.jpeg" alt="foto1">
            <img class="absolute md:w-[140px] w-[90px] right-16 bottom-3 md:top-1/2 rounded-3xl -rotate-15 shadow-[-25px_-25px_90px_rgba(99,105,123,1)]  "
                src="./resources/2.jpeg" alt="">
            <img class="absolute md:w-[95px] w-[40px] left-40 bottom-3 md:top-16 rounded-3xl -bg-conic-180 -rotate-19 shadow-[-20px_-30px_90px_rgba(99,105,123,1)] z-0"
                src="./resources/1.jpeg" alt="foto1">`;
    targetElement.innerHTML = html;
}

function createMySkills(skills, additionalSkills, targetElement) {
    let skillsHtml = `<span
                class="text-[#ebf88f] h-12 text-shadow-lg/30 font-bold p-0 lg:text-[60px] text-[40px] z-1 block text-center pt-5 ">
                MY SKILLS</span>
            <br>
            <br>
            <section class="m-5 h-1/2 flex flex-col md:flex-row">
                <div class="m-5 mr-0 md:w-2/3 flex flex-row flex-wrap p-2 pr-0 gap-4.5">`;

    skills.forEach((skill) => {
        skillsHtml += `<div
                        class="w-[23%] border-amber-50 border-1 rounded-2xl bg-[#1d2237] dark:bg-[#000000] flex flex-col justify-center items-center">
                        <img class="w-[50px] h-[50px] md:w-[120px] md:h-[120px] p-1 " src="${skill}"
                            alt="html-icon">
                    </div>`;
    });

    skillsHtml += `</div>
                <div
                    class="border-amber-50 border-2 m-5 ml-0 md:w-1/3 bg-[#151d33] dark:bg-[#000000] rounded-2xl flex flex-col justify-center items-center text-center">
                    <h3 class="text-[50px] md:text-[100px] text-white font-bold">4</h3>
                    <h3 class="text-[20px] md:text-[40px] text-white font-semibold md:leading-11">Years
                        <br>Experience<br>Working
                    </h3>
                    <br>
                    <button
                        class="bg-[#ebf88f] border-b-black border-2 p-2 rounded-full lg:w-80 md:w-52 font-semibold ">
                        DOWNLOAD MY CV
                    </button>
                </div>
            </section>
            <section
                class="border-amber-50 border-1 m-5 h-1/4 bg-[#1d2237] dark:bg-[#000000] flex flex-col items-center justify-center">
                <h3 class="lg:text-[40px] text-[30px] text-[#ebf88f] font-semibold text-center">ADDITIONAL SKILLS
                </h3>
                <br>
                <br>
                <div class="flex lg:flex-row gap-8 md:flex-wrap flex-wrap justify-center text-center">`;

    additionalSkills.forEach((skill) => {
        skillsHtml += `<img class="lg:w-[80px] lg:h-[80px]  w-[50px] h-[50px]" src="${skill}"
                        alt="axios-icon">`;
    });

    skillsHtml += `</div>
            </section>`;
    targetElement.innerHTML = skillsHtml;
}

function createMyWorks(works, targetElement) {
    let worksHtml = `<br>
                        <div
                class="h-[90%] flex flex-col items-start md:flex-raw md:content-end flex-wrap relative gap-4 lg:m-5 md:m-2 md:mr-15 ">
                <h3
                    class=" text-white lg:text-7xl  text-shadow-lg/30 font-bold absolute left-1/9 top-1/4 md:text-4xl text-3xl">
                    THE
                    WORKS
                    <br>CLOSEST
                    TO<br> MY HEART
                </h3>
                <div class="flex flex-row h-1/10 absolute bottom-15 md:left-1/4 mx-auto md:gap-5">
                    <button
                        class="bg-[#ebf88f] border-b-black text-[12px] md:text-[16px] border-2 md:p-3 rounded-full w-35 h-11 md:h-auto md:w-100 font-bold mr-4 shadow-[0_0px_45px_rgba(99,105,123,1)]  ">
                        SHOW MY PROJECTS
                    </button>
                    <h4
                        class="text-white text-[20px] md:text-3xl font-semibold text-shadow-[0_0px_10px_rgba(99,105,123,1)]">
                        ${works[0].title}<br>Company</h4>
                </div>
                <img class="border border-white w-1/3 md:w-1/4 md:hover:w-1/4 rounded-3xl md:h-full object-cover h-1/4"
                    src="${works[0].image}" alt="img-plomeria">
                <img class="border border-white w-1/3 hover:w-2/3 md:w-1/8 rounded-3xl object-cover ml-auto md:h-full md:hover:w-1/4 ease-in-out duration-75 h-1/4"
                    src="${works[1].image}" alt="Img-bebida">
                <img class="rounded-3xl object-cover w-1/3 hover:w-2/3 md:hover:w-1/4 md:w-1/8 md:h-full ease-in-out duration-75 h-1/4"
                    src="${works[2].image}" alt="Img-edificio">
            </div>
        </section>
        <section class="bg-[#0a0f22] h-200  dark:bg-[#000000] ">
            <br>
            <form action="" class="bg-[#ffffff] h-[85%] m-6 border-0 rounded-4xl text-center p-10">
                <h3 class="font-bold text-[30px] lg:text-[50px]">LET´S HAVE A CHAT</h3>
                <br>
                <input type="text" placeholder="YOUR NAME" class="bg-[#e3e3e3] rounded-3xl h-[15%] w-[100%] pl-10">
                <br>
                <br>
                <input type="text" placeholder="EMAIL ADDRES" class="bg-[#e3e3e3] rounded-3xl h-[15%] w-[100%] pl-10">
                <br>
                <br>
                <textarea type="text" placeholder="CHAT HERE"
                    class="bg-[#e3e3e3] rounded-3xl h-[30%] w-[100%] resize-none p-10 "></textarea>
                <br>
                <br>
                <button class="bg-[#ebf88f] border-b-black border-2 p-2 rounded-full w-50  lg:w-80 font-semibold ">
                    SUBMIT HERE
                </button>
            </form>
            <br>
        </section>
    `;
    targetElement.innerHTML = worksHtml;
}

// Call functions to populate content
createNavLinks(navLinks, headerNav);
createMobileNavLinks(navLinks, headerMobileNav);
createHeaderContent(headerDetails, headerContent);
createHeaderCards(reviews, expertise, headerCards);
createHeaderImageAndButton(headerImageButton);
createAboutMe(aboutMeDetails, aboutMe);
createMySkills(skills, additionalSkills, mySkills);
createMyWorks(works, myWorks);