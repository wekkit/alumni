import React, { Component } from 'react'

class Filters extends Component {

  render() {
    return (
      <div>filters here</div>
    )
    // return (
    //   <div className='col-md-3'>
    //     <h2>Filter results:</h2>
    //     <hr/>
    //     <h4>By Project:</h4>
    //     <form>
    //       {this.props.data.map((e, i) => {
    //         return (
    //           <div className="checkbox" key={i}>
    //             <label>
    //               <input type="checkbox" value={e} onChange={this.props.changeHandler} defaultChecked/> {e}
    //             </label>
    //           </div>
    //         )
    //       })}
    //     </form>
    //   </div>
    // )
  }

}

export default Filters
