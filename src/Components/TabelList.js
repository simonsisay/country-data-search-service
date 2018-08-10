import React, {Component} from 'react'
import TableData from './TableData'

class TableList extends Component {

	render(){
		return(
			<div>
				<table>
					<tr>
						<th>Country</th>
						<th>Capital</th>
						<th>Continent</th>
						<th>Population</th>
						<th>Currency</th>
					</tr>
					{this.props.data.map(info => <TableData tableData = {info} />)}
				</table>
			</div>
		)
	}
}

export default TableList