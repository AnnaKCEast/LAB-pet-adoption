 const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
      favorite: false
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://c02.purpledshub.com/uploads/sites/41/2018/08/Suzhousaurus-c07b50e.jpg",
      favorite: true
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg",
      favorite: true
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg",
      favorite: true
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
      favorite: true
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg",
      favorite: true
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg",
      favorite: true
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://c02.purpledshub.com/uploads/sites/41/2018/05/Longisquama-63cfe40.jpg?webp=1&w=1200",
      favorite: true
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg",
      favorite: true
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg",
      favorite: true
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://i.guim.co.uk/img/media/9655aefd1b38be8741b38e46dd35228a23784e01/0_167_2224_1334/master/2224.jpg?width=465&dpr=1&s=none",
      favorite: true
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg",
      favorite: true
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "https://i.redd.it/1akxefpzwfv21.jpg",
      favorite: false
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg",
      favorite: false
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg",
      favorite: false
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://i0.wp.com/iknowdino.com/wp-content/uploads/2015/03/Hypothetical_Deinocheirus.jpg?fit=1218%2C643&ssl=1",
      favorite: false
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://t3.ftcdn.net/jpg/01/93/38/40/360_F_193384026_F34lj9rX9W4ixlVZBrTJmijK010Tdv0j.jpg",
      favorite: false
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://c02.purpledshub.com/uploads/sites/41/2018/05/Amargasaurus-a4f591e.jpg",
      favorite: false
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH6BOqhLUUjZOpI7CO-EwhAkUnMWl3nJeCDw&usqp=CAU",
      favorite: false
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpWQGA-QuPpv4maDNZRObq3BFjIQooIc6ibQ&usqp=CAU",
      favorite: false
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://www.cnet.com/a/img/resize/f1b55fec64a9908d3f0193334478d52ade3d2457/hub/2014/11/13/a1ead3a7-3af9-42ea-acd9-b9cf05d66637/dinos-10.jpg?auto=webp&width=1200",
      favorite: false
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://www.rd.com/wp-content/uploads/2021/03/GettyImages-140594401-1-scaled.jpg",
      favorite: true
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg",
      favorite: false
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://i2-prod.mirror.co.uk/incoming/article27932447.ece/ALTERNATES/n615/0_PAY-GREAT-DANE-OPTICAL-ILLUSION.jpg",
      favorite: true
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://static9.depositphotos.com/1062590/1212/i/450/depositphotos_12126423-stock-photo-funny-european-cat-asking-for.jpg",
      favorite: true
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg",
      favorite: true
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg",
      favorite: true
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg",
      favorite: true
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg",
      favorite: false
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Does not get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://www.cnet.com/a/img/resize/09bcea5af7e5ae5675134ae9e6fa84f5a8a20ed2/hub/2021/06/07/7937625d-decd-42e0-bd10-82b22203f4e0/aussietitan.jpg?auto=webp&fit=crop&height=675&width=1200",
      favorite: true
    }
   
  ];
 
//  const targetingApp = document.querySelector("#app");

// let domString = ""
// for (const pet of pets) {

//   domString += `<div class="card" style="width: 18rem;">
     
//       <div class="card-body">
//         <h5 class="card-title">ID: ${pet.id}</h5> 
//         <img src=${pet.imageUrl} class="card-img-top" alt=${pet.name}>
//         <p class="card-text">Name: ${pet.name}</p>
//         <p class="card-text">Color: ${pet.color}</p>
//         <p class="card-text">Special Skill: ${pet.specialSkill}</p>
//         <p class="card-text">Type of Pet: ${pet.type}</p>
//         <p class="card-text">Favorite? ${pet.favorite ? "Totally" : "Nah"}</p>
//       </div>
//     </div>`;
    
// };
// targetingApp.innerHTML = domString;

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

const cardsOnDom = (array) => {
  let domString = "";
  for (const pet of array) {
    domString += `<div class="card" style="width: 18rem;">
    <img src="${pet.imageUrl}" class="card-img-top" alt="${pet.name}">
    <div class="card-body">
    <p class="card-text">Name: ${pet.name}</p>
        <p class="card-text">Color: ${pet.color}</p>
        <p class="card-text">Special Skill: ${pet.specialSkill}</p>
        <p class="card-text">Type of Pet: ${pet.type}</p>
        <p class="card-text">Favorite? ${pet.favorite ? "Totally" : "Nah"}</p>

    </div>
  </div>`;
  }

renderToDom("#app", domString);
};



const filter = (array, typeString) => {
  const typeArray = [];


for (const member of array) {
  if (member.type === typeString) {
   typeArray.push(member);
  }
}

return typeArray;
};

const showDogButton = document.querySelector("#dog-btn");
const showCatButton = document.querySelector("#cat-btn");
const showDinoButton = document.querySelector("#dino-btn");
const showAllButton = document.querySelector("#all-btn");

//  showDogButton.addEventListener("click", (e) => {
//   cardsOnDom(pets);
// });
// showCatButton.addEventListener("click", (e) => {
//   cardsOnDom(pets);
// });
// showDinoButton.addEventListener("click", (e) => {
//   cardsOnDom(pets);
// });
showAllButton.addEventListener("click", (e) => {
  cardsOnDom(pets);
});

showDinoButton.addEventListener("click", (e) => {
  const teamDino = filter(pets, "dino");
  cardsOnDom(teamDino);
});

showCatButton.addEventListener("click", (e) => {
  const teamCat = filter(pets, "cat");
  cardsOnDom(teamCat);
});

showDogButton.addEventListener("click", (e) => {
  const teamDog = filter(pets, "dog");
  cardsOnDom(teamDog);
});

const form = document.querySelector('form');
// Funciton to pull element
const createNewPet = (e) => {
  e.preventDefault();

  const newAnimalObj = {
    id: pets.length + 1,
    name: document.querySelector("#name").value,
    color: document.querySelector("#color").value,
    type: document.querySelector("#type").value,
    specialSkill: document.querySelector("#special-skill").value,
    imageUrl: document.querySelector("#image").value
  }

pets.push(newAnimalObj);
cardsOnDom(pets);
form.reset()
}
// Creating event listener for submit button
form.addEventListener('submit', createNewPet)
