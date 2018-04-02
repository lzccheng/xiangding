    import Mock from 'mockjs'
    //Random：存储各种随机函数的对象
    let Random = Mock.Random 
    let arr = []
    let img = [
    	'http://file27.mafengwo.net/M00/F4/C0/wKgB6lPNl2KAUJaLAAMQOZWxpCA51.rbook_comment.w1024.jpeg',
    	'http://pic.58pic.com/58pic/13/60/16/64b58PICXEK_1024.jpg',
    	'http://pic.35pic.com/normal/04/22/11/5713677_130530564135_2.jpg',
    	'http://d6.yihaodianimg.com/N04/M09/35/35/CgQDrlOxMtiAAX-JAACqi31CJ7I44800.jpg',
    	'http://d6.yihaodianimg.com/N02/M01/20/C4/CgQCslN8UVqAQg-BAACw4isVwDs94800.jpg',
    	'http://pic35.photophoto.cn/20150512/0040039395981972_b.jpg',
    	'http://pic.58pic.com/58pic/13/60/16/64b58PICXEK_1024.jpg',
    	'http://pic.35pic.com/normal/04/22/11/5713677_130530564135_2.jpg',
    	'http://d6.yihaodianimg.com/N03/M04/F3/2C/CgQCs1NuM_WAOOJiAACkJWcB2XA42700.jpg',
    	'http://pic.35pic.com/normal/04/16/23/5713677_151916236164_2.jpg',
    	'http://pic.58pic.com/58pic/13/60/16/64b58PICXEK_1024.jpg',
    	'http://pic.35pic.com/normal/04/22/11/5713677_130530564135_2.jpg',
    	'http://pic.35pic.com/normal/04/16/23/5713677_151916236164_2.jpg'
    ]
    for(let i=0;i<img.length;i++){
    	let item = {
    		id: Random.range(img.length)[i],
    		imgUrl: img[i],
    		star: Random.natural( 1, 5 ),
    		area: Random.csentence( 2, 2 ).slice(0,-1)+'区',
    		room_total: Random.natural( 20, 500 ),
    		min_price: Random.natural( 120, 1500 ),
    		name: Random.csentence( 2, 5 ).slice(0,-1)+'大酒店',
    		max_room_erea:  Random.natural( 30, 200 ),
    		max_people: Random.natural( 1, 50 ),
    		city:['珠江新城','五羊商城'],
    		distance: Random.float( 0, 200, 2, 2 ),
    		hotelDetail: {
    			imgList: [
    				img[i],
    				'http://pic.35pic.com/normal/04/16/23/5713677_151916236164_2.jpg'
    			],
    			tip: [
    				'免费提供车位以及免费接送附近地铁'
    			],
    			provide: [
    				{
    					name: '网络',
    					isHave: true,
    					icon: 'fas fa-wifi'
    				},
    				{
    					name: '餐饮',
    					isHave: true,
    					icon: 'fas fa-utensils'
    				},
    				{
    					name: '健身',
    					isHave: true,
    					icon: 'fas fa-heartbeat'
    				},
    				{
    					name: '游泳',
    					isHave: true,
    					icon: 'fab fa-docker'
    				},
    				{
    					name: '停车位',
    					isHave: true,
    					icon: 'fab fa-product-hunt'
    				}
    			],
    			address:'广州市天河区广州大道坡天平架',
    			distance: '1.4',
    			near: [
    				'大型的万科广场'
    			],
                room: [
                    {
                        id: Random.range(img.length)[i],
                        name: '特惠商务房',
                        imgUrl: 'http://pic.35pic.com/normal/04/16/23/5713677_151916236164_2.jpg',
                        area: Random.natural( 10, 200 ),
                        price: Random.natural( 200, 1200 ),
                        bed: 1.8
                    },
                    {
                        id: Random.range(img.length)[i],
                        name: '特惠商务房',
                        imgUrl: 'http://pic.35pic.com/normal/04/16/23/5713677_151916236164_2.jpg',
                        area: Random.natural( 10, 200 ),
                        price: Random.natural( 200, 1200 ),
                        bed: 1.8
                    },
                    {
                        id: Random.range(img.length)[i],
                        name: '特惠商务房',
                        imgUrl: 'http://pic.35pic.com/normal/04/16/23/5713677_151916236164_2.jpg',
                        area: Random.natural( 10, 200 ),
                        price: Random.natural( 200, 1200 ),
                        bed: 1.8
                    },
                    {
                        id: Random.range(img.length)[i],
                        name: '特惠商务房',
                        imgUrl: 'http://pic.35pic.com/normal/04/16/23/5713677_151916236164_2.jpg',
                        area: Random.natural( 10, 200 ),
                        price: Random.natural( 200, 1200 ),
                        bed: 1.8
                    },
                    {
                        id: Random.range(img.length)[i],
                        name: '特惠商务房',
                        imgUrl: 'http://pic.35pic.com/normal/04/16/23/5713677_151916236164_2.jpg',
                        area: Random.natural( 10, 200 ),
                        price: Random.natural( 200, 1200 ),
                        bed: 1.8
                    },
                    {
                        id: Random.range(img.length)[i],
                        name: '特惠商务房',
                        imgUrl: 'http://pic.35pic.com/normal/04/16/23/5713677_151916236164_2.jpg',
                        area: Random.natural( 10, 200 ),
                        price: Random.natural( 200, 1200 ),
                        bed: 1.8
                    }
                ]
    		}
    	}
    	arr.push(item)
    }
    const hotelDetail = (res)=>{
    	if(res.body){
    		let id = JSON.parse(res.body).id
    		for(let i=0;i<arr.length;i++){
    			if(arr[i].id == id){
    				return arr[i]
    			}
    		}
    	}
    	return {}
    }
    const hotelData =  () => {
      return arr.slice(5)
    }
    const bannerData = (res)=>{
    	return arr.slice(0,5)
    }
    const hotel = (res)=>{
		return arr
    }
    const api = ()=>{
    	return arr
    }
    // 第三个参数可以是对象也可以是返回对象的函数
    Mock.mock('/api/hotelData', 'get', hotelData)
    Mock.mock('/api/bannerData', 'get', bannerData)
    Mock.mock('/api/hotel', 'get', hotel)
    Mock.mock('/api', 'get', api)
    Mock.mock('/api/hotelDetail', 'get', hotelDetail)