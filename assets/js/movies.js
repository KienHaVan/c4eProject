const mainMovie = document.querySelector(".main__movie");
const blockbusterData = JSON.parse(localStorage.getItem("blockbuster"));
const index = JSON.parse(localStorage.getItem("currentChoice"));
const output = blockbusterData[index];

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
    <div class="introduce">
        <div class="introduce__top">
            <div class="text">Nội dung phim : </div>
            <br>
            <div class="content">
                <div class="bold">
                    ${output.desc}
                </div>
                <br>
                <div class="main__content">
                <p>Tiếp nối bộ phim kẻ cắp mặt trăng 3 năm 2015 , lần này ở trung tâm của thập niên 1970, Felonius Gru mười hai tuổi đang lớn lên ở vùng ngoại ô. Một fanboy của một nhóm giám sát được gọi là Vicy 6, Gru ấp ủ một kế hoạch trở thành ác quỷ đủ để tham gia cùng họ. Khi Vicy 6 sa thải thủ lĩnh của họ, chiến binh huyền thoại Wild Knuckles, Gru phỏng vấn để trở thành thành viên <span id="dots">...</span><span id="more"> mới nhất của họ.Mọi chuyện không suôn sẻ, và mọi thứ chỉ trở nên tồi tệ hơn sau khi Gru đánh cắp chúng với sự giúp đỡ của Kevin, Stuart, Bob, Otto và các Minion khác và đột nhiên thấy mình là kẻ thù không đội trời chung của ác quỷ. Trên đường chạy trốn, Gru và Minions sẽ chuyển sang một nguồn không thể để được hướng dẫn, chính Wild Knuckles và phát hiện ra rằng ngay cả những kẻ xấu cũng cần một chút giúp đỡ từ bạn bè của họ.Đến ác nhân cũng có những nỗi đau khôn nguôi...</span></p>
                <a onclick="showMoreContent()" id="myBtn">Read more</button>
                    </div>
            </div>
        </div>
    </div>
    <div class="main__blockbuster">
        <div class="blockbuster__header">
            <h2 class="blockbuster__header-text">Có thể bạn thích xem</h2>
            <button class="blockbuster__header-btn">View More</button>
        </div>
        <ul class="blockbuster__list">
            <li class="blockbuster__item">
                <div class="blockbuster__item-overlay">
                    <i class="fa-regular fa-circle-play"></i>
                </div>
                <div class="blockbuster__item-tag">HD Vietsub</div>
                <div class="blockbuster__item-img">
                    <img
                        src="./assets/img/trending/FantasticBeasts.jpg"
                        alt=""
                    />
                </div>
                <div class="blockbuster__item-content">
                    <h2>
                        Sinh vật huyền bí: Những bí mật của Dumbledore
                    </h2>
                    <h3>
                        Fantastic Beasts: The Secrets of Dumbledore
                    </h3>
                </div>
            </li>
            <li class="blockbuster__item">
                <div class="blockbuster__item-overlay">
                    <i class="fa-regular fa-circle-play"></i>
                </div>
                <div class="blockbuster__item-tag">HD Vietsub</div>
                <div class="blockbuster__item-img">
                    <img
                        src="./assets/img/trending/JurassicWorld.jpg"
                        alt=""
                    />
                </div>
                <div class="blockbuster__item-content">
                    <h2>
                        Thế giới khủng long: Lãnh địa
                    </h2>
                    <h3>
                        Jurassic World: Dominion
                    </h3>
                </div>
            </li>
            <li class="blockbuster__item">
                <div class="blockbuster__item-overlay">
                    <i class="fa-regular fa-circle-play"></i>
                </div>
                <div class="blockbuster__item-tag">HD Vietsub</div>
                <div class="blockbuster__item-img">
                    <img
                        src="./assets/img/trending/Kingsman.jpg"
                        alt=""
                    />
                </div>
                <div class="blockbuster__item-content">
                    <h2>
                        Mật Vụ Kingsman: Khởi Nguồn
                    </h2>
                    <h3>
                        The King's Man (2022)
                    </h3>
                </div>
            </li>
            <li class="blockbuster__item">
                <div class="blockbuster__item-overlay">
                    <i class="fa-regular fa-circle-play"></i>
                </div>
                <div class="blockbuster__item-tag">HD Vietsub</div>
                <div class="blockbuster__item-img">
                    <img
                        src="./assets/img/trending/Matrix.jpg"
                        alt=""
                    />
                </div>
                <div class="blockbuster__item-content">
                    <h2>
                        Ma trận: Hồi sinh
                    </h2>
                    <h3>
                        The Matrix Resurrections (2021)
                    </h3>
                </div>
            </li>
            <li class="blockbuster__item">
                <div class="blockbuster__item-overlay">
                    <i class="fa-regular fa-circle-play"></i>
                </div>
                <div class="blockbuster__item-tag">HD Vietsub</div>
                <div class="blockbuster__item-img">
                    <img
                        src="./assets/img/trending/minions.jpg"
                        alt=""
                    />
                </div>
                <div class="blockbuster__item-content">
                    <h2>
                        Kẻ trộm mặt trăng 3
                    </h2>
                    <h3>
                        Despicable Me 3 (2017)
                    </h3>
                </div>
            </li>
            <li class="blockbuster__item">
                <div class="blockbuster__item-overlay">
                    <i class="fa-regular fa-circle-play"></i>
                </div>
                <div class="blockbuster__item-tag">HD Vietsub</div>
                <div class="blockbuster__item-img">
                    <img
                        src="./assets/img/trending/Morbius.jpg"
                        alt=""
                    />
                </div>
                <div class="blockbuster__item-content">
                    <h2>
                        Ma Cà Rồng Morbius (2022)
                    </h2>
                    <h3>
                        Morbius
                    </h3>
                </div>
            </li>
            <li class="blockbuster__item">
                <div class="blockbuster__item-overlay">
                    <i class="fa-regular fa-circle-play"></i>
                </div>
                <div class="blockbuster__item-tag">HD Vietsub</div>
                <div class="blockbuster__item-img">
                    <img src="./assets/img/trending/Sing2.jpg" alt="" />
                </div>
                <div class="blockbuster__item-content">
                    <h2>
                        Đấu Trường Âm Nhạc 2
                    </h2>
                    <h3>
                        Sing 2 (2022)
                    </h3>
                </div>
            </li>
            <li class="blockbuster__item">
                <div class="blockbuster__item-overlay">
                    <i class="fa-regular fa-circle-play"></i>
                </div>
                <div class="blockbuster__item-tag">HD Vietsub</div>
                <div class="blockbuster__item-img">
                    <img src="./assets/img/trending/sonic.jpg" alt="" />
                </div>
                <div class="blockbuster__item-content">
                    <h2>
                        Nhím Sonic 2 (2022)
                    </h2>
                    <h3>
                        Sonic the Hedgehog 2 (2022)
                    </h3>
                </div>
            </li>
            <li class="blockbuster__item">
                <div class="blockbuster__item-overlay">
                    <i class="fa-regular fa-circle-play"></i>
                </div>
                <div class="blockbuster__item-tag">HD Vietsub</div>
                <div class="blockbuster__item-img">
                    <img
                        src="./assets/img/trending/spiderman.jpg"
                        alt=""
                    />
                </div>
                <div class="blockbuster__item-content">
                    <h2>
                        Người Nhện: Không Còn Nhà
                    </h2>
                    <h3>
                        Spider Man No Way Home (2022)
                    </h3>
                </div>
            </li>
            <li class="blockbuster__item">
                <div class="blockbuster__item-overlay">
                    <i class="fa-regular fa-circle-play"></i>
                </div>
                <div class="blockbuster__item-tag">HD Vietsub</div>
                <div class="blockbuster__item-img">
                    <img src="./assets/img/trending/thor4.jpg" alt="" />
                </div>
                <div class="blockbuster__item-content">
                    <h2>
                        Thor: Tình yêu và sấm sét
                    </h2>
                    <h3>
                        Thor: Love and Thunder (2022)
                    </h3>
                </div>
            </li>
            <li class="blockbuster__item">
                <div class="blockbuster__item-overlay">
                    <i class="fa-regular fa-circle-play"></i>
                </div>
                <div class="blockbuster__item-tag">HD Vietsub</div>
                <div class="blockbuster__item-img">
                    <img
                        src="./assets/img/trending/Transylvania.jpg"
                        alt=""
                    />
                </div>
                <div class="blockbuster__item-content">
                    <h2>
                        Khách Sạn Huyền Bí 4: Ma Cà Rồng Biến Hình
                    </h2>
                    <h3>
                        Hotel Transylvania: Transformania (2022)
                    </h3>
                </div>
            </li>
            <li class="blockbuster__item">
                <div class="blockbuster__item-overlay">
                    <i class="fa-regular fa-circle-play"></i>
                </div>
                <div class="blockbuster__item-tag">HD Vietsub</div>
                <div class="blockbuster__item-img">
                    <img
                        src="./assets/img/trending/spiderman.jpg"
                        alt=""
                    />
                </div>
                <div class="blockbuster__item-content">
                    <h2>
                        Khách Sạn Huyền Bí 4: Ma Cà Rồng Biến Hình
                    </h2>
                    <h3>
                        Hotel Transylvania: Transformania (2022)
                    </h3>
                </div>
            </li>
        </ul>
    </div>
`;

function showMoreContent() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("myBtn");
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}
