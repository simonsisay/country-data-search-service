import React, {Component} from 'react'
import Header from './Header'
import Search from './Search'
import TableList from  './TableList'
import axios from 'axios'
import Particles from 'react-particles-js'


const particlesOptions = {
        particles: {
         number:{
            value:35,
            density:{
              enable:false,
              value_area:100
            }
          }
        }
    }


class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			data:[],
			country:'',
			capital:'',
			region:'',
			searched:''
		}
	}

	componentDidMount(){
		axios.get('https://restcountries.eu/rest/v2/all')
		.then((response) => {
		const countryData = response.data.map(country => {
					return {country:country.name, capital:country.capital, continent:country.region,
								 currency:country.currencies[0].code,language:country.languages[0].name, latitude:country.latlng[0] ,
								 longitude:country.latlng[1] }
			})
		this.setState({data:countryData})
		})
		.catch((error) => {
			console.log(error);
		})
	}


	handleSearch = (event) => {
		this.setState({[event.target.name]:event.target.value, searched:event.target.value})
	}



	render(){
		const filteredData = this.state.data.filter(country => {
				if(this.state.country === this.state.searched)
					return country.country.toLowerCase().includes(this.state.searched.toLowerCase())
				else if(this.state.capital === this.state.searched)
					return country.capital.toLowerCase().includes(this.state.searched.toLowerCase())
				else if(this.state.region === this.state.searched)
					return country.continent.toLowerCase().includes(this.state.searched.toLowerCase())  
 
		})

		return(
			<div className="app">
				<Particles className="particles" params={particlesOptions} />

				<div className="header">
					<h1 className="title">Country Data Search service</h1>
					<Search search={this.handleSearch} 
							  country = {this.state.country}
							  capital = {this.state.capital}s
							  region = {this.state.region}
					/>
				</div>

				<TableList data={filteredData}/>
			</div>
		)
	}
}

export default App