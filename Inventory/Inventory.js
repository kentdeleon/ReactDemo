import React from 'react';


const table = (props) => {
   return(
   <div className="ui container">
       <table className='ui celled table'>
            <thead>
                <tr>
                    <th>Product Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td dataLabel="ProductId">10001</td>
                    <td datalabel="Name">Guitar String </td>
                    <td dataLabel="Description">super light .009</td>
                    <td dataLabel="Price">10.00</td>
                    <td dataLabel="Quantity">99</td>
                </tr>
                <tr>
                    <td dataLabel="ProductId">10002</td>
                    <td datalabel="Name">Battery</td>
                    <td dataLabel="Description">Battery AA</td>
                    <td dataLabel="Price">2.00</td>
                    <td dataLabel="Quantity">15</td>
                </tr>
            </tbody>
        </table>
    </div>
    );
}

export default table;