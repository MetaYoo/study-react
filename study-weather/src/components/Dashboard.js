import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {CaretDownOutlined} from '@ant-design/icons';
import './Dashboard.css';
import * as actionCreators from '../store/actionCreators';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foreData: [],
            preWeather: []
        }
    }

    initWeather(city) {
        let _self = this;
        //eslint-disable-next-line
        AMap.plugin('AMap.Weather', function () {
            //eslint-disable-next-line
            let weather = new AMap.Weather();
            weather.getLive(city, function (err, data) {
                // console.log(data)
                _self.props.getWeather(data)
            });
            weather.getForecast(city, function (err, data) {
                // console.info(data)
                _self.setState({
                    preWeather: data.forecasts
                });

                data.forecasts.map((item) => (_self.state.foreData.push(item.dayTemp)))

                _self.initEchart(_self.state.foreData);
            })
        })
    }

    initEchart(data) {
        let domChart = this.dom;
        console.log(domChart)
        //eslint-disable-next-line
        let myChart = echarts.init(domChart);
        console.log(myChart)
        let option = null;
        option = {
            title: {
                show: true,//显示策略，默认值true,可选为：true（显示） | false（隐藏）
                text: '天气变化趋势',//主标题文本，'\n'指定换行
                x: 'center',
                textStyle: { //图例文字的样式
                    color: 'grey',
                },
                padding: [5, 0, 30, 10]
            },
            xAxis: {
                show: false,
                type: "category",
                axisLine: {
                    lineStyle: {
                        color: "#fff"
                    }
                },

                grid: {bottom: "20"}
            },
            yAxis: {
                show: false
            },
            series: [
                {
                    data: data,
                    type: "line",
                    itemStyle: {
                        normal:
                            {
                                label: {
                                    show: true,
                                    formatter: "{c}℃"
                                },
                                lineStyle: {
                                    color: 'white' //改变折线颜色
                                },
                                color: '#eee'
                            },
                    }
                }
            ]
        }
        //eslint-disable-next-line
        myChart.setOption(option, true);
    }

    componentDidMount() {
        let _self = this;
        if (_self.props.init) {
            //eslint-disable-next-line
            AMap.plugin('AMap.CitySearch', function () {
                //eslint-disable-next-line
                let citySearch = new AMap.CitySearch()
                citySearch.getLocalCity(function (status, result) {
                    if (status === 'complete' && result.info === 'OK') {
                        _self.props.getCity(result.city)
                        _self.initWeather(_self.props.city)
                        _self.props.getInit()
                    }
                })
            })
        } else {
            _self.initWeather(_self.props.city)
        }
    }

    render() {
        const {city, weatherData} = this.props
        const reportTime = new String(weatherData.reportTime)
        //console.log(reportTime.split(' ')[1])

        return (
            <div className="dashboard">
                <Link to="/search">
                    <div className="header">
                        <span>{city}</span>
                        <CaretDownOutlined/>
                    </div>
                </Link>
                <div className="temperature">
                    <h2>{weatherData.temperature}°</h2>
                    <span>{weatherData.weather}</span><span>|</span>
                    <span>更新时间:{reportTime.split(' ')[1]}</span>
                    <div className="extra">
                        <dl>
                            <dt>风力：{weatherData.windPower} | 风向： {weatherData.windDirection} |
                                空气湿度： {weatherData.humidity}%
                            </dt>
                        </dl>
                    </div>
                </div>
                {/*<div className="weatherCircle"></div>*/}
                <div className="moreInfo">
                    <div className="moreInfo-wrapper">
                        {
                            this.state.preWeather.slice(1, 4).map(item => {
                                return (<div className="moreDay" key={item.date}>
                                    <p>{item.date.substring(5)}</p>
                                    <img alt="" src={'/img/' + `${item.dayWeather}.png`}></img>
                                    <div className="temp">
                                        <p>25℃</p>
                                        <p>12℃</p>
                                    </div>
                                    <p>{item.dayWeather}</p>
                                </div>)
                            })
                        }
                    </div>
                </div>
                <div className="echartInfo" ref={(echart) => {
                    this.dom = echart
                }}></div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        city: state.get('city'),
        weatherData: state.get('weatherData'),
        forecast: state.get('forecast'),
        init: state.get('init')
    })
}

const mapDispatchToProps = (dispatch) => ({
    getCity(city) {
        //dispatch(actionCreators.getCity(city))
        actionCreators.getCity(city)(dispatch)
    },
    getInit() {
        dispatch(actionCreators.getInit())
    },
    getWeather(data) {
        dispatch(actionCreators.getWeather(data))
    },
    getForecast(data) {
        dispatch(actionCreators.getForecast(data))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Dashboard));