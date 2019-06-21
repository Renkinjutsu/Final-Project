import React, { Component } from 'react'

class NewTable extends Component {

    render() {
   
      return (
				<div className="container">
					<form action="" method="POST">
						<table className="create-table">
							<tbody>
								<tr>
									<td className="header-row"><p>Table name:</p></td>
									<td className="data-row"><input type="text" placeholder="Table name" className="query-item input-query"/></td>
								</tr>
								<tr>
									<td className="header-row"><p>Columns (categories):</p></td>
									<td className="data-row"><input type="number" placeholder="#" className="query-item input-query"/></td>
								</tr>
								<tr>
									<td className="header-row"><p>Rows (seed data):</p></td>
									<td className="data-row"><input type="number" placeholder="#" className="query-item input-query"/></td>
								</tr>
								<tr>
									<td colSpan="2"><button type="submit" className="button add-button">Create</button></td>
								</tr>
							</tbody>
        		</table>
					</form>
   		 </div>	
      )
   }
}

 export default NewTable