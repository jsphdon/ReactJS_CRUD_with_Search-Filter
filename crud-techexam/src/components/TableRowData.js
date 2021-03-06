import '../index.css';
import React from 'react';
import { Link } from 'react-router-dom';

const TableRowData = ({ users }) => {

    return (
        <>
            {users.map((u, i) => {
                return (
                    <tbody key={i}>
                        <tr id={u.id} className="border-b dark:bg-indigo-800 dark:border-indigo-700 odd:bg-white even:bg-indigo-50 odd:dark:bg-indigo-800 even:dark:bg-indigo-700">
                            <th scope="row" className="px-6 py-4 font-bold text-indigo-900 dark:text-white whitespace-nowrap">
                                {u.name}
                            </th>
                            <td className="px-6 py-4 ">
                                {u.description}
                            </td>
                            <td className="px-6 py-4">
                                {u.category.category_name}
                            </td>
                            <td className="px-6 py-4">
                                {u.status ? 'Active' : 'Inactive'}
                            </td>
                            <td className="px-5 py-4 text-right">
                                <Link to={`/view/${u.id}`} className="flex items-center justify-center px-4 py-2 overflow-hidden text-sm font-bold text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white hover:from-pink-500 hover:to-yellow-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">View</Link>

                            </td>
                            <td className="px-5 py-4 text-right">
                                <Link to={`/edit/${u.id}`} className="flex items-center justify-center px-4 py-2 overflow-hidden text-sm text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white hover:from-pink-500 hover:to-yellow-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold">Edit</Link>
                            </td>
                        </tr>

                    </tbody>
                )
            })}
        </>
    )
}

export default TableRowData;
