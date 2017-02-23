import React, { Component } from 'react'

class Filters extends Component {

  render() {
    return (
      <div className='card scroll-section' id='profile'>
        <div className='card-block'>
          <h3>Search</h3>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search project name..." onChange={this.props.searchHandler} />
          </div>
          <hr />
          <h3>Filters</h3>

          <form onChange={this.props.filterHandler}>
           <div className="checkbox">
             <label>
               <input type="checkbox" value={1} defaultChecked/> Project 1
             </label>
           </div>
           <div className="checkbox">
             <label>
               <input type="checkbox" value={2} defaultChecked/> Project 2
             </label>
           </div>
           <div className="checkbox">
             <label>
               <input type="checkbox" value={3} defaultChecked/> Project 3
             </label>
           </div>
          </form>
        </div>
      </div>
    )
  }

}

export default Filters
