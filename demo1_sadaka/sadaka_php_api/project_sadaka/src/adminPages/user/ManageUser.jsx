import React from 'react'

const ManageUser = () => {

  return (

      <>
         <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Details</th>
                                <th scope="col">Photo</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((data, i) => {
                                return (
                              
                                <tr key={i}>
                                    <th scope="row">{++i}</th>
                                    <td>{data.name}</td>
                                    <td>{data.details}</td>
                                    <td>
                                        <img className='w-50' src={`http://localhost/practice-react/main/api-php/product/images/${data.photo}`} />
                                    </td>
                                    <td>
                                        <NavLink to={`/itemedit/${data.id}`}>
                                            <button className='btn btn-info mb-2 mt-2'>Update</button>
                                        </NavLink>
                                        <button className='btn btn-danger' onClick={() => { itemDelete(data.id) }}>Delete</button>
                                    </td>
                                </tr>
                               
                                )
                            })}
                        </tbody>
                    </table>

      </>
        
    
  )
}

export default ManageUser