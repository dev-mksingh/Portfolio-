const menu = document.querySelector('.menu-bar');
const closeMenu = document.querySelector('.close-bar');
const list = document.querySelector('.nav-bar');
const description = document.querySelector('.description');
const introduction = document.getElementById('introduction');
const education = document.getElementById("education");
const experience = document.getElementById("experience");
const project = document.getElementById("projects");
const certification = document.getElementById("certifications");
const contact = document.getElementById("contact");
// contact.textContent="contact";
const heading = document.querySelector('.heading');
const details = document.querySelector('.details');
const occupation = document.querySelector('.occupation');
const profilepic = document.querySelector('.profile-pic');
const section = document.querySelector('.intro');

function hide() {
    list.classList.toggle("hidden");
    this.classList.toggle("hidden");
    closeMenu.classList.toggle('hidden');
}

function removalOfelements(){
    if(description.childElementCount!=0){
        while(description.hasChildNodes()){
            description.lastChild.remove();
        }
    }
    if(section.childElementCount>1) {
        section.lastElementChild.remove();
    }
}


menu.addEventListener('click',hide)

closeMenu.addEventListener('click',()=>{
    closeMenu.classList.toggle('hidden');
    menu.classList.toggle('hidden');
    list.classList.add('hidden');
})


introduction.addEventListener('click',()=>{

    removalOfelements();
 fetch('data.json').then(response=>response.json())
 .then(result=>{
    let introheading = document.createElement('h1');
    introheading.setAttribute('class','heading');
    let introdetails = document.createElement('p');
    introdetails.setAttribute('class','details');
    let introoccupation = document.createElement('p');
    introoccupation.setAttribute('class','occupation');
    let profileImage = document.createElement('div');
    profileImage.setAttribute('class','profile-pic');
    let image = document.createElement('img');
    image.setAttribute('src','./images/homepic.jpg');
    introheading.textContent = result.intro[0].heading;
    introdetails.textContent = result.intro[0].details;
    introoccupation.textContent = result.intro[0].occupation;
    description.appendChild(introheading);
    description.appendChild(introdetails);
    description.appendChild(introoccupation);
    profileImage.appendChild(image);
    document.querySelector('.intro').appendChild(profileImage);
 })
})


education.addEventListener('click',()=>{
 
    removalOfelements();  
    fetch('data.json').then(response=>response.json())
    .then(result=>{
    let educationList = document.createElement('ul');
    educationList.setAttribute('class',"educationList");
    let educationHeading = document.createElement('li')
    educationHeading.setAttribute('class','educationHeading');
    educationHeading.textContent = result.education[0].heading;
    let educationDetails = document.createElement('li');
    educationDetails.setAttribute('class','educationDetails');
    educationDetails.textContent = result.education[0].details;
    let educationOccupation = document.createElement('li');
    educationOccupation.setAttribute('class','educationOccupation');
    educationOccupation.textContent = result.education[0].occupation;
    let educationSchooling = document.createElement('li');
    educationSchooling.setAttribute('class','educationSchooling');
    educationSchooling.textContent = `${result.education[0].schooling}`;
    description.appendChild(educationList);
    educationList.appendChild(educationHeading);
    educationList.appendChild(educationDetails);
    educationList.appendChild(educationOccupation);
    educationList.appendChild(educationSchooling);
    
   })
})

experience.addEventListener('click',()=>{
    removalOfelements();
    fetch('data.json').then(response=>response.json())
 .then(result=>{
    let experienceheading = document.createElement('ul');
    experienceheading.setAttribute('class','educationHeading');
    let experiencedetails = document.createElement('li');
    experiencedetails.setAttribute('class','educationDetails');
    let experienceoccupation = document.createElement('li');
    experienceoccupation.setAttribute('class','educationOccupation');
    let experienceschooling = document.createElement('li');
    experienceschooling.setAttribute('class','educationSchooling');
    experienceheading.textContent = result.experience[0].heading;
    experiencedetails.textContent = result.experience[0].details;
    experienceoccupation.textContent = result.experience[0].occupation;
    experienceschooling.textContent = result.experience[0].schooling;
    description.appendChild(experienceheading);
    description.appendChild(experiencedetails);
    description.appendChild(experienceoccupation);
    description.appendChild(experienceschooling);
 })

})


project.addEventListener('click',()=>{

    removalOfelements();
    fetch('data.json').then(response=>response.json())
    .then(result=>{
    let projectheading = document.createElement('ul');
    projectheading.setAttribute('class', 'educationHeading projectdisplay');
    let projectfirst = document.createElement('li');
    projectfirst.setAttribute('class', 'educationDetails');
    let linkfirst = document.createElement('a');
    linkfirst.setAttribute('href',`${result.projects[0].links[0]}`)
    let projectFirstImage = document.createElement('img');
    projectFirstImage.setAttribute('src',`${result.projects[0].images.first}`)
    projectFirstImage.setAttribute('class',`fleximage bigscreenimage`)


    let projectsecond = document.createElement('li');
    projectsecond.setAttribute('class', 'educationOccupation marginextra');
    let linksecond = document.createElement('a');
    linksecond.setAttribute('href',`${result.projects[0].links[1]}`)
    let projectsecondImage = document.createElement('img');
    projectsecondImage.setAttribute('src',`${result.projects[0].images.second}`)
    projectsecondImage.setAttribute('class',`fleximage bigscreenimage`)

    let projectthird = document.createElement('li');
    projectthird.setAttribute('class', 'educationSchooling');
    let linkthird = document.createElement('a');
    linkthird.setAttribute('href',`${result.projects[0].links[2]}`)
    let projectthirdImage = document.createElement('img');
    projectthirdImage.setAttribute('src',`${result.projects[0].images.third}`)
    projectthirdImage.setAttribute('class',`fleximage bigscreenimage`);

    let projectfourth = document.createElement('li');
    projectfourth.setAttribute('class', 'educationSchooling marginextra');
    let linkfourth = document.createElement('a');
    linkfourth.setAttribute('href',`${result.projects[0].links[3]}`)
    let projectfourthImage = document.createElement('img');
    projectfourthImage.setAttribute('src',`${result.projects[0].images.fourth}`)
    projectfourthImage.setAttribute('class',`fleximage bigscreenimage`);


    linkfirst.appendChild(projectFirstImage);
    linksecond.appendChild(projectsecondImage);
    linkthird.appendChild(projectthirdImage);
    linkfourth.appendChild(projectfourthImage);
    projectfirst.appendChild(linkfirst);
    projectheading.appendChild(projectfirst);
    projectsecond.appendChild(linksecond);
    projectheading.appendChild(projectsecond);
    projectthird.appendChild(linkthird);
    projectfourth.appendChild(linkfourth);
    projectheading.appendChild(projectthird);
    projectheading.appendChild(projectfourth);
    description.appendChild(projectheading);
})

})

certification.addEventListener('click',()=>{
    removalOfelements();
    fetch('data.json').then(response=>response.json())
    .then(result=>{
    let certificationHeading = document.createElement('h1');
    certificationHeading.textContent = `${result.certification[0].heading}`;
    certificationHeading.setAttribute('class','educationHeading');
    let linkcertificate = document.createElement('a');
    linkcertificate.setAttribute('href','#')
    linkcertificate.setAttribute('class','marginextra')
    let image = document.createElement('img');
    image.setAttribute('src',`${result.certification[0].images}`)
    image.setAttribute('class',`fleximage`)
    linkcertificate.appendChild(image);
    description.appendChild(certificationHeading);
    description.appendChild(linkcertificate);
    });
})

contact.addEventListener('click',()=>{
    removalOfelements();
    fetch('data.json').then(response=>response.json())
    .then(result=>{
        let projectheading = document.createElement('ul');
        projectheading.setAttribute('class', 'educationHeading');
        projectheading.textContent=`${result.contact[0].heading}`;
        let projectfirst = document.createElement('li');
        projectfirst.setAttribute('class', 'educationDetails');
        let linkfirst = document.createElement('a');
        linkfirst.setAttribute('href',result.contact[0]["linkedin"])
        linkfirst.textContent="LinkedIn";
    
    
        let projectsecond = document.createElement('li');
        projectsecond.setAttribute('class', 'educationDetails');
        let linksecond = document.createElement('a');
        linksecond.setAttribute('href',`${result.contact[0].freecodecamp}`)
        linksecond.textContent="Freecodecamp";
    
        let projectthird = document.createElement('li');
        projectthird.setAttribute('class', 'educationSchooling');
        let linkthird = document.createElement('a');
        linkthird.setAttribute('href',`${result.contact[0].github}`)
        linkthird.textContent="Github";


    projectfirst.appendChild(linkfirst);
    projectheading.appendChild(projectfirst);
    projectsecond.appendChild(linksecond);
    projectheading.appendChild(projectsecond);
    projectthird.appendChild(linkthird);
    projectheading.appendChild(projectthird);
    description.appendChild(projectheading);
    })
})