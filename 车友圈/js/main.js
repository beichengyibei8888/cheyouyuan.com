		var myApp = angular.module("myApp", []);
		myApp.controller("myController", function($scope) {
			$scope.items = [{
				user_img: "img/4.jpg",
				user_name: "甲壳虫",
				title: "2017年4月,心之向往,记住我的西藏行,历时20天,川进青出。",
				img_array: ["img/4.jpg"],
				state: 1
			}, {
				user_img: "img/4.jpg",
				user_name: "甲壳虫",
				title: "2017年4月,心之向往,记住我的西藏行,历时20天,川进青出。",
				img_array: ["img/4.jpg", "img/3.jpg", "img/6.jpg", "img/7.jpg"],
				state: 2
			}, {
				user_img: "img/4.jpg",
				user_name: "甲壳虫",
				title: "2017年4月,心之向往,记住我的西藏行,历时20天,川进青出。",
				img_array: ["img/6.jpg", "img/7.jpg", "img/8.jpg", "img/9.jpg", "img/10.jpg", "img/11.jpg", "img/4.jpg"],
				state: 3
			}];
			$scope.comments = [{
				comUser:"yonghu1",
				cot: "ahahaahahh"
			},{
				comUser:"yonghu2",
				cot:"aalllalalal"
			},{
				comUser:"yonghu3",
				cot:"jaskdjdjasd"
			},{
				comUser:"yonghu1",
				cot: "ahahaahahh"
			},{
				comUser:"yonghu2",
				cot:"aalllalalal"
			},{
				comUser:"yonghu3",
				cot:"jaskdjdjasd"
			},{
				comUser:"yonghu1",
				cot: "ahahaahahh"
			},{
				comUser:"yonghu2",
				cot:"aalllalalal"
			},{
				comUser:"yonghu3",
				cot:"jaskdjdjasd"
			},{
				comUser:"yonghu1",
				cot: "ahahaahahh"
			},{
				comUser:"yonghu2",
				cot:"aalllalalal"
			},{
				comUser:"yonghu3",
				cot:"jaskdjdjasd"
			}]
		});
		myApp.directive("myPoint", function() {
			return {
				restrict: "AE",
				replace: true,
				controller: function($scope) {
					$scope.isAdd = true;
					$scope.imgSrc = "img/point.png";
					$scope.pointData = {
						num: 66
					},
					$scope.clickToPoint = function(){
						if($scope.isAdd)
						{
							$scope.imgSrc = "img/pointed.png";
							$scope.pointData.num++
						}else
						{
							$scope.imgSrc = "img/point.png";
							$scope.pointData.num--
						}
						
						$scope.isAdd = !$scope.isAdd;
					}
				},
				template: '<div class="cLeft"><img class="img" ng-src="{{imgSrc}}" ng-click="clickToPoint()"/><span class="num">{{pointData.num}}</span></div>'
			}
		})
		myApp.directive("myComment", function (){
				return {
					restrict : "AE",
					replace:true,
					scope: {
						myData:"="
					},
					controller: function($scope){
						$scope.limitNum = 3;
						$scope.isOpen = false;
						$scope.status = {
								cot: "展开",
								imgUrl: "img/bot.png"
						
						};
						$scope.ctrlL = function (){
							$scope.isOpen = !$scope.isOpen;
							if ($scope.isOpen) {
								$scope.limitNum = 10;
								$scope.status = {
									cot: "收起",
									imgUrl: "img/top.png"
								}
							}else{
								$scope.limitNum = 3;
								$scope.status = {
									cot: "展开",
									imgUrl: "img/bot.png"
								}
							}
						}
					},
					template: '<div class="listMenu">\
									<div class="commentSingle" ng-repeat="data in myData | limitTo: limitNum">\
												<span class="comPeople">{{data.comUser}} :</span>\
												<span class="comCot">{{data.cot}}</span>\
									</div>\
									<span class="ctrlList" ng-click="ctrlL()"><span>{{status.cot}}</span><img ng-src="{{status.imgUrl}}"/></span>\
							   </div>'
				}
		})
