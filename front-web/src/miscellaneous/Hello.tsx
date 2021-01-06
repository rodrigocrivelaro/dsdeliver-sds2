
type Props = {
    mensagem: String
}

function Hello({mensagem}: Props) {
    return(
        <h1>Hello {mensagem}</h1>
    )
}

export default Hello;