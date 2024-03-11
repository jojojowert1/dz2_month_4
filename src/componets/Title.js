

const Title = (props) => {
    const {title, subtitle} = props
    return (
        <div>
            {title}
            <br/>
            {subtitle}
        </div>
    );
};

export default Title;