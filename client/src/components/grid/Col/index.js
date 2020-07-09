//DEPENDENCIES

//COL
//This allows for <Col size="md-12"> instead of <div className="col-md-12">
function Col({ size, children }) {
    return (
        <div className={
            size
            .split(" ")
            .map(size => "col-" + size)
            .join(" ")}
        >
        {children}
        </div>
    );
};

export default Col;