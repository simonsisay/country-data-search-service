import React, {Component} from 'react'

class Search extends Component {

	render(){
		return(
			<div className="search form-group">
				<form>
					<input type="search" name="country" value={this.props.country}
							 placeholder="Search Country" onChange={this.props.search} className="form-control" />

					<input type="search" name="capital" value={this.props.capital} 
							placeholder="Search Capital" onChange={this.props.search} className="form-control"/>

					<input type="search" name="region" value={this.props.region} 
							placeholder="Search Region" onChange={this.props.search} className="form-control"/>
				</form>
			</div>
		)
	}
}

export default Search