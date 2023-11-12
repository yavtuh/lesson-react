const Button = (props) => {
    const { title, link } = props;

    const handleButtonClick = () => {
        window.location.href = link;
    }

    return <button onClick={handleButtonClick} >{title}</button>;
};

export default Button;
