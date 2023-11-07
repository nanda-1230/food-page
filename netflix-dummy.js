let movies=[
    {
        name:"The Avengers ",
        rating: 8,
        poster: "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSK0mRgxk6RD6AXbkAzpQRs7FCh9J0FiOxC9eIHCqoxAgpBeywiPrFjbAcGKbCaVYkc"
        // description:"Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity."
    },
    {
        name:"leo",
        rating:9,
        poster:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTJj0Jlw-pErVfnJLzguRBidcejgntK-NVnJGqRq4EKtSdW7U40"
    },
    
    {
        name:"Avengers Infinity War",
        rating:8.4,
        poster:"https://th.bing.com/th/id/OIP.IJCMZ5A3RWaJgWBgL2OeTwHaLH?w=202&h=303&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        // description:"The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe."

    },
    {
        name:"Avengers End Game",
        rating:8.4,
        poster:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9"
       
    },
    {
        name:"John Wick-Chapter-1",
        rating:7.4,
        poster:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS0l5fuKfa2dQBtNqViR1Haj9JpYl4xRtaMasZyv1fLodr9WHsa"
        // description:"An ex-hitman comes out of retirement to track down the gangsters who killed his dog and stole his car."
    },
    {
        name:"John Wick-Chapter-2",
        rating:7.4,
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5VZ6Un0Fn4RYJSjH6MLsKgEmICbWqxWbfOBjDxkKSD891Thuj"
        // description:"After returning to the criminal underworld to repay a debt, John Wick discovers that a large bounty has been put on his life."
    },
    {
        name:"John Wick-Chapter-3",
        rating:7.4,
        poster:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTaABFJr_eVRUhtaPnKfihePqqNsJjcGvZ62OgxCv6wjXn-XgGC"
        // description:"John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere."
    },
    {
        name:"John Wick-Chapter-4",
        rating:7.8,
        poster:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQtrH0mQFT4UO4AuSjURYUll5aF4k5hGiRU6u8VYBA60Yr6-IL0"
        // description:"John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes."
    },

    {
        name:"Godzilla vs kong",
        rating:6.3,
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1VejMer5gFLAaM7l-1dMKqwJeZYJp9O2OlwqJ4P0-n1nnjtpb"
        // description:"The epic next chapter in the cinematic Monsterverse pits two of the greatest icons in motion picture history against each other--the fearsome Godzilla and the mighty Kong--with humanity caught in the balance."
    }
];

function searchMovie()
{
  let movieName =document.getElementById("search").value;

  if(movieName!=="")
  {
    let result = movies.filter(function(movie)
    {
        return movie.name.toUpperCase().includes(movieName.toUpperCase());
    })

    displayMovies(result);

  }
  else{
    displayMovies(movies);
  }
  console.log(movieName);
}

// let movie = document.createElement("div");
// movie.classList.add('one')

function displayMovies(data)
{
    document.getElementById('movies').innerHTML
    let htmlString = ``;
    
    

    for(let i=0; i<data.length;i++)
    {
        document.getElementById("movies"),innerHTML="";

        htmlString=htmlString+
        `<div class="movie">

        <div class="overlay">
  
            <div class="video">
  
            </div>
            <div class="details">
  
                <h1>${data[i].name}</h1>
  
                <h2>${data[i].rating}</h2>
  
                <p>Chris Evans,Chris,Robert</p>
            </div>
  
        </div>
        <img src="${data[i].poster}" class="poster">
      </div>  `;


    }
    console.log(htmlString)

    document.getElementById('movies').innerHTML=htmlString;
}

displayMovies(movies);
