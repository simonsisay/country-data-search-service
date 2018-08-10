import React, {Component} from 'react'
import TableData from './TableData'

class TableList extends Component {

	render(){
		return(
			<div className="table-container">
				<table className="tabel">
					<thead>
						<tr>
							<th scope="col">Country</th>
							<th scope="col">Capital</th>
							<th scope="col">Region</th>
							<th scope="col">Currency</th>
							<th scope="col">Language</th>
							<th scope="col">Latitude</th>
							<th scope="col">Longitude</th>
						</tr>
					</thead>
					<tbody>
						{this.props.data.map(info => <TableData tableData = {info} />)}
					</tbody>
				</table>
			</div>
		)
	}
}

export default TableList