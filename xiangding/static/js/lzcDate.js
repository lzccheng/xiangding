/*
	author: 赖志成 (Lai Zhicheng);
	date: 2018-5-5;
 */
window.lzcDatePlugin = (function(){
	var LzcDatePlugin = function(obj){
		this.obj = obj;
		this.el = document.querySelector(obj.el);
		this.selectArr = [];
		this.elObj = {};
		this.init();
	}
	LzcDatePlugin.prototype = {
		init: function(){
			var elParent = this.el.parentNode;
			var that = this;
			//生成弹出层
			var lzcBox = document.createElement('div');
			lzcBox.setAttribute('class','lzcBox');
			lzcBox.style.width = window.innerWidth + 'px';
			lzcBox.style.height = window.innerHeight + 'px';
			//生成标题
			lzcBox.innerHTML = this.createTitle();
			//生成星期
			
			var lzcDay = lzcBox.querySelector('.lzcDay');
			lzcDay.innerHTML = this.createDay();
			//生成月份
			var lzcMonth = lzcBox.querySelector('.lzcMonth');
			var monthTotel = 6;
			for(var c=0;c<monthTotel;c++){
				var dd = new Date();
				var dateStr = dd.getFullYear() + '/' + (dd.getMonth() + 1 + c) + '/01';
				var lzcMonthChild = document.createElement('div');
				lzcMonthChild.setAttribute('class','lzcMonthChild');
				lzcMonthChild.innerHTML = this.createMonth(new Date(dateStr));
				lzcMonth.appendChild(lzcMonthChild);
			}
			//给td添加点击事件
			var lzcTdEl = lzcBox.querySelectorAll('td');
			for(var d=0;d<lzcTdEl.length;d++){
				(function(d){
					if(lzcTdEl[d].innerText){
						var datatime = Number(lzcTdEl[d].getAttribute('datatime'))+1000*60*60*24;
						lzcTdEl[d].setAttribute('dataindex',d);
						if(new Date().getTime()<new Date(datatime).getTime()){
							lzcTdEl[d].addEventListener('click', onTdClick);
						}else{
							that.addClass(lzcTdEl[d],'lzcDisable');
						}
					}
				})(d);
			}
			//td->click
			function onTdClick(){
				var dataTime = this.getAttribute('datatime');
				if(that.elObj.secondEl){
					onTdRemoveClass();
				}
				if(!that.elObj.firstEl){
					that.elObj.firstEl = this;
					that.addClass(this,'lzcActive');
				}else{
					if(Number(this.getAttribute('dataindex'))<Number(that.elObj.firstEl.getAttribute('dataindex'))){
						that.removeClass(that.elObj.firstEl,'lzcActive');
						that.elObj.firstEl = this;
						that.addClass(this,'lzcActive');
					}else{
						if(that.elObj.firstEl !== this&&!that.elObj.secondEl){
							that.elObj.secondEl = this;
							that.addClass(this,'lzcActive2');

							for(var h=Number(that.elObj.firstEl.getAttribute('dataindex')) + 1;h<Number(that.elObj.secondEl.getAttribute('dataindex'));h++){
								if(lzcTdEl[h].innerText){
									that.addClass(lzcTdEl[h],'lzcActiveCenter');
								}
							}
						}
					}
					
				}
			}
			//td->移除class
			function onTdRemoveClass(){
				for(var h=Number(that.elObj.firstEl.getAttribute('dataindex')) + 1;h<Number(that.elObj.secondEl.getAttribute('dataindex'));h++){
					if(lzcTdEl[h].innerText){
						that.removeClass(lzcTdEl[h],'lzcActiveCenter');
					}
				};
				that.removeClass(that.elObj.firstEl,'lzcActive');
				that.removeClass(that.elObj.secondEl,'lzcActive2');
				that.elObj.firstEl = null;
				that.elObj.secondEl = null;
			}
			//添加确定按钮
			var lzcSureBtn = document.createElement('div');
			lzcSureBtn.setAttribute('class','lzcSure');
			lzcSureBtn.innerHTML = '<button class="lzcSureBtn">确定</button>'
			lzcMonth.appendChild(lzcSureBtn);
			//给确定按钮添加事件
			lzcBox.querySelector('.lzcSureBtn').addEventListener('click',onBtnClick);
			function onBtnClick(){
				var lzcTip = lzcBox.querySelector('.lzcTip');
				if(!that.elObj.firstEl){
					onTip(lzcTip,'请选择入住日期');
				}
				if(that.elObj.firstEl&&!that.elObj.secondEl){
					onTip(lzcTip,'请选择离店日期');
				}
				if(that.elObj.secondEl){
					var data = [];
					var date1 = new Date(Number(that.elObj.firstEl.getAttribute('datatime')));
					var obj1 = {
						dateTime: Number(that.elObj.firstEl.getAttribute('datatime')),
						date: date1.getFullYear()+'/'+(date1.getMonth()+1)+'/'+date1.getDate(),
					};
					var date2 = new Date(Number(that.elObj.secondEl.getAttribute('datatime')));
					var obj2 = {
						dateTime: Number(that.elObj.secondEl.getAttribute('datatime')),
						date: date2.getFullYear()+'/'+(date2.getMonth()+1)+'/'+date2.getDate(),
					};
					data.push(obj1);
					data.push(obj2);
					that.obj.callback && that.obj.callback(data);
					lzcBox.style.display = 'none';
				}
			}
			//tip
			function onTip(dom,text){
				dom.children[0].innerHTML = text;
				dom.style.opacity = 1;
				setTimeout(function(){
					dom.style.opacity = 0;
				},3000);
			}
			//给el添加点击事件
			that.el.addEventListener('click',onElClick);
			function onElClick(){
				lzcBox.style.display = 'block';
			}
			//给lzcIcon添加点击事件
			lzcBox.querySelector('.lzcIcon').addEventListener('click',onLzcIconClick);
			function onLzcIconClick(){
				lzcBox.style.display = 'none';
			}
			//填入lzcBox
			elParent.appendChild(lzcBox);
		},
		createTitle: function(){
			var lzcTitle = this.obj.title || '选择日期';
			var lzcBoxHtml = '<div class="lzcDateBox">' +
								'<div class="lzcTip">' +
									'<span>' +
									'</span>' +
								'</div>' + 
								'<div class="lzcFixed">' +
									'<div class="lzcTitle">' +
										'<span class="lzcIcon">&times;</span>'+
										'<span class="lzcTitle_">' + lzcTitle + '</span>' +
									'</div>' +
									'<div class="lzcDay">' + 
									'</div>' +
								'</div>' +
								'<div class="lzcMonth">' + 
								'</div>' +
							'</div>'; 
			return lzcBoxHtml;
		},
		createDay: function(){
			var lzcDayArr = ['日','一','二','三','四','五','六'];
			var lzcDayHtml = '';
			for(var i=0;i<lzcDayArr.length;i++){
				lzcDayHtml += '<span class="lzcDayItem">' + lzcDayArr[i] + '</span>';
			};
			return lzcDayHtml;
		},
		createMonth: function(dd){
			var dd = dd || new Date();
			var dateStr = dd.getFullYear() + '/' + (dd.getMonth() + 1) + '/' + dd.getDate();
			var todyTime = new Date(dateStr).getTime();
			var lzcDateTitle = '<div class="lzcMonthTitle">' + dd.getFullYear() + '年' + (dd.getMonth() + 1) + '月' + '</div>';
			var lzcMonthBoxHtml = '<table class="lzcMonthTable"s>';
			var lzcBoolen = true;
			var num = todyTime;
			while(lzcBoolen){
				lzcMonthBoxHtml += '<tr>';
				for(var a=0;a<7;a++){
					num = todyTime + (a-dd.getDay())*1000*60*60*24;
					if((new Date(num).getMonth()+1) == (dd.getMonth() + 1)){
						lzcMonthBoxHtml += '<td datatime=' + new Date(num).getTime() + '>'+ new Date(num).getDate() +'</td>';
					}else{
						lzcMonthBoxHtml += '<td></td>';
					} 
				}
				lzcMonthBoxHtml += '</tr>';
				todyTime += 7*1000*60*60*24
				if((dd.getMonth() + 1) !== (new Date(num).getMonth()+1)){lzcBoolen = false;};
			};
			lzcMonthBoxHtml += '<table>';
			return lzcDateTitle + lzcMonthBoxHtml;
		},
		addClass: function(dom,className){
			if(dom.getAttribute('class')){
				if(!this.haveClass(dom,className)){
					dom.setAttribute('class',dom.getAttribute('class')+ ' ' + className);
				}
			}else{
				dom.setAttribute('class',className);
			}
		},
		removeClass: function(dom,className){
			var domClass = dom.getAttribute('class');
			if(domClass){
				arr = domClass.split(' ');
				var newArr = [];
				for(var i=0;i<arr.length;i++){
					if(arr[i] !== className){
						newArr.push(arr[i]);
					}
				}
				dom.setAttribute('class',newArr.join(' '));
			}			
			
		},
		haveClass: function(dom,className){
			return dom.getAttribute('class')? dom.getAttribute('class').split(' ').indexOf(className)>-1? true : false : false;
		}
	}
	return LzcDatePlugin;
})()