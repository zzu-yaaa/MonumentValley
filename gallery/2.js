var map = {
	background: 0xefe196,
	levelBoard: {
		life: 2500,
		duration: 1000,
		backgroundColor: "rgba(0,0,0,0.4)",
		info: [ {
			type: "pic",
			src: "img/common/border.png",
			height: 0.1,
			y: 0.15
		}, {
			type: "text",
			text: "Chapter 2",
			family: "微软雅黑", //글꼴
			size: 0.035,
			y: 0.27,
			color: "#ffffff",
			weight: "bolder"
		}, {
			type: "text",
			text: "Forest",
			family: "微软雅黑",
			size: 0.07,
			y: 0.37,
			color: "#ffffff",
			weight: "bolder"
		}, {
			type: "text",
			text: "─────",
			family: "微软雅黑",
			size: 0.02,
			y: 0.45,
			color: "#ffffff",
			weight: "bold"
		}, {
			type: "text",
			text: "在此",
			family: "微软雅黑",
			size: 0.03,
			y: 0.5,
			color: "#ffffff",
			weight: "bolder"
		}, {
			type: "text",
			text: "我要向",
			family: "微软雅黑",
			size: 0.04,
			y: 0.625,
			color: "#ffffff",
			weight: "bold"
		}, {
			type: "text",
			text: "纪念碑谷致敬",
			family: "微软雅黑",
			size: 0.04,
			y: 0.7,
			color: "#ffffff",
			weight: "bold"
		}, {
			type: "pic",
			src: "img/common/border.png",
			height: 0.1,
			y: 0.85
		} ]
	},
	endBoard: {
		duration: 1000,
		backgroundColor: "rgba(0,0,0,0.4)",
		info: [ {
			type: "pic",
			src: "img/common/border.png",
			height: 0.1,
			y: 0.15
		}, {
			type: "text",
			text: "完成",
			family: "微软雅黑",
			size: 0.06,
			y: 0.5,
			color: "#ffffff",
			weight: "bolder"
		}, {
			type: "pic",
			src: "img/common/border.png",
			height: 0.1,
			y: 0.85
		} ]
	},
	onGameStart: function() {
		app.world.childrenWithId.turn.gameState = 0;
	},
	blocks: [ 
		{
		type: "ground",
		width: 30,
		height: 30,
		x: 0,
		y: -4,
		rx: -Math.PI / 2,
		materialId: "m3"
	}, {
		z: 6,
		x: 0.05,
		y: 0.25,
		sz: 0.7,
		sy: 0.06,
		materialId: "st",
		cannotClick: true
	}, {
		z: 6,
		x: 0.05,
		y: 0,
		sz: 0.7,
		sy: 0.06,
		materialId: "st",
		cannotClick: true
	}, {
		z: 6,
		x: 0.05,
		y: -0.25,
		sz: 0.7,
		sy: 0.06,
		materialId: "st",
		cannotClick: true
	}, {
		z: 6,
		x: 0.05,
		y: -0.5,
		sz: 0.7,
		sy: 0.06,
		materialId: "st",
		cannotClick: true
	}, {
		z: 6,
		x: 0.05,
		y: -0.75,
		sz: 0.7,
		sy: 0.06,
		materialId: "st",
		cannotClick: true
	}, {
		z: 6,
		x: 0.05,
		y: -1,
		sz: 0.7,
		sy: 0.06,
		materialId: "st",
		cannotClick: true
	}, {
		z: 6,
		x: 0.05,
		y: -1.25,
		sz: 0.7,
		sy: 0.06,
		materialId: "st",
		cannotClick: true
	}, {
		//맨 밑에 사각형
		x: -5.5,
		y: -1,
		sx: 2,
		sy: 3
		
	}, {
		//그 위에 기둥
		x: -6,
		y: 3.5,
		sy: 6
	}, {
		//앞 쪽 아치
		type: "arc",
		ry: Math.PI,
		x: -5,
		y: 6
	}, {
		//아치 앞 평지
		type: "plane",
		x: -4,
		y: 6
	}, {
		//기둥 옆 아치
		type: "arc",
		ry: -Math.PI / 2,
		x: -6,
		z: -1,
		y: 6
	}, {
		//오른쪽 기둥 옆 아치
		type: "arc",
		x: -1,
		z: -6,
		y: 6
	}, {
		//오른쪽 위 기둥
		sy: 2,
		y: 5.5,
		z: -6
	}, {
		//오른쪽 기둥 앞아치
		type: "arc",
		ry: Math.PI / 2,
		z: -5,
		y: 6
	}, {
		// 그 앞 평면
		type: "plane",
		y: 6,
		z: -4
	}, {
		//오른쪽 아래 기둥
		sy: 3,
		z: -6,
		y: -1
	}, {
		//왼쪽 기둥 옆 아치 옆 평면
		type: "plane",
		x: -6,
		y: 6,
		z: -3.5,
		sz: 4
	}, {
		//오른쪽 기둥 옆 아치 옆 평명
		type: "plane",
		x: -3.5,
		y: 6,
		z: -6,
		sx: 4	
	}, {
		//도착지
		type: "plane",
		x: -6,
		y: 6.01,
		z: -6,
		sz: 1.3333,
		sx: 1.3333,
		materialId: "m2"
	}, {
		//왼쪽 아래 정사각형 앞 아치
		type: "arc",
		ry: Math.PI,
		x: -4
		
	}, {
		//계단 포함 기둥 옆면 (윗면 x)
		z: 5.5,
		sz: 2,
		sy: 3,
		y: -1
	}, {
		//계단 아래 땅 아랫면 (윗면 x)
		y: -2,
		z: 6,
		x: 1.5,
		sx: 2
	}, {
		//돌아가는 길 아래 아치
		type: "arc",
		ry: -Math.PI / 2,
		z: 4
	}, {
		//맨 오른쪽 아래 기둥
		type: "stick",
		y: 2.5,
		z: -6,
		d: 1,
		height: 4
	}, {
		//오른쪽 아래에서 두번째
		type: "stick",
		y: 2.5,
		z: -6,
		d: 2,
		height: 4
	}, {
		//오른쪽 아래에서 세번째의 위?
		type: "stick",
		y: 4,
		z: -6,
		d: 3,
		height: 1
	}, {
		//오른쪽 아래에서 세번째의 아래
		type: "stick",
		x: 7,
		y: 9,
		z: 1,
		d: 3,
		height: 3
	}, {
		//?? 안바뀜
		type: "tri",
		x: 6.6,
		y: 10.6,
		z: 1.5,
		sx: 0.1,
		sz: 0.1,
		sy: 0.1,
		rz: Math.PI
	}, {
		//얘도 안바뀜
		type: "stick",
		y: 2.5,
		z: -6,
		d: 0,
		height: 4
	}, {
		type: "roof",
		y: 9,
		z: -6,
		ry: Math.PI / 4,
		
		materialArr: [ "mRoof", "mRoof" ]
	
	}, {
		//오른쪽 맨 위 첫번째
		type: "stick",
		y: 7.5,
		z: -6,
		d: 1,
		height: 2
	}, {
		//오른쪽 맨 위 두번째
		type: "stick",
		y: 7.5,
		z: -6,
		d: 2,
		height: 2
	}, {
		//오른쪽 맨 위 세번째
		type: "stick",
		y: 7.5,
		z: -6,
		d: 3,
		height: 2
	}, {
		//안바껴유
		type: "stick",
		y: 7.5,
		z: -6,
		d: 0,
		height: 2
	}, {
		type: "roof",
		y: 9,
		x: -6,
		ry: Math.PI / 4,
		materialArr: [ "mRoof", "mRoof" ]
	}, {
		//기둥무리 맨 왼쪽에서 오른쪽 위의 첫번째
		type: "stick",
		y: 7.5,
		x: -6,
		d: 1,
		height: 2
	}, {
		//기둥무리 맨 왼쪽에서 오른쪽 위의 두번째
		type: "stick",
		y: 7.5,
		x: -6,
		d: 2,
		height: 2
	}, {
		//기둥무리 맨 왼쪽에서 오른쪽 위의 세번째
		type: "stick",
		y: 7.5,
		x: -6,
		d: 3,
		height: 2
	}, {
		//ㅋㅋ
		type: "stick",
		y: 7.5,
		x: -6,
		d: 0,
		height: 2
	}, {
		type: "roof",
		y: 9,
		x: -6,
		z: -6,
		ry: Math.PI / 4,
		materialArr: [ "mRoof", "mRoof" ]
	}, {
		//기둥무리 가운데 위 오른쪽에서 첫번째
		type: "stick",
		y: 7.5,
		x: -6,
		z: -6,
		d: 1,
		height: 2
	}, {
		//기둥무리 가운데 위 오른쪽에서 두번째
		type: "stick",
		y: 7.5,
		x: -6,
		z: -6,
		d: 2,
		height: 2
	}, {
		//기둥무리 가운데 위 오른쪽에서 세번째
		type: "stick",
		y: 7.5,
		x: -6,
		z: -6,
		d: 3,
		height: 2
	}, {
		//ㅋ
		type: "stick",
		y: 7.5,
		x: -6,
		z: -6,
		d: 0,
		height: 2
	}, {
		//버튼
		type: "roundRect",
		id: "btn1",
		y: -1.9,
		sy: 0.6,
		sx: 0.6,
		x: 2,
		z: 6,
		rx: Math.PI / 2,
		materialId: "mRoof",
		cannotClick: true
	}, {
		type: "key",
		sx: 4.5,
		sy: 4.5,
		sz: 4.5,
		x: -6,
		y: 6.5,
		z: -6,
		height: 4,
		id: "key"
	},{
		type: "tree1",
		sx: 1,
		sy: 1,
		sz: 1,
		x: 6,
		y: 2,
		z: -4,
		height: 4,
		id: "tree1"
	},{
		type: "tree1",
		sx: 1,
		sy: 1,
		sz: 1,
		x: 5,
		y: 5,
		z: 15,
		height: 4,
		id: "tree1"
	},{
		type: "tree2",
		sx: 1,
		sy: 1,
		sz: 1,
		x: -7,
		y: -1,
		z: 3,
		height: 4,
		id: "tree2"
	},
	{
		type: "tree2",
		sx: 1,
		sy: 1,
		sz: 1,
		x: 11,
		y: 4,
		z: 4,
		height: 4,
		id: "tree2"
	},{
		type: "grass2",
		sx: 1,
		sy: 1,
		sz: 1,
		x: 15.5,
		y: 1,
		z: 4,
		height: 4,
		id: "grass2"
	},{
		type: "grass2",
		sx: 1,
		sy: 1,
		sz: 1,
		x: -0.2,
		y: -6,
		z: 7.5,
		height: 4,
		id: "grass2"
	},
	{
		type: "flower1",
		sx: 1,
		sy: 1,
		sz: 1,
		x: -2,
		y: -13,
		z: 12,
		height: 4,
		id: "flower1"
	},

	 {
		//돌아가는 다리
		type: "group",
		id: "bridge",
		children: [ {
			materialId: "m1",
			sx: 4,
			x: 1.5
		}, {
			z: 2,
			sz: 3,
			materialId: "m1"
		}, {
			type: "stick",
			y: 1.5,
			d: 1,
			height: 2
		}, {
			type: "stick",
			y: 1.5,
			d: 2,
			height: 2
		}, {
			type: "stick",
			y: 1.5,
			d: 3,
			height: 2
		}, {
			type: "stick",
			y: 1.5,
			d: 0,
			height: 2.5
		}, {
			y: 3
		}, {
			type: "cylinder",
			y: -1,
			materialId: "m1"
		}, {
			type: "cylinder",
			sx: 1.3,
			sy: 8,
			sz: 1.3,
			y: -5
		} ,
	]
	}, {
		type: "turntabley",
		id: "turn",
		x: 0,
		y: 4,
		z: 0,
		axis: "y",
		funcMove: function( e, angle, world ) {
			if ( app.world.childrenWithId.turn.gameState == 0 ) {
				world.graphPath.removeEdges( [
					[ "p2", "p3" ],
					[ "p10", "p3" ],
					[ "p2", "p9" ],
					[ "p10", "p9" ]
				] );
			} else if ( app.world.childrenWithId.turn.gameState == 1 ) {
				world.graphPath.removeEdges( [
					[ "p2", "p3" ],
					[ "p10", "p3" ],
					[ "p2", "p9" ],
					[ "p10", "p9" ],
					[ "p3", "n5" ],
					[ "p9", "n5" ]
				] );
			} else if ( app.world.childrenWithId.turn.gameState == 2 ) {
				world.graphPath.removeEdges( [
					[ "t17", "p3" ],
					[ "t1", "p3" ],
					[ "t17", "p9" ],
					[ "t1", "p9" ],
					[ "n0", "p9" ],
					[ "n0", "p3" ]
				] );
			}
			world.childrenWithId[ "bridge" ].rotation.y = angle;
		},
		funcEnd: function( e, angle, world ) {
			var tmp = angle;
			while ( tmp < 0 ) {
				tmp += 2 * Math.PI;
			}
			world.childrenWithId[ "bridge" ].rotation.y = tmp;
			if ( world.childrenWithId[ "bridge" ].rotation.y > Math.PI / 4 * 7 ) {
				world.childrenWithId[ "bridge" ].rotation.y -= 2 * Math.PI;
			}
			tmp -= Math.PI / 4;
			var quaro = 0;
			while ( tmp > 0 ) {
				quaro++;
				tmp -= Math.PI / 2;
			}
			quaro = quaro % 4;
			if ( quaro === 0 ) {
				tmp = 0;
			} else if ( quaro === 1 ) {
				tmp = Math.PI / 2;
			} else if ( quaro === 2 ) {
				tmp = Math.PI;
			} else if ( quaro === 3 ) {
				tmp = Math.PI * 1.5;
			}
			var time = Math.abs( world.childrenWithId[ "bridge" ].rotation.y -
				tmp ) * 400;
			new TWEEN.Tween( world.childrenWithId[ "bridge" ].rotation )
				.to( {
					y: tmp
				}, time )
				.easing( TWEEN.Easing.Back.Out )
				.start()
				.onComplete( function() {
					if ( world.childrenWithId.turn.gameState == 0 ) {
						if ( world.childrenWithId[ "bridge" ].rotation.y == Math.PI *
							1.5 ) {
							world.graphPath.addEdge( "p2", "p3" );
							world.graphPath.addEdge( "p9", "p10" );
						} else if ( world.childrenWithId[ "bridge" ].rotation.y == 0 ) {
							world.graphPath.addEdge( "p3", "p10" );
						} else if ( world.childrenWithId[ "bridge" ].rotation.y == Math.PI ) {
							world.graphPath.addEdge( "p9", "p2" );
						}
					} else if ( world.childrenWithId.turn.gameState == 1 ) {
						if ( world.childrenWithId[ "bridge" ].rotation.y == Math.PI *
							1.5 ) {
							world.graphPath.addEdge( "p2", "p3" );
							world.graphPath.addEdge( "p9", "p10" );
						} else if ( world.childrenWithId[ "bridge" ].rotation.y == 0 ) {
							world.graphPath.addEdge( "p3", "p10" );
						} else if ( world.childrenWithId[ "bridge" ].rotation.y == Math.PI ) {
							world.graphPath.addEdge( "p9", "p2" );
							world.graphPath.addEdge( "p3", "n5" );
						} else if ( world.childrenWithId[ "bridge" ].rotation.y == Math.PI *
							0.5 ) {
							world.graphPath.addEdge( "p9", "n5" );
						}
					} else if ( world.childrenWithId.turn.gameState == 2 ) {
						if ( world.childrenWithId[ "bridge" ].rotation.y == Math.PI *
							1.5 ) {
							world.graphPath.addEdge( "t1", "p3" );
						} else if ( world.childrenWithId[ "bridge" ].rotation.y == Math.PI ) {
							world.graphPath.addEdge( "p3", "t17" );
							world.graphPath.addEdge( "p9", "t1" );
						} else if ( world.childrenWithId[ "bridge" ].rotation.y == Math.PI *
							0.5 ) {
							world.graphPath.addEdge( "p9", "t17" );
							world.graphPath.addEdge( "p3", "n0" );
						} else if ( world.childrenWithId[ "bridge" ].rotation.y == 0 ) {
							world.graphPath.addEdge( "p9", "n0" );
						}
					}
				} );
		},
		hoopMaterial: "m2",
		poleMaterial: "m2"
	} ],
	materials: {
		m0: {
			type: "L",
			color: 0x666666, //0xdad282
			mapId: "img/tree_texture3.jpg"

		},
		m1: {
			type: "L",
			color: 0x777777, //0xdad282
			mapId: "img/tree_texture3.jpg"

		},
		m2: {
			type: "L",
			color: 0x82734C//0xff6600 //조작기둥 주황색
		},
		m3: {
			type: "L",
			color: 0xffffff,
			mapId: "img/level2ground_v4.png"
			//mapId: "img/forest.png"
		},
		m4: {
			type: "B",
			color: 0xdad282,
			type: "B",
			color: 0x000000,
			opacity: 0.0,
			//			mapId: "img/null.png"
		},
		m5: {
			type: "L",
			color: 0xff8822,
			mapId: "img/endPoint.png"
		},
		//배경에 사진 넣기
		m6: {
			type: "L",
			color: 0xffffff,
			mapId: "img/forest.png"
			//mapId: "img/forest.png"
		},
		mRoof: {
			type: "L",
			color: 0xf7b41f
		},
		st: {
			type: "L",
			color: 0x82734C,
		}
	},
	textures: [ "img/path/texture0.jpg", "img/common/border.png",
		"img/level2ground.png", "img/null.png", "img/endPoint.png","img/level1ground.png","img/trees.png",
		"img/forest.png","img/tree_texture.jpg", "img/tree_texture2.jpg", "img/level2ground2.png",
		"img/grass_texture.jpg", "img/grass_texture2.jpg", "img/level2ground_v2.png", "img/level2ground_v3.png",
		"img/level2ground_v4.png", "img/tree_texture3.jpg","img/rock_texture.jpg", "img/sand_texture.jpg",
		"img/sand_texture2.jpg",
	],
	lights: [ {
			key: "areaLight",
			color: 0x666666,
			type: "A"
		},
		{
			key: "directionLight",
			color: 0xdddddd,
			type: "D",
			intensity: 1,
			position: {
				x: 0,
				y: 400,
				z: 0
			}
		},
		{
			key: "directionLight2",
			color: 0x999999,
			type: "D",
			intensity: 1,
			position: {
				x: 0,
				y: 0,
				z: 1
			}
		},
		{
			key: "directionLight3",
			color: 0x666666,
			type: "D",
			intensity: 1,
			position: {
				x: 1,
				y: 0,
				z: 0
			}
		}
	],
	camera: {
		distance: 50,
		lookAt: {
			x: 0,
			y: 5,
			z: 0
		}
	},
	currentPath: 0,
	path: {
		p1: {
			id: "p1",
			x: -5,
			y: 1,
			z: 0,
			face: 0,
			neighbors: [ "p2" ]
		},
		p2: {
			id: "p2",
			x: -4,
			y: 1,
			z: 0,
			face: 0,
			neighbors: [ "p1" ],
			onComing: function() {
				app.world.childrenWithId.turn.becomeAble();
			}
		},
		p3: {
			id: "p3",
			x: 0,
			y: 1,
			z: 3,
			face: 0,
			neighbors: [ "p4", "p10" ],
			materialId: "m1",
			parentId: "bridge",
			onComing: function() {
				app.world.childrenWithId.turn.becomeDisable();
			},
			changeSpeed: {
				"n0": "instant"
			}
		},
		p4: {
			id: "p4",
			x: 0,
			y: 1,
			z: 2,
			face: 0,
			neighbors: [ "p3", "p5" ],
			materialId: "m1",
			parentId: "bridge"
		},
		p5: {
			id: "p5",
			x: 0,
			y: 1,
			z: 1,
			face: 0,
			neighbors: [ "p4", "p6" ],
			materialId: "m1",
			parentId: "bridge"
		},
		p6: {
			id: "p6",
			x: 0,
			y: 1,
			z: 0,
			face: 0,
			neighbors: [ "p5", "p7" ],
			materialId: "m1",
			parentId: "bridge"
		},
		p7: {
			id: "p7",
			x: 1,
			y: 1,
			z: 0,
			face: 0,
			neighbors: [ "p6", "p8" ],
			materialId: "m1",
			parentId: "bridge"
		},
		p8: {
			id: "p8",
			x: 2,
			y: 1,
			z: 0,
			face: 0,
			neighbors: [ "p9", "p7" ],
			materialId: "m1",
			parentId: "bridge"
		},
		p9: {
			id: "p9",
			x: 3,
			y: 1,
			z: 0,
			face: 0,
			neighbors: [ "p8" ],
			materialId: "m1",
			parentId: "bridge",
			onComing: function() {
				app.world.childrenWithId.turn.becomeDisable();
			},
			changeSpeed: {
				"n0": "instant"
			}
		},
		p10: {
			id: "p10",
			x: 0,
			y: 1,
			z: 4,
			face: 0,
			neighbors: [ "p11", "p3" ],
			onComing: function() {
				app.world.childrenWithId.turn.becomeAble();
			}
		},
		p11: {
			id: "p11",
			x: 0,
			y: 1,
			z: 5,
			face: 0,
			neighbors: [ "p12", "p10" ]
		},
		p12: {
			id: "p12",
			x: 0,
			y: 1,
			z: 6,
			face: 0,
			neighbors: [ "p11", "p13" ]
		},
		p13: {
			id: "p13",
			x: 1,
			y: 1,
			z: 6,
			face: 0,
			neighbors: [ "p12", "p14" ],
			cannotClick: true,
			changeSpeed: {
				"p14": "auto"
			}
		},
		p14: {
			id: "p14",
			x: 1,
			y: 0,
			z: 6,
			face: 1,
			neighbors: [ "p13", "p15" ],
			changeSpeed: {
				"p13": "auto"
			},
			onComing: () => {
				app.world.charactor.rotation.y = Math.PI;
			}
		},
		p15: {
			id: "p15",
			x: 1,
			y: -1,
			z: 6,
			face: 1,
			neighbors: [ "p14", "p16" ],
			changeSpeed: {
				"p16": "auto"
			},
		},
		p16: {
			id: "p16",
			x: 1,
			y: -1,
			z: 6,
			face: 0,
			neighbors: [ "p15", "p17" ],
			changeSpeed: {
				"p15": "auto"
			},
		},
		p17: {
			id: "p17",
			x: 2,
			y: -1,
			z: 6,
			face: 0,
			neighbors: [ "p16" ],
			onComing: function() {
				let size = app.world.settings.blockSize;
				if ( !app.world.childrenWithId[ "btn1" ].hasMove ) {
					app.world.childrenWithId[ "btn1" ].hasMove = true;
					new TWEEN.Tween( app.world.childrenWithId[ "btn1" ].position )
						.to( {
							y: -1.99 * size
						}, 300 )
						.delay( 200 )
						.start()
						.onComplete( function() {
							//새로 생기는 다리들
							var cube = app.world.meshFactory.createCube( {
								x: -1,
								y: -4.6,
								z: -6,
								sy: 3
							}, app.world.data.materials.m0, app.world.scene );
							new TWEEN.Tween( cube.position )
								.to( {
									y: -1 * size
								}, 600 )
								.start();

							var cube2 = app.world.meshFactory.createCube( {
								x: -2,
								y: -4.6,
								z: -6,
								sy: 3
							}, app.world.data.materials.m0, app.world.scene );
							new TWEEN.Tween( cube2.position )
								.to( {
									y: -1 * size
								}, 600 )
								.delay( 400 )
								.start();

							var cube3 = app.world.meshFactory.createCube( {
								x: 0,
								y: -4.6,
								z: -5,
								sy: 3
							}, app.world.data.materials.m0, app.world.scene );
							new TWEEN.Tween( cube3.position )
								.to( {
									y: -1 * size
								}, 600 )
								.delay( 800 )
								.start();

							var cube4 = app.world.meshFactory.createCube( {
								x: 0,
								y: -4.6,
								z: -4,
								sy: 3
							}, app.world.data.materials.m0, app.world.scene );
							new TWEEN.Tween( cube4.position )
								.to( {
									y: -1 * size
								}, 600 )
								.delay( 1200 )
								.start();

							var cube5 = app.world.meshFactory.createCube( {
								x: 1,
								y: -4.6,
								z: -4,
								sy: 3
							}, app.world.data.materials.m0, app.world.scene );
							new TWEEN.Tween( cube5.position )
								.to( {
									y: -1 * size
								}, 600 )
								.delay( 1600 )
								.start();

							var cube6 = app.world.meshFactory.createCube( {
								x: 2,
								y: -4.6,
								z: -4,
								sy: 3
							}, app.world.data.materials.m0, app.world.scene );

							var btn2 = app.world.meshFactory.createRoundRect( {
								type: "roundRect",
								id: "btn2",
								y: -3.5,
								sy: 0.6,
								sx: 0.6,
								x: 2,
								z: -4,
								rx: Math.PI / 2,
								cannotClick: true
							}, app.world.data.materials.mRoof, app.world.scene )

							new TWEEN.Tween( btn2.position )
								.to( {
									y: 0.1 * size
								}, 600 )
								.delay( 2000 )
								.start()

							new TWEEN.Tween( cube6.position )
								.to( {
									y: -1 * size
								}, 600 )
								.delay( 2000 )
								.start()
								.onComplete( function() {
									var tri = app.world.meshFactory.createTri( {
										y: 7,
										x: 5,
										z: 1
									}, app.world.data.materials.m4, app.world.scene );
									var pathInfo = {
										n0: {
											id: "n0",
											x: 4,
											y: 8,
											z: 1,
											face: 0,
											neighbors: [ "n1" ],
											cannotClick: true,
											changeSpeed: {
												"p3": "instant",
												"p9": "instant"
											}
										},
										n1: {
											id: "n1",
											x: 5,
											y: 8,
											z: 1,
											face: 0,
											neighbors: [ "n2", "n0" ],
											materialId: "m4",
											onComing: function() {
												app.world.childrenWithId.turn.becomeAble();
											}
										},
										n2: {
											id: "n2",
											x: 6,
											y: 8,
											z: 1,
											face: 0,
											neighbors: [ "n1", "n3" ],
											materialId: "m4"
										},
										n3: {
											id: "n3",
											x: 7,
											y: 8,
											z: 1,
											face: 0,
											neighbors: [ "n2", "n4" ],
											materialId: "m4"
										},
										n4: {
											id: "n4",
											x: 7,
											y: 8,
											z: 2,
											face: 0,
											neighbors: [ "n3", "n5" ],
											materialId: "m4"
										},
										n5: {
											id: "n5",
											x: 7,
											y: 8,
											z: 3,
											face: 0,
											neighbors: [ "n4", "n6" ],
											materialId: "m4",
											onComing: function() {
												app.world.childrenWithId.turn.becomeAble();
											}
										},
										n6: {
											id: "n6",
											x: 1,
											y: 1,
											z: -4,
											face: 0,
											neighbors: [ "n5", "n7" ],
											materialId: "m4"
										},
										n7: {
											id: "n7",
											x: 2,
											y: 1,
											z: -4,
											face: 0,
											neighbors: [ "n6" ],
											materialId: "m4",
											onComing: function() {
												if ( btn2.hasMove ) {
													return;
												}
												btn2.hasMove = true;
												app.world.graphPath.removeEdges( [
													[ "p2", "p3" ],
													[ "p10", "p3" ],
													[ "p2", "p9" ],
													[ "p10", "p9" ],
													[ "p3", "n5" ],
													[ "p9", "n5" ]
												] );
												new TWEEN.Tween( btn2.position )
													.to( {
														y: 0.01 * size
													}, 300 )
													.delay( 200 )
													.start()
													.onComplete( function() {
														app.world.childrenWithId.turn.gameState = 2;
														new TWEEN.Tween( app.world.childrenWithId.bridge.position )
															.to( {
																y: app.world.childrenWithId.bridge.position.y + 6 *
																	size
															}, 2000 )
															.start();
														app.world.childrenWithId.turn.becomeDisable();
														new TWEEN.Tween( app.world.childrenWithId.turn.position )
															.to( {
																y: app.world.childrenWithId.turn.position.y + 6 * size
															}, 2000 )
															.start()
															.onComplete( function() {
																app.world.childrenWithId.turn.becomeAble();
																//위로 올라가면 새로 생기는 통로 /////
																tri.material = app.world.data.materials.m0;
																if ( app.world.childrenWithId[ "bridge" ].rotation.y ==
																	Math.PI * 1.5 ) {
																	app.world.graphPath.addEdge( "t1", "p3" );
																} else if ( app.world.childrenWithId[ "bridge" ].rotation
																	.y == Math.PI ) {
																	app.world.graphPath.addEdge( "p3", "t17" );
																	app.world.graphPath.addEdge( "p9", "t1" );
																} else if ( app.world.childrenWithId[ "bridge" ].rotation
																	.y == Math.PI * 0.5 ) {
																	app.world.graphPath.addEdge( "p9", "t17" );
																	app.world.graphPath.addEdge( "p3", "n0" );
																} else if ( app.world.childrenWithId[ "bridge" ].rotation
																	.y == 0 ) {
																	app.world.graphPath.addEdge( "p9", "n0" );
																}
															} );
													} );
											}
										}
									};
									for ( var i in pathInfo ) {
										app.world.createPathToScene( pathInfo[ i ] );
										app.world.data.path[ pathInfo[ i ].id ] = pathInfo[ i ];
									}
									var turntable = app.world.childrenWithId.turn;
									turntable.gameState = 1;
								} );
						} );
				}
			}
		},
		t1: {
			id: "t1",
			x: -4,
			y: 7,
			z: 0,
			face: 0,
			neighbors: [ "t2" ],
			materialId: "m4",
			onComing: function() {
				app.world.childrenWithId.turn.becomeAble();
			}
		},
		t2: {
			id: "t2",
			x: -5,
			y: 7,
			z: 0,
			face: 0,
			neighbors: [ "t1", "t3" ],
			materialId: "m4"
		},
		t3: {
			id: "t3",
			x: -6,
			y: 7,
			z: 0,
			face: 0,
			neighbors: [ "t2", "t4" ],
			materialId: "m4"
		},
		t4: {
			id: "t4",
			x: -6,
			y: 7,
			z: -1,
			face: 0,
			neighbors: [ "t3", "t5" ],
			materialId: "m4"
		},
		t5: {
			id: "t5",
			x: -6,
			y: 7,
			z: -2,
			face: 0,
			neighbors: [ "t4", "t6" ],
			materialId: "m4"
		},
		t6: {
			id: "t6",
			x: -6,
			y: 7,
			z: -3,
			face: 0,
			neighbors: [ "t5", "t7" ],
			materialId: "m4"
		},
		t7: {
			id: "t7",
			x: -6,
			y: 7,
			z: -4,
			face: 0,
			neighbors: [ "t6", "t8" ]
		},
		t8: {
			id: "t8",
			x: -6,
			y: 7,
			z: -5,
			face: 0,
			neighbors: [ "t7", "t9" ]
		},
		t9: {
			id: "t9",
			x: -6,
			y: 7.1,
			z: -6,
			face: 0,
			neighbors: [ "t8", "t10" ],
			materialId: "m4",
			hasCome: function() {
				app.world.charactor.walkingPath = [];
				setTimeout( () => {
					app.world.scene.remove( app.world.childrenWithId.key );
					app.world.charactor.play( 'win' );
					app.world.winSound.play();
				} );
			}
		},
		t10: {
			id: "t10",
			x: -5,
			y: 7,
			z: -6,
			face: 0,
			neighbors: [ "t9", "t11" ]
		},
		t11: {
			id: "t11",
			x: -4,
			y: 7,
			z: -6,
			face: 0,
			neighbors: [ "t10", "t12" ]
		},
		t12: {
			id: "t12",
			x: -3,
			y: 7,
			z: -6,
			face: 0,
			neighbors: [ "t11", "t13" ],
			materialId: "m4"
		},
		t13: {
			id: "t13",
			x: -2,
			y: 7,
			z: -6,
			face: 0,
			neighbors: [ "t12", "t14" ],
			materialId: "m4"
		},
		t14: {
			id: "t14",
			x: -1,
			y: 7,
			z: -6,
			face: 0,
			neighbors: [ "t13", "t15" ],
			materialId: "m4"
		},
		t15: {
			id: "t15",
			x: 0,
			y: 7,
			z: -6,
			face: 0,
			neighbors: [ "t14", "t16" ],
			materialId: "m4"
		},
		t16: {
			id: "t16",
			x: 0,
			y: 7,
			z: -5,
			face: 0,
			neighbors: [ "t15", "t17" ],
			materialId: "m4"
		},
		t17: {
			id: "t17",
			x: 0,
			y: 7,
			z: -4,
			face: 0,
			neighbors: [ "t16" ],
			materialId: "m4",
			onComing: function() {
				app.world.childrenWithId.turn.becomeAble();
			}
		}
	},
	startPoint: "p1"
}