import React from "react";
import Display from "./Display";
import Stepper from "./Stepper";
import PAGES from './pages'


class Interface extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0
    };
    this.changePage = this.changePage.bind(this)
  }


  changePage(event) {
      console.log(event.target.value);
      this.setState({ currentPage: event.target.value });
  }

  render() {
    return (
      <div className="app-interface">
        <Display eventHandler={this.changePage} currentPage={this.state.currentPage}/>
        <Stepper eventHandler={this.changePage} pages={PAGES} currentPage={this.state.currentPage}/>
      </div>
    );
  }
}
export default Interface;
