$(document).ready(function () {
	let guilds = [
		{
			id: 1,
			name: "Tàn Sát",
			master: "正恒pop",
			power: 887651 + Math.floor(Math.random() * 1000) + 1,
			sever: "S3-Việt Nam",
			page: 0
		},
		{
			id: 2,
			name: "Ăn Chơi",
			master: "Dân Thường",
			power: 896000 + Math.floor(Math.random() * 1000) + 1,
			sever: "S1-Việt Nam",
			page: 0
		},
		{
			id: 3,
			name: "Thiên Mệnh",
			master: "Phổ Độ Súc Sinh",
			power: 810000 + Math.floor(Math.random() * 1000) + 1,
			sever: "S2-Việt Nam",
			page: 0
		},
		{
			id: 4,
			name: "Đại Anh Hùng",
			master: "Miss Neko",
			power: 720600 + Math.floor(Math.random() * 1000) + 1,
			sever: "S1-Việt Nam",
			page: 0
		},
		{
			id: 5,
			name: "Thiên Địa",
			master: "Thiên Kiếm Tà",
			power: 760600 + Math.floor(Math.random() * 1000) + 1,
			sever: "S3-Việt Nam",
			page: 0
		},
		{
			id: 6,
			name: "Tam Giới",
			master: "Hoàng Đại Đế",
			power: 750500 + Math.floor(Math.random() * 1000) + 1,
			sever: "S2-Việt Nam",
			page: 0
		},
		{
			id: 7,
			name: "Push",
			master: "Tài Phệt",
			power: 600600 + Math.floor(Math.random() * 1000) + 1,
			sever: "S1-Việt Nam",
			page: 0
		},
		{
			id: 8,
			name: "Ma Giáo",
			master: "Tiêu Yun",
			power: 690600 + Math.floor(Math.random() * 1000) + 1,
			sever: "S1-Việt Nam",
			page: 0
		},
		{
			id: 9,
			name: "Đoạt Mệnh",
			master: "Mad",
			power: 720900 + Math.floor(Math.random() * 1000) + 1,
			sever: "S2-Việt Nam",
			page: 0
		},
		{
			id: 10,
			name: "Ngạo Thiên",
			master: "Hades",
			power: 540200 + Math.floor(Math.random() * 1000) + 1,
			sever: "S1-Việt Nam",
			page: 0
		},
	];

	let friends = [
		{
			id: 1,
			name: "Đông King",
			level: 4,
			power: 450000000 + Math.floor(Math.random() * 100000) + 1,
			sever: "S1-Việt Nam",
			page: 0
		},
		{
			id: 2,
			name: "Ăn Chơi",
			level: 25,
			power: 430000000 + Math.floor(Math.random() * 52300) + 1,
			sever: "S1-Việt Nam",
			page: 0
		},
		{
			id: 3,
			name: "Phan Thị",
			level: 33,
			power: 420000000 + Math.floor(Math.random() * 30200) + 1,
			sever: "S1-Việt Nam",
			page: 0
		},
		{
			id: 4,
			name: "Đại Anh Hùng",
			level: 11,
			power: 415000000 + Math.floor(Math.random() * 55000) + 1,
			sever: "S1-Việt Nam",
			page: 0
		},
		{
			id: 5,
			name: "Cửu Thiên",
			level: 5,
			power: 410000000 + Math.floor(Math.random() * 120000) + 1,
			sever: "S1-Việt Nam",
			page: 0
		},
		{
			id: 6,
			name: "Chị Chị Em Em",
			level: 4,
			power: 390000000 + Math.floor(Math.random() * 90000) + 1,
			sever: "S1-Việt Nam",
			page: 0
		},
		{
			id: 7,
			name: "Push",
			level: 6,
			power: 380000000 + Math.floor(Math.random() * 240000) + 1,
			sever: "S1-Việt Nam",
			page: 0
		},
		{
			id: 8,
			name: "Ma Giáo",
			level: 11,
			power: 380000000 + Math.floor(Math.random() * 150000) + 1,
			sever: "S1-Việt Nam",
			page: 0
		},
		{
			id: 9,
			name: "Ăn Nhậu",
			level: 15,
			power: 380000000 + Math.floor(Math.random() * 204000) + 1,
			sever: "S1-Việt Nam",
			page: 0
		},
		{
			id: 10,
			name: "Ngạo Thiên",
			level: 8,
			power: 380000000 + Math.floor(Math.random() * 84000) + 1,
			sever: "S1-Việt Nam",
			page: 0
		},

		{
			id: 11,
			name: "ThiênnVũ",
			level: 45,
			power: 360000000 + Math.floor(Math.random() * 100000) + 1,
			sever: "S1-Việt Nam",
			page: 1
		},
		{
			id: 12,
			name: "BộTộcThiểuSố",
			level: 12,
			power: 350000000 + Math.floor(Math.random() * 52300) + 1,
			sever: "S1-Việt Nam",
			page: 1
		},
		{
			id: 13,
			name: "LệnhTruySát",
			level: 27,
			power: 340000000 + Math.floor(Math.random() * 30200) + 1,
			sever: "S1-Việt Nam",
			page: 1
		},
		{
			id: 14,
			name: "SxKingxS",
			level: 32,
			power: 335000000 + Math.floor(Math.random() * 55000) + 1,
			sever: "S1-Việt Nam",
			page: 1
		},
		{
			id: 15,
			name: "zzVôSongzz",
			level: 11,
			power: 320000000 + Math.floor(Math.random() * 120000) + 1,
			sever: "S1-Việt Nam",
			page: 1
		},
		{
			id: 16,
			name: "TiêuDaoTrang",
			level: 15,
			power: 310000000 + Math.floor(Math.random() * 90000) + 1,
			sever: "S1-Việt Nam",
			page: 1
		},
		{
			id: 17,
			name: "HoàngGia",
			level: 42,
			power: 300000000 + Math.floor(Math.random() * 240000) + 1,
			sever: "S1-Việt Nam",
			page: 1
		},
		{
			id: 18,
			name: "xXxMaGiáoxXx",
			level: 10,
			power: 290000000 + Math.floor(Math.random() * 150000) + 1,
			sever: "S1-Việt Nam",
			page: 1
		},
		{
			id: 19,
			name: "HảiThầnĐảo",
			level: 9,
			power: 280000000 + Math.floor(Math.random() * 204000) + 1,
			sever: "S1-Việt Nam",
			page: 1
		},
		{
			id: 20,
			name: "zzThiênĐịa",
			level: 8,
			power: 270000000 + Math.floor(Math.random() * 84000) + 1,
			sever: "S1-Việt Nam",
			page: 1
		},

		{
			id: 21,
			name: "PờRồMAXNạp",
			level: 21,
			power: 260000000 + Math.floor(Math.random() * 100000) + 1,
			sever: "S1-Việt Nam",
			page: 2
		},
		{
			id: 22,
			name: "zzzAreszzz",
			level: 13,
			power: 250000000 + Math.floor(Math.random() * 52300) + 1,
			sever: "S1-Việt Nam",
			page: 2
		},
		{
			id: 23,
			name: "ThíchĐậpĐá",
			level: 14,
			power: 240000000 + Math.floor(Math.random() * 30200) + 1,
			sever: "S1-Việt Nam",
			page: 2
		},
		{
			id: 24,
			name: "TiệmCầmĐồ",
			level: 22,
			power: 235000000 + Math.floor(Math.random() * 55000) + 1,
			sever: "S1-Việt Nam",
			page: 2
		},
		{
			id: 25,
			name: "SxCửuThiênxS",
			level: 33,
			power: 220000000 + Math.floor(Math.random() * 120000) + 1,
			sever: "S1-Việt Nam",
			page: 2
		},
		{
			id: 26,
			name: "BakeryShop",
			level: 13,
			power: 210000000 + Math.floor(Math.random() * 90000) + 1,
			sever: "S1-Việt Nam",
			page: 2
		},
		{
			id: 27,
			name: "LầyFamily",
			level: 1,
			power: 200000000 + Math.floor(Math.random() * 240000) + 1,
			sever: "S1-Việt Nam",
			page: 2
		},
		{
			id: 28,
			name: "sSTứHảiSs",
			level: 2,
			power: 190000000 + Math.floor(Math.random() * 150000) + 1,
			sever: "S1-Việt Nam",
			page: 2
		},
		{
			id: 29,
			name: "xGiangHồx",
			level: 1,
			power: 180000000 + Math.floor(Math.random() * 204000) + 1,
			sever: "S1-Việt Nam",
			page: 2
		},
		{
			id: 30,
			name: "ĐàoHoaCốc",
			level: 5,
			power: 190000000 + Math.floor(Math.random() * 84000) + 1,
			sever: "S1-Việt Nam",
			page: 2
		}
	];

	let boss = [
		{
			id: 1,
			name: "Đông King",
			level: 4,
			boss: 3,
			sever: "S1-Việt Nam",
			page: 0
		},
		{
			id: 2,
			name: "Ăn Chơi",
			level: 25,
			boss: 6,
			sever: "S1-Việt Nam",
			page: 0
		},
		{
			id: 3,
			name: "Phan Thị",
			level: 33,
			boss: 13,
			sever: "S1-Việt Nam",
			page: 0
		},
		{
			id: 4,
			name: "Đại Anh Hùng",
			level: 11,
			boss: 6,
			sever: "S1-Việt Nam",
			page: 0
		},
		{
			id: 5,
			name: "Cửu Thiên",
			level: 5,
			boss: 7,
			sever: "S1-Việt Nam",
			page: 0
		},
		{
			id: 6,
			name: "Chị Chị Em Em",
			level: 4,
			boss: 13,
			sever: "S1-Việt Nam",
			page: 0
		},
		{
			id: 7,
			name: "Push",
			level: 6,
			boss: 12,
			sever: "S1-Việt Nam",
			page: 0
		},
		{
			id: 8,
			name: "Ma Giáo",
			level: 11,
			boss: 23,
			sever: "S1-Việt Nam",
			page: 0
		},
		{
			id: 9,
			name: "Ăn Nhậu",
			level: 15,
			boss: 21,
			sever: "S1-Việt Nam",
			page: 0
		},
		{
			id: 10,
			name: "Ngạo Thiên",
			level: 8,
			boss: 15,
			sever: "S1-Việt Nam",
			page: 0
		},

		{
			id: 11,
			name: "ThiênnVũ",
			level: 45,
			boss: 19,
			sever: "S1-Việt Nam",
			page: 1
		},
		{
			id: 12,
			name: "BộTộcThiểuSố",
			level: 12,
			boss: 25,
			sever: "S1-Việt Nam",
			page: 1
		},
		{
			id: 13,
			name: "LệnhTruySát",
			level: 27,
			boss: 27,
			sever: "S1-Việt Nam",
			page: 1
		},
		{
			id: 14,
			name: "SxKingxS",
			level: 32,
			boss: 28,
			sever: "S1-Việt Nam",
			page: 1
		},
		{
			id: 15,
			name: "zzVôSongzz",
			level: 11,
			boss: 29,
			sever: "S1-Việt Nam",
			page: 1
		},
		{
			id: 16,
			name: "TiêuDaoTrang",
			level: 15,
			boss: 32,
			sever: "S1-Việt Nam",
			page: 1
		},
		{
			id: 17,
			name: "HoàngGia",
			level: 42,
			boss: 9,
			sever: "S1-Việt Nam",
			page: 1
		},
		{
			id: 18,
			name: "xXxMaGiáoxXx",
			level: 10,
			boss: 10,
			sever: "S1-Việt Nam",
			page: 1
		},
		{
			id: 19,
			name: "HảiThầnĐảo",
			level: 9,
			boss: 24,
			sever: "S1-Việt Nam",
			page: 1
		},
		{
			id: 20,
			name: "zzThiênĐịa",
			level: 8,
			boss: 17,
			sever: "S1-Việt Nam",
			page: 1
		},

		{
			id: 21,
			name: "PờRồMAXNạp",
			level: 21,
			boss: 19,
			sever: "S1-Việt Nam",
			page: 2
		},
		{
			id: 22,
			name: "zzzAreszzz",
			level: 13,
			boss: 18,
			sever: "S1-Việt Nam",
			page: 2
		},
		{
			id: 23,
			name: "ThíchĐậpĐá",
			level: 14,
			boss: 6,
			sever: "S1-Việt Nam",
			page: 2
		},
		{
			id: 24,
			name: "TiệmCầmĐồ",
			level: 22,
			boss: 7,
			sever: "S1-Việt Nam",
			page: 2
		},
		{
			id: 25,
			name: "SxCửuThiênxS",
			level: 33,
			boss: 5,
			sever: "S1-Việt Nam",
			page: 2
		},
		{
			id: 26,
			name: "BakeryShop",
			level: 13,
			boss: 8,
			sever: "S1-Việt Nam",
			page: 2
		},
		{
			id: 27,
			name: "LầyFamily",
			level: 1,
			boss: 18,
			sever: "S1-Việt Nam",
			page: 2
		},
		{
			id: 28,
			name: "sSTứHảiSs",
			level: 2,
			boss: 21,
			sever: "S1-Việt Nam",
			page: 2
		},
		{
			id: 29,
			name: "xGiangHồx",
			level: 1,
			boss: 32,
			sever: "S1-Việt Nam",
			page: 2
		},
		{
			id: 30,
			name: "ĐàoHoaCốc",
			level: 5,
			boss: 22,
			sever: "S1-Việt Nam",
			page: 2
		}
	];

	let rankGuild = 1;
	let rankPersonally = 1;
	let rankLucky = 1;
	let rankFriends = 1;
	let rankBoss = 1;

	//Load xếp hạng ải
	$(".ranking__boss").click(function () {
		rankGuild = 1;
		rankPersonally = 1;
		rankLucky = 1;
		rankFriends = 1;
		rankBoss = 1;
		loadRankBoss(0);
		resetActiveRank();
		$(this).addClass("active");
	});

	function loadRankBoss(page = 0) {
		let html = "";

		html += `<table>
        <thead>
            <th>HẠNG</th>
            <th width="30%">NHÂN VẬT</th>
            <th width="30%">CẤP</th>
            <th width="20%">ẢI</th>
            <th width="20%">MÁY CHỦ</th>
        </thead>
        <tbody>`;

		boss.sort(function (a, b) {
			return b.boss - a.boss;
		});
		boss.forEach(p => {
			if (Number(p.page) === Number(page)) {
				if (rankBoss % 2 == 0) {
					html += `<tr style="background-color: #ffffdc"> `;
				}
				else {
					html += `<tr > `;
				}

				html += `<td>` + rankBoss + `</td>
						<td>` + p.name + `</td>
						  <td>` + p.level + `</td>
						<td>` + p.boss + `</td>
						<td>` + p.sever + `</td>
					</tr>`;
				rankBoss++;
			}
		})


		html += `</tbody >
        </table > `;

		$(".rankings_table").html(html);

		let pagination = ``

		pagination += `<p class="pagination" data-page=0 data-rank_guild=1> 0</p> 
						<p class="pagination" data-page=1 data-rank_guild=11> 1</p>
						<p class="pagination" data-page=2 data-rank_guild=21> 2</p>`;

		$(".paginations").html(pagination);

		$('.pagination').click(function () {
			resetActivePagination("guild");
			$(this).addClass('active_guild')
			rankBoss = $(this).attr("data-rank_guild");
			let pageGuild = $(this).attr("data-page");
			loadRankBoss(pageGuild);
		})
	}

	//load rank bang hội
	loadRankGuid(0);

	$(".ranking__guid").click(function () {
		rankGuild = 1;
		rankPersonally = 1;
		rankLucky = 1;
		rankFriends = 1;
		rankBoss = 1;
		loadRankGuid(0);
		resetActiveRank();
		$(this).addClass("active");
	});

	function loadRankGuid(page = 0) {
		let html = "";

		html += `<table>
        <thead>
            <th>HẠNG</th>
            <th width="30%">BANG HỘI</th>
            <th width="30%">BANG CHỦ</th>
            <th width="20%">LỰC CHIẾN</th>
            <th width="20%">MÁY CHỦ</th>
        </thead>
        <tbody>`;

		guilds.sort(function (a, b) {
			return b.power - a.power;
		});
		guilds.forEach(p => {
			if (Number(p.page) === Number(page)) {
				if (rankGuild % 2 == 0) {
					html += `<tr style="background-color: #00000000"> `;
				}
				else {
					html += `<tr > `;
				}

				html += `<td>` + rankGuild + `</td>
						<td>` + p.name + `</td>
						  <td>` + p.master + `</td>
						<td>` + p.power + `</td>
						<td>` + p.sever + `</td>
					</tr>`;
				rankGuild++;
			}
		})


		html += `</tbody >
        </table > `;

		$(".rankings_table").html(html);

		let pagination = ``
		$('.paginations').html("");
		// pagination += `<p class="pagination" data-page=0 data-rank_guild=1> 0</p> 
		// 				<p class="pagination" data-page=1 data-rank_guild=11> 1</p>
		// 				<p class="pagination" data-page=2 data-rank_guild=21> 2</p>`;

		// $(".paginations").html(pagination);

		// $('.pagination').click(function () {
		// 	resetActivePagination("guild");
		// 	$(this).addClass('active_guild')
		// 	rankGuild = $(this).attr("data-rank_guild");
		// 	let pageGuild = $(this).attr("data-page");
		// 	loadRankGuid(pageGuild);
		// })
	}

	//xếp hạng đồng hành
	$(".ranking__friends").click(function () {
		rankGuild = 1;
		rankPersonally = 1;
		rankLucky = 1;
		rankFriends = 1;
		rankBoss = 1;
		loadRankFriends(0);
		resetActiveRank();
		$(this).addClass("active");
	});

	function loadRankFriends(page = 0) {
		let html = "";

		html += `<table>
        <thead>
            <th>HẠNG</th>
            <th width="30%">ĐỒNG HÀNH</th>
            <th width="30%">CẤP</th>
            <th width="20%">LỰC CHIẾN</th>
            <th width="20%">MÁY CHỦ</th>
        </thead>
        <tbody>`;

		friends.sort(function (a, b) {
			return b.level - a.level;
		});
		friends.forEach(p => {
			if (Number(p.page) === Number(page)) {
				if (rankFriends % 2 == 0) {
					html += `<tr style="background-color: #00000000"> `;
				}
				else {
					html += `<tr > `;
				}

				html += `<td>` + rankFriends + `</td>
						<td>` + p.name + `</td>
						  <td>` + p.level + `</td>
						<td>` + p.power + `</td>
						<td>` + p.sever + `</td>
					</tr>`;
				rankFriends++;
			}
		})


		html += `</tbody >
        </table > `;

		$(".rankings_table").html(html);

		let pagination = ``

		pagination += `<p class="pagination" data-page=0 data-rank_guild=1> 0</p> 
						<p class="pagination" data-page=1 data-rank_guild=11> 1</p>
						<p class="pagination" data-page=2 data-rank_guild=21> 2</p>`;

		$(".paginations").html(pagination);

		$('.pagination').click(function () {
			resetActivePagination("guild");
			$(this).addClass('active_guild')
			rankFriends = $(this).attr("data-rank_guild");
			let pageGuild = $(this).attr("data-page");
			loadRankFriends(pageGuild);
		})
	}

	//phân trang ranking cá nhân

	let pagePersonally = 0;
	let totalPagePersonally = 10;

	$(".ranking__personally").click(function () {
		rankGuild = 1;
		rankPersonally = 1;
		rankLucky = 1;
		rankFriends = 1;
		rankBoss = 1;
		resetActivePagination("active_rank");
		loadRankingsPersonally();
		createPaginationPersonally();
		resetActiveRank();
		$(this).addClass("active");
	});

	//load ranking cá nhân
	function loadRankingsPersonally() {
		$.post("./TrangChu/loadRankingPersonally", { pagePersonally: pagePersonally, totalPagePersonally: totalPagePersonally }, function (response) {
			let html = `<table>
                           <thead>
                               <th width="10%">HẠNG</th>
                               <th width="40%">NHÂN VẬT</th>
                               <th width="20%">VIP</th>
                               <th width="20%">Lực Chiến</th>
                               <th width="20%">MÁY CHỦ</th>
                           </thead>
                           <tbody>`;

			let obj = JSON.parse(response);
			let i = 1;
			obj.forEach(p => {
				let power = 0;

				if (p.power !== null) {
					power = p.power;
				}

				if (pagePersonally == 0) {
					html += `<tr><td><div>`;

					if (i == 1) {
						html += `<p class='top-1_rank-stt'>` + rankPersonally + `</p>`;
					}
					else if (i == 2) {
						html += `<p class='top-2_rank-stt'>` + rankPersonally + `</p>`;
					}
					else if (i == 3) {
						html += `<p class='top-3_rank-stt'>` + rankPersonally + `</p>`;
					}
					else {
						html += `<p>` + rankPersonally + `</p></div></td>`;
					}

					html += `<td class='d-flex align-items-center'>`;

					html += `<img class='ranking_img' src="` + p.image + `">
							<p>` + p.name + `</p>`;
					if (i == 1) {
						html += `<img class='ranking_img ranking_img-top1 top_rank' src="./public/images/ranks/4.png">`;
					}
					else if (i == 2) {
						html += `<img class='ranking_img ranking_img-top2 top_rank' src="./public/images/ranks/4.png">`;
					}
					else if (i == 3) {
						html += `<img class='ranking_img ranking_img-top3 top_rank' src="./public/images/ranks/4.png">`;
					}


					html += `</td> 
						<td class="column-vip" style='background-image: url(./public/images/vip.png) !important;
						background-repeat: no-repeat;
						background-position: center;
						background-size: auto;
						padding: 5px;'>` + p.level + `</td>
						<td>` + power + `</td>
						<td>` + p.sever + `</td>
					</tr>`;
				}
				else {
					html += `<tr>
								<td>
									<div>
										<p>` + rankPersonally + `</p>
									</div>
								</td>
								<td class='d-flex align-items-center'>
									<img class='ranking_img' src="` + p.image + `">
									<p>` + p.name + `</p>
								</td> 
								<td class="column-vip" style='background-image: url(./public/images/vip.png) !important;
									background-repeat: no-repeat;
									background-position: center;
									background-size: auto;
									padding: 5px;'>` + p.level + `
								</td>
								<td>` + power + `</td>
								<td>` + p.sever + `</td>
							</tr>`;
				}


				i++;
				rankPersonally++;
			});

			html += `</tbody>
                       </table > `;
			$(".rankings_table").html(html);
		});
	}


	//tạo nút phân trang
	function createPaginationPersonally() {
		$.post("./TrangChu/loadRankingPersonally", function (response) {
			let obj = JSON.parse(response);
			let html = ``;
			let amountPage = Math.floor(Number(obj.length / totalPagePersonally));
			let rank_personally = 1;

			//				for (let i = 0; i < amountPage; i++) {

			//if(i< 3)
			//{
			//if (i > 0) {
			//rank_personally = i + 10;
			//}   

			html += `<p class="pagination" data-rank_personally=1 data-page=0> 0</p> 
        					    <p class="pagination" data-rank_personally=11 data-page=1> 1</p>
        					    <p class="pagination" data-rank_personally=21 data-page=2> 2</p> `;
			//}
			//}

			$(".paginations").html(html);

			let paginations = document.querySelectorAll(".pagination");

			paginations.forEach(p => {
				p.addEventListener("click", function (e) {
					paginations.forEach(p => {
						p.classList.remove("active_rank");
					});
					rankPersonally = p.getAttribute('data-rank_personally')
					console.log(rankPersonally)
					e.target.classList.toggle("active_rank");
					pagePersonally = p.getAttribute("data-page");
					loadRankingsPersonally();
				});
			});

		});
	}

	//load ranking vòng quay
	$('.ranking__lucky').click(function () {
		rankGuild = 1;
		rankPersonally = 1;
		rankLucky = 1;
		rankFriends = 1;
		rankBoss = 1;
		resetActivePagination("active_lucky");
		createPaginationLucky();
		resetActiveRank();
		loadRankingLucky();
		$(this).addClass("active");
	})

	function loadRankingLucky() {
		$.post("./TrangChu/loadRankingLucky", { pagePersonally: pagePersonally, totalPagePersonally: totalPagePersonally }, function (response) {
			let html = `<table>
							   <thead>
								   <th>HẠNG</th>
								   <th width="30%">NHÂN VẬT</th>
								   <th width="30%">VIP</th>
								   <th width="20%">LƯỢT QUAY</th>
								   <th width="20%">MÁY CHỦ</th>
							   </thead>
							   <tbody>`;

			let obj = JSON.parse(response);
			obj.forEach(p => {
				if (rankLucky % 2 == 0) {
					html += `<tr style="background-color: #ffffdc"> `;
				}
				else {
					html += `<tr>`;
				}
				html += `<td>` + rankLucky + `</td> 
							<td>` + p.name + `</td> 
							<td>` + p.level + `</td>
							<td>` + p.total + `</td>
							<td>` + p.sever + `</td>
						</tr>`;
				rankLucky++;
			});

			html += `</tbody>
						   </table > `;
			$(".rankings_table").html(html);
		});
	}

	//tạo nút phân trang
	function createPaginationLucky() {
		$.post("./TrangChu/loadRankingLucky", function (response) {
			let obj = JSON.parse(response);
			let html = ``;
			let amountPage = Number(obj.length / totalPagePersonally);
			let i = 0;
			if (amountPage > 0) {
				let rank_personally = 1;
				for (i = 0; i < amountPage; i++) {
					if (i > 0) {
						rank_personally = i + 10;
					}
					html += `<p class="pagination" data-rank_personally=` + rank_personally + ` data-page=` + i + `> ` + i + `</p> `;
				}

				$(".paginations").html(html);

				let paginations = document.querySelectorAll(".pagination");

				paginations.forEach(p => {
					p.addEventListener("click", function (e) {
						paginations.forEach(p => {
							p.classList.remove("active_rank");
						});
						rankLucky = p.getAttribute('data-rank_personally')

						e.target.classList.toggle("active_rank");
						pagePersonally = p.getAttribute("data-page");
						loadRankingLucky();
					});
				});
			}
		});
	}


	function resetActiveRank() {
		let arrRanks = document.querySelectorAll('.rank_tab__item');
		arrRanks.forEach(p => {
			p.classList.remove("active")
		})
	}

	function resetActivePagination(remove) {
		let arrRanks = document.querySelectorAll('.pagination');
		arrRanks.forEach(p => {
			p.classList.remove("active_" + remove + "")
		})
	}
});
