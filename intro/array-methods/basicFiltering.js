let jamesBondMovies = [
    {
        id: 1,
        title: "Dr. No",
        jamesBond: "Sean Connery"
    },
    {
        id: 2,
        title: "World is Not Enough",
        jamesBond: "Pierce Brosnan"
    },
    {
        id: 3,
        title: "Thunderball",
        jamesBond: "Sean Connery"
    }
];

let result = jamesBondMovies.filter(movie => movie.jamesBond === "Sean Connery");

console.log(result);