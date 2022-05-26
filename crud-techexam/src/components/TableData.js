import '../index.css';
import React, {Component} from 'react';
// import EndpointsService from "../services/endpoints.service";
import SearchBox from './SearchBox';
import Sort from './Sort';
import TableRowData from './TableRowData';


class TableData extends Component {
constructor() {
    super()
    this.state = {
    users: [],
    searchfield: ''
    }
}

componentDidMount() {
    fetch('http://localhost:8000/users')
        .then(response=> response.json())
        .then(user => {this.setState({ users: user})});
}

onSearchChange = (event) => {
    let test = this.setState({ searchfield: event.target.value });
    console.log(test);
}

render() {
    const { users, searchfield } = this.state;
    // SEARCH FILTER
    const filteredUsers = users.filter(unfilUsers =>{
    return unfilUsers.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return(
        <div>
            <div className='flex items-center'>
                <div className='flex-1 w-full'>
                    <SearchBox searchChange={this.onSearchChange}/>
                </div>
                <div className='flex text-right'>
                    <Sort/>
                </div>
            </div>
            
            <table className="w-full text-sm text-left text-white ">
            <thead className="text-xs text-white uppercase bg-indigo-600">
                <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                    <th scope="col" className="px-6 py-3">
                            Description
                        </th>
                    <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                    <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                    <th scope="col" className="px-6 py-3">
                                    
                        </th>
                        <th scope="col" className="px-6 py-3">
                                    
                        </th>
                    </tr>
                </thead>
                <TableRowData users={filteredUsers}/>
            </table>
        </div>
    );
}
}

export default TableData;

// function TableData() { 
//     const [searchField, setSearchField] = useState("");
//     const [unfilteredUsers, setUnfilteredUsers] = useState("");
//     const [users, setUsers] = useState([]);

//     const onSearchChange = (event) => {
//         var test = this.setState({ searchfield: event.target.value });
//         console.log(test)
//     }

//     const filteredUsers = users.filter(unfil => { 
//         return unfil.name.toLowerCase().includes(searchField.toLowerCase());
//     })

//     return  (

//         <div>
            
//             <div className='flex items-center'>
//                 <div className='flex-1 w-full'>
//                     <SearchBox searchChange={onSearchChange}/>
//                 </div>
//                 <div className='flex text-right'>
//                     <Sort/>
//                 </div>
//             </div>
            
//             <table className="w-full text-sm text-left text-white ">
//                 <thead className="text-xs text-white uppercase bg-indigo-600">
//                     <tr>
//                         <th scope="col" className="px-6 py-3">
//                             Name
//                         </th>
//                         <th scope="col" className="px-6 py-3">
//                             Description
//                         </th>
//                         <th scope="col" className="px-6 py-3">
//                             Category
//                         </th>
//                         <th scope="col" className="px-6 py-3">
//                             Status
//                         </th>
//                         <th scope="col" className="px-6 py-3">
                            
//                         </th>
//                         <th scope="col" className="px-6 py-3">
                            
//                         </th>
//                     </tr>
//                 </thead>
                
//                 <TableRowData unfilteredUsers={filteredUsers}/>
                
//             </table>
//         </div>
        
//     )
// }

// export default TableData;


