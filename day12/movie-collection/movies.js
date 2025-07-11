const defaultGenre = "Unknown";
let title = "";
var year = 0;

const movies = [
    {
        title: "케이팝 데몬 헌터스",
        director: "메기 강",
        year: 2025,
        genre: "animation",
    },
    {
        title: "타이타닉",
        director: "제임스 카메론",
        year: 1997,
        genre: "Romance",
    },
    {
        title: "트루먼쇼",
        director: "피터 위어",
        year: 1998,
        genre: "comedy",
    },
];

function printMovies(movies) {
    console.log("Movie Collection:");

    for (let i = 0; i < movies.length; i++) {
        console.log(`${i}. `, movies[i]);
    }

    console.log("Total Movies:", movies.length);
}

printMovies(movies);

////////////////////////////////////////////////////////////////

const movie1 = {
    title: "매트릭스",
    director: "더 워쇼스키스",
    year: 1999,
    genre: "Sci-Fi",
};
const movie2 = {
    title: "인셉션",
    director: "크리스토퍼 놀란",
    year: 2010,
    genre: "Sci-Fi",
};
const movie3 = {
    title: "케이팝 데몬 헌터스",
    director: "메기 강",
    year: 2025,
    genre: "animation",
};
const movie4 = {
    title: "트루먼쇼",
    director: "피터 위어",
    year: 1998,
    genre: "comedy",
};
const movie5 = {
    title: "타이타닉",
    director: "제임스 카메론",
    year: 1997,
    genre: "Romance",
};

let hasMovies = false;

function promptGenre() {
    // 사용자 입력
    let inputStr = prompt("장르를 입력하세요.");

    if (isNaN(inputStr) || typeof inputStr !== "string") {
        console.log(`Invalid input! Enter a string`);
    }

    console.log("inputGenre : ", inputStr);

    return inputStr;
}

function searchMovies(...newMovies) {
    console.log(newMovies);

    for (let i = 0; i < newMovies.length; i++) {
        if (!newMovies[i].genre.includes(inputGenre)) continue;
        else {
            console.log(newMovies[i]);
            hasMovies = true;
        }
    }

    if (hasMovies === false) console.log("No movies found for genre: [genre].");
}

const calculateAverageYear = function (...newMovies) {
    var averageYear = 0;

    for (const movie of newMovies) {
        averageYear += movie.year;
    }

    averageYear = parseInt(averageYear / newMovies.length);

    console.log("Average Year: ", averageYear);
};

const findNewestMovie = (...newMovies) => {
    let movieTitle = "";
    var NewestYear = 0;

    for (const movie of newMovies) {
        if (NewestYear < movie.year) {
            movieTitle = movie.title;
            NewestYear = movie.year;
        }
    }

    console.log("Newest Movie: ", `${movieTitle}(${NewestYear})`);
};

let inputGenre = promptGenre();
searchMovies(movie1, movie2, movie3, movie4, movie5);
console.log("Statistics:");
calculateAverageYear(movie1, movie2, movie3, movie4, movie5);
findNewestMovie(movie1, movie2, movie3, movie4, movie5);
