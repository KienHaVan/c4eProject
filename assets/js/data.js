// CHỈ LƯU TRỮ DỮ LIỆU VÀ GỬI DỮ LIỆU TỪ MAIN => LOCAL STORAGE
const blockbusterData = [
    {
        index: 0,
        name: "Phù Thủy Tối Thượng Trong Đa Vũ Trụ Hỗn Loạn",
        desc: "Doctor Strange in the Multiverse of Madness(2022)",
        img: "./assets/img/trending/DoctorStrange.jpg",
        video: "https://dl.dropboxusercontent.com/s/lzn92wst237w071/Doctor.Strange.in.the.Multiverse.of.Madness.2022.1080p.WEB-DL.DDP5.1.Atmos.H.264-CMRG%20%28Vietsub%29.mp4?dl=0",
        trailer: "https://www.youtube.com/embed/3xccmeAsy8g",
    },
    {
        index: 1,
        name: "Sinh Vật Huyền Bí: Những Bí Mật Của Dumbledore",
        desc: "Fantastic Beasts: The Secrets of Dumbledore (2022)",
        img: "./assets/img/trending/FantasticBeasts.jpg",
        video: "https://dl.dropboxusercontent.com/s/rzow3rcf17amj5u/Transformers.Age.of.Extinction.2014.ViE.1080p.BluRay.DTS.x264-LolHD.VAV%20%282%29.mp4?dl=0",
        trailer: "https://www.youtube.com/embed/Y9dr2zw-TXQ",
    },
    {
        index: 2,
        name: "Thế Giới Khủng Long 3: Lãnh Địa",
        desc: "Jurassic World: Dominion (2022)",
        img: "./assets/img/trending/JurassicWorld.jpg",
        video: "https://dl.dropboxusercontent.com/s/rzow3rcf17amj5u/Transformers.Age.of.Extinction.2014.ViE.1080p.BluRay.DTS.x264-LolHD.VAV%20%282%29.mp4?dl=0",
        trailer: "https://www.youtube.com/embed/fb5ELWi-ekk",
    },
    {
        index: 3,
        name: "Kingsman: Khởi Nguồn",
        desc: "The King's Man (2022)",
        img: "./assets/img/trending/Kingsman.jpg",
        video: "https://dl.dropboxusercontent.com/s/rzow3rcf17amj5u/Transformers.Age.of.Extinction.2014.ViE.1080p.BluRay.DTS.x264-LolHD.VAV%20%282%29.mp4?dl=0",
        trailer: "https://www.youtube.com/embed/5zdBG-iGfes",
    },
    {
        index: 4,
        name: "Ma Trận: Hồi Sinh",
        desc: "The Matrix Resurrections (2022)",
        img: "./assets/img/trending/Matrix.jpg",
        video: "https://dl.dropboxusercontent.com/s/rzow3rcf17amj5u/Transformers.Age.of.Extinction.2014.ViE.1080p.BluRay.DTS.x264-LolHD.VAV%20%282%29.mp4?dl=0",
        trailer: "https://www.youtube.com/embed/9ix7TUGVYIo",
    },
    {
        index: 5,
        name: "Kẻ Cắp Mặt Trăng 4 : Sự Trỗi Dậy Của Gru",
        desc: "Minions: The Rise Of Gru (2022)",
        img: "./assets/img/trending/minions.jpg",
        video: "https://dl.dropboxusercontent.com/s/rzow3rcf17amj5u/Transformers.Age.of.Extinction.2014.ViE.1080p.BluRay.DTS.x264-LolHD.VAV%20%282%29.mp4?dl=0",
        trailer: "https://www.youtube.com/embed/6DxjJzmYsXo",
    },
    {
        index: 6,
        name: "Giáo Sư Ma Cà Rồng",
        desc: "Morbius (2022)",
        img: "./assets/img/trending/Morbius.jpg",
        video: "https://dl.dropboxusercontent.com/s/rzow3rcf17amj5u/Transformers.Age.of.Extinction.2014.ViE.1080p.BluRay.DTS.x264-LolHD.VAV%20%282%29.mp4?dl=0",
        trailer: "https://www.youtube.com/embed/Y9dr2zw-TXQ",
    },
    {
        index: 7,
        name: "Đấu Trường Âm Nhạc 2",
        desc: "Sing 2 (2022)",
        img: "./assets/img/trending/Sing2.jpg",
        video: "https://dl.dropboxusercontent.com/s/rzow3rcf17amj5u/Transformers.Age.of.Extinction.2014.ViE.1080p.BluRay.DTS.x264-LolHD.VAV%20%282%29.mp4?dl=0",
        trailer: "https://www.youtube.com/embed/Y9dr2zw-TXQ",
    },
    {
        index: 8,
        name: "Nhím Sonic 2",
        desc: "Sonic the Hedgehog 2 (2022)",
        img: "./assets/img/trending/sonic.jpg",
        video: "https://dl.dropboxusercontent.com/s/rzow3rcf17amj5u/Transformers.Age.of.Extinction.2014.ViE.1080p.BluRay.DTS.x264-LolHD.VAV%20%282%29.mp4?dl=0",
        trailer: "https://www.youtube.com/embed/Y9dr2zw-TXQ",
    },
    {
        index: 9,
        name: "Người Nhện: Không Còn Nhà",
        desc: "Spider-Man: No Way Home (2022)",
        img: "./assets/img/trending/spiderman.jpg",
        video: "https://dl.dropboxusercontent.com/s/rzow3rcf17amj5u/Transformers.Age.of.Extinction.2014.ViE.1080p.BluRay.DTS.x264-LolHD.VAV%20%282%29.mp4?dl=0",
        trailer: "https://www.youtube.com/embed/Y9dr2zw-TXQ",
    },
    {
        index: 10,
        name: "Thần Sấm 4: Tình Yêu Và Sấm Sét",
        desc: "Thor 4: Love and Thunder (2022)",
        img: "./assets/img/trending/thor4.jpg",
        video: "https://dl.dropboxusercontent.com/s/rzow3rcf17amj5u/Transformers.Age.of.Extinction.2014.ViE.1080p.BluRay.DTS.x264-LolHD.VAV%20%282%29.mp4?dl=0",
        trailer: "https://www.youtube.com/embed/Y9dr2zw-TXQ",
    },
    {
        index: 11,
        name: "Khách Sạn Huyền Bí 4: Ma Cà Rồng Biến Hình",
        desc: "Hotel Transylvania 4: Transformania (2022)",
        img: "./assets/img/trending/Transylvania.jpg",
        video: "https://dl.dropboxusercontent.com/s/rzow3rcf17amj5u/Transformers.Age.of.Extinction.2014.ViE.1080p.BluRay.DTS.x264-LolHD.VAV%20%282%29.mp4?dl=0",
        trailer: "https://www.youtube.com/embed/Y9dr2zw-TXQ",
    },
];

localStorage.setItem("blockbuster", JSON.stringify(blockbusterData));

const blockbusters = document.querySelectorAll(
    ".streaming__list .blockbuster__item"
);
const series = document.querySelectorAll(".series__list .blockbuster__item");
const tvshows = document.querySelectorAll(".tvshows__list .blockbuster__item");
const cartoons = document.querySelectorAll(".cartoon__list .blockbuster__item");

// const blockbusters = document.querySelectorAll(
//     ".streaming__list .blockbuster__item"
// );

const trendingItems = document.querySelectorAll(".trendingList-item img");

blockbusters.forEach((blockbuster, index) => {
    blockbuster.addEventListener("click", () => {
        localStorage.setItem("currentChoice", index);
    });
});
series.forEach((serie, index) => {
    serie.addEventListener("click", () => {
        localStorage.setItem("currentChoice", index);
    });
});
tvshows.forEach((tvshow, index) => {
    tvshow.addEventListener("click", () => {
        localStorage.setItem("currentChoice", index);
    });
});
cartoons.forEach((cartoon, index) => {
    cartoon.addEventListener("click", () => {
        localStorage.setItem("currentChoice", index);
    });
});
trendingItems.forEach((trendingItem, index) => {
    trendingItem.addEventListener("click", (e) => {
        localStorage.setItem("currentChoice", e.target.dataset.index);
        console.log(e.target.dataset.index);
    });
});
function sendingIndex() {
    const trendingItems = document.querySelectorAll(".trendingList-item img");
    trendingItems.forEach((trendingItem, index) => {
        trendingItem.addEventListener("click", () => {
            localStorage.setItem("currentChoice", index);
            // console.log(index);
        });
    });
}

// const mainMovie = document.querySelector(".main__movie");

// const output = JSON.parse(localStorage.getItem("blockbuster"));
// console.log(mainMovie);

// mainMovie.innerHTML = `
//     <div class="movie__header">${output.name}</div>
//     <div class="movieWrapper">
//         <video
//             controls
//             poster="${output.img}"
//             <source
//             src="${output.video}"
//             type="video"
//         >
//             >
//         </video>
//     </div>

//     <div class="movie__trailer">Trailer</div>
//     <div class="trailerWrapper">
//         <iframe
//             src="${output.trailer}"
//             title="YouTube video player"
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowfullscreen
//         ></iframe>
//     </div>
// `;
