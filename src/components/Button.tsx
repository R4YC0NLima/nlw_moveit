interface ButtonProps {
    color: string;
    children: string;
}

export function Button(props: ButtonProps) {

    return (
        <button type="button" style={{ backgroundColor: props.color }}>
            <p style={{ color: "white", fontSize: 25 }}>{props.children}</p>
        </button>
    );

}