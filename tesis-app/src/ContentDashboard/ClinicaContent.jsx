import React from 'react'

export const ClinicaContent = () => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Lista de Clinicas</h3>
                        <button type="submit" className="btn btn-primary float-right"><i className="fas fa-plus" /> Nuevo</button>

                    </div>

                    <div className="card-header">
                        <div className="card-tools">
                            <div className="input-group input-group-sm" style={{ width: 400 }}>
                                <input type="text" name="table_search" className="form-control float-left" placeholder="Filtrar por Razón Social" />
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-default"><i className="fas fa-search" /></button>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* /.card-header */}
                    <div className="card-body table-responsive p-0" style={{ height: 300 }}>
                        <table className="table table-head-fixed text-nowrap" >
                            <thead>
                                <tr >
                                    <th style={{ backgroundColor: '#2E85C7' }}>Nombre Comercial</th>
                                    <th style={{ backgroundColor: '#2E85C7' }}>Razon Social</th>
                                    <th style={{ backgroundColor: '#2E85C7' }}>RUC</th>
                                    <th style={{ backgroundColor: '#2E85C7' }}>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>clinica 1</td>
                                    <td>test</td>
                                    <td>7-8745014545</td>
                                    <td><span className="tag tag-success">test</span></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    {/* /.card-body */}
                </div>
                {/* /.card */}
            </div>
        </div>
    )
}
