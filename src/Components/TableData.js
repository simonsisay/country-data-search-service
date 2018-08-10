import React, {Component} from 'react'

class TableData extends Component {

	render(){
		return(
			<tr clasName="tableRow"> 
				<td>{this.props.tableData.country}</td>
				<td>{this.props.tableData.capital}</td>
				<td>{this.props.tableData.continent}</td>
				<td>{this.props.tableData.currency}</td>
				<td>{this.props.tableData.language}</td>
				<td>{this.props.tableData.latitude}</td>
				<td>{this.props.tableData.longitude}</td>
			</tr>
		)
	}
}

export default TableData