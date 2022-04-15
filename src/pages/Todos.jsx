import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Todos = () => {

    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        const jwt = localStorage.getItem('jwt');
        const fetchData = async () =>{
            setLoading(true);
            try {

                axios.get("http://localhost:5000/api/v1/todos", {
                    headers: {
                        Authorization: 'Bearer ' + jwt
                    }
                }).then(({ data }) => {
                    
                    setDatas(data.todos);

                });

            } catch (error) {
                console.error(error.message);
            }finally{
                setLoading(false);
            }
            
        }
        fetchData();
    }, []); // end useEffect
      

  return (
    <div class="row">
        <div class="col-md-12 col-12 col-sm-12">
        {loading && <div>Loading</div>}
        {!loading && (
            <div class="card">
            <div class="card-header">
                <form class="form-inline col-md-12">
                    <input class="form-control mr-sm-12" type="text" placeholder="Tambah todo" aria-label="tambah Todo" />
                    <button class="btn btn-primary my-12 my-sm-0" type="submit">Tambah</button>
                </form>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Todo Name</th>
                                <th>Created At</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            <tr>

                                <td>Ecommerce website</td>
                                <td>2018-01-20</td>
                                <td>
                                    <a class="btn btn-primary btn-action mr-1" data-toggle="tooltip" title="" data-original-title="Edit"><i class="fas fa-pencil-alt"></i></a>
                                    <a class="btn btn-danger btn-action" data-toggle="tooltip" title="" data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?" data-confirm-yes="alert('Deleted')" data-original-title="Delete"><i class="fas fa-trash"></i></a>
                                </td>
                            </tr>
                            <tr>

                                <td>Android App</td>
                                <td>2018-09-11</td>
                                <td>
                                    <a class="btn btn-primary btn-action mr-1" data-toggle="tooltip" title="" data-original-title="Edit"><i class="fas fa-pencil-alt"></i></a>
                                    <a class="btn btn-danger btn-action" data-toggle="tooltip" title="" data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?" data-confirm-yes="alert('Deleted')" data-original-title="Delete"><i class="fas fa-trash"></i></a>
                                </td>
                            </tr>
                            <tr>

                                <td>Logo Design</td>
                                <td>2018-04-12</td>
                                <td>
                                    <a class="btn btn-primary btn-action mr-1" data-toggle="tooltip" title="" data-original-title="Edit"><i class="fas fa-pencil-alt"></i></a>
                                    <a class="btn btn-danger btn-action" data-toggle="tooltip" title="" data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?" data-confirm-yes="alert('Deleted')" data-original-title="Delete"><i class="fas fa-trash"></i></a>
                                </td>
                            </tr>
                            <tr>

                                <td>Java Project</td>
                                <td>2018-01-20</td>
                                <td>
                                    <a class="btn btn-primary btn-action mr-1" data-toggle="tooltip" title="" data-original-title="Edit"><i class="fas fa-pencil-alt"></i></a>
                                    <a class="btn btn-danger btn-action" data-toggle="tooltip" title="" data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?" data-confirm-yes="alert('Deleted')" data-original-title="Delete"><i class="fas fa-trash"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        )}
        </div>
    </div>
  )
}

export default Todos;