import React, {Component} from 'react'; 

export default class BookList extends Component{
    // we define a function called renderList here to call later
    // We call using this.renderList
    renderList(){
        return this.props.books.map((book)=>{
            return(
                <li key={book.title} className="list-group-item">{book.title}</li>
            )
        });
    }
    render(){
        return(
            <ul className="list-group col-sm-4">
            {this.renderList()}
            </ul>
        )
    }
}