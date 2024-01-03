type GreetProps = {
    name : string
    messageCount : number
    isLoggedin : boolean
}
export const Greet = (props:GreetProps) => {
    return (
        <>
            <h1 className="">Hello {props.name}! . You have {props.messageCount} {(props.messageCount >1 || props.messageCount === 0) ? 'messages' : 'message'}</h1>
        </>
    )
}