/*
 * @Author: hovercao 43169035+hovercao@users.noreply.github.com
 * @Date: 2022-09-20 16:49:00
 * @LastEditors: hovercao 43169035+hovercao@users.noreply.github.com
 * @LastEditTime: 2022-09-20 17:04:50
 * @FilePath: /AgainVue/src/App.js
 */
import {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
        console.log(11);
    }

    render() {
        return (<>
            <div onClick={this.handleClick}>12</div>
            <div onClick={() => this.handleClick()}>22</div>
        </>);
    }
}

export default App;
