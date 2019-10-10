//var myChart1 = echarts.init(document.getElementById('e1'));
//option1 = {
//  tooltip : {
//      trigger: 'axis'
//  },
//  legend: {
//  	top:5,
//  	itemWidth: 18,
//      itemHeight: 12,
//      data:['警力','警情'],
//      textStyle:{
//          color:'#019bbd'
//      },
//     
//  },
//  grid: {
//      left: '1%',
//      right: '8%',
//      bottom: '3%',
//      top: '10%',
//      containLabel: true
//  },
//  color:['#0bc815','#ff0048',],
//  //calculable : true,
//  xAxis : [
//      {
//          type : 'category',
//          data: ['周一','周二','周三','周四','周五','周六','周日',],
//          axisLabel:{
//              interval:0 ,//横轴信息全部显示
//				color:'#666666'
//          },
//          splitLine:{
//              show:false,
//              lineStyle:{
//                  color:'#d7d7d7'
//              }
//          },
//          axisLine:{
//              lineStyle:{
//                  color:'#0c59bb'
//              }
//          }
//      }
//  ],
//  yAxis : [
//      {
//          type : 'value',
//          splitLine:{
//              show:true,
//              lineStyle:{
//                  color:'#021164'
//              }
//          },
//          axisLine:{
//              lineStyle:{
//                  color:'#0c59bb'
//              }
//          }
//      }
//  ],
//  series : [
//      {
//          name:'当日',
//          type:'bar',
//          data:[900, 1190, 800,1300, 900,840,720, ],
//          itemStyle: {
//	            normal: {
//	                //柱形图圆角，初始化效果
//	                barBorderRadius: [5, 5,0, 0],
//	                color: new echarts.graphic.LinearGradient(
//	                    0, 0, 0, 1,
//	                    [
//	                        {offset: 0, color: '#0ae1ea'},
//	                        {offset: 1, color: '#0d68d6'}
//	                    ]
//	                )
//	            }
//	        }
//        
//      },
//      {
//          name:'同比',
//          type:'bar',
//          data:[400, 820,500,900, 300, 320, 280,],
//          itemStyle: {
//	            normal: {
//	                //柱形图圆角，初始化效果
//	                barBorderRadius: [5, 5,0, 0],
//	                color: new echarts.graphic.LinearGradient(
//	                    0, 0, 0, 1,
//	                    [
//	                        {offset: 0, color: '#fde814'},
//	                        {offset: 1, color: '#f48a2f'}
//	                    ]
//	                )
//	            }
//	        }
//        
//      },
//       {
//          name:'环比',
//          type:'bar',
//          data:[600, 910,600, 1100, 500, 560,460, ],
//          itemStyle: {
//	            normal: {
//	                //柱形图圆角，初始化效果
//	                barBorderRadius: [5, 5,0, 0],
//	                color: new echarts.graphic.LinearGradient(
//	                    0, 0, 0, 1,
//	                    [
//	                        {offset: 0, color: '#8ffdca'},
//	                        {offset: 1, color: '#1fb06d'}
//	                    ]
//	                )
//	            }
//	        }
//        
//      }
//  ]
//};
//
//myChart1.setOption(option1);


//var myChart2 = echarts.init(document.getElementById('e2'));
//option2 = {
//  grid: {
//      top:40,
//      left:40,
//      right:10,
//      bottom:20
//  },
//   tooltip:{
//      "show": true,
//      "trigger": "axis",
//      "axisPointer": {
//          "type": "shadow"
//      },
//  },
//  color:['#01c2d3','#40a4f0','#366eed','#f8a514','#fd4c52'],
//  legend: {
//      top: 5,
//      left: 'center',
//      itemWidth: 18,
//      itemHeight: 12,
//      data: ['2014', '2015','2016','2017','2018']
//  },
//  xAxis: {       
//      type: 'category',      	
//		data: ['人员', '车辆','案件','电话','警情'],
//      axisLine:{
//          lineStyle:{
//              color:'#0c59bb'
//          }
//      }
//  },
//  yAxis: {
//      type: 'value',     
//      splitLine:{
//          show:false,
//          lineStyle:{
//              color:'#e1e1e1'
//          }
//      },
//      axisLine:{
//          lineStyle:{
//              color:'#0c59bb'
//          }
//      }
//  },
//  series: [{
//  	name:'2014',
//      data: [120, 200, 150, 130,120, ],
//      type: 'bar',
//      stack:'s',        
//      barWidth: 30,
//      itemStyle: {
//          normal: {               
//              barBorderRadius: [0, 0, 0, 0],             
//          }
//      },
//      label: {
//	        normal:{
//	            show: false,
//	            position: 'inside',
//	            formatter: function (params) {
//	              
//	            }
//	        }
//	    }    
//  },
//  {
//  	name:'2015',
//      data: [220, 140, 115, 150,198, ],
//      type: 'bar',
//      stack:'s',        
//      barWidth: 30, 
//      itemStyle: {
//          normal: {             
//              barBorderRadius: [0, 0, 0, 0],             
//          }
//      },
//      label: {
//	        normal:{
//	        	barBorderRadius: 3,
//	            show: false,
//	            position: 'inside',
//	            formatter: function (params) {
//	              
//	            }
//	        }
//	    }   
//  },
//  {
//  	name:'2016',
//      data: [220, 100, 160, 190,120,],
//      type: 'bar',
//      stack:'s',  
//      barBorderRadius: 5,        
//      //borderRadius: [3,3,3,3],
//      itemStyle: {
//          normal: {
//            
//              barBorderRadius: [0,0, 0, 0],
//            
//          }
//      },
//      barWidth: 30,   
//      label: {
//	        normal:{
//	        	barBorderRadius: 3,
//	            show: false,
//	            position: 'inside',
//	            formatter: function (params) {
//	              
//	            }
//	        }
//	    }   
//  },
//  {
//  	name:'2017',
//      data: [120, 300, 120, 150,190, ],
//      type: 'bar',
//      stack:'s', 
//      itemStyle: {
//          normal: {               
//              barBorderRadius: [0, 0, 0, 0],
//            
//          }
//      },
//      label: {
//	        normal:{
//	        	barBorderRadius: 3,
//	            show: false,
//	            position: 'inside',
//	            formatter: function (params) {
//	              
//	            }
//	        }
//	    },  
//      barWidth: 30,       
//  },
//  {
//  	name:'2018',
//      data: [120, 200, 150, 120,130,],
//      type: 'bar',
//      stack:'s',        
//      barWidth: 30, 
//      itemStyle: {
//          normal: {
//             
//              barBorderRadius: [0, 0, 0, 0],
//            
//          }
//      },
//      label: {
//	        normal:{
//	        	barBorderRadius: 3,
//	              show: false,
//	            position: 'inside',
//	            formatter: function (params) {
//	              
//	            }
//	        }
//	    }   
//  },
//  ]
//};
//
//myChart2.setOption(option2);

var myChart1 = echarts.init(document.getElementById('e1'));
option1 = {
    title: {
        text: '',
        left: 'center'
    },
   color:['#40a4f0','#366eed','#f8a514','#bae036','#01c2d3',],
     tooltip : {
        trigger: 'item',
        formatter: "{b} :<br/> {c} ({d}%)"
    },
    legend: {
    	show:false,
        top: 5,
        left: 'top',
        orient:'vertical',
        data: ['案件','人员','电话','照片','车辆'],
        textStyle: {
	     color: '#02f3ff',
	     fontSize:12
	   },
    },
    series : [
        {
            type: 'pie',
            label:{
            	show:true,
            },
            radius :['0%', '75%'],
            center: ['50%', '50%'],
            selectedMode: 'single',
            data:[
                {value:248, name: '案件'},
                {value:535, name: '人员'},
                {value:510, name: '电话'},
                {value:410, name: '照片'},
                {value:335, name: '车辆'}
            ]
        }
    ]
};
myChart1.setOption(option1);
var myChart3 = echarts.init(document.getElementById('e3'));
option3 = {
   
    tooltip : {
        trigger: 'item',
        formatter: "{b} : <br/>{c} ({d}%)"
    },
    legend: {
        x : 'left',
        top:'10',
        orient:'vertical',
        y : '',
         data: ['电子围栏','WIFI','人像','卡口','视频'],
         textStyle: {
	     	color: '#02f3ff',
	     	fontSize:12
	   },
    },
    color:['#40a4f0','#366eed','#f8a514','#bae036','#01c2d3',],
   
    calculable : true,
    series : [
        {
            name:'半径模式',
            type:'pie',
           
            center : ['25%', '50%'],
            roseType : 'radius',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            radius :['20%', '80%'],
            center: ['55%', '50%'],
            selectedMode: 'single',
            data:[
                {value:248, name: '电子围栏'},
                {value:535, name: 'WIFI'},
                {value:510, name: '人像'},
                {value:410, name: '卡口'},
                {value:335, name: '视频'}
            ]
        },
       
    ]
};
myChart3.setOption(option3);
var myChart2 = echarts.init(document.getElementById('e2'));
option2= {
  
    tooltip : {
        trigger: 'item',
        formatter: " {b} : {c} "
    },
     grid: {
        left: '2%',
        right: '4%',
        bottom: '5%',
        top:'5%',
        containLabel: true
    },
//  legend: {
//      orient: 'horizontal',
//      left: 'center',
//      padding: 10, 
//     	itemGap:10,
//		textStyle: {
//	     color: '#00ffff',
//	     fontSize:12
//	   },
//      data: ['旅馆同住','出租屋同信','疑似网吧上网','疑似出租屋聚集','疑似酒店聚集',]
//  },
    color:['#f0e142','#fff133','#147cfb','#00ccff','#00fffc',],
     xAxis: {
     	data: ['9/14','9/15','9/16','9/17','9/18','9/19','9/20',],
     	boundaryGap : false,
        splitLine:{
            show:false,          
            lineStyle: {
                // 使用深浅的间隔色
                color: '#1b57a5'
            }
       	},      
        axisLabel: {
            inside: false,
            textStyle: {
                color: '#1a93c8'
            },
            interval:0,//横轴信息全部显示
            rotate:0,//-30度角倾斜显示
        },
        axisTick: {
            show: true
        },
        axisLine: {
            lineStyle:{
            	color:'#07398b',
            },
        },
       
    },

   	yAxis:[
   	{
   		min:0,
   		max:600,
        splitLine:{
            show:true,
            lineStyle:{
                color: '#06207b'
            }
        },
         axisLabel: {
            inside: false,
            textStyle: {
                color: '#23bdef'
            },
            interval:0,//横轴信息全部显示
            rotate:0,//-30度角倾斜显示
        },
        axisTick: {
            show: true
        },
        axisLine:{
            lineStyle:{
                color:'#083a99'
            }
        }
    },
    {
   		
        splitLine:{
            show:false,
            lineStyle:{
                color: '#041064'
            }
        },
        axisTick: {
            show: false
        },
        axisLine:{
            lineStyle:{
                color:'#072a84'
            }
        }
    }
   	],
    series : [
        {
            name: '',
            type: 'line',  
             symbol:'circle',
             symbolSize:'6',
            data:[120, 320, 280, 420, 180, 330, 150,],
           
        },
      
    ]
};
myChart2.setOption(option2);


var myChart5 = echarts.init(document.getElementById('e5'));
option5 = {
   
    tooltip : {
        formatter: "{a} <br/>{c} {b}"
    },
     color:['#0bc815','#fdc62a','#fd9224','#fd511e'],
    series : [
        {
            name: '计划项目建成投产率',
            type: 'gauge',
            z: 3,
            min: 0,
            max: 100,
            splitNumber: 10,
            radius: '85%',
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 10,
                     color: [
                    [0.2, '#0bc815'],
                    [0.5, '#fdc62a'],
                    [0.8, '#fd9224'],
                    [1, '#fd511e'],
                ]
                },
                
                
            },
            axisTick: {            // 坐标轴小标记
                length: 14,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
            splitLine: {           // 分隔线
                length: 20,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            title : {
               textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bold',
                    fontSize: 14,
                    fontStyle: '',
                    color:'#00a0b8'
                }
            },
            detail : {
              
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bold',
                     color:'#00a0b8'
                }
            },
            data:[{value: 6, name: '当日警情数'}]
        },
     
       
    ]
};

myChart5.setOption(option5);