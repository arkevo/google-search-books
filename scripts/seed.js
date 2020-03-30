const mongoose = require("mongoose");
const Book = require("../models/book");


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    family: 4 
  }
);

const booksSeed = [
  {
    authors: ["Stephenie Meyer"],
    googleId: "GfMSW5w3NTwC",
    title: "The Twilight Saga",
    subtitle: "Complete Collection",
    link: "https://play.google.com/store/books/details/Stephenie_Meyer_The_Twilight_Saga_Complete_Collect?id=GfMSW5w3NTwC&source=gbs_api",
    description: "When Isabella Swan moves to the gloomy town of Forks and meets the mysterious, alluring Edward Cullen, her life takes a thrilling and terrifying turn. With his porcelain skin, golden eyes, mesmerizing voice, and supernatural gifts, Edward is both irresistible and impenetrable. Up until now, he has managed to keep his true identity hidden, but Bella is determined to uncover his dark secret.",
    image: "https://books.google.com/books/content/images/frontcover/GfMSW5w3NTwC?fife=w200-h300&source=gbs_api"
  }, 
  { authors: ["L. M. Montgomery"], 
    googleId: "reIHCwAAQBAJ",
    title: "Anne of Green Gables",
    subtitle: "The Complete Collection",
    link: "https://play.google.com/store/books/details/L_M_Montgomery_Complete_Anne_of_Green_Gables_Colle?id=reIHCwAAQBAJ&source=gbs_api",
    description: "Set in the late 19th century, the novel recounts the adventures of Anne Shirley, an 11-year-old orphan girl, who is mistakenly sent to two middle-aged siblings; Matthew and Marilla Cuthbert, originally intending to adopt a boy to help them on their farm in the fictional town of Avonlea on Prince Edward Island. The novel recounts how Anne makes her way through life with the Cuthberts, in school, and within the town.", 
    image: "https://books.google.com/books/content/images/frontcover/reIHCwAAQBAJ?fife=w200-h300&source=gbs_api"
  },
  { authors: ["Chuck Palahniuk"], 
    googleId: "hoGkPfds4tAC",
    title: "Fight Club",
    subtitle: "A Novel",
    link: "https://play.google.com/store/books/details/Chuck_Palahniuk_Fight_Club_A_Novel?id=hoGkPfds4tAC&source=gbs_api",
    description: "Every weekend, in basements and parking lots across the country, young men with good white-collar jobs and absent fathers take off their shoes and shirts and fight each other barehanded for as long as they have to. Then they go back to those jobs with blackened eyes and loosened teeth and the sense that they can handle anything. Fight Club is the invention of Tyler Durden, projectionist, waiter and dark, anarchic genius. And it's only the beginning of his plans for revenge on a world where cancer support groups have the corner on human warmth. The first rule about fight club is you don't talk about fight club.", 
    image: "https://books.google.com/books/content/images/frontcover/hoGkPfds4tAC?fife=w200-h300&source=gbs_api"
  },
  { authors: ["William Goldman"], 
    googleId: "DhxUDEbqaZQC",
    title: "The Princess Bride",
    subtitle: "S. Morgenstern's Classic Tale of True Love and High Adventure",
    link: "https://play.google.com/store/books/details/William_Goldman_The_Princess_Bride?id=DhxUDEbqaZQC&source=gbs_api",
    description: "Anyone who lived through the 1980s may find it impossible—inconceivable, even—to equate The Princess Bride with anything other than the sweet, celluloid romance of Westley and Buttercup, but the film is only a fraction of the ingenious storytelling you'll find in these pages. Rich in character and satire, the novel is set in 1941 and framed cleverly as an “abridged” retelling of a centuries-old tale set in the fabled country of Florin that's home to “Beasts of all natures and descriptions. Pain. Death. Brave men. Coward men. Strongest men. Chases. Escapes. Lies. Truths. Passions.",
    image: "https://books.google.com/books/content/images/frontcover/DhxUDEbqaZQC?fife=w200-h300&source=gbs_api"
  },
  {
    authors: ["Michael Ende"],
    googleId: "KuFwDwAAQBAJ",
    title: "The Neverending Story",
    subtitle: "",
    link: "https://play.google.com/store/books/details/Michael_Ende_The_Neverending_Story?id=KuFwDwAAQBAJ&source=gbs_api",
    description: "When Bastian happens upon an old book called The Neverending Story, he's swept into the magical world of Fantastica--so much that he finds he has actually become a character in the story! And when he realizes that this mysteriously enchanted world is in great danger, he also discovers that he is the one chosen to save it. Can Bastian overcome the barrier between reality and his imagination in order to save Fantastica?",
    image: "https://books.google.com/books/content/images/frontcover/KuFwDwAAQBAJ?fife=w200-h300&source=gbs_api"
  }
];

async function seed() {
  await mongoose
    .connect(
      MONGODB_URI,
      options
    )
    .then(() => {
      console.log("Seed: Connected to Database");
    })
    .catch(err => {
      console.log("Seed: Not Connected to Database ERROR! ", err);
    });
  for (let book of booksSeed) {
    const { _id: bookId } = await new Book({
      title: book.title,
      subtitle: book.subtitle,
      authors: book.authors,
      link: book.link,
      description: book.description,
      image: book.image,
      googleId: book.googleId
    }).save();
  }

  mongoose.disconnect();

  console.info("Seed: Done!");
}

seed();