(function() {
    $('.monitor .tabs').on('click', 'a', function() {
        $(this).addClass('active').siblings('a').removeClass('active');
        $('.monitor .content').eq($(this).index()).show().siblings('.content').hide();
    });
    //无缝滚动
    //克隆
    $('.marquee-view .marquee').each(function() {
        var rows = $(this).children('.row').clone();
        $(this).append(rows);
    });
})();
(function() {
    var myChart = echarts.init(document.querySelector('.pie'));
    var option = {
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            left: 'center',
            top: 'bottom',
            data: [
                'rose1',
                'rose2',
                'rose3',
                'rose4',
                'rose5',
                'rose6',
                'rose7',
                'rose8'
            ]
        },
        series: [{
            name: 'Area Mode',
            type: 'pie',
            radius: ['10%', '70%'],
            center: ['50%', '50%'],
            roseType: 'radius',
            itemStyle: {
                borderRadius: 5
            },
            label: {
                fontSize: 10
            },
            labelLine: {
                length: 6,
                length2: 8
            },
            data: [
                { value: 20, name: '云南' },
                { value: 26, name: '北京' },
                { value: 24, name: '山东' },
                { value: 25, name: '河北' },
                { value: 20, name: '江苏' },
                { value: 25, name: '浙江' },
                { value: 30, name: '四川' },
                { value: 42, name: '湖北' }
            ]
        }]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function() {
        myChart.resize();
    })
})();
//柱形图
(function() {
    var item = {
        name: '',
        value: 1200,
        itemStyle: {
            color: '#254065'
        },
        emphasis: {
            itemStyle: {
                color: '#254065'
            }
        },
        tooltip: {
            show: false
        }
    };
    var myChart = echarts.init(document.querySelector('.bar'));
    var option = {
        color: new echarts.graphic.LinearGradient(
            // (x1,y2) 点到点 (x2,y2) 之间进行渐变
            0, 0, 0, 1, [
                { offset: 0, color: '#00fffb' }, // 0 起始颜色
                { offset: 1, color: '#0061ce' } // 1 结束颜色
            ]
        ),
        tooltip: {
            trigger: 'item'
        },
        grid: {
            left: '0%',
            right: '3%',
            bottom: '3%',
            top: '3%',
            containLabel: true,
            show: true,
            borderColor: 'rgba(0, 240, 255, 0.3)'
        },
        xAxis: [{
            type: 'category',
            data: ['上海', '广州', '北京', '深圳', '合肥', '', '...', '', '杭州', '厦门', '济南', '成都', '重庆'],
            axisTick: {
                alignWithLabel: false,
                show: false
            },
            axisLabel: {
                color: '#4c9bfd'
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)'
                }
            }
        }],
        yAxis: [{
            type: 'value',
            axisTick: {
                alignWithLabel: false,
                show: false
            },
            axisLabel: {
                color: '#4c9bfd'
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)'
                }
            }
        }],
        series: [{
            name: 'Direct',
            type: 'bar',
            barWidth: '60%',
            data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240]
        }]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function() {
        myChart.resize();
    })
})();
// 订单功能
(function() {
    // 1. 准备数据
    var data = {
            day365: { orders: '20,301,987', amount: '99834' },
            day90: { orders: '301,987', amount: '9834' },
            day30: { orders: '1,987', amount: '3834' },
            day1: { orders: '987', amount: '834' }
        }
        // 获取显示 订单数量 容器
    var $h4Orders = $('.order h4:eq(0)')
        // 获取显示 金额数量 容器
    var $h4Amount = $('.order h4:eq(1)')
    $('.order').on('click', '.filter a', function() {
        // 2. 点击切换激活样式
        $(this).addClass('active').siblings().removeClass('active')
            // 3. 点击切换数据
        var currdata = data[this.dataset.key]
        $h4Orders.html(currdata.orders);
        $h4Amount.html(currdata.amount);
        index = $(this).index();
    });
    // 4. 开启定时器切换数据
    var index = 0
    var $allTab = $('.order .filter a')
    var timer = setInterval(function() {
        index++;
        if (index >= $allTab.length) {
            index = 0;
        };
        $allTab.eq(index).click()
    }, 5000);
    $('.order').hover(function() {
        clearInterval(timer);
    }, function() {
        clearInterval(timer);
        timer = setInterval(function() {
            index++;
            if (index >= $allTab.length) {
                index = 0;
            };
            $allTab.eq(index).click()
        }, 5000);
    });
})();
// 销售统计模块
(function() {
    //准备数据
    var data = {
            year: [
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ],
            quarter: [
                [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
                [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
            ],
            month: [
                [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
                [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
            ],
            week: [
                [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
                [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
            ]
        }
        // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".line"));
    // 2. 指定配置和数据
    var option = {
        tooltip: {
            trigger: "axis"
        },
        legend: {
            right: '10%'
        },
        grid: {
            top: '20%',
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true,
            borderColor: '#012f4a',
            containLabel: true
        },
        legend: {
            textStyle: {
                color: '#4c9bfd'
            },
            right: '10%'
        },
        xAxis: {
            type: "category",
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#4c9bfd'
            },
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: "value",
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#4c9bfd'
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a'
                }
            }
        },
        color: ['#00f2f1', '#ed3f35'],
        series: [{
                name: "预期销售额",
                type: "line",
                stack: "总量",
                smooth: true,
                data: data.year[0]
            },
            {
                name: "实际销售额",
                type: "line",
                stack: "总量",
                smooth: true,
                data: data.year[1]
            }
        ]
    };

    // 3. 把配置和数据给实例对象
    myChart.setOption(option);
    $('.sales .caption').on('click', 'a', function() {
        $(this).addClass('active').siblings('a').removeClass('active');
        var arr = data[this.dataset.type];
        option.series[0].data = arr[0];
        option.series[1].data = arr[1];
        myChart.setOption(option);
        index = $(this).index() - 1;
    });
    var as = $('.sales a');
    var index = 0;
    var timer = setInterval(function() {
        index++;
        if (index >= as.length) {
            index = 0;
        };
        as.eq(index).click();
    }, 1000);
    $('.sales').hover(function() {
        clearInterval(timer);
    }, function() {
        clearInterval(timer);
        timer = setInterval(function() {
            index++;
            if (index >= as.length) {
                index = 0;
            };
            as.eq(index).click();
        }, 1000);
    });
    window.addEventListener('resize', function() {
        myChart.resize();
    });
})();
//销售渠道模块 雷达图
(function() {
    var myChart = echarts.init(document.querySelector('.radar'));
    var option = {
        tooltip: {
            show: true,
            position: ['60%', '10%']
        },
        radar: {
            name: {
                textStyle: {
                    color: '#4c9bfd'
                }
            },
            indicator: [
                { name: '机场', max: 100 },
                { name: '商场', max: 100 },
                { name: '火车站', max: 100 },
                { name: '汽车站', max: 100 },
                { name: '地铁', max: 100 }
            ],
            shape: 'circle',
            splitNumber: 4,
            axisName: {
                color: 'rgb(238, 197, 102)'
            },
            splitLine: {
                lineStyle: {
                    color: [
                        'rgba(255, 255, 255, 0.5)'
                    ].reverse()
                }
            },
            splitArea: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            },
            radius: '55%',
            center: ['50%', '50%']
        },
        series: [{
            name: 'Beijing',
            type: 'radar',
            lineStyle: {
                color: '#fff',
                width: 1,
                opacity: 0.5
            },
            data: [
                [90, 19, 56, 11, 34]
            ],
            symbol: 'circle',
            symbolSize: 5,
            itemStyle: {
                color: '#fff'
            },
            areaStyle: {
                color: 'rgba(238, 197, 102, 0.6)'
            },
            label: {
                show: true,
                fontSize: 10
            }
        }]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function() {
        myChart.resize();
    });
})();
// 销售模块 饼形图 半圆形 设置方式
(function() {
    var myChart = echarts.init(document.querySelector('.gauge'));
    var option = {
        series: [{
            name: '销售进度',
            type: 'pie',
            radius: ['130%', '150%'],
            // 移动下位置  套住50%文字
            center: ['48%', '80%'],
            emphasis: {
                label: {
                    show: true,
                    fontSize: '40',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            startAngle: 0,
            hoverOffset: 0,
            data: [{
                    value: 1000,
                    itemStyle: {
                        color: 'transparent'
                    }
                },
                {
                    value: 750,
                    itemStyle: {
                        // 颜色渐变#00c9e0->#005fc1
                        color: new echarts.graphic.LinearGradient(
                            // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                            0,
                            0,
                            0,
                            1, [
                                { offset: 0, color: "#00c9e0" }, // 0 起始颜色
                                { offset: 1, color: "#005fc1" } // 1 结束颜色
                            ]
                        )
                    }
                },
                {
                    value: 250,
                    itemStyle: {
                        color: '#12274d'
                    }
                }

            ]
        }]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();
//全国热榜模块
(function() {
    // 1准备数据
    var hotData = [{
            city: '北京', // 城市
            sales: '25, 179', // 销售额
            flag: true, //  上升还是下降
            brands: [ //  品牌种类数据
                { name: '可爱多', num: '9,086', flag: true },
                { name: '娃哈哈', num: '8,341', flag: true },
                { name: '喜之郎', num: '7,407', flag: false },
                { name: '八喜', num: '6,080', flag: false },
                { name: '小洋人', num: '6,724', flag: false },
                { name: '好多鱼', num: '2,170', flag: true },
            ]
        },
        {
            city: '河北',
            sales: '23,252',
            flag: false,
            brands: [
                { name: '可爱多', num: '3,457', flag: false },
                { name: '娃哈哈', num: '2,124', flag: true },
                { name: '喜之郎', num: '8,907', flag: false },
                { name: '八喜', num: '6,080', flag: true },
                { name: '小洋人', num: '1,724', flag: false },
                { name: '好多鱼', num: '1,170', flag: false },
            ]
        },
        {
            city: '上海',
            sales: '20,760',
            flag: true,
            brands: [
                { name: '可爱多', num: '2,345', flag: true },
                { name: '娃哈哈', num: '7,109', flag: true },
                { name: '喜之郎', num: '3,701', flag: false },
                { name: '八喜', num: '6,080', flag: false },
                { name: '小洋人', num: '2,724', flag: false },
                { name: '好多鱼', num: '2,998', flag: true },
            ]
        },
        {
            city: '江苏',
            sales: '23,252',
            flag: false,
            brands: [
                { name: '可爱多', num: '2,156', flag: false },
                { name: '娃哈哈', num: '2,456', flag: true },
                { name: '喜之郎', num: '9,737', flag: true },
                { name: '八喜', num: '2,080', flag: true },
                { name: '小洋人', num: '8,724', flag: true },
                { name: '好多鱼', num: '1,770', flag: false },
            ]
        },
        {
            city: '山东',
            sales: '20,760',
            flag: true,
            brands: [
                { name: '可爱多', num: '9,567', flag: true },
                { name: '娃哈哈', num: '2,345', flag: false },
                { name: '喜之郎', num: '9,037', flag: false },
                { name: '八喜', num: '1,080', flag: true },
                { name: '小洋人', num: '4,724', flag: false },
                { name: '好多鱼', num: '9,999', flag: true },
            ]
        }
    ];
    // 2.根据数据渲染.sup
    var supHTML = '';
    $.each(hotData, function(index, item) {
        supHTML += `<li>
        <span>${item.city}</span>
        <span>${item.sales} <s class=${item.flag?"icon-up":"icon-down"}></s></span>
    </li>`
    });
    $('.sup').html(supHTML);
    //封装渲染函数
    function render(that) {
        that.addClass('active').siblings().removeClass('active');
        // 拿到经过对象的品牌brands数据
        // console.log($(this).index());
        // console.log(hotData[$(this).index()].brands);
        var subHTML = '';
        $.each(hotData[that.index()].brands, function(index, item) {
            subHTML += `<li><span>${item.name}</span><span> <s class=${item.flag?"icon-up":"icon-down"}></s>${item.num}</span></li>`
            $('.province .sub').html(subHTML);
        });
    };
    // 鼠标经过，高亮显示
    $('.province .sup').on('mouseenter', 'li', function() {
        render($(this));
        index = $(this).index();
    });
    // 默认鼠标经过第一个li
    var lis = $('.province .sup li');
    lis.eq(0).mouseenter();
    var index = 0;
    //开启定时器
    var timer = setInterval(function() {
        index++;
        if (index >= lis.length) {
            index = 0;
        };
        // lis.eq(index).mouseenter();
        render(lis.eq(index));
    }, 2000);
    $('.province .sup').hover(function() {
        clearInterval(timer);
    }, function() {
        clearInterval(timer);
        timer = setInterval(function() {
            index++;
            if (index >= lis.length) {
                index = 0;
            };
            // lis.eq(index).mouseenter();
            render(lis.eq(index));
        }, 2000);
    });
})();