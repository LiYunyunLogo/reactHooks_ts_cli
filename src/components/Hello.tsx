import * as React from 'react'

export interface HelloProps {compiler:string,framework:string;}

// 函数组件
// export const Hello = (props: HelloProps) => <h1>hellow from {props.compiler} and {props.framework}</h1>


export class Hello extends React.Component<HelloProps,{}>{
    render(){
        return (
            <h1>
                Hello from {this.props.compiler} and {this.props.framework}!
            </h1>
        )
    }
}