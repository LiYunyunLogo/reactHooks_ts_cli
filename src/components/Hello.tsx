import * as React from 'react'
export interface HelloProps {compiler:string,framework:string;}
import './hello.css'
import imgPath from "images/111.png"
// const  imgPath = require('')
// 函数组件
// export const Hello = (props: HelloProps) => <h1>hellow from {props.compiler} and {props.framework}</h1>
export class Hello extends React.Component<HelloProps,{}>{
    path:string = ''

    // componentWillMount(){
       
    // }
    componentWillMount(){
        this.path = imgPath
        console.log( process.env.NODE_ENV,'111111111')
    setTimeout(() => {
        this.path = imgPath
        console.log( this.path,'2')
    },3000)
    }
        

    render(){
        return (
            <div>
                <span>2131312</span>
                <h1>
                    { this.path}
                    Hello from {this.props.compiler} and {this.props.framework}++!
                </h1>
                <img src={this.path} alt="" width="200px" height="200px" />
                {/* <img src={require('../assets/111.png')} alt="1111" width="200px" height="200px" /> */}
            </div>
        )
    }
}