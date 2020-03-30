import React from 'react';
import {Input, Button, Select} from 'antd';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import * as actionCreators from '../store/actionCreators';
import {Link} from 'react-router-dom';
import './SearchCity.css';

const {Search} = Input;
const {Option} = Select;
let loading = false;
let timeout;
let currentValue;
let unfound = null;

function fetch(value, callback) {
    if (timeout) {
        clearTimeout(timeout);
        timeout = null;
    }
    currentValue = value;

    function fake() {
        axios.get('/city/citys.json').then((res) => {
            let tem = [];
            tem = res.data.citys.filter((item) => item.citysName.includes(value))
            if (tem === []) {
                unfound = 'Not Found';
            }
            callback(tem.slice(0, 10))
            loading = false
        })
    }

    timeout = setTimeout(fake, 300);
}

class SearchCity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hotcity: [],
            data: [],
            value: undefined
        }
    }

    handleSearch = value => {
        if (value) {
            loading = true
            fetch(value, data => this.setState({data}))
        } else {
            this.setState({data: []})
        }
    }

    handleBlur() {
        unfound = null
    }

    handleChange = value => {
        console.log(value)
        this.state.data.map((item) => {
            if (item.id === value) {
                let city = item.citysName.split(',')[0]
                this.props.changeCity(city)
                this.props.history.push('/')
                this.setState({data: []})
            }
        })
    }

    componentDidMount() {
        const fetchData = async () => {
            const result = await axios('/city/hotcity.json')
            this.setState({
                hotcity: result.data.hotList
            })
        }
        fetchData()
    }

    render() {
        const options = this.state.data.map(d => <Option key={d.id}>{d.citysName}</Option>);
        return (
            <div className="searchWrapper">
                <Select
                    showSearch
                    value={this.state.value}
                    placeholder='请输入城市名，快速查询天气信息'
                    defaultActiveFirstOption='flase'
                    showArrow='true'
                    filterOption={false}
                    onSearch={this.handleSearch}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    style={{width: '75%'}}
                    bordered='false'
                    loading={loading}
                    notFoundContent={unfound}
                >
                    {options}
                </Select>
                <Button>取消</Button>
                <div className="recommend">
                    <p>热门城市</p>
                    <div className="tag">
                        {
                            this.state.hotcity.map((item) => (
                                <Link key={item} to='/'>
                                    <div className="tagWrapper" onClick={() => this.props.changeCity(item)}>{item}市</div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className="recommend">
                    <p>历史记录</p>
                    <div className="his">
                        {
                            this.state.hotcity.map((item) => (
                                <Link key={item} to='/'>
                                    <div className="tagWrapper" onClick={() => this.props.changeCity(item)}>{item}市</div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const mapState = (state) => ({
    city: state.get('city'),
    cityHistory: state.get('cityHistory')
})


const mapDispatch = (dispatch) => ({
    changeCity(city) {
        dispatch(actionCreators.changeCity(city))
    }
})

export default connect(mapState, mapDispatch)(withRouter(SearchCity))