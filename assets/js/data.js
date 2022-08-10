const data = [
    {
        index: 0,
        name: "KẺ CẮP MẶT TRĂNG 4: SỰ TRỖI DẬY CỦA GRU",
        desc: "Minions: The Rise Of Gru (2022)",
        img: "http://2phimmoi.net/wp-content/uploads/2022/08/ke-cap-mat-trang-4-su-troi-day-cua-gru-94361-thumbnail.jpg",
        video: "https://dl.dropboxusercontent.com/s/i1jcuz7intix0fn/Minions.The.Rise.of.Gru.2022.2160p.AMZN.WEB-DL.DDP5.1.HDR.HEVC-CMRG.mp4?dl=0",
        trailer: "https://www.youtube.com/embed/6DxjJzmYsXo",
    },
    {
        index: 1,
        name: "MÔN PHÁI VÕ MÈO: HUYỀN THOẠI MỘT CHÚ CHÓ",
        desc: "Paws of Fury: The Legend of Hank (2022)",
        img: "http://2phimmoi.net/wp-content/uploads/2022/07/mon-phai-vo-meo-huyen-thoai-mot-chu-cho-92703-thumbnail.jpg",
        video: "https://dl.dropboxusercontent.com/s/rzow3rcf17amj5u/Transformers.Age.of.Extinction.2014.ViE.1080p.BluRay.DTS.x264-LolHD.VAV%20%282%29.mp4?dl=0",
        trailer: "https://www.youtube.com/embed/ONHBaC-pfsk",
    },
];

localStorage.setItem("blockbuster", JSON.stringify(data));

const avenger = document.querySelector(".avenger-film");
const mainMovie = document.querySelector(".main__movie");

const output = JSON.parse(localStorage.getItem("blockbuster"))[1];
console.log(output);

mainMovie.innerHTML = `
    <div class="movie__header">${output.name}</div>
    <div class="movieWrapper">
        <video
            controls
            poster="${output.img}"
            <source
            src="${output.video}"
            type="video"
        >
            >
        </video>
    </div>

    <div class="movie__trailer">Trailer</div>
    <div class="trailerWrapper">
        <iframe
            src="${output.trailer}"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
    </div>
`;
